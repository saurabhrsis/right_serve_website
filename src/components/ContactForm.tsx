import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2, Send } from 'lucide-react'
import { SITE } from '@/data/site'
import { SERVICE_PILLARS } from '@/data/services'
import { submitContact } from '@/lib/api'
import { trackEvent } from '@/lib/analytics'
import { useToast } from '@/components/Toast'
import { cn } from '@/lib/utils'

type ContactFormProps = {
  /** Where the enquiry came from - stored with the lead for attribution. */
  source: string
  defaultService?: string
  onSuccess?: () => void
  /** Navigate to the thank-you page (page-level forms) instead of showing inline success. */
  redirectToThankYou?: boolean
  compact?: boolean
  className?: string
}

type FormState = {
  name: string
  email: string
  mobile: string
  company: string
  service: string
  message: string
}

const initialState: FormState = { name: '', email: '', mobile: '', company: '', service: '', message: '' }

export default function ContactForm({
  source,
  defaultService = '',
  onSuccess,
  redirectToThankYou = false,
  compact = false,
  className,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>({ ...initialState, service: defaultService })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [loading, setLoading] = useState(false)
  const { showToast } = useToast()
  const navigate = useNavigate()

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.trim()) next.email = 'Please enter your email'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) next.email = 'Please enter a valid email address'
    if (form.mobile && !/^(\+?91[- ]?)?[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, '')))
      next.mobile = 'Enter a valid 10-digit mobile number'
    if (!form.message.trim() || form.message.trim().length < 10) next.message = 'Please tell us a little more (10+ characters)'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    setLoading(true)
    const result = await submitContact({
      name: form.name.trim(),
      email: form.email.trim(),
      mobile: form.mobile.trim(),
      company: form.company.trim(),
      subject: form.service || 'General enquiry',
      message: form.message.trim(),
      source,
    })
    setLoading(false)

    if (result.ok) {
      trackEvent('generate_lead', { source, service: form.service || 'General enquiry' })
      showToast('Thank you! Your enquiry has been sent — our team will contact you within one business day.', 'success')
      setForm({ ...initialState, service: defaultService })
      onSuccess?.()
      if (redirectToThankYou) navigate('/thank-you')
      return
    }

    // Friendly fallback so a backend/network problem never loses the lead.
    showToast(
      'We could not reach our servers. Please WhatsApp or call us instead — your message is important.',
      'error',
    )
    trackEvent('contact_click', { source, fallback: 'error' })
  }

  const inputClasses = (field: keyof FormState) =>
    cn(
      'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-700 shadow-sm outline-none transition-colors placeholder:text-slate-400',
      errors[field] ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-accent-400',
    )

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)} noValidate>
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="cf-name">
            Full name <span className="text-rose-500">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            className={inputClasses('name')}
            placeholder="Your name"
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            required
          />
          {errors.name ? <p className="mt-1 text-xs text-rose-600">{errors.name}</p> : null}
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="cf-email">
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClasses('email')}
            placeholder="you@company.com"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            required
          />
          {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email}</p> : null}
        </div>
      </div>

      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="cf-mobile">
            Mobile / WhatsApp
          </label>
          <input
            id="cf-mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={inputClasses('mobile')}
            placeholder="+91 98765 43210"
            value={form.mobile}
            onChange={(event) => update('mobile', event.target.value.replace(/[^\d+\s-]/g, ''))}
          />
          {errors.mobile ? <p className="mt-1 text-xs text-rose-600">{errors.mobile}</p> : null}
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="cf-company">
            Company / city
          </label>
          <input
            id="cf-company"
            name="company"
            autoComplete="organization"
            className={inputClasses('company')}
            placeholder="Company name, city"
            value={form.company}
            onChange={(event) => update('company', event.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="cf-service">
          What do you need help with?
        </label>
        <select
          id="cf-service"
          name="service"
          className={inputClasses('service')}
          value={form.service}
          onChange={(event) => update('service', event.target.value)}
        >
          <option value="">Select a service (optional)</option>
          {SERVICE_PILLARS.map((pillar) => (
            <optgroup key={pillar.slug} label={pillar.name}>
              {pillar.subServices.map((sub) => (
                <option key={sub.slug} value={sub.name}>
                  {sub.name}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="cf-message">
          Project details <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={compact ? 3 : 5}
          className={cn(inputClasses('message'), 'resize-none')}
          placeholder="Tell us about your requirement, timeline and budget range…"
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          required
        />
        {errors.message ? <p className="mt-1 text-xs text-rose-600">{errors.message}</p> : null}
      </div>

      <button type="submit" className="btn-accent w-full" disabled={loading}>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
        {loading ? 'Sending…' : 'Send enquiry'}
      </button>

      <p className="text-center text-xs text-ink-500">
        Prefer to talk now? Call{' '}
        <a href={`tel:${SITE.contact.phonePrimary}`} className="font-semibold text-brand-700">
          {SITE.contact.phones[1]}
        </a>{' '}
        or email{' '}
        <a href={`mailto:${SITE.contact.email}`} className="font-semibold text-brand-700">
          {SITE.contact.email}
        </a>
        . See our{' '}
        <Link to="/privacy-policy" className="underline">
          privacy policy
        </Link>
        .
      </p>
    </form>
  )
}
