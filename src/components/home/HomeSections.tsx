import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import SmartImage from '../common/SmartImage';
import { solutions } from '../../data/solutions';
import { projects } from '../../data/portfolio';
import { industries, technologyGroups } from '../../data/company';

/**
 * Homepage sections.
 *
 * The homepage carries the pitch only: what we build, the products we already
 * run, how a project is delivered, and real screens from delivered software.
 * Detail lives on the pages each block links to.
 */

/* --------------------------------------------------------- What we build */

const buildWays = [
  {
    title: 'Custom software',
    text: 'Web, desktop and mobile systems written around your workflow.',
    path: '/services/software-development',
  },
  {
    title: 'Industry products',
    text: 'Billing, ERP and management software, configured for your masters and reports.',
    path: '/solutions',
  },
  {
    title: 'Websites and growth',
    text: 'Business websites, online selling and local search visibility.',
    path: '/services/website-development',
  },
  {
    title: 'AI and automation',
    text: 'Applied AI inside working software — documents, prediction, repetitive operations.',
    path: '/services/ai-development',
  },
];

export function WhatWeBuild() {
  return (
    <section className="section" id="what-we-build">
      <div className="container">
        <SectionHeading
          eyebrow="What we build"
          title="Two ways to get the software your business needs"
          lead="Buy a product where your process is standard. Commission custom software where it is not. We do both, so the recommendation is not shaped by one delivery model."
        />

        <div className="capability-list mt-8">
          {buildWays.map((way, index) => (
            <Reveal key={way.title} className="capability-row" delay={index * 50} as="div">
              <span className="capability-row__index">{String(index + 1).padStart(2, '0')}</span>
              <div className="capability-row__body">
                <h3>
                  <Link to={way.path}>{way.title}</Link>
                </h3>
                <p>{way.text}</p>
              </div>
              <span className="capability-row__arrow" aria-hidden="true">
                <Icon name="ArrowUpRight" size={20} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Products */

const spotlightSlugs = ['tuition-erp', 'construction-erp'];

export function ProductsSpotlight() {
  const spotlights = spotlightSlugs
    .map((slug) => solutions.find((solution) => solution.slug === slug))
    .filter((solution): solution is (typeof solutions)[number] => Boolean(solution?.media));
  const spotlightNames = new Set(spotlights.map((solution) => solution.slug));
  const rest = solutions.filter((solution) => !spotlightNames.has(solution.slug));

  return (
    <section className="section section--muted" id="products">
      <div className="container">
        <SectionHeading
          eyebrow="Our products"
          title="Software built for real businesses"
          lead="Billing, ERP and management software already deployed in Indian businesses."
        />

        <div className="product-spots">
          {spotlights.map((solution, index) => (
            <article className={`product-spot${index % 2 === 1 ? ' product-spot--reverse' : ''}`} key={solution.slug}>
              <div className="product-spot__body">
                <p className="product-spot__meta">
                  <span>{solution.category}</span>
                  <span aria-hidden="true">/</span>
                  <span>{solution.platforms.join(' · ')}</span>
                </p>
                <h3>{solution.name}</h3>
                <p className="product-spot__lead">{solution.summary}</p>
                <ul className="product-spot__features">
                  {solution.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="product-spot__links">
                  <Link className="link-arrow" to={solution.path}>
                    Explore product
                    <Icon name="ArrowRight" size={16} />
                  </Link>
                  <Link className="link-arrow" to="/contact">
                    Book a demo
                    <Icon name="ChevronRight" size={15} />
                  </Link>
                </div>
              </div>

              <figure className="product-spot__visual">
                <div className="frame">
                  <div className="frame__bar">
                    <span className="frame__dot" />
                    <span className="frame__dot" />
                    <span className="frame__dot" />
                    <span className="frame__label">{solution.navTitle}</span>
                  </div>
                  <div className="frame__screen">
                    <SmartImage
                      src={solution.media!.src}
                      alt={solution.media!.alt}
                      width={1200}
                      height={750}
                      objectPosition="top center"
                    />
                  </div>
                </div>
              </figure>
            </article>
          ))}
        </div>

        <div className="product-list">
          {rest.map((solution) => (
            <Link className="product-list__item" to={solution.path} key={solution.slug}>
              <h3>{solution.name}</h3>
              <span className="product-list__meta">
                {solution.platforms.join(' · ')}
                <Icon name="ArrowUpRight" size={17} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- Custom development */

const customPoints = [
  'Written scope and architecture before development starts',
  'Web, desktop and mobile from one team',
  'Integration with your accounting, ERP or third-party systems',
  'Deployment, data migration, training and post-launch support',
];

export function CustomDevelopment() {
  const crm = projects.find((project) => project.slug === 'lead-crm');

  return (
    <section className="section" id="custom-development">
      <div className="container">
        <div className="split split--wide-left">
          <div>
            <SectionHeading
              eyebrow="Custom development"
              title="No product fits? We build the software around your process"
              lead="Bring the bottleneck or the spreadsheet that has outgrown itself. You get a written scope, reviewed stages and a system your team keeps using."
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
              <Link className="btn btn--ghost" to="/services">
                How we work
              </Link>
            </div>
          </div>

          {crm?.image ? (
            <figure>
              <div className="frame">
                <div className="frame__bar">
                  <span className="frame__dot" />
                  <span className="frame__dot" />
                  <span className="frame__dot" />
                  <span className="frame__label">{crm.type}</span>
                </div>
                <div className="frame__screen">
                  <SmartImage
                    src={crm.image}
                    alt={`${crm.title} — ${crm.industry}`}
                    width={1200}
                    height={750}
                    objectPosition="top center"
                  />
                </div>
                <p className="frame__caption">
                  {crm.title}: a system we built and still support for the client.
                </p>
              </div>
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Selected work */

const workSlugs: { slug: string; span: 'feature' | 'side' | 'third' }[] = [
  { slug: 'grievance-management-portal', span: 'feature' },
  { slug: 'blueladder-epc-platform', span: 'side' },
  { slug: 'virtual-pointer-system', span: 'third' },
  { slug: 'pocho-online-store', span: 'third' },
  { slug: 'nsm-associates-crm', span: 'third' },
];

export function SelectedWork() {
  const items = workSlugs
    .map(({ slug, span }) => {
      const project = projects.find((entry) => entry.slug === slug);
      return project ? { project, span } : null;
    })
    .filter((item): item is { project: (typeof projects)[number]; span: 'feature' | 'side' | 'third' } =>
      Boolean(item),
    );

  return (
    <section className="section section--muted" id="selected-work">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems running in businesses today"
          lead="Billing counters, site offices, service desks and customer portals we built and still support."
        />

        <div className="work-grid">
          {items.map(({ project, span }, index) => (
            <Reveal key={project.slug} className={`work-item work-item--${span}`} delay={index * 50} as="article">
              {project.image ? (
                <div
                  className={`work-item__media${project.imageStyle === 'logo' ? ' work-item__media--logo' : ''}`}
                >
                  <SmartImage
                    src={project.image}
                    alt={`${project.title} — ${project.industry}`}
                    width={1200}
                    height={750}
                    objectPosition="top center"
                  />
                </div>
              ) : null}

              <div className="work-item__body">
                <p className="work-item__meta">
                  <span>{project.type}</span>
                  <span aria-hidden="true">/</span>
                  <span>{project.industry}</span>
                </p>
                <h3>
                  {project.caseStudy ? (
                    <Link to={`/case-studies/${project.caseStudy}`}>{project.title}</Link>
                  ) : (
                    project.title
                  )}
                </h3>
                {span === 'feature' ? <p>{project.summary}</p> : null}
                <Link
                  className="link-arrow"
                  to={project.caseStudy ? `/case-studies/${project.caseStudy}` : '/portfolio'}
                >
                  {project.caseStudy ? 'Read the case study' : 'View in portfolio'}
                  <Icon name="ChevronRight" size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="btn-row mt-7">
          <Link className="btn btn--ghost" to="/portfolio">
            See the full portfolio
            <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
          </Link>
          <Link className="btn btn--ghost" to="/case-studies">
            Case studies
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Industries */

export function IndustriesIndex() {
  const list = industries.slice(0, 6);

  return (
    <section className="section" id="industries">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          title="We already understand these businesses"
          lead="Delivered through our products and projects. If your sector is not listed, we still start with your workflow."
        />

        <div className="industry-index">
          {list.map((industry) => (
            <Reveal key={industry.name} as="div">
              <Link className="industry-index__item" to="/portfolio">
                <span className="industry-index__name">{industry.name}</span>
                <Icon name="ArrowUpRight" size={16} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Technology */

export function Engineering() {
  return (
    <section className="section section--tight section--edge-top" id="technology">
      <div className="container">
        <SectionHeading
          eyebrow="Engineering"
          title="The stack we build and maintain with"
          lead="Chosen for your requirement, your hosting and whoever will maintain the system."
        />

        <div className="tech-grid">
          {technologyGroups.map((group) => (
            <div className="tech-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Why Right Serve */

const proofPoints = [
  { title: 'Products and custom work', text: 'Deploy a working product, or commission development where your process differs.' },
  { title: 'Scope and pricing in writing', text: 'What is included, what is not, and what each phase costs.' },
  { title: 'Built around your workflow', text: 'Your process is documented before any screen is designed.' },
  { title: 'Support after go-live', text: 'Fixes, enhancements and new reports once the system is in use.' },
];

export function WhyRightServe() {
  return (
    <section className="section section--surface" id="why-us">
      <div className="container">
        <SectionHeading
          eyebrow="Why Right Serve"
          title="Reasons clients give for working with us"
          lead="Stated as capabilities, not adjectives."
        />

        <ol className="steps steps--proof">
          {proofPoints.map((point, index) => (
            <li className="step" key={point.title}>
              <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
