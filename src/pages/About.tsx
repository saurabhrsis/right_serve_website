import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Compass, Target } from 'lucide-react'
import { SITE } from '@/data/site'
import { TEAM } from '@/data/team'
import { useLeadModal } from '@/components/LeadModal'
import { Img, Reveal, SectionHeading } from '@/components/ui'
import { TeamCard } from '@/components/cards'
import { CTASection, ProcessSteps, StatsBand, TestimonialsSlider, WhyUsGrid } from '@/components/sections'

const MILESTONES = [
  { year: '2019', title: 'Founded in Nagpur', description: 'Started as a small team building websites and business software for local companies.' },
  { year: '2020', title: 'First enterprise rollout', description: 'Delivered our first multi-module business platform along with complete office IT setup.' },
  { year: '2021', title: 'Hardware & networking division', description: 'Added structured cabling, servers, CCTV and AMC services to support clients end to end.' },
  { year: '2022', title: 'Digital marketing practice', description: 'Launched SEO, Google Ads and social media services to help clients grow demand, not just systems.' },
  { year: '2023', title: 'Product portfolio expansion', description: 'Released ready-to-deploy products including Secure Build, DoseCare and Shiksha Sutra.' },
  { year: '2024', title: '50+ active clients', description: 'Crossed 150 delivered projects with clients across Maharashtra and central India.' },
  { year: '2026', title: 'AI & automation services', description: 'Introduced chatbots, document AI and workflow automation for growing businesses.' },
]

const VALUES = [
  { title: 'Transparency', description: 'Written scopes, milestone billing and honest timelines — even when the honest answer is "that will take longer".', icon: 'FileCheck' },
  { title: 'Craftsmanship', description: 'Code reviews, QA cycles and documentation. We build things we are happy to support five years from now.', icon: 'BadgeCheck' },
  { title: 'Ownership', description: 'One project manager accountable to you, with escalation directly to the directors.', icon: 'Target' },
  { title: 'Long-term thinking', description: 'We would rather lose a project than over-promise. Most of our clients have been with us for years.', icon: 'Compass' },
]

export default function About() {
  const { openLeadModal } = useLeadModal()
  const leaders = TEAM.filter((member) => member.department === 'Leadership')

  return (
    <>


      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="container-rsis relative py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-xs font-medium text-accent-200 sm:text-sm">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="px-2 text-white/40">/</span>
            <span className="text-white/90">About Us</span>
          </nav>
          <h1 className="heading-1 mt-5 max-w-3xl !text-white">
            Transforming businesses through technology since {SITE.foundingYear}
          </h1>
          <p className="lead mt-5 max-w-2xl text-slate-200">
            Right Serve Infotech System Pvt. Ltd. is a Nagpur-based technology company delivering software, hardware and
            digital marketing under one roof. We exist to make technology practical, affordable and accountable for growing
            Indian businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="container-rsis grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="heading-2 mt-4">From a small Nagpur studio to a 20+ member product team</h2>
            <div className="prose-rsis mt-5">
              <p>
                Right Serve Infotech System Private Limited began with a small group of technologists who believed that the
                right technology — properly implemented — can transform any business. Our first projects were websites and
                billing systems for local manufacturers and contractors.
              </p>
              <p>
                As clients grew, so did their needs. They asked us to manage the servers their software ran on, secure their
                premises with CCTV, and help them get found online. Rather than refer them elsewhere, we built the internal
                capability to do all of it — which is why today we can genuinely say we support a business end to end.
              </p>
              <p>
                We have since delivered more than 150 projects for over 100 clients across manufacturing, construction,
                healthcare, education, legal, retail and government segments. Our products — Secure Build, Trajectoryfy,
                DoseCare, Shiksha Sutra, TubeMonitize and our encrypted email platform — are used daily by teams who
                simply cannot afford downtime.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/portfolio" className="btn-primary">
                See our work <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <button type="button" className="btn-outline" onClick={() => openLeadModal({ source: 'About page' })}>
                Talk to a director
              </button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Img
              src="/images/about-team.jpg"
              alt="Right Serve Infotech System team working together in the Nagpur office"
              className="aspect-[4/3] w-full rounded-3xl shadow-card"
              width={840}
              height={630}
            />
          </Reveal>
        </div>
      </section>

      <StatsBand light />

      {/* Mission & vision */}
      <section className="section bg-white">
        <div className="container-rsis grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: <Target className="h-5 w-5" />,
              title: 'Our mission',
              text:
                'To be a leading provider of innovative software solutions and reliable hardware products, tailored to diverse industry needs — enhancing business efficiency through cutting-edge technology, honest advice and a commitment to continuous improvement.',
            },
            {
              icon: <Compass className="h-5 w-5" />,
              title: 'Our vision',
              text:
                'To deliver high-quality, customised software and robust infrastructure that meet the evolving demands of our clients — achieving superior satisfaction and sustainable growth by staying ahead of technology trends and maintaining excellence in everything we do.',
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-soft">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-900 text-white">{item.icon}</span>
                <h2 className="heading-3 mt-4">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-600">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section bg-slate-50">
        <div className="container-rsis">
          <SectionHeading eyebrow="What makes us the right partner" title="Why choose RSIS?" subtitle="Values we are happy to be measured against." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 60} className="h-full">
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                  <BadgeCheck className="h-6 w-6 text-accent-500" aria-hidden />
                  <h3 className="heading-3 mt-3 !text-base">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading eyebrow="Our journey" title="Key milestones in our growth" />
          <ol className="mt-12 space-y-6 border-l border-slate-200 pl-6">
            {MILESTONES.map((milestone, index) => (
              <Reveal key={`${milestone.year}-${milestone.title}`} delay={index * 50} as="li">
                <span className="absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent-500" aria-hidden />
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                  <span className="font-display text-sm font-bold text-accent-600">{milestone.year}</span>
                  <h3 className="heading-3 mt-1 !text-base">{milestone.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{milestone.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-slate-50">
        <div className="container-rsis">
          <SectionHeading eyebrow="Leadership" title="Meet the people accountable for your project" />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {leaders.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/our-team" className="btn-outline">
              Meet the full team <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us grid */}
      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading eyebrow="Advantages" title="What working with us looks like" />
          <div className="mt-12">
            <WhyUsGrid />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-slate-50">
        <div className="container-rsis">
          <SectionHeading eyebrow="How we deliver" title="Our five-step delivery process" />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <TestimonialsSlider />

      <CTASection
        title="Have an idea or project in mind?"
        subtitle="Share it with us and our experts will craft the right solution for your business — with a clear scope and honest pricing."
        source="About page CTA"
        primaryLabel="Get a proposal"
      />
    </>
  )
}
