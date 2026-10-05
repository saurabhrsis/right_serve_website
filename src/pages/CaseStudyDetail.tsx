import { Link, useParams } from 'react-router-dom';
import Seo from '../seo/Seo';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import SmartImage from '../components/common/SmartImage';
import Icon from '../components/common/Icon';
import CtaBand from '../components/common/CtaBand';
import NotFound from './NotFound';
import { caseStudies, getCaseStudy } from '../data/caseStudies';
import { breadcrumbSchema, caseStudySchema } from '../seo/schema';

export default function CaseStudyDetail() {
  const { slug = '' } = useParams();
  const study = getCaseStudy(slug);

  if (!study) {
    return <NotFound />;
  }

  const others = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <>
      <Seo
        path={`/case-studies/${study.slug}`}
        image={study.image}
        schema={[
          caseStudySchema({
            title: study.title,
            description: study.summary,
            path: `/case-studies/${study.slug}`,
            industry: study.industry,
            image: study.image,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: study.title, path: `/case-studies/${study.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`${study.industry} · ${study.projectType}`}
        title={study.title}
        lead={study.summary}
        meta={[
          ...(study.client ? [{ icon: 'Users', text: `Client: ${study.client}` }] : []),
          ...(study.year ? [{ icon: 'Calendar', text: `Delivered: ${study.year}` }] : []),
          { icon: 'MapPin', text: 'Delivered by Right Serve Infotech System, Nagpur' },
        ]}
        primaryCta={{ label: 'Discuss your requirement', to: '/request-quote' }}
        secondaryCta={{ label: 'View portfolio', to: '/portfolio' }}
      />

      <Breadcrumbs
        items={[{ label: 'Case Studies', path: '/case-studies' }, { label: study.industry }]}
      />

      <section className="section">
        <div className="container">
          <div className="case-study case-study--split">
            <div className="case-study__aside">
              <div className="product-visual">
                {study.image ? (
                  <SmartImage
                    src={study.image}
                    alt={study.imageAlt ?? study.title}
                    width={1200}
                    height={750}
                    objectPosition="top center"
                  />
                ) : null}
              </div>

              <dl className="case-study__facts">
                {study.client ? (
                  <div>
                    <dt>Client</dt>
                    <dd>{study.client}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>Industry</dt>
                  <dd>{study.industry}</dd>
                </div>
                <div>
                  <dt>Project type</dt>
                  <dd>{study.projectType}</dd>
                </div>
                {study.year ? (
                  <div>
                    <dt>Delivered</dt>
                    <dd>{study.year}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>Technology</dt>
                  <dd>{study.technology.flatMap((group) => group.items).join(', ')}</dd>
                </div>
              </dl>
            </div>

            <div className="case-study__blocks">
              <div className="case-study__block">
                <h2>Challenge</h2>
                {study.challenge.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="case-study__block">
                <h2>Solution</h2>
                {study.solution.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="case-study__block">
                <h2>Key capabilities</h2>
                <ul className="tick-list tick-list--lg">
                  {study.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="case-study__block">
                <h2>Technology</h2>
                <div className="grid grid--2">
                  {study.technology.map((group) => (
                    <div className="value-tile" key={group.group}>
                      <h3 style={{ fontSize: '0.95rem' }}>{group.group}</h3>
                      <p>{group.items.join(' · ')}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="case-study__block">
                <h2>Implementation</h2>
                <ol className="steps" style={{ gridTemplateColumns: '1fr' }}>
                  {study.implementation.map((step, index) => (
                    <li className="step" key={step}>
                      <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="case-study__block">
                <h2>Outcome</h2>
                <ul className="tick-list tick-list--lg">
                  {study.outcome.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted mt-5" style={{ fontSize: 'var(--fs-xs)' }}>
                  Outcome statements describe what the delivered system does for the client. Numerical results are
                  published only when the client has provided verified figures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Related" title="Related services and solutions" />
          <div className="grid grid--3">
            {study.relatedSolutions.map((item) => (
              <article className="card" key={item.path}>
                <h3 className="card__title">
                  <Link to={item.path}>{item.label}</Link>
                </h3>
                <div className="card__footer">
                  <Link className="link-arrow" to={item.path}>
                    View details
                    <Icon name="ChevronRight" size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="More case studies" title="Other projects written up in detail" />
          <div className="grid grid--3">
            {others.map((item) => (
              <article className="card card--soft" key={item.slug}>
                <span className="badge badge--navy" style={{ alignSelf: 'flex-start' }}>
                  {item.industry}
                </span>
                <h3 className="card__title mt-4">
                  <Link to={`/case-studies/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="card__text">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Discuss a similar requirement"
        text="If this project resembles your situation, share the details. We will explain what a comparable system involves, what it costs and how long it takes."
        primaryLabel="Discuss your requirement"
        primaryPath="/request-quote"
        secondaryLabel="Request a demo"
        secondaryPath="/contact"
      />
    </>
  );
}
