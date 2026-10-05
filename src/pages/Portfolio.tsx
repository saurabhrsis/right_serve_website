import { useMemo, useState } from 'react'
import { PORTFOLIO_CATEGORIES, PORTFOLIO_STATS, PROJECTS } from '@/data/portfolio'
import { ProjectCard } from '@/components/cards'
import { PageHero, CTASection, TestimonialsSlider } from '@/components/sections'
import { Reveal, SectionHeading, StatCounter } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function Portfolio() {
  const [category, setCategory] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>('All')

  const projects = useMemo(
    () => (category === 'All' ? PROJECTS : PROJECTS.filter((project) => project.category === category)),
    [category],
  )

  return (
    <>


      <PageHero
        eyebrow="Our work"
        title="Projects delivered, problems solved"
        subtitle="From construction billing and healthcare apps to election campaigns and e-commerce websites — here is a sample of what we have built for clients across India."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ]}
        image="/images/portfolio-hero.jpg"
        imageAlt="Portfolio of software, web and app projects by Right Serve Infotech System"
      />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container-rsis grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_STATS.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Our success in numbers"
            title="Filter the work that looks like your project"
            subtitle="Choose a category to see relevant case studies, or browse everything."
          />

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {PORTFOLIO_CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={cn(
                  'rounded-full border px-4 py-2 text-xs font-semibold transition-colors',
                  category === item
                    ? 'border-brand-900 bg-brand-900 text-white'
                    : 'border-slate-200 bg-white text-ink-600 hover:border-accent-300 hover:text-brand-800',
                )}
              >
                {item}
                <span className="ml-2 text-[11px] text-current opacity-70">
                  {item === 'All' ? PROJECTS.length : PROJECTS.filter((project) => project.category === item).length}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={`${project.slug}-${project.category}`} delay={(index % 3) * 60} className="h-full">
                <ProjectCard project={project} className="h-full" />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-500">
            Some client projects are covered by NDAs and cannot be published. Ask us during a call — we can usually share
            anonymised details relevant to your industry.
          </p>
        </div>
      </section>

      <TestimonialsSlider />

      <CTASection
        title="Your project could be next"
        subtitle="Tell us what you want to build or improve. We will suggest the fastest, most cost-effective path to get there."
        source="Portfolio CTA"
        primaryLabel="Start your project"
      />
    </>
  )
}
