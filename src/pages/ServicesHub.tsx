import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getPillar, SERVICE_PILLARS } from '@/data/services'
import { useLeadModal } from '@/components/LeadModal'
import { PageHero, CTASection, FAQAccordion, ProcessSteps, TestimonialsSlider, WhyUsGrid } from '@/components/sections'
import { Reveal, SectionHeading, StatCounter } from '@/components/ui'
import { ServiceCard } from '@/components/cards'
import { TechMarquee } from '@/components/sections'
import NotFound from '@/pages/NotFound'

export default function ServicesHub() {
  const { pillar: pillarSlug = '' } = useParams()
  const pillar = getPillar(pillarSlug)
  const { openLeadModal } = useLeadModal()

  if (!pillar) return <NotFound />

  return (
    <>


      <PageHero
        eyebrow={pillar.eyebrow}
        title={pillar.heroHeading}
        subtitle={pillar.heroSub}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: pillar.path },
          { name: pillar.name, path: pillar.path },
        ]}
        image={pillar.heroImage}
        imageAlt={pillar.heroImageAlt}
        actions={
          <>
            <button
              type="button"
              className="btn bg-white text-brand-900 hover:-translate-y-0.5 hover:bg-accent-50"
              onClick={() => openLeadModal({ source: `${pillar.name} hub hero` })}
            >
              Get a free quote <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            <Link to="/contact" className="btn-ghost-light">
              Talk to a specialist
            </Link>
          </>
        }
      />

      {/* Intro + highlights */}
      <section className="section bg-white">
        <div className="container-rsis grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Overview</span>
            <h2 className="heading-2 mt-4">
              {pillar.name} services in Nagpur, delivered end to end
            </h2>
            <div className="prose-rsis mt-5">
              {pillar.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="heading-3 !text-base">What you can expect</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-600">
                {pillar.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                    {highlight}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="btn-primary mt-6 w-full"
                onClick={() => openLeadModal({ source: `${pillar.name} hub overview` })}
              >
                Request a proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="container-rsis grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillar.stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* Sub-services */}
      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Services"
            title={`Our ${pillar.name.toLowerCase()} services`}
            subtitle="Each service has a dedicated page with scope, deliverables, indicative pricing and answers to the questions clients ask most."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillar.subServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 50} className="h-full">
                <ServiceCard service={service} href={`${pillar.path}/${service.slug}`} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section bg-slate-50">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Why choose us"
            title={`Why choose our ${pillar.name.toLowerCase()} services?`}
            subtitle="Practical reasons clients give us when they refer us to someone else."
          />
          <div className="mt-12">
            <WhyUsGrid items={pillar.whyUs} />
          </div>
        </div>
      </section>

      {pillar.slug === 'software' && (
        <section className="section bg-white">
          <div className="container-rsis">
            <SectionHeading eyebrow="Technologies" title="Technologies we use" subtitle="Chosen for performance, security and long-term support — never for hype." />
          </div>
          <div className="mt-8">
            <TechMarquee />
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading eyebrow="How we work" title="A predictable delivery process" />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <TestimonialsSlider />

      <FAQAccordion faqs={pillar.faqs} title={`${pillar.shortName} FAQs`} subtitle="Cost, timelines, support and integration — answered honestly." />

      {/* Other pillars - internal linking */}
      <section className="section bg-slate-50">
        <div className="container-rsis">
          <SectionHeading eyebrow="Also available" title="Explore our other services" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICE_PILLARS.filter((item) => item.slug !== pillar.slug).map((item) => (
              <Link
                key={item.slug}
                to={item.path}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-base font-bold text-brand-900">{item.name}</span>
                  <span className="mt-1 block text-sm text-ink-500">{item.summary}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to discuss your ${pillar.name.toLowerCase()} requirement?`}
        subtitle="Share your goals and constraints. We will respond with a free consultation, a written scope and a milestone-based estimate."
        source={`${pillar.name} hub bottom CTA`}
        primaryLabel="Get started"
      />
    </>
  )
}
