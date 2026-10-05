import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICE_PILLARS } from '@/data/services'
import { INSIGHTS } from '@/data/insights'

export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="container-rsis max-w-3xl text-center">
        <span className="font-display text-6xl font-extrabold text-accent-500/30">404</span>
        <h1 className="heading-1 mt-4">We could not find that page</h1>
        <p className="lead mt-4">
          The page may have moved, or the link may be out of date. Here are the paths people usually need — or use the
          sitemap below to find anything.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back to home <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>

        <div className="mt-14 grid gap-6 text-left sm:grid-cols-3">
          {SERVICE_PILLARS.map((pillar) => (
            <div key={pillar.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <h2 className="font-display text-sm font-bold text-brand-900">{pillar.name}</h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {pillar.subServices.slice(0, 4).map((sub) => (
                  <li key={sub.slug}>
                    <Link to={`${pillar.path}/${sub.slug}`} className="text-ink-600 hover:text-accent-600">
                      {sub.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={pillar.path} className="font-semibold text-brand-700 hover:text-accent-600">
                    View all →
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-left">
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-brand-900">Latest guides</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {INSIGHTS.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link to={`/insights/${post.slug}`} className="text-ink-600 hover:text-accent-600">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Link to="/sitemap" className="font-semibold text-brand-700 hover:text-accent-600">
              See the full sitemap →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
