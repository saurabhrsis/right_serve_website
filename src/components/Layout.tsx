import { useEffect, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUp, MessageCircle, Phone, X } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE, TEL_LINK, WHATSAPP_LINK } from '@/data/site'
import { applyRouteMeta, getRouteMeta, normalizePath, REDIRECTS } from '@/seo/meta'
import { initAnalytics, trackEvent } from '@/lib/analytics'
import { trackOutbound } from '@/lib/analytics'

/** Applies per-route metadata + analytics page views and restores scroll position. */
function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    const meta = getRouteMeta(location.pathname)
    if (meta) applyRouteMeta(meta, SITE.url)
    window.scrollTo({ top: 0, behavior: 'auto' })
    trackEvent('page_view', { page_path: normalizePath(location.pathname), page_title: meta?.title ?? document.title })
  }, [location.pathname])

  useEffect(() => {
    initAnalytics()
  }, [])

  return null
}

function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-[60] flex flex-col items-start gap-2 sm:bottom-6 sm:left-6">
      <a
        href={WHATSAPP_LINK()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackOutbound('whatsapp', 'floating-button')}
        className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
        aria-label="Chat with Right Serve Infotech System on WhatsApp"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-white/70" aria-hidden />
          <MessageCircle className="relative h-5 w-5" aria-hidden />
        </span>
        <span className="hidden sm:inline">WhatsApp us</span>
      </a>

      <a
        href={TEL_LINK}
        onClick={() => trackOutbound('phone', 'floating-button')}
        className="flex items-center gap-2 rounded-full bg-brand-900 px-4 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 sm:hidden"
        aria-label={`Call ${SITE.contact.phones[1]}`}
      >
        <Phone className="h-4 w-4" aria-hidden />
        Call now
      </a>

      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full border border-slate-200 bg-white p-3 text-brand-900 shadow-soft transition-all hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" aria-hidden />
        </button>
      ) : null}
    </div>
  )
}

function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem('rsis_cookie_consent')) {
        const timer = window.setTimeout(() => setVisible(true), 1200)
        return () => window.clearTimeout(timer)
      }
    } catch {
      /* storage blocked - do not nag the user */
    }
    return undefined
  }, [])

  const decide = (value: 'accepted' | 'essential') => {
    try {
      localStorage.setItem('rsis_cookie_consent', value)
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-3 bottom-3 z-[65] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/97 p-4 shadow-card backdrop-blur sm:inset-x-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-600 sm:text-sm">
          We use essential cookies to run the site and optional analytics cookies to understand what helps visitors. You can
          accept analytics or continue with essentials only. Read our{' '}
          <Link to="/privacy-policy" className="font-semibold text-brand-700 underline">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" className="btn-outline !px-4 !py-2 text-xs" onClick={() => decide('essential')}>
            Essentials only
          </button>
          <button type="button" className="btn-primary !px-4 !py-2 text-xs" onClick={() => decide('accepted')}>
            Accept all
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => decide('essential')}
        className="absolute right-2 top-2 rounded-full p-1 text-slate-400 hover:text-slate-600"
        aria-label="Dismiss cookie notice"
      >
        <X className="h-3.5 w-3.5" aria-hidden />
      </button>
    </div>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const isRedirect = REDIRECTS.some((rule) => rule.from === normalizePath(location.pathname))

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <RouteEffects />
      <Header />
      <main id="main" className={isRedirect ? 'flex-1' : 'flex-1 pt-[68px] lg:pt-[104px]'}>
        {children}
      </main>
      <Footer />
      <FloatingActions />
      <CookieConsent />
    </div>
  )
}
