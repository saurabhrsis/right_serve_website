import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, MapPin, Phone, Star } from 'lucide-react'
import { SERVICE_PILLARS } from '@/data/services'
import { PROJECTS } from '@/data/portfolio'
import { PRODUCTS } from '@/data/products'
import { SITE, TEL_LINK } from '@/data/site'
import { HOME_FAQS } from '@/data/faqs'
import { useLeadModal } from '@/components/LeadModal'
import { Breadcrumbs, Img, Reveal, SectionHeading } from '@/components/ui'
import { ProjectCard, PillarCard, ProductCard } from '@/components/cards'
import {
  CTASection,
  FAQAccordion,
  IndustriesGrid,
  JourneyGrid,
  ProcessSteps,
  StatsBand,
  TechMarquee,
  TestimonialsSlider,
  WhyUsGrid,
} from '@/components/sections'
import { trackEvent, trackOutbound } from '@/lib/analytics'

export default function Home() {
  const { openLeadModal } = useLeadModal()
  const featuredProjects = PROJECTS.filter((project) => project.category !== 'Digital Marketing').slice(0, 3)

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" aria-hidden />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" aria-hidden />

        <div className="container-rsis relative py-12 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Breadcrumbs items={[{ name: 'Home', path: '/' }]} light className="mb-4 hidden lg:block" />
              <span className="eyebrow border-white/20 bg-white/10 text-accent-100">
                <MapPin className="h-3.5 w-3.5" aria-hidden /> Nagpur · Serving all of India
              </span>

              <h1 className="heading-1 mt-5 !text-white">
                Software, hardware &amp; digital marketing —{' '}
                <span className="text-gradient">engineered to grow your business</span>
              </h1>

              <p className="lead mt-6 max-w-2xl text-slate-200">
                Right Serve Infotech System Pvt. Ltd. builds custom software, websites and mobile apps, sets up the IT
                infrastructure they run on, and markets them to the right customers. One accountable partner, since{' '}
                {SITE.foundingYear}.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn bg-white text-brand-900 hover:-translate-y-0.5 hover:bg-accent-50"
                  onClick={() => {
                    trackEvent('cta_click', { location: 'home-hero' })
                    openLeadModal({ source: 'Home hero' })
                  }}
                >
                  Get free consultation <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
                <Link to="/services/software" className="btn-ghost-light">
                  Explore our services
                </Link>
                <a href={TEL_LINK} className="btn-ghost-light" onClick={() => trackOutbound('phone', 'home-hero')}>
                  <Phone className="h-4 w-4" aria-hidden /> {SITE.contact.phones[1]}
                </a>
              </div>

              <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  { value: '150+', label: 'Projects' },
                  { value: '100+', label: 'Clients' },
                  { value: `${SITE.yearsInBusiness}+`, label: 'Years' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-extrabold text-white">{stat.value}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-200">{stat.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <Img
                  src="/images/home-hero.jpg"
                  alt="Right Serve Infotech System team delivering software and IT projects in Nagpur"
                  className="aspect-[4/3] w-full rounded-3xl border border-white/10 shadow-card"
                  priority
                  width={880}
                  height={660}
                />
                <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-card sm:left-8">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <BadgeCheck className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs">
                    <span className="block font-bold text-brand-900">ISO-ready delivery process</span>
                    <span className="text-ink-500">Weekly demos · Fixed scope · NDA on request</span>
                  </span>
                </div>
                <div className="absolute -top-4 right-4 hidden items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-brand-900 shadow-soft sm:flex">
                  <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" aria-hidden />
                  4.9 / 5 client rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Services                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="section bg-white" id="services">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="What we do"
            title="Technology and industry expertise"
            subtitle="Three service pillars, one team. Choose a capability or combine them for a complete digital transformation."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {SERVICE_PILLARS.map((pillar, index) => (
              <Reveal key={pillar.slug} delay={index * 80} className="h-full">
                <PillarCard pillar={pillar} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* About teaser                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="section bg-slate-50">
        <div className="container-rsis grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Img
              src="/images/about-us.jpg"
              alt="Right Serve Infotech System office and team in Nagpur"
              className="aspect-[4/3] w-full rounded-3xl shadow-card"
              width={840}
              height={630}
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">About Right Serve Infotech System</span>
            <h2 className="heading-2 mt-4">A trusted technology partner for growing businesses</h2>
            <p className="lead mt-4">
              Since {SITE.foundingYear} we have helped manufacturers, contractors, clinics, schools, law firms and retailers
              replace manual processes with software that pays for itself — and then made sure the right customers find
              them online.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-600">
              {[
                'In-house team of 20+ developers, designers and marketers in Nagpur',
                'Custom software, ready-to-deploy products and long-term AMC support',
                'Hardware, networking and CCTV delivered by the same engineers',
                'Marketing measured in qualified leads, not impressions',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary">
                Read our story <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/our-team" className="btn-outline">
                Meet the team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBand light />

      {/* ---------------------------------------------------------------- */}
      {/* Journey                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Website & software process"
            title="Where are you in the website process?"
            subtitle="Not sure where to start? We can help at any step — from getting online for the first time to keeping an existing site thriving."
          />
          <div className="mt-12">
            <JourneyGrid />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Industries                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="section bg-slate-50">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Industries"
            title="Web design and software for every industry"
            subtitle="We understand what it takes to stand out in your sector — because we have already delivered for it."
          />
          <div className="mt-12">
            <IndustriesGrid />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Why us                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Why RSIS"
            title="Why businesses in Nagpur choose us"
            subtitle="Clear scopes, honest timelines and support that answers the phone."
          />
          <div className="mt-12">
            <WhyUsGrid />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Portfolio teaser                                                */}
      {/* ---------------------------------------------------------------- */}
      <section className="section bg-slate-50">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Recent work"
            title="Projects we are proud of"
            subtitle="A snapshot of the software, apps and websites we have delivered for clients across India."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80} className="h-full">
                <ProjectCard project={project} className="h-full" />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/portfolio" className="btn-outline">
              View the full portfolio <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Products teaser                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Ready-to-deploy products"
            title="Software you can start using this week"
            subtitle="Our own products cover construction billing, inventory, healthcare, education, creator analytics and secure email."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRODUCTS.slice(0, 3).map((product, index) => (
              <Reveal key={product.slug} delay={index * 80} className="h-full">
                <ProductCard product={product} className="h-full" />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/products" className="btn-primary">
              Explore all products <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Technologies                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="section bg-slate-50">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Provided technology"
            title="The stack we build on"
            subtitle="Modern, well-supported technologies chosen for performance, security and long-term maintainability."
          />
        </div>
        <div className="mt-8">
          <TechMarquee />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Process                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="How we work"
            title="A delivery process without surprises"
            subtitle="Every engagement follows the same disciplined path — so you always know what happens next."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <TestimonialsSlider />

      <FAQAccordion
        faqs={HOME_FAQS}
        title="Questions we hear every week"
        subtitle="Cost, timelines, support and location — answered straight."
      />

      <CTASection
        title="Let's build something amazing together"
        subtitle="Tell us about your project and we will share a free consultation, timeline and written estimate. No obligation, no pushy sales calls."
        source="Home bottom CTA"
      />
    </>
  )
}
