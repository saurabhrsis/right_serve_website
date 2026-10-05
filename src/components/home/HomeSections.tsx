import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import SmartImage from '../common/SmartImage';
import { SolutionCard } from '../common/Cards';
import { featuredSolutions } from '../../data/solutions';
import { projects } from '../../data/portfolio';
import { caseStudies } from '../../data/caseStudies';

/**
 * Homepage bands.
 *
 * The homepage states what we do, shows the products we already run and proves
 * both with real screens, then hands off. Everything with detail — industries,
 * technology, reasons to choose us — lives on the page that covers it properly.
 */

/* --------------------------------------------------------- What we build */

const pillars = [
  {
    icon: 'Code2',
    title: 'Custom software development',
    text: 'Web, desktop, ERP and mobile systems written around your workflow, with written scope and phased delivery.',
    path: '/services',
    linkLabel: 'Explore services',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Ready business software',
    text: 'Billing, ERP and management products we already build and support — configured to your masters and reports.',
    path: '/solutions',
    linkLabel: 'See the products',
  },
  {
    icon: 'TrendingUp',
    title: 'Web, growth and IT',
    text: 'Business websites, local SEO and campaigns, plus the servers, cloud and networking the software runs on.',
    path: '/services/website-development',
    linkLabel: 'Growth services',
  },
];

export function WhatWeBuild() {
  return (
    <section className="section" id="what-we-build">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Software you commission, software you can buy"
          lead="Most businesses need both: a product where the process is standard, and custom development where it is not. We do both, so the recommendation is not shaped by one delivery model."
        />

        <div className="pillar-grid">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 70} as="article" className="pillar-card">
              <span className="pillar-card__icon" aria-hidden="true">
                <Icon name={pillar.icon} size={22} />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <Link className="link-arrow pillar-card__link" to={pillar.path}>
                {pillar.linkLabel}
                <Icon name="ArrowRight" size={16} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Products */

export function ProductsShowcase() {
  return (
    <section className="section section--muted" id="products">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow">Our products</p>
            <h2>Software built for real businesses</h2>
          </div>
          <div>
            <p className="lead">
              Six products already running in Indian businesses — billing, ERP and management software configured to
              your masters, documents and reports instead of built from zero.
            </p>
            <div className="btn-row mt-5">
              <Link className="btn btn--primary" to="/solutions">
                Compare all products
                <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
              </Link>
              <Link className="btn btn--ghost" to="/contact">
                Book a demo
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid--3">
          {featuredSolutions.map((solution, index) => (
            <Reveal key={solution.slug} delay={(index % 3) * 60}>
              <SolutionCard solution={solution} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- Custom development */

const customPoints = [
  'Written scope, architecture and phases before development begins',
  'Web, desktop and mobile built by one in-house team',
  'Integration with your accounting, ERP or existing systems',
  'Data migration, training and support after go-live',
];

export function CustomDevelopment() {
  const portal = projects.find((project) => project.slug === 'grievance-management-portal');

  return (
    <section className="section" id="custom-development">
      <div className="container">
        <div className="split split--wide-left">
          <div>
            <SectionHeading
              eyebrow="Custom development"
              title="When no product fits, we build the software around your process"
              lead="You bring the workflow, the bottleneck or the spreadsheet that has outgrown itself. We turn it into software your team actually uses — and keep supporting it afterwards."
            />
            <ul className="tick-list tick-list--lg">
              {customPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="btn-row mt-6">
              <Link className="btn btn--primary" to="/request-quote" data-track="custom_quote">
                Discuss your requirement
                <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
              </Link>
              <Link className="btn btn--ghost" to="/services/software-development">
                How we build software
              </Link>
            </div>
          </div>

          {portal?.image ? (
            <figure className="hero__visual">
              <div className="frame">
                <div className="frame__bar">
                  <span className="frame__dot" />
                  <span className="frame__dot" />
                  <span className="frame__dot" />
                  <span className="frame__label">{portal.type}</span>
                </div>
                <div className="frame__screen">
                  <SmartImage
                    src={portal.image}
                    alt={`${portal.title} — ${portal.industry}`}
                    width={1200}
                    height={750}
                    objectPosition="top center"
                  />
                </div>
                <figcaption className="frame__caption">
                  {portal.title}: one of the systems we built and still support.
                </figcaption>
              </div>
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Delivered work */

export function DeliveredWork() {
  const items = caseStudies.slice(0, 3);

  return (
    <section className="section section--edge-top" id="work">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow">Delivered work</p>
            <h2>What the software changed for the client</h2>
          </div>
          <div>
            <p className="lead">
              Billing counters, site offices, service desks and public portals. Each case study explains the
              problem, what we built and what the system does today.
            </p>
            <div className="btn-row mt-5">
              <Link className="btn btn--ghost" to="/portfolio">
                View the portfolio
                <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
              </Link>
              <Link className="btn btn--ghost" to="/case-studies">
                All case studies
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid--3">
          {items.map((study, index) => (
            <Reveal key={study.slug} delay={(index % 3) * 60} as="article" className="proof-card">
              {study.image ? (
                <Link className="proof-card__media" to={`/case-studies/${study.slug}`} tabIndex={-1} aria-hidden="true">
                  <SmartImage
                    src={study.image}
                    alt=""
                    width={1200}
                    height={750}
                    objectPosition="top center"
                  />
                </Link>
              ) : null}
              <div className="proof-card__body">
                <p className="proof-card__meta">
                  <span>{study.industry}</span>
                  <span aria-hidden="true">/</span>
                  <span>{study.projectType}</span>
                </p>
                <h3>
                  <Link to={`/case-studies/${study.slug}`}>{study.title}</Link>
                </h3>
                <p>{study.summary}</p>
                <Link className="link-arrow" to={`/case-studies/${study.slug}`}>
                  Read the case study
                  <Icon name="ChevronRight" size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
