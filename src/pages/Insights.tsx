import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { INSIGHT_CATEGORIES, INSIGHTS } from '@/data/insights'
import { InsightCard } from '@/components/cards'
import { PageHero, CTASection } from '@/components/sections'
import { Reveal, SectionHeading } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function Insights() {
  const [category, setCategory] = useState<(typeof INSIGHT_CATEGORIES)[number]>('All')

  const posts = useMemo(
    () => (category === 'All' ? INSIGHTS : INSIGHTS.filter((post) => post.category === category)),
    [category],
  )

  const [featured, ...rest] = posts

  return (
    <>


      <PageHero
        eyebrow="Insights & guides"
        title="Practical guides for growing businesses"
        subtitle="Transparent pricing, SEO checklists, software buying advice and infrastructure planning — written by the team that does the work every day."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-rsis">
          <div className="flex flex-wrap justify-center gap-2">
            {INSIGHT_CATEGORIES.map((item) => (
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
              </button>
            ))}
          </div>

          {featured ? (
            <Reveal className="mt-12">
              <article className="grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-soft lg:grid-cols-2">
                <img
                  src={featured.image}
                  alt={featured.title}
                  width={760}
                  height={520}
                  loading="lazy"
                  className="h-full max-h-[420px] w-full object-cover"
                />
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <span className="eyebrow w-fit">Featured · {featured.category}</span>
                  <h2 className="heading-2 mt-4">{featured.title}</h2>
                  <p className="mt-4 text-ink-600">{featured.excerpt}</p>
                  <p className="mt-4 text-xs text-ink-500">
                    {featured.readingTime} · Updated {new Date(featured.updated ?? featured.date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                  </p>
                  <Link to={`/insights/${featured.slug}`} className="btn-primary mt-6 w-fit">
                    Read the guide
                  </Link>
                </div>
              </article>
            </Reveal>
          ) : null}

          <SectionHeading className="mt-16" eyebrow="All articles" title="More from our team" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 60} className="h-full">
                <InsightCard post={post} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question our guides do not answer?"
        subtitle="Ask us directly. We are happy to share honest advice even before you become a client."
        source="Insights CTA"
        primaryLabel="Ask our team"
      />
    </>
  )
}
