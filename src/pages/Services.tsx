import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import Icon from '../components/common/Icon';
import CtaBand from '../components/common/CtaBand';
import { FaqSection } from '../components/common/Faq';
import Process from '../components/sections/Process';
import Technology from '../components/sections/Technology';
import { capabilityGroups, services } from '../data/services';
import { breadcrumbSchema, itemListSchema } from '../seo/schema';
import { generalFaqs } from '../data/company';

export default function Services() {
  return (
    <>
      <Seo
        path="/services"
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
          itemListSchema(
            services.map((service) => ({ name: service.navTitle, path: service.path })),
            'Software development services',
          ),
        ]}
      />

      <PageHero
        eyebrow="Services"
        title="Software development services"
        lead="We build software to a requirement — custom applications, ERP systems, websites, mobile apps and AI features — and support the infrastructure they run on. Each service below explains what is included, who it suits and how the work is delivered."
        badges={['Written scope before development', 'Phased delivery', 'Support after go-live']}
        primaryCta={{ label: 'Request a quote', to: '/request-quote' }}
        secondaryCta={{ label: 'Talk to our team', to: '/contact' }}
        meta={[
          { icon: 'MapPin', text: 'Nagpur, Maharashtra' },
          { icon: 'Users', text: 'Clients across India' },
          { icon: 'Clock', text: 'Response within one working day' },
        ]}
      />

      <Breadcrumbs items={[{ label: 'Services' }]} />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service lines"
            title="Choose the service that matches your requirement"
            lead="Every service page carries the same structure: what the service covers, the problems it solves, the capabilities included, how we deliver it, and the questions clients ask before starting."
          />

          <div className="grid grid--3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 60}>
                <article className="capability" style={{ height: '100%' }}>
                  <span className="capability__icon" aria-hidden="true">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <h3>
                    <Link to={service.path}>{service.navTitle}</Link>
                  </h3>
                  <p>{service.summary}</p>
                  <div className="badge-row">
                    {service.heroBadges.slice(0, 2).map((badge) => (
                      <span className="badge" key={badge}>
                        {badge}
                      </span>
                    ))}
                  </div>
                  <Link className="link-arrow" to={service.path}>
                    Service details
                    <Icon name="ChevronRight" size={15} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Full capability list"
            title="Everything we can take responsibility for"
            lead="Beyond the service lines above, these are the specific capabilities our projects have covered. Use this list to check whether your requirement is something we have already built."
          />
          <div className="grid grid--3">
            {capabilityGroups.map((group) => (
              <div className="card card--plain" key={group.title}>
                <span className="card__icon" aria-hidden="true">
                  <Icon name={group.icon} size={22} />
                </span>
                <h3 className="card__title">{group.title}</h3>
                <ul className="tick-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-muted mt-6" style={{ fontSize: 'var(--fs-xs)' }}>
            We list only the work we have already delivered. If your requirement is outside this list, tell us — we
            will say honestly whether it is a good fit for us.
          </p>
        </div>
      </section>

      <Process />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Engagement models"
            title="How engagements are structured"
            lead="Which model suits you depends on how well the requirement is known today."
          />
          <div className="grid grid--3">
            <div className="card">
              <h3 className="card__title">Fixed-scope phase</h3>
              <p className="card__text">
                The requirement is clear and can be written down. You receive a scope document with the module list,
                deliverables and price for that phase. Changes outside the scope are quoted separately.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">Monthly engagement</h3>
              <p className="card__text">
                The requirement will evolve — typical for internal systems where new needs surface as people start
                using the software. Work is planned in short cycles with a monthly cost.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">Product implementation</h3>
              <p className="card__text">
                You adopt one of our existing solutions. Implementation is configured to your masters, documents and
                reports, with training and support included in the proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Technology className="section section--soft" />

      <FaqSection
        items={generalFaqs.slice(0, 6)}
        title="Common questions about working with us"
        lead="Everything here applies to all our services. Individual service pages carry their own detailed FAQs."
      />

      <CtaBand
        title="Not sure which service you need?"
        text="Describe the problem rather than the solution — the process that slows down, the report that takes too long, the system your team works around. We will tell you what it takes to fix it."
        primaryLabel="Discuss your project"
        primaryPath="/request-quote"
        secondaryLabel="Contact us"
        secondaryPath="/contact"
      />
    </>
  );
}
