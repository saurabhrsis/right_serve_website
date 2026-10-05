import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import Reveal from '../common/Reveal';
import SectionHeading, { BulletList } from '../common/SectionHeading';
import { SolutionCard } from '../common/Cards';
import SmartImage from '../common/SmartImage';
import { featuredSolutions } from '../../data/solutions';
import { caseStudies } from '../../data/caseStudies';

/**
 * Homepage sections.
 *
 * The homepage is deliberately short: hero → credibility → what we do →
 * products → custom development → delivered work → process → FAQ → CTA.
 * Detailed material (industries, technology, why us, services list, articles)
 * lives on the pages that can do it justice.
 */

/* ------------------------------------------------------------- What we do */

const pillars = [
  {
    icon: 'Code2',
    title: 'Custom software development',
    text: 'Web, desktop and mobile systems built around the way your business already works — with written scope, staged delivery and support after go-live.',
    path: '/services',
    linkLabel: 'Explore services',
    tags: ['Web apps', 'Mobile apps', 'ERP', 'Integrations'],
  },
  {
    icon: 'LayoutDashboard',
    title: 'Ready business software',
    text: 'Billing, ERP and management products that are already built and running. We configure them to your masters, documents and reporting instead of starting from zero.',
    path: '/solutions',
    linkLabel: 'See the products',
    tags: ['FMCG billing', 'Jewellery', 'Tuition ERP', 'Society'],
  },
  {
    icon: 'TrendingUp',
    title: 'Digital growth and IT',
    text: 'SEO, campaigns, analytics and the hardware or cloud infrastructure your software runs on — handled by the same team that builds the systems.',
    path: '/services/seo-digital-marketing',
    linkLabel: 'Growth services',
    tags: ['Local SEO', 'Campaigns', 'Cloud', 'Infrastructure'],
  },
];

export function WhatWeDo() {
  return (
    <section className="section" id="what-we-do">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="One team for the software you need and the software you can buy"
          lead="Most businesses need both: an off-the-shelf product where the process is standard, and custom development where it is not. We do both, so you are not pushed towards the option that suits a vendor."
        />

        <div className="grid grid--3 mt-7">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 70}>
              <article className="pillar-card">
                <span className="pillar-card__icon" aria-hidden="true">
                  <Icon name={pillar.icon} size={24} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <div className="badge-row">
                  {pillar.tags.map((tag) => (
                    <span className="badge" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link className="link-arrow pillar-card__link" to={pillar.path}>
                  {pillar.linkLabel}
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Products */

export function SolutionsShowcase() {
  return (
    <section className="section section--soft" id="solutions">
      <div className="container">
        <SectionHeading
          eyebrow="Our software solutions"
          title="Products you can deploy now, without a development project"
          lead="Billing, ERP and management software for specific industries. Implementation is configured around your masters, documents and reports, so you start from working software."
        />

        <div className="grid grid--3 mt-7">
          {featuredSolutions.map((solution, index) => (
            <Reveal key={solution.slug} delay={(index % 3) * 60}>
              <SolutionCard solution={solution} />
            </Reveal>
          ))}
        </div>

        <div className="btn-row btn-row--center mt-7">
          <Link className="btn btn--navy" to="/solutions">
            Compare all solutions
            <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
          </Link>
          <Link className="btn btn--ghost" to="/contact">
            Book a product demo
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- Custom development */

export function CustomDevelopment() {
  return (
    <section className="section" id="custom-development">
      <div className="container">
        <div className="split split--wide-left">
          <div>
            <p className="eyebrow">Custom development</p>
            <h2>When no product fits, we build the software around your process</h2>
            <p className="lead">
              You bring the requirement — a workflow, a bottleneck, a system that has to work the way your business
              already works. We turn it into software with the same discipline we apply to our own products.
            </p>
            <BulletList
              items={[
                'Written scope and architecture before development begins',
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
            <figcaption>
              Requirement discussions, screen reviews and phased delivery keep a custom project predictable.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Delivered work */

export function ProofPreview() {
  const preview = caseStudies.slice(0, 3);

  return (
    <section className="section section--soft" id="case-studies">
      <div className="container">
        <SectionHeading
          eyebrow="Delivered work"
          title="What the software changed for the client"
          lead="Each case study explains the problem, what we built and what the delivered system does today — the same way we would report on your project."
        />

        <div className="grid grid--3 mt-7">
          {preview.map((study, index) => (
            <Reveal key={study.slug} delay={index * 60}>
              <article className="proof-card">
                <span className="badge badge--navy">{study.industry}</span>
                <h3>
                  <Link to={`/case-studies/${study.slug}`}>{study.title}</Link>
                </h3>
                <p>{study.summary}</p>
                <Link className="link-arrow proof-card__link" to={`/case-studies/${study.slug}`}>
                  Read the case study
                  <Icon name="ChevronRight" size={15} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="btn-row btn-row--center mt-7">
          <Link className="btn btn--navy" to="/portfolio">
            View the full portfolio
            <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
          </Link>
          <Link className="btn btn--ghost" to="/case-studies">
            All case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
