import { Link, useParams } from 'react-router-dom';
import Seo from '../seo/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading, { BulletList, FeatureRows } from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import Icon from '../components/common/Icon';
import CtaBand from '../components/common/CtaBand';
import { FaqSection } from '../components/common/Faq';
import NotFound from './NotFound';
import { getService, services } from '../data/services';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../seo/schema';

export default function ServiceDetail() {
  const { slug = '' } = useParams();
  const service = getService(slug);

  if (!service) {
    return <NotFound />;
  }

  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Seo
        path={service.path}
        type="website"
        image={service.image?.src}
        schema={[
          serviceSchema({
            name: service.h1,
            description: service.summary,
            path: service.path,
            serviceType: service.navTitle,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.navTitle, path: service.path },
          ]),
        ]}
      />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        lead={service.heroLead}
        badges={service.heroBadges}
        meta={[
          { icon: 'MapPin', text: 'Nagpur, Maharashtra · projects across India' },
          { icon: 'FileText', text: 'Written scope and estimate' },
        ]}
        media={service.image ? { src: service.image.src, alt: service.image.alt, label: service.navTitle } : undefined}
        primaryCta={{ label: service.cta.primaryLabel, to: '/request-quote' }}
        secondaryCta={{ label: 'Talk to our team', to: '/contact' }}
        breadcrumbs={[{ label: 'Services', path: '/services' }, { label: service.navTitle }]}
      />

      {/* Overview + who it is for */}
      <section className="section">
        <div className="container">
          <div className="split split--wide-left">
            <div className="prose">
              <p className="eyebrow">Overview</p>
              <h2>What this service covers</h2>
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="callout callout--muted">
              <h3>Who it is for</h3>
              <BulletList items={service.audience} />
            </div>
          </div>
        </div>
      </section>

      {/* Problems solved */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Problems solved"
            title="What this service fixes in practice"
            lead="These are the situations clients describe in the first conversation. If they sound familiar, the rest of this page explains how we address them."
          />
          <FeatureRows items={service.problems} icon="AlertTriangle" />
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Key capabilities"
            title="What is included"
            lead="Capabilities are agreed in the scope document, so you know exactly what is being delivered in each phase."
          />
          <FeatureRows items={service.capabilities} />
        </div>
      </section>

      {/* Approach */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Implementation approach"
            title="How the work is delivered"
            lead="A predictable sequence keeps the project visible. You review and approve at each stage rather than only at the end."
          />
          <ol className="steps">
            {service.approach.map((step, index) => (
              <Reveal as="li" className="step" key={step.title} delay={(index % 4) * 50}>
                <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Technologies */}
      {service.technologies?.length ? (
        <section className="section">
          <div className="container">
            <div className="split split--wide-left">
              <div>
                <SectionHeading
                  eyebrow="Technology"
                  title="Technologies used for this service"
                  lead="We work with the stack that best fits your requirement, hosting constraints and the team who will maintain the system."
                />
              </div>
              <div className="card card--plain">
                <div className="badge-row">
                  {service.technologies.map((technology) => (
                    <span className="badge" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Benefits */}
      <section className="section section--soft">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Benefits</p>
              <h2>What you get out of it</h2>
              <BulletList items={service.benefits} large />
            </div>
            <div className="card">
              <h3 className="card__title">Related services and solutions</h3>
              <ul className="site-footer__list" style={{ display: 'grid', gap: '0.85rem' }}>
                {service.related.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} style={{ fontWeight: 600 }}>
                      {item.label}
                    </Link>
                    <span className="text-muted" style={{ display: 'block', fontSize: 'var(--fs-xs)' }}>
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={service.faqs}
        title={`${service.navTitle}: questions clients ask`}
        lead="If your question is not covered here, ask it directly — you will get a specific answer, not a brochure line."
      />

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Other services" title="Where clients go next" align="center" />
          <div className="grid grid--3">
            {otherServices.map((item) => (
              <article className="card" key={item.slug}>
                <span className="card__icon" aria-hidden="true">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="card__title">
                  <Link to={item.path}>{item.navTitle}</Link>
                </h3>
                <p className="card__text">{item.summary}</p>
                <div className="card__footer">
                  <Link className="link-arrow" to={item.path}>
                    Service details
                    <Icon name="ChevronRight" size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={service.cta.title}
        text={service.cta.text}
        primaryLabel={service.cta.primaryLabel}
        secondaryLabel={service.cta.secondaryLabel ?? 'Contact us'}
        secondaryPath={service.cta.secondaryPath ?? '/contact'}
      />
    </>
  );
}
