import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { SITE, MAILTO_LINK } from '@/data/site'
import { cn } from '@/lib/utils'

export type LegalSection = { title: string; body: ReactNode }

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
  breadcrumb,
  accent = 'brand',
}: {
  title: string
  intro: ReactNode
  updated: string
  sections: LegalSection[]
  breadcrumb: { name: string; path: string }[]
  /** 'brand' = corporate navy theme, 'saffron' = Bhajnarthi app pages. */
  accent?: 'brand' | 'saffron'
}) {
  const saffron = accent === 'saffron'

  return (
    <>


      <section className={cn('relative overflow-hidden text-white', saffron ? 'bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600' : 'bg-brand-gradient')}>
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="container-rsis relative py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-xs font-medium text-white/80 sm:text-sm">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            {breadcrumb.map((item) => (
              <span key={item.path}>
                <span className="px-2 text-white/40">/</span>
                <span className="text-white/90">{item.name}</span>
              </span>
            ))}
          </nav>
          <h1 className="heading-1 mt-5 max-w-3xl !text-white">{title}</h1>
          <div className="mt-5 max-w-3xl text-slate-100">{intro}</div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/80">Last updated: {updated}</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-rsis max-w-4xl">
          <ol className="space-y-8">
            {sections.map((section, index) => (
              <li key={section.title} id={`section-${index + 1}`} className="scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
                <h2 className={cn('font-display text-lg font-bold sm:text-xl', saffron ? 'text-orange-700' : 'text-brand-900')}>
                  {section.title}
                </h2>
                <div className="prose-rsis mt-3">{section.body}</div>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-ink-600">
            <h2 className="font-display text-base font-bold text-brand-900">Questions about this document?</h2>
            <p className="mt-2">
              Write to{' '}
              <a href={MAILTO_LINK} className="font-semibold text-brand-700 underline">
                {SITE.contact.email}
              </a>{' '}
              or call{' '}
              <a href={`tel:${SITE.contact.phonePrimary}`} className="font-semibold text-brand-700 underline">
                {SITE.contact.phones[1]}
              </a>
              . Our office is at {SITE.contact.addressLine}, {SITE.contact.addressLine2}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
