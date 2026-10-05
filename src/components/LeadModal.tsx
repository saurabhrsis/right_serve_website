import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { X } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { SITE, WHATSAPP_LINK } from '@/data/site'
import { trackEvent } from '@/lib/analytics'

type LeadContextValue = {
  openLeadModal: (options?: { source?: string; service?: string }) => void
  closeLeadModal: () => void
}

const LeadModalContext = createContext<LeadContextValue>({ openLeadModal: () => undefined, closeLeadModal: () => undefined })

export function useLeadModal() {
  return useContext(LeadModalContext)
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [source, setSource] = useState('Website')
  const [service, setService] = useState('')

  const openLeadModal = useCallback((options?: { source?: string; service?: string }) => {
    setSource(options?.source ?? 'Website')
    setService(options?.service ?? '')
    setOpen(true)
    trackEvent('cta_click', { source: options?.source ?? 'Website', type: 'lead-modal' })
  }, [])

  const closeLeadModal = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const value = useMemo(() => ({ openLeadModal, closeLeadModal }), [openLeadModal, closeLeadModal])

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      {open ? (
        <div className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-brand-950/60 p-4 backdrop-blur-sm sm:items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-white p-6 shadow-card sm:p-8"
          >
            <button
              type="button"
              onClick={closeLeadModal}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close enquiry form"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>

            <h2 id="lead-modal-title" className="heading-3">
              Get a free consultation
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              Tell us what you are building. We reply within one business day — usually much sooner.
            </p>

            <ContactForm
              source={source}
              defaultService={service}
              compact
              className="mt-5"
              onSuccess={closeLeadModal}
            />

            <p className="mt-3 text-center text-xs text-ink-500">
              Or message us instantly on{' '}
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'lead-modal' })}
                className="font-semibold text-emerald-600"
              >
                WhatsApp
              </a>{' '}
              · {SITE.contact.phones[0]}
            </p>
          </div>
        </div>
      ) : null}
    </LeadModalContext.Provider>
  )
}
