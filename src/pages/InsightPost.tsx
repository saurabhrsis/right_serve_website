import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BadgeCheck, CalendarDays, Clock, Tag } from 'lucide-react'
import { INSIGHTS, getInsight } from '@/data/insights'
import { useLeadModal } from '@/components/LeadModal'
import { PageHero, CTASection, FAQAccordion } from '@/components/sections'
import { Reveal } from '@/components/ui'
import { InsightCard } from '@/components/cards'
import NotFound from '@/pages/NotFound'
import { formatDate } from '@/lib/utils'

export default function InsightPost() {
  const { slug = '' } = useParams()
  const post = getInsight(slug)
  const { openLeadModal } = useLeadModal()

  if (!post) return <NotFound />

  const related = INSIGHTS.filter((item) => item.slug !== post.slug).slice(0, 3)
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/insights' },
    { name: post.title, path: `/insights/${post.slug}` },
  ]

  return (
    <>


      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-white">
        <div className="container-rsis grid gap-12 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <img
              src={post.image}
              alt={post.title}
              width={880}
              height={520}
              loading="eager"
              className="mb-8 h-auto w-full rounded-3xl shadow-soft"
            />

            <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-5 text-xs text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-accent-500" aria-hidden />
                Published {formatDate(post.date)}
              </span>
              {post.updated ? (
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-accent-500" aria-hidden />
                  Updated {formatDate(post.updated)}
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-accent-500" aria-hidden />
                {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5 text-accent-500" aria-hidden />
                {post.category}
              </span>
            </div>

            <div className="prose-rsis mt-8">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-accent-200 bg-accent-50/60 p-6">
              <h2 className="heading-3 !text-base">Want this done for your business?</h2>
              <p className="mt-2 text-sm text-ink-600">
                We handle everything described in this guide — strategy, build, tracking and reporting — as a single
                accountable engagement.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" className="btn-primary" onClick={() => openLeadModal({ source: `Insight: ${post.slug}` })}>
                  Get free consultation
                </button>
                <Link to="/insights" className="btn-outline">
                  <ArrowLeft className="h-4 w-4" aria-hidden /> All guides
                </Link>
              </div>
            </div>

            <p className="mt-6 text-xs text-ink-500">
              Written by {post.author}. This guide is reviewed periodically so pricing and platform details stay current.
            </p>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-brand-900">In this guide</h2>
                <ol className="mt-4 space-y-2 text-sm">
                  {post.sections.map((section, index) => (
                    <li key={section.heading} className="flex gap-2 text-ink-600">
                      <span className="font-semibold text-accent-600">{index + 1}.</span>
                      {section.heading}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-brand-900">Need help now?</h2>
                <p className="mt-2 text-sm text-ink-500">
                  Talk to a specialist about your requirement — free, no obligation.
                </p>
                <Link to="/contact" className="btn-primary mt-4 w-full">
                  Contact us <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-brand-900">Tags</h2>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {post.keywords.map((keyword) => (
                    <li key={keyword} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-ink-600 shadow-sm">
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {post.faqs ? <FAQAccordion faqs={post.faqs} title="Related questions" /> : null}

      <section className="section bg-slate-50">
        <div className="container-rsis">
          <h2 className="heading-2">Related guides</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60} className="h-full">
                <InsightCard post={item} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's put this advice to work"
        subtitle="Get a free consultation and a written plan tailored to your business, industry and budget."
        source={`Insight bottom CTA: ${post.slug}`}
      />
    </>
  )
}
