import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Phone, Quote, Star } from 'lucide-react'
import { COMPANY_STATS, DELIVERY_PROCESS, INDUSTRIES, SITE, TEL_LINK, TECH_STACK, WEBSITE_JOURNEY, WHY_US } from '@/data/site'
import { TESTIMONIALS } from '@/data/testimonials'
import { useLeadModal } from '@/components/LeadModal'
import { Breadcrumbs, Img, Reveal, SectionHeading, StatCounter } from '@/components/ui'
import { trackEvent, trackOutbound } from '@/lib/analytics'
import Icon from '@/components/Icon'
import { cn } from '@/lib/utils'
import type { Faq, Feature } from '@/data/services'

/* ------------------------------------------------------------------ */
/* Page hero used by every inner page                                  */
/* ------------------------------------------------------------------ */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  image,
  imageAlt,
  actions,
  compact = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: ReactNode
  breadcrumbs: { name: string; path: string }[]
  image?: string
  imageAlt?: string
  actions?: ReactNode
  compact?: boolean
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-400/20 blur-3xl" aria-hidden />
      <div className="container-rsis relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={breadcrumbs} light />
        <div className={cn('mt-5 grid items-center gap-10', image ? 'lg:grid-cols-2' : '')}>
          <div className={cn(!compact && 'max-w-3xl')}>
            {eyebrow ? <span className="eyebrow border-white/20 bg-white/10 text-accent-100">{eyebrow}</span> : null}
            <h1 className="heading-1 mt-4 text-white">{title}</h1>
            {subtitle ? <p className="lead mt-5 max-w-2xl text-slate-200">{subtitle}</p> : null}
            {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {image ? (
            <Img
              src={image}
              alt={imageAlt ?? title}
              className="h-64 w-full rounded-3xl border border-white/10 sm:h-80"
              priority
              width={720}
              height={480}
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Stats band                                                          */
/* ------------------------------------------------------------------ */
export function StatsBand({ light = false }: { light?: boolean }) {
  return (
    <section className={cn('border-y', light ? 'border-white/10 bg-brand-950' : 'border-slate-200 bg-slate-50')}>
      <div className="container-rsis grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {COMPANY_STATS.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80}>
            <StatCounter value={stat.value} label={stat.label} caption={stat.caption} light={light} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */
export function WhyUsGrid({ items = WHY_US, light = false }: { items?: Feature[]; light?: boolean }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 60} className="h-full">
          <article className={cn('h-full rounded-2xl border p-6 transition-all hover:-translate-y-1', light ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-soft hover:shadow-card')}>
            <span className={cn('inline-flex h-11 w-11 items-center justify-center rounded-xl', light ? 'bg-accent-500/20 text-accent-200' : 'bg-accent-50 text-accent-600')}>
              <Icon name={item.icon ?? 'Sparkles'} className="h-5 w-5" />
            </span>
            <h3 className={cn('heading-3 mt-4 !text-base', light && 'text-white')}>{item.title}</h3>
            <p className={cn('mt-2 text-sm leading-relaxed', light ? 'text-slate-300' : 'text-ink-500')}>{item.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Delivery process                                                    */
/* ------------------------------------------------------------------ */
export function ProcessSteps() {
  return (
    <ol className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
      {DELIVERY_PROCESS.map((step, index) => (
        <Reveal key={step.step} delay={index * 70} className="h-full">
          <li className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <span className="font-display text-3xl font-extrabold text-accent-500/40">{step.step}</span>
            <h3 className="heading-3 mt-2 !text-base">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */
export function IndustriesGrid({ limit }: { limit?: number }) {
  const items = limit ? INDUSTRIES.slice(0, limit) : INDUSTRIES
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((industry, index) => (
        <Reveal key={industry.slug} delay={index * 50} className="h-full">
          <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
            <Img
              src={industry.image}
              alt={`${industry.name} software and marketing services`}
              className="h-36 w-full"
              imgClassName="group-hover:scale-105 transition-transform duration-700"
              width={480}
              height={288}
            />
            <div className="p-5">
              <h3 className="heading-3 !text-[15px]">{industry.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-500">{industry.blurb}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Website journey                                                     */
/* ------------------------------------------------------------------ */
export function JourneyGrid() {
  const { openLeadModal } = useLeadModal()
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {WEBSITE_JOURNEY.map((item, index) => (
        <Reveal key={item.title} delay={index * 60} className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-900 text-white">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="heading-3 !text-base">{item.title}</h3>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{item.description}</p>
            <button
              type="button"
              onClick={() => openLeadModal({ source: `Home journey: ${item.title}`, service: 'Website Development' })}
              className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-800 hover:text-accent-600"
            >
              Start here <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Tech marquee                                                        */
/* ------------------------------------------------------------------ */
export function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK]
  return (
    <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-12">
        {items.map((tech, index) => (
          <span key={`${tech.name}-${index}`} className="flex items-center gap-3 opacity-80 transition-opacity hover:opacity-100">
            <img src={tech.logo} alt={`${tech.name} development`} width={44} height={44} loading="lazy" className="h-9 w-9 object-contain" />
            <span className="whitespace-nowrap font-display text-sm font-bold text-ink-600">{tech.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Testimonials slider                                                 */
/* ------------------------------------------------------------------ */
export function TestimonialsSlider({ heading = true }: { heading?: boolean }) {
  const [index, setIndex] = useState(0)
  const perView = 3
  const maxIndex = Math.max(0, TESTIMONIALS.length - 1)

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction
      if (next < 0) return maxIndex
      if (next > maxIndex) return 0
      return next
    })
  }

  const visible = TESTIMONIALS.slice(index, index + perView)
  const wrapped = visible.length < perView ? [...visible, ...TESTIMONIALS.slice(0, perView - visible.length)] : visible

  return (
    <section className="section bg-slate-50">
      <div className="container-rsis">
        {heading ? (
          <SectionHeading
            eyebrow="Client feedback"
            title="What our clients say"
            subtitle="We take pride in building long-term relationships through reliable services and innovative solutions."
          />
        ) : null}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {wrapped.map((testimonial, cardIndex) => (
            <Reveal key={`${testimonial.name}-${cardIndex}`} delay={cardIndex * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <Quote className="h-7 w-7 text-accent-300" aria-hidden />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{testimonial.text}</blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <Img
                    src={testimonial.logo}
                    alt={`${testimonial.role} logo`}
                    className="h-11 w-11 shrink-0 rounded-full border border-slate-200"
                    imgClassName="object-contain p-1"
                    width={88}
                    height={88}
                  />
                  <figcaption>
                    <span className="block text-sm font-bold text-brand-900">{testimonial.name}</span>
                    <span className="block text-xs text-ink-500">{testimonial.role}</span>
                  </figcaption>
                  <span className="ml-auto flex gap-0.5" aria-label={`Rated ${testimonial.rating} out of 5`}>
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" aria-hidden />
                    ))}
                  </span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="rounded-full border border-slate-200 bg-white p-3 text-brand-900 shadow-soft transition-all hover:-translate-y-0.5"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <span className="text-xs font-semibold text-ink-500">
            {index + 1} / {TESTIMONIALS.length}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            className="rounded-full border border-slate-200 bg-white p-3 text-brand-900 shadow-soft transition-all hover:-translate-y-0.5"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* FAQ accordion (content is also emitted as FAQ schema per route)     */
/* ------------------------------------------------------------------ */
export function FAQAccordion({ faqs, title = 'Frequently asked questions', subtitle }: { faqs: Faq[]; title?: string; subtitle?: string }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section bg-white">
      <div className="container-rsis grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="FAQ" title={title} subtitle={subtitle} align="left" />
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-ink-600">
            Still have a question?{' '}
            <a href={TEL_LINK} className="font-semibold text-brand-800">
              Call {SITE.contact.phones[1]}
            </a>{' '}
            or{' '}
            <Link to="/contact" className="font-semibold text-brand-800">
              send us a message
            </Link>
            . We reply within one business day.
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index
              return (
                <li key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="font-display text-[15px] font-bold text-brand-900">{faq.question}</span>
                    <ChevronDown className={cn('h-4 w-4 shrink-0 text-accent-500 transition-transform', isOpen && 'rotate-180')} aria-hidden />
                  </button>
                  {isOpen ? <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-ink-600">{faq.answer}</p> : null}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Conversion CTA band                                                 */
/* ------------------------------------------------------------------ */
export function CTASection({
  title = 'Ready to start your project?',
  subtitle = 'Share your requirement and get a free consultation, timeline and written estimate within one business day.',
  source = 'CTA band',
  primaryLabel = 'Get free consultation',
  showCall = true,
}: {
  title?: string
  subtitle?: string
  source?: string
  primaryLabel?: string
  showCall?: boolean
}) {
  const { openLeadModal } = useLeadModal()

  return (
    <section className="section">
      <div className="container-rsis">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" aria-hidden />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="heading-2 text-white">{title}</h2>
              <p className="mt-4 text-slate-200">{subtitle}</p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-accent-100">
                <li>✓ Free consultation</li>
                <li>✓ Written scope &amp; pricing</li>
                <li>✓ NDA on request</li>
              </ul>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button
                type="button"
                className="btn bg-white text-brand-900 hover:-translate-y-0.5 hover:bg-accent-50"
                onClick={() => {
                  trackEvent('cta_click', { source })
                  openLeadModal({ source })
                }}
              >
                {primaryLabel} <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              {showCall ? (
                <a
                  href={TEL_LINK}
                  onClick={() => trackOutbound('phone', source)}
                  className="btn-ghost-light"
                >
                  <Phone className="h-4 w-4" aria-hidden /> {SITE.contact.phones[1]}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
