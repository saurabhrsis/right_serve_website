import { Link } from 'react-router-dom'
import { INSIGHTS } from '@/data/insights'
import { PRODUCTS } from '@/data/products'
import { PROJECTS } from '@/data/portfolio'
import { SERVICE_PILLARS } from '@/data/services'
import { PageHero, CTASection } from '@/components/sections'

export default function HtmlSitemap() {
  const sections = [
    {
      title: 'Main pages',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Our Team', to: '/our-team' },
        { label: 'Careers', to: '/career' },
        { label: 'Portfolio', to: '/portfolio' },
        { label: 'Products', to: '/products' },
        { label: 'Insights & Guides', to: '/insights' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Legal & policies',
      links: [
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Terms & Conditions', to: '/terms-and-conditions' },
        { label: 'Bhajnarthi App Privacy Policy', to: '/privacy-policy-bhajnarthi-app' },
        { label: 'Bhajnarthi App Terms & Conditions', to: '/terms-and-conditions-bhajnarthi-app' },
      ],
    },
  ]


  return (
    <>


      <PageHero
        eyebrow="Sitemap"
        title="Every page on rightserveinfotechsystem.com"
        subtitle="A complete, crawlable index of our services, products, portfolio, guides and legal pages."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Sitemap', path: '/sitemap' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-rsis space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="heading-2 !text-2xl">{section.title}</h2>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-brand-700 hover:text-accent-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {SERVICE_PILLARS.map((pillar) => (
            <div key={pillar.slug}>
              <h2 className="heading-2 !text-2xl">
                <Link to={pillar.path} className="hover:text-accent-600">
                  {pillar.name}
                </Link>
              </h2>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {pillar.subServices.map((sub) => (
                  <li key={sub.slug}>
                    <Link to={`${pillar.path}/${sub.slug}`} className="text-sm text-brand-700 hover:text-accent-600">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="heading-2 !text-2xl">Products</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link to={`/products#${product.slug}`} className="text-sm text-brand-700 hover:text-accent-600">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="heading-2 !text-2xl">Insights &amp; guides</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {INSIGHTS.map((post) => (
                <li key={post.slug}>
                  <Link to={`/insights/${post.slug}`} className="text-sm text-brand-700 hover:text-accent-600">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="heading-2 !text-2xl">Portfolio projects</h2>
            <p className="mt-2 text-sm text-ink-500">
              All {PROJECTS.length} published case studies are listed on the{' '}
              <Link to="/portfolio" className="font-semibold text-brand-700 hover:text-accent-600">
                portfolio page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for something specific?"
        subtitle="If you cannot find what you need, ask us directly — we usually reply within a few hours."
        source="Sitemap CTA"
      />
    </>
  )
}
