import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, IndianRupee, Phone } from 'lucide-react'
import { getSubService } from '@/data/services'
import { SITE, TEL_LINK } from '@/data/site'
import { useLeadModal } from '@/components/LeadModal'
import ContactForm from '@/components/ContactForm'
import { PageHero, CTASection, FAQAccordion } from '@/components/sections'
import { Reveal, SectionHeading } from '@/components/ui'
import Icon from '@/components/Icon'
import NotFound from '@/pages/NotFound'
import { trackOutbound } from '@/lib/analytics'

export default function ServiceDetail() {
  const { pillar: pillarSlug = '', sub = '' } = useParams()
  const match = getSubService(pillarSlug, sub)
  const { openLeadModal } = useLeadModal()

  if (!match) return <NotFound />

  const { pillar, service } = match
  const path = `${pillar.path}/${service.slug}`
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: pillar.name, path: pillar.path },
    { name: service.name, path },
  ]

  return (
    <>


      <PageHero
        eyebrow={pillar.name}
        title={service.name}
        subtitle={service.tagline}
        breadcrumbs={breadcrumbs}
        actions={
          <>
            <button
              type="button"
              className="btn bg-white text-brand-900 hover:-translate-y-0.5 hover:bg-accent-50"
              onClick={() => openLeadModal({ source: `Service page: ${service.name}`, service: service.name })}
            >
              Get a free quote <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            <a href={TEL_LINK} className="btn-ghost-light" onClick={() => trackOutbound('phone', `service-${service.slug}`)}>
              <Phone className="h-4 w-4" aria-hidden /> {SITE.contact.phones[1]}
            </a>
          </>
        }
      />

      <section className="section bg-white">
        <div className="container-rsis grid gap-12 lg:grid-cols-12">
          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: <IndianRupee className="h-4 w-4" aria-hidden />, label: 'Starting from', value: service.priceFrom },
                { icon: <Clock className="h-4 w-4" aria-hidden />, label: 'Typical timeline', value: service.timeline },
                { icon: <CheckCircle2 className="h-4 w-4" aria-hidden />, label: 'Category', value: pillar.shortName },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent-600">
                    {item.icon}
                    {item.label}
                  </span>
                  <p className="mt-1 font-display text-lg font-bold text-brand-900">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="prose-rsis mt-8">
              <h2>{service.name} — what we do</h2>
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h2 className="heading-2 mt-12 !text-2xl">What is included</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {service.features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 40} className="h-full">
                  <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                      <Icon name={feature.icon ?? 'Sparkles'} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 font-display text-[15px] font-bold text-brand-900">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{feature.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <h2 className="heading-2 mt-12 !text-2xl">Deliverables</h2>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            {service.tech?.length ? (
              <>
                <h2 className="heading-2 mt-12 !text-2xl">Tools &amp; technologies</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.tech.map((item) => (
                    <li key={item} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            <div className="mt-12 rounded-2xl border border-accent-200 bg-accent-50/60 p-6">
              <h2 className="heading-3 !text-base">Not sure this is the right service?</h2>
              <p className="mt-2 text-sm text-ink-600">
                Book a free 20-minute consultation. We will review your requirement and, if a different approach suits you
                better, we will tell you — even if that means recommending something we do not sell.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => openLeadModal({ source: `Service advice: ${service.name}`, service: service.name })}
                >
                  Book free consultation
                </button>
                <Link to={pillar.path} className="btn-outline">
                  All {pillar.name.toLowerCase()} services
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="heading-3 !text-base">Request a callback</h2>
                <p className="mt-1 text-xs text-ink-500">Average response time: under 4 working hours.</p>
                <ContactForm
                  source={`Service page sidebar: ${service.name}`}
                  defaultService={service.name}
                  compact
                  className="mt-4"
                />
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-brand-900">Other {pillar.shortName} services</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {pillar.subServices
                    .filter((item) => item.slug !== service.slug)
                    .map((item) => (
                      <li key={item.slug}>
                        <Link to={`${pillar.path}/${item.slug}`} className="flex items-center gap-2 text-ink-600 hover:text-accent-600">
                          <ArrowRight className="h-3.5 w-3.5 text-accent-500" aria-hidden />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <FAQAccordion faqs={service.faqs} title={`${service.shortName ?? service.name} FAQs`} />

      <section className="section bg-slate-50 pt-0">
        <div className="container-rsis">
          <SectionHeading eyebrow="Next step" title="Explore related work and services" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link to="/portfolio" className="card card-hover">
              <h3 className="heading-3 !text-base">See delivered projects</h3>
              <p className="mt-2 text-sm text-ink-500">Real client work with scope, technology and outcomes.</p>
            </Link>
            <Link to="/products" className="card card-hover">
              <h3 className="heading-3 !text-base">Ready-to-deploy products</h3>
              <p className="mt-2 text-sm text-ink-500">Software you can start using this week while custom builds mature.</p>
            </Link>
            <Link to="/insights" className="card card-hover">
              <h3 className="heading-3 !text-base">Guides and pricing advice</h3>
              <p className="mt-2 text-sm text-ink-500">Transparent cost breakdowns and buying guides for Indian businesses.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Let's scope your ${service.name.toLowerCase()} project`}
        subtitle="Send us your requirement and receive a free consultation, timeline and written estimate within one business day."
        source={`Service detail CTA: ${service.name}`}
        primaryLabel="Get my free quote"
      />
    </>
  )
}
