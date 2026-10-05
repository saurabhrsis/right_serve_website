import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import Icon from '../components/common/Icon';
import SmartImage from '../components/common/SmartImage';
import CtaBand from '../components/common/CtaBand';
import { caseStudies } from '../data/caseStudies';
import { breadcrumbSchema, itemListSchema } from '../seo/schema';

export default function CaseStudies() {
  return (
    <>
      <Seo
        path="/case-studies"
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies' }]),
          itemListSchema(
            caseStudies.map((study) => ({ name: study.title, path: `/case-studies/${study.slug}` })),
            'Software case studies',
          ),
        ]}
      />

      <PageHero
        eyebrow="Case studies"
        title="The problem, the software, and what it changed"
        lead="Detailed write-ups of projects we designed and delivered. Each one follows the same structure — challenge, solution, capabilities, technology, implementation and outcome — without invented metrics."
        primaryCta={{ label: 'Discuss your requirement', to: '/request-quote' }}
        secondaryCta={{ label: 'View portfolio', to: '/portfolio' }}
        breadcrumbs={[{ label: 'Case Studies' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Case study library"
            title="Projects written up in detail"
            lead="Where a client has agreed to be named, the case study says so. Outcome sections describe what the delivered system does — we do not publish figures that have not been verified."
          />

          <div className="grid grid--2">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={(index % 2) * 60}>
                <article className="card" style={{ height: '100%', padding: 0, overflow: 'hidden' }}>
                  {study.image ? (
                    <Link to={`/case-studies/${study.slug}`} tabIndex={-1} aria-hidden="true">
                      <SmartImage
                        src={study.image}
                        alt={study.imageAlt ?? study.title}
                        width={1200}
                        height={675}
                        objectPosition="top center"
                        className="case-study__image"
                      />
                    </Link>
                  ) : null}
                  <div style={{ padding: 'clamp(1.25rem, 1rem + 0.8vw, 1.85rem)', display: 'grid', gap: 'var(--space-3)' }}>
                    <div className="badge-row">
                      <span className="badge badge--accent">{study.industry}</span>
                      <span className="badge">{study.projectType}</span>
                    </div>
                    <h3 className="card__title">
                      <Link to={`/case-studies/${study.slug}`}>{study.title}</Link>
                    </h3>
                    <p className="card__text">{study.summary}</p>
                    <div className="btn-row mt-4">
                      <Link className="link-arrow" to={`/case-studies/${study.slug}`}>
                        Read the case study
                        <Icon name="ChevronRight" size={15} />
                      </Link>
                      <Link className="btn btn--ghost btn--sm" to="/request-quote">
                        Discuss your requirement
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Your problem probably resembles one of these"
        text="Most of the projects above started with the same first conversation: a process that takes too long, records that do not match, or reporting nobody trusts. Tell us which one sounds familiar."
        primaryLabel="Request a Quote"
        primaryPath="/request-quote"
        secondaryLabel="Talk to our team"
        secondaryPath="/contact"
      />
    </>
  );
}
