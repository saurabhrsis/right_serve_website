import { Link, useParams } from 'react-router-dom';
import Seo from '../seo/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading, { BulletList, FeatureRows } from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import Icon from '../components/common/Icon';
import SmartImage from '../components/common/SmartImage';
import CtaBand from '../components/common/CtaBand';
import { FaqSection } from '../components/common/Faq';
import { SolutionCard } from '../components/common/Cards';
import NotFound from './NotFound';
import { featuredSolutions, getSolution, solutions } from '../data/solutions';
import { breadcrumbSchema, faqSchema, productSchema } from '../seo/schema';

const platformIcons: Record<string, string> = {
  Desktop: 'Monitor',
  Web: 'Globe',
  Mobile: 'Smartphone',
  Android: 'Smartphone',
  iOS: 'Smartphone',
};

export default function SolutionDetail() {
  const { slug = '' } = useParams();
  const solution = getSolution(slug);

  if (!solution) {
    return <NotFound />;
  }

  const related = featuredSolutions.filter((item) => item.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <Seo
        path={solution.path}
        type="product"
        image={solution.media?.src}
        schema={[
          productSchema({
            name: solution.name,
            description: solution.summary,
            path: solution.path,
            category: solution.category,
            image: solution.media?.src,
          }),
          faqSchema(solution.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Solutions', path: '/solutions' },
            { name: solution.navTitle, path: solution.path },
          ]),
        ]}
      />

      <PageHero
        eyebrow={solution.category}
        title={solution.h1}
        lead={solution.heroLead}
        badges={solution.platforms.map((platform) => `${platform} available`)}
        media={solution.media ? { src: solution.media.src, alt: solution.media.alt, caption: solution.media.caption, label: solution.name } : undefined}
        primaryCta={{ label: 'Request a Product Demo', to: '/contact' }}
        secondaryCta={{ label: 'Request pricing', to: '/request-quote' }}
        meta={[
          { icon: 'Layers', text: solution.subtitle },
          { icon: 'Headphones', text: 'Implementation, training and support included' },
        ]}
        breadcrumbs={[{ label: 'Solutions', path: '/solutions' }, { label: solution.navTitle }]}
      />

      {/* What it is + platforms */}
      <section className="section">
        <div className="container">
          <div className="split split--wide-left">
            <div className="prose">
              <p className="eyebrow">Overview</p>
              <h2>What {solution.name} is</h2>
              <p>{solution.summary}</p>
              <p>
                {solution.name} is implemented for your business rather than handed over as a download. Masters, document
                formats, user roles and reports are configured with your team, so the software matches how you already
                work.
              </p>
              <h3>Problems it solves</h3>
              <FeatureRows items={solution.problems} icon="AlertTriangle" />
            </div>

            <aside>
              <div className="callout">
                <h3>Available platforms</h3>
                <ul className="platform-list" style={{ gridTemplateColumns: '1fr' }}>
                  {solution.platforms.map((platform) => (
                    <li className="platform" key={platform}>
                      <span className="platform__icon" aria-hidden="true">
                        <Icon name={platformIcons[platform] ?? 'Monitor'} size={20} />
                      </span>
                      <strong>{platform}</strong>
                      <span>
                        {platform === 'Desktop' && 'Installed on counter or office machines for uninterrupted work.'}
                        {platform === 'Web' && 'Accessed from any browser, including for owners working remotely.'}
                        {platform === 'Mobile' && 'For field teams, approvals and owner reporting on the go.'}
                        {platform === 'Android' && 'Android application with store distribution.'}
                        {platform === 'iOS' && 'iOS application with store distribution.'}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted mt-5 mb-0" style={{ fontSize: 'var(--fs-xs)' }}>
                  Platforms listed here are the ones this product is actually offered on. Combined with cloud or
                  on-premise deployment, the setup is agreed with your team.
                </p>
              </div>

              <div className="callout callout--accent mt-5">
                <h3>Who it is for</h3>
                <BulletList items={solution.audience} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title={`What ${solution.name} covers`}
            lead="The feature groups below are part of the product. Anything specific to your business — a report, a document format, an approval rule — is configured or added during implementation."
          />
          <div className="grid grid--2">
            {solution.featureGroups.map((group, index) => (
              <Reveal key={group.title} delay={(index % 2) * 60}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="card__icon" aria-hidden="true">
                    <Icon name="CheckCircle2" size={22} />
                  </span>
                  <h3 className="card__title">{group.title}</h3>
                  <ul className="tick-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="callout callout--muted mt-7">
            <h3>Why businesses choose this product</h3>
            <BulletList items={solution.highlights} large />
          </div>
        </div>
      </section>

      {/* Screenshot */}
      {solution.media ? (
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Product screens"
              title="What the software looks like"
              lead="Screens from the delivered software. Interface details differ slightly per client because each implementation is configured to the business."
            />
            <figure className="product-visual mb-0">
              <SmartImage
                src={solution.media.src}
                alt={solution.media.alt}
                width={1400}
                height={880}
                objectPosition="top center"
              />
              {solution.media.caption ? <figcaption>{solution.media.caption}</figcaption> : null}
            </figure>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="container">
            <div className="callout callout--muted">
              <h3>Want to see the screens?</h3>
              <p className="mb-0">
                {solution.name} is demonstrated live, configured with examples from your business. Request a demo and we
                will walk through billing, records, reports and user roles in the sequence your team would use them.
              </p>
              <div className="btn-row mt-5">
                <Link className="btn btn--primary" to="/contact">
                  Request a demo
                  <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deployment, support, use cases */}
      <section className="section section--soft">
        <div className="container">
          <div className="grid grid--2">
            <div className="callout">
              <h3>Deployment options</h3>
              <BulletList items={solution.deployment} />
            </div>
            <div className="callout">
              <h3>Support and implementation</h3>
              <BulletList items={solution.support} />
            </div>
          </div>

          <div className="mt-7">
            <SectionHeading eyebrow="Typical use cases" title="Where this software fits" as="h3" />
            <div className="grid grid--2">
              {solution.useCases.map((useCase) => (
                <div className="value-tile" key={useCase}>
                  <p className="mb-0">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={solution.faqs}
        title={`${solution.navTitle}: questions before you decide`}
        lead="Commercial questions are answered on the solutions page. These cover the product itself."
      />

      {solution.related.length ? (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Related" title="Related services and solutions" />
            <div className="grid grid--2">
              {solution.related.map((item) => (
                <article className="card card--soft" key={item.path}>
                  <h3 className="card__title">
                    <Link to={item.path}>{item.label}</Link>
                  </h3>
                  <p className="card__text">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Other solutions" title="Also available" align="center" />
          <div className="grid grid--3">
            {related.map((item) => (
              <SolutionCard solution={item} key={item.slug} />
            ))}
          </div>
          <div className="btn-row mt-7 btn-row--center">
            <Link className="btn btn--ghost" to="/solutions">
              Compare all {solutions.length} solutions
              <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={solution.cta.title}
        text={solution.cta.text}
        primaryLabel="Request a Product Demo"
        primaryPath="/contact"
        secondaryLabel="Request a Quote"
        secondaryPath="/request-quote"
      />
    </>
  );
}
