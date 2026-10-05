import { useMemo, useState, type FormEvent } from 'react'
import { Loader2, MapPin, Send } from 'lucide-react'
import { BENEFITS, CULTURE_POINTS, HIRING_PROCESS, JOB_ROLES, type JobRole } from '@/data/careers'
import { CAREER_FAQS } from '@/data/faqs'
import { SITE, MAILTO_LINK } from '@/data/site'
import { submitCareerApplication } from '@/lib/api'
import { trackEvent } from '@/lib/analytics'
import { useToast } from '@/components/Toast'
import { PageHero, CTASection, FAQAccordion } from '@/components/sections'
import { Reveal, SectionHeading } from '@/components/ui'
import Icon from '@/components/Icon'
import { cn } from '@/lib/utils'

const DEPARTMENTS = ['All', 'Engineering', 'Design', 'Marketing', 'Sales & Support'] as const

export default function Career() {
  const [department, setDepartment] = useState<(typeof DEPARTMENTS)[number]>('All')
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null)
  const { showToast } = useToast()

  const roles = useMemo(
    () => (department === 'All' ? JOB_ROLES : JOB_ROLES.filter((role) => role.department === department)),
    [department],
  )

  return (
    <>


      <PageHero
        eyebrow="Careers"
        title="Build your career with Right Serve Infotech System"
        subtitle="Here, learning never stops. Every challenge becomes a chance to grow — personally and professionally — while you work on real products for real businesses."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/career' },
        ]}
        image="/images/career-hero.jpg"
        imageAlt="Careers at Right Serve Infotech System, Nagpur"
        actions={
          <>
            <a href="#openings" className="btn bg-white text-brand-900 hover:-translate-y-0.5 hover:bg-accent-50">
              See {JOB_ROLES.length} open roles
            </a>
            <a href={MAILTO_LINK} className="btn-ghost-light">
              Email your resume
            </a>
          </>
        }
      />

      {/* Culture */}
      <section className="section bg-white">
        <div className="container-rsis grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our culture</span>
            <h2 className="heading-2 mt-4">Great technology comes from great people</h2>
            <div className="prose-rsis mt-5">
              <p>
                At Right Serve Infotech System we believe culture is a competitive advantage. Our teams are small enough that
                your work is visible, and structured enough that you always know what is expected of you.
              </p>
              <p>
                We are driven by curiosity and guided by a passion for excellence — ideas are encouraged, creativity is
                celebrated and growth never stops. Whether you are a seasoned professional or just starting out, you will
                find opportunities to sharpen your skills and make a real impact on products people depend on.
              </p>
              <p>
                We do not just build products; we build futures. Join us in shaping solutions that empower businesses and
                make technology more human.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {CULTURE_POINTS.map((point, index) => (
              <Reveal key={point.title} delay={index * 60} className="h-full">
                <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-900 text-white">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display text-[15px] font-bold text-brand-900">{point.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500">{point.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section bg-slate-50" id="openings">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Open positions"
            title="Begin your journey — apply today"
            subtitle="Your talent deserves the right platform. Select a role to apply in under two minutes."
          />

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {DEPARTMENTS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setDepartment(item)}
                className={cn(
                  'rounded-full border px-4 py-2 text-xs font-semibold transition-colors',
                  department === item
                    ? 'border-brand-900 bg-brand-900 text-white'
                    : 'border-slate-200 bg-white text-ink-600 hover:border-accent-300 hover:text-brand-800',
                )}
                aria-pressed={department === item}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {roles.map((role, index) => (
              <Reveal key={role.title} delay={index * 40} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="heading-3 !text-base">{role.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent-600">{role.department}</p>
                    </div>
                    <span className="chip">{role.type}</span>
                  </div>
                  <p className="mt-3 text-sm text-ink-600">{role.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <li key={skill} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-ink-600">
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-xs text-ink-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-accent-500" aria-hidden /> Nagpur (hybrid)
                    </span>
                    <span>Experience: {role.experience}</span>
                    <span>
                      {role.openings} {role.openings === 1 ? 'opening' : 'openings'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedRole(role)
                      trackEvent('job_apply', { role: role.title })
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="btn-primary mt-5 w-full"
                  >
                    Apply for this role
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process + benefits */}
      <section className="section bg-white">
        <div className="container-rsis grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Hiring process" title="Five simple steps" align="left" />
            <ol className="mt-8 space-y-4">
              {HIRING_PROCESS.map((step, index) => (
                <Reveal key={step.step} delay={index * 40} as="li">
                  <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 font-display text-sm font-bold text-accent-700">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-bold text-brand-900">{step.title}</h3>
                      <p className="mt-1 text-[13px] text-ink-500">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeading eyebrow="Benefits" title="What you get" align="left" />
            <ul className="mt-8 space-y-3">
              {BENEFITS.map((benefit, index) => (
                <Reveal key={benefit} delay={index * 40} as="li">
                  <span className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                    {benefit}
                  </span>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-accent-200 bg-accent-50/60 p-5 text-sm text-ink-600">
              <strong className="font-semibold text-brand-900">Send your resume directly:</strong>{' '}
              <a href={MAILTO_LINK} className="font-semibold text-brand-700 underline">
                {SITE.contact.email}
              </a>
              <br />
              Mention the role in the subject line. We reply to every relevant application.
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="section bg-slate-50" id="application-form">
        <div className="container-rsis max-w-3xl">
          <SectionHeading
            eyebrow="Application"
            title={selectedRole ? `Apply for ${selectedRole.title}` : 'Apply for an opportunity'}
            subtitle="Share your details and attach your resume. We review applications within 2–3 working days."
          />
          <ApplicationForm role={selectedRole?.title ?? ''} onSuccess={() => setSelectedRole(null)} showToast={showToast} />
        </div>
      </section>

      <FAQAccordion faqs={CAREER_FAQS} title="Careers FAQ" subtitle="Everything candidates usually ask before applying." />

      <CTASection
        title="Do not see your role listed?"
        subtitle="We are always interested in exceptional developers, designers and marketers. Send us your portfolio — we will keep you in mind."
        source="Career page CTA"
        primaryLabel="Talk to our HR team"
      />
    </>
  )
}

function ApplicationForm({
  role,
  onSuccess,
  showToast,
}: {
  role: string
  onSuccess: () => void
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void
}) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', message: '' })
  const [resume, setResume] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Please enter your full name'
    if (!form.email.trim()) next.email = 'Please enter your email'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number'
    if (!role) next.role = 'Select a role from the list above'
    if (!form.experience.trim()) next.experience = 'Please enter your experience'
    if (!resume) next.resume = 'Please attach your resume (PDF/DOC)'
    setErrors(next)
    if (Object.keys(next).length) return

    setLoading(true)
    const payload = new FormData()
    payload.append('name', form.name.trim())
    payload.append('email', form.email.trim())
    payload.append('phone', form.phone.trim())
    payload.append('role', role)
    payload.append('experience', form.experience.trim())
    payload.append('message', form.message.trim())
    payload.append('source', 'Website career form')
    if (resume) payload.append('resume', resume)

    const result = await submitCareerApplication(payload)
    setLoading(false)

    if (result.ok) {
      showToast('Application received! Our HR team will review it and get back to you soon.', 'success')
      setForm({ name: '', email: '', phone: '', experience: '', message: '' })
      setResume(null)
      onSuccess()
      return
    }

    showToast(
      'We could not upload your application. Please email your resume to rightserveinfotechSystem@gmail.com — sorry for the inconvenience.',
      'error',
    )
  }

  const inputClass = (field: string) =>
    cn(
      'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-700 shadow-sm outline-none transition-colors placeholder:text-slate-400',
      errors[field] ? 'border-rose-400' : 'border-slate-200 focus:border-accent-400',
    )

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="job-name">
            Full name *
          </label>
          <input id="job-name" className={inputClass('name')} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your full name" />
          {errors.name ? <p className="mt-1 text-xs text-rose-600">{errors.name}</p> : null}
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="job-email">
            Email *
          </label>
          <input id="job-email" type="email" className={inputClass('email')} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@email.com" />
          {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="job-phone">
            Phone *
          </label>
          <input id="job-phone" className={inputClass('phone')} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value.replace(/[^\d+\s-]/g, '') })} placeholder="+91 98765 43210" />
          {errors.phone ? <p className="mt-1 text-xs text-rose-600">{errors.phone}</p> : null}
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="job-role">
            Role applying for *
          </label>
          <input id="job-role" className={inputClass('role')} value={role} readOnly placeholder="Select a role above" />
          {errors.role ? <p className="mt-1 text-xs text-rose-600">{errors.role}</p> : null}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="job-experience">
          Experience (years) *
        </label>
        <input
          id="job-experience"
          type="number"
          min={0}
          step={0.5}
          className={inputClass('experience')}
          value={form.experience}
          onChange={(event) => setForm({ ...form, experience: event.target.value })}
          placeholder="e.g. 2"
        />
        {errors.experience ? <p className="mt-1 text-xs text-rose-600">{errors.experience}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="job-resume">
          Resume (PDF/DOC, max 5 MB) *
        </label>
        <input
          id="job-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className={inputClass('resume')}
          onChange={(event) => setResume(event.target.files?.[0] ?? null)}
        />
        {errors.resume ? <p className="mt-1 text-xs text-rose-600">{errors.resume}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-ink-600" htmlFor="job-message">
          Anything we should know?
        </label>
        <textarea
          id="job-message"
          rows={4}
          className={cn(inputClass('message'), 'resize-none')}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Portfolio link, notice period, current location…"
        />
      </div>

      <button type="submit" className="btn-accent w-full" disabled={loading}>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
        {loading ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  )
}
