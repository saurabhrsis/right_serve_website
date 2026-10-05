/**
 * Lightweight analytics layer.
 *
 * No tracking identifiers are hard-coded: the container/measurement IDs come
 * from environment configuration (see .env.example). When no ID is configured,
 * the loader is skipped entirely so it costs nothing in page performance.
 *
 * Events are pushed to the data layer, which works with both Google Tag
 * Manager and a directly loaded gtag.js.
 */

const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;
const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

/** Injects the configured tag once, after the page has become interactive. */
export function initAnalytics() {
  if (loaded || typeof window === 'undefined') return;
  if (!GTM_ID && !GA4_ID) return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];

  if (GTM_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
    document.head.appendChild(script);
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js', 'gtm.uniqueEventId': 1 });
  }

  if (GA4_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
    document.head.appendChild(script);

    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, { send_page_view: false });
  }
}

/** Pushes a custom event to the data layer. Safe to call before loading. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });

  if (window.gtag) {
    window.gtag('event', name, params);
  }
}

/** Records a virtual page view for single-page navigation. */
export function trackPageView(path: string, title: string) {
  trackEvent('page_view', {
    page_path: path,
    page_title: title,
    page_location: typeof window !== 'undefined' ? window.location.href : path,
  });
}

/**
 * Delegated click tracking for conversion points.
 *
 * Any element with `data-track` or a tel:/mailto:/wa.me link is reported, which
 * covers phone clicks, WhatsApp clicks, quote submissions and CTAs without
 * adding handlers to every component.
 */
export function initConversionTracking() {
  if (typeof document === 'undefined') return () => undefined;

  const onClick = (event: MouseEvent) => {
    const target = (event.target as HTMLElement | null)?.closest('a,button');
    if (!target) return;

    const href = target instanceof HTMLAnchorElement ? target.getAttribute('href') ?? '' : '';
    const label = target.getAttribute('data-track') ?? '';

    if (href.startsWith('tel:')) {
      trackEvent('phone_click', { link_url: href });
      return;
    }
    if (href.startsWith('mailto:')) {
      trackEvent('email_click', { link_url: href });
      return;
    }
    if (href.includes('wa.me') || href.includes('whatsapp')) {
      trackEvent('whatsapp_click', { link_url: href });
      return;
    }
    if (label) {
      trackEvent('cta_click', {
        cta: label,
        link_url: href,
        link_text: (target.textContent ?? '').trim().slice(0, 80),
      });
    }
  };

  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}
