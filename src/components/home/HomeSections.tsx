import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import Reveal from '../common/Reveal';
import SectionHeading, { BulletList } from '../common/SectionHeading';
import { SolutionCard, ProjectCard, ArticleCard } from '../common/Cards';
import SmartImage from '../common/SmartImage';
import { featuredSolutions } from '../../data/solutions';
import { projects } from '../../data/portfolio';
import { caseStudies } from '../../data/caseStudies';
import { sortedArticles } from '../../data/blog';
import { services } from '../../data/services';

/** Service overview: what clients can commission us to build. */
export function WhatWeDo() {
  const highlights = services.filter((service) =>
    ['software-development', 'erp-development', 'mobile-app-development', 'website-development'].includes(service.slug),
  );
  const extra = [
    { title: 'AI development', text: 'Automation, document processing and AI features inside your software.', path: '/services/ai-development', icon: 'Brain' },
    { title: 'SEO & digital marketing', text: 'Search visibility, local SEO and campaigns measured against enquiries.', path: '/services/seo-digital-marketing', icon: 'Search' },
  ];

  return (
    <section className="section" id="what-we-do">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Software development services for businesses that need it built properly"
          lead="Four core service lines cover most client requirements. Every engagement starts with your workflow, then moves to architecture, design, development and support."
        />

        <div className="grid grid--2">
          {highlights.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 2) * 60}>
              <article className="capability" style={{ height: '100%' }}>
                <span className="capability__icon" aria-hidden="true">
                  <Icon name={service.icon} size={22} />
                </span>
                <h3>
                  <Link to={service.path}>{service.navTitle}</Link>
                </h3>
                <p>{service.summary}</p>
                <Link className="link-arrow" to={service.path}>
                  Service details
                  <Icon name="ChevronRight" size={15} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid grid--2 mt-5">
          {extra.map((item) => (
            <article className="card card--soft" key={item.path}>
              <span className="card__icon" aria-hidden="true">
                <Icon name={item.icon} size={22} />
              </span>
              <h3 className="card__title">
                <Link to={item.path}>{item.title}</Link>
              </h3>
              <p className="card__text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="btn-row mt-6">
          <Link className="btn btn--navy" to="/services">
            All services
            <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
          </Link>
          <Link className="btn btn--ghost" to="/request-quote">
            Discuss your requirement
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Product showcase — the most important commercial section on the homepage. */
export function SolutionsShowcase() {
  return (
    <section className="section section--soft" id="solutions">
      <div className="container">
        <SectionHeading
          eyebrow="Our software solutions"
          title="Software you can deploy now, without a development project"
          lead="These solutions are already built and running. Implementation is configured around your masters, documents and reporting, so you start from working software instead of a blank page."
        />
        <div className="grid grid--3">
          {featuredSolutions.map((solution, index) => (
            <Reveal key={solution.slug} delay={(index % 3) * 60}>
              <SolutionCard solution={solution} />
            </Reveal>
          ))}
        </div>
        <div className="btn-row mt-7">
          <Link className="btn btn--navy" to="/solutions">
            Compare all solutions
            <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
          </Link>
          <Link className="btn btn--ghost" to="/contact">
            Request a product demo
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Custom development positioning: the other half of the business. */
export function CustomDevelopment() {
  return (
    <section className="section" id="custom-development">
      <div className="container">
        <div className="split split--wide-left">
          <div>
            <p className="eyebrow">Custom development</p>
            <h2>When no ready product fits, we build the software around your process</h2>
            <p className="lead">
              You bring the requirement — a workflow, a bottleneck, a system that has to work the way your business
              already works. We turn it into software with the same discipline we apply to client projects and our
              own products.
            </p>
            <BulletList
              items={[
                'Requirement analysis and written scope before development begins',
                'Architecture and database design reviewed in plain language',
                'UI/UX designed for the people who use the system daily',
                'Web, desktop and mobile builds from one team',
                'Integration with your existing accounting, ERP or third-party systems',
                'Deployment, data migration, training and post-launch support',
              ]}
            />
            <div className="btn-row mt-6">
              <Link className="btn btn--primary" to="/request-quote">
                Discuss your requirement
                <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
              </Link>
              <Link className="btn btn--ghost" to="/services/software-development">
                How we build software
              </Link>
            </div>
          </div>
          <figure className="product-visual mb-0">
            <SmartImage
              src="/assets/tech/team-meeting.jpg"
              alt="Right Serve Infotech System team reviewing a custom software requirement"
              width={1400}
              height={930}
            />
            <figcaption>Requirement discussions, screen reviews and phased delivery keep the project predictable.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/** Portfolio preview — proves custom development capability. */
export function PortfolioPreview() {
  const preview = projects.slice(0, 3);

  return (
    <section className="section section--soft" id="portfolio">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects we have designed, built and delivered"
          lead="Websites, management software and mobile applications delivered for clients in construction, retail, education, financial services and public administration."
        />
        <div className="portfolio-grid">
          {preview.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="btn-row mt-7">
          <Link className="btn btn--navy" to="/portfolio">
            View full portfolio
            <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
          </Link>
          <Link className="btn btn--ghost" to="/case-studies">
            Read case studies
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Case study preview — problem, solution and outcome in the client's context. */
export function CaseStudiesPreview() {
  const preview = caseStudies.slice(0, 2);

  return (
    <section className="section" id="case-studies">
      <div className="container">
        <SectionHeading
          eyebrow="Case studies"
          title="How the software solved a specific business problem"
          lead="Each case study explains the challenge, what we built, the technology used and what the delivered system does for the client."
        />
        <div className="grid grid--2">
          {preview.map((study) => (
            <article className="card" key={study.slug}>
              <span className="badge badge--azure" style={{ alignSelf: 'flex-start' }}>
                {study.industry}
              </span>
              <h3 className="card__title mt-4">{study.title}</h3>
              <p className="card__text">{study.summary}</p>
              <div className="card__footer">
                <Link className="link-arrow" to={`/case-studies/${study.slug}`}>
                  Read the case study
                  <Icon name="ChevronRight" size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="btn-row mt-7">
          <Link className="btn btn--ghost" to="/case-studies">
            All case studies
            <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Recent articles — supports the blog architecture without dominating the homepage. */
export function InsightsPreview() {
  return (
    <section className="section section--soft" id="insights">
      <div className="container">
        <SectionHeading
          eyebrow="Insights"
          title="Practical reading before you buy business software"
          lead="Short, specific articles on software selection, deployment and operations — written for owners and decision-makers."
        />
        <div className="post-grid">
          {sortedArticles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="btn-row mt-7">
          <Link className="btn btn--ghost" to="/blog">
            All articles
            <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
