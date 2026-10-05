/**
 * Analytics & tag loading.
 * Scripts are only injected when the matching env variable is configured, so the
 * site stays fast (and cookie-free) until the marketing team enables tracking.
 */

const GA4_ID = (import.meta.env?.VITE_GA4_ID as string | undefined)?.trim()
const GTM_ID = (import.meta.env?.VITE_GTM_ID as string | undefined)?.trim()
const PIXEL_ID = (import.meta.env?.VITE_META_PIXEL_ID as string | undefined)?.trim()

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    __rsisTagsLoaded?: boolean
  }
}

function injectScript(src: string, async = true) {
  if (typeof document === 'undefined') return
  const script = document.createElement('script')
  script.src = src
  script.async = async
  document.head.appendChild(script)
}

/** Loads the configured marketing tags once, after the first paint. */
export function initAnalytics() {
  if (typeof window === 'undefined' || window.__rsisTagsLoaded) return
  window.__rsisTagsLoaded = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())

  if (GTM_ID) {
    injectScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`)
  }

  if (GA4_ID) {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`)
    window.gtag('config', GA4_ID, { send_page_view: false, anonymize_ip: true })
  }

  if (PIXEL_ID) {
    window.fbq = function fbq(...args: unknown[]) {
      // Minimal pixel queue that is replaced by fbevents.js once it loads.
      ;(window.fbq as unknown as { queue: unknown[] }).queue.push(args)
    }
    ;(window.fbq as unknown as { queue: unknown[] }).queue = []
    injectScript('https://connect.facebook.net/en_US/fbevents.js')
    window.fbq('init', PIXEL_ID)
  }
}

type EventName =
  | 'page_view'
  | 'generate_lead'
  | 'contact_click'
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'cta_click'
  | 'job_apply'
  | 'download'

/** Fire a marketing event across all configured platforms. */
export function trackEvent(event: EventName, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag(event === 'page_view' ? 'event' : 'event', event, params)
  }

  const pixelMap: Record<string, string> = {
    generate_lead: 'Lead',
    contact_click: 'Contact',
    whatsapp_click: 'Contact',
    phone_click: 'Contact',
    email_click: 'Contact',
    cta_click: 'ViewContent',
    page_view: 'PageView',
  }
  const pixelEvent = pixelMap[event]
  if (typeof window.fbq === 'function' && pixelEvent) {
    window.fbq('track', pixelEvent, params)
  }
}

/** Convenience helper for anchor/button clicks that lead to a conversion. */
export function trackOutbound(kind: 'whatsapp' | 'phone' | 'email', context?: string) {
  const map = { whatsapp: 'whatsapp_click', phone: 'phone_click', email: 'email_click' } as const
  trackEvent(map[kind], { context })
}
