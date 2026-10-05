import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/common/PageHero';
import SectionHeading, { BulletList } from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import Icon from '../components/common/Icon';
import CtaBand from '../components/common/CtaBand';
import { FaqSection } from '../components/common/Faq';
import { SolutionCard } from '../components/common/Cards';
import { productFaqs, solutions } from '../data/solutions';
import { breadcrumbSchema, itemListSchema, productSchema } from '../seo/schema';


export default function Solutions() {
  return (
    <>
      <Seo
        path="/solutions"
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }]),
          itemListSchema(
            solutions.map((solution) => ({ name: solution.name, path: solution.path })),
            'Business software solutions',
          ),
          productSchema({
            name: 'Right Serve Infotech System business software solutions',
            description:
              'Business software solutions for billing, distribution, education, cooperative societies, construction and general business management.',
            path: '/solutions',
          }),
        ]}
      />

      <PageHero
        eyebrow="Solutions"
        title="Business software you can deploy now"
        lead="Six solutions cover the most common business requirements we are asked for — plus a healthcare product. Each one is already built and running, and is implemented around your masters, documents and reporting."
        badges={['Configured to your business', 'Desktop, web and mobile', 'Training and support included']}
        primaryCta={{ label: 'Request a product demo', to: '/contact' }}
        secondaryCta={{ label: 'Discuss a custom build', to: '/request-quote' }}
        meta={[
          { icon: 'Layers', text: 'Billing, education, society, construction and management systems' },
          { icon: 'Server', text: 'Cloud or on-premise deployment' },
        ]}
      />

      <Breadcrumbs items={[{ label: 'Solutions' }]} />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Product catalogue"
            title="Our software solutions"
            lead="Every card states the platforms the product actually runs on. Open a product page for the problems it solves, the capabilities included, deployment options and support."
          />
          <div className="grid grid--3">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={(index % 3) * 60}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Product or custom?</p>
              <h2>How to decide between a ready solution and a custom build</h2>
              <p className="lead">
                Most businesses do not need to choose one extreme. The practical route is usually to start from a
                product and extend only the parts that are specific to you.
              </p>
              <BulletList
                items={[
                  'Choose a product when your process is standard for your industry — billing, admissions, records, project billing.',
                  'Extend a product when most of your process is standard but a few modules or reports are specific to you.',
                  'Choose a custom build when the software is your differentiator, or when no product models your workflow.',
                  'Mix both when you need an operational system now and a specialised tool alongside it.',
                ]}
              />
            </div>
            <div className="callout callout--accent">
              <h3>What implementation includes</h3>
              <ul className="tick-list tick-list--lg">
                <li>Requirement review and configuration of masters, documents and reports</li>
                <li>Data migration from existing software, spreadsheets or registers</li>
                <li>User roles and access rights set up with your team</li>
                <li>Training by role, with written handover material</li>
                <li>Go-live support and a defined channel for follow-up requests</li>
              </ul>
              <div className="btn-row mt-6">
                <Link className="btn btn--primary" to="/contact">
                  Book a demonstration
                  <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={productFaqs}
        title="Questions about our software solutions"
        lead="Commercial and implementation questions we are asked most often. Product pages carry feature-level FAQs."
      />

      <CtaBand
        title="Want to see one of these solutions with your own data?"
        text="Send us a sample bill format, item list or the report your management asks for. We will run the demonstration against examples you already use."
        primaryLabel="Request a Product Demo"
        primaryPath="/contact"
        secondaryLabel="Request a Quote"
        secondaryPath="/request-quote"
      />
    </>
  );
}
