import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { PRODUCTS, PRODUCT_BENEFITS, PRODUCT_REVIEWS } from '@/data/products'
import { useLeadModal } from '@/components/LeadModal'
import { ProductCard } from '@/components/cards'
import { PageHero, CTASection, FAQAccordion } from '@/components/sections'
import { Img, Reveal, SectionHeading } from '@/components/ui'
import Icon from '@/components/Icon'

const PRODUCT_FAQS = [
  {
    question: 'Can I try a product before purchasing?',
    answer:
      'Yes. Every product includes a guided demo and a 7–14 day trial environment with sample data. We also offer a paid pilot where we configure the system with your real masters and workflows.',
  },
  {
    question: 'Is the price per user or per company?',
    answer:
      'Listed prices are per company per month (or per year for our email platform) and include a generous user limit. We share exact slabs — and any extra module pricing — in writing before you commit.',
  },
  {
    question: 'Do you customise the products for our process?',
    answer:
      'Yes. Products are configurable out of the box (fields, workflows, reports, templates), and we handle custom development for anything genuinely specific to your business, quoted separately and transparently.',
  },
  {
    question: 'Where is our data hosted?',
    answer:
      'On secure cloud infrastructure with daily backups and encrypted access. On-premise or private-cloud deployment is available for clients who require it, including government and healthcare projects.',
  },
  {
    question: 'What support is included?',
    answer:
      'Every subscription includes onboarding, staff training, email/WhatsApp support during business hours, updates and monitoring. Enhanced SLA support is available on request.',
  },
]

export default function Products() {
  const { openLeadModal } = useLeadModal()

  return (
    <>


      <PageHero
        eyebrow="Ready-to-deploy software"
        title="Our products"
        subtitle="Proven software built from years of client projects — configured for your business within days, not months. Start with a module, expand as you grow."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
        ]}
        image="/images/products-hero.jpg"
        imageAlt="Software products by Right Serve Infotech System"
        actions={
          <>
            <button
              type="button"
              className="btn bg-white text-brand-900 hover:-translate-y-0.5 hover:bg-accent-50"
              onClick={() => openLeadModal({ source: 'Products hero' })}
            >
              Book a free demo <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            <Link to="/contact" className="btn-ghost-light">
              Ask a question
            </Link>
          </>
        }
      />

      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Product catalogue"
            title="Software your team can start using this week"
            subtitle="Category: business software · Available on web, with Android/iOS companions where relevant."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 3) * 60} className="h-full">
                <ProductCard product={product} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-rsis">
          <SectionHeading
            eyebrow="Why our products"
            title="Built with quality, security and user experience in mind"
            subtitle="Every product is battle-tested on live client operations before it reaches the shelf."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_BENEFITS.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 50} className="h-full">
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Icon name={benefit.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="heading-3 mt-4 !text-base">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{benefit.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-rsis">
          <SectionHeading eyebrow="Customer reviews" title="What clients say about our products" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRODUCT_REVIEWS.map((review, index) => (
              <Reveal key={review.name} delay={index * 70} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                  <span className="flex gap-0.5" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-gold-400 text-gold-400" aria-hidden />
                    ))}
                  </span>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{review.text}</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <Img src={review.logo} alt={review.role} className="h-10 w-10 rounded-full border border-slate-200" imgClassName="object-contain p-1" width={80} height={80} />
                    <span>
                      <span className="block text-sm font-bold text-brand-900">{review.name}</span>
                      <span className="block text-xs text-ink-500">{review.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-rsis grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="heading-2">Ready to get started?</h2>
            <p className="lead mt-4">
              Explore the products and find the right fit for your business needs. If nothing matches exactly, that is
              normal — tell us what you need and we will either configure an existing product or build the missing piece.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-600">
              {['Guided demo with your own data', 'Written pricing and implementation plan', 'Migration from spreadsheets or legacy software', 'Training for every user role'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <button type="button" className="btn-primary" onClick={() => openLeadModal({ source: 'Products bottom' })}>
                Connect with our team
              </button>
              <Link to="/portfolio" className="btn-outline">
                See products in action
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Img
              src="/images/products-dashboard.jpg"
              alt="Business software dashboard offered by Right Serve Infotech System"
              className="aspect-[4/3] w-full rounded-3xl shadow-card"
              width={840}
              height={630}
            />
          </Reveal>
        </div>
      </section>

      <FAQAccordion faqs={PRODUCT_FAQS} title="Product FAQs" subtitle="Trials, pricing, customisation, hosting and support." />

      <CTASection
        title="Book a product demo"
        subtitle="See the software with your own workflow, in a 30-minute screen-share. No obligation, no sales pressure."
        source="Products CTA"
        primaryLabel="Schedule a demo"
      />
    </>
  )
}
