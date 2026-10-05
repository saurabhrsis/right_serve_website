import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import Icon from '../components/common/Icon';
import SmartImage from '../components/common/SmartImage';
import CtaBand from '../components/common/CtaBand';
import Industries from '../components/sections/Industries';
import Technology from '../components/sections/Technology';
import Process from '../components/sections/Process';
import WhyUs from '../components/sections/WhyUs';
import { FaqSection } from '../components/common/Faq';
import { services } from '../data/services';
import { featuredSolutions } from '../data/solutions';
import { generalFaqs } from '../data/company';
import { site } from '../data/site';
import { breadcrumbSchema, faqSchema, organisationSchema } from '../seo/schema';

const team = [
  { name: 'Piyush Pandey', role: 'Director' },
  { name: 'Saurabh Jagthap', role: 'Director' },
  { name: 'Abhishek Tijare', role: 'Software Engineer' },
  { name: 'Jayshree Bawankar', role: 'Software Engineer' },
  { name: 'M. A. Kadir', role: 'Software Engineer' },
  { name: 'Rajwal Jambhule', role: 'Software Engineer' },
  { name: 'Sakshi Wankhede', role: 'Software Engineer' },
  { name: 'Sharvari Malve', role: 'Frontend Developer' },
  { name: 'Mrunali Vaidya', role: 'Backend Developer' },
  { name: 'Aarya Pandey', role: 'Graphics Designer' },
];

const approach = [
  {
    title: 'We start with your process, not our product',
    text: 'The first conversation is about how your business runs — where information is entered twice, which approvals happen verbally, which reports take too long. Only then do we talk about what to build or deploy.',
  },
  {
    title: 'We tell you when you do not need software',
    text: 'Sometimes the answer is a better form, a fixed process or a small change to an existing system. Saying that up front costs us a project and earns a client.',
  },
  {
    title: 'Scope, price and timeline in writing',
    text: 'You approve what is included, what is not and what a later phase would contain. Surprises during a project are almost always scope problems, not technology problems.',
  },
  {
    title: 'We stay after go-live',
    text: 'Deployment is where the real feedback starts. We handle fixes, small changes, new reports and questions from the people using the system daily.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        path="/about"
        schema={[
          organisationSchema(),
          faqSchema(generalFaqs.slice(0, 4)),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]),
        ]}
      />

      <PageHero
        eyebrow="About us"
        title="A software team in Nagpur that builds, implements and supports business systems"
        lead={`Right Serve Infotech System Pvt. Ltd. is a software development and technology solutions company. Since ${site.workingSince} we have built custom software for clients and developed our own business software products — and we support the hardware and infrastructure those systems run on.`}
        badges={['Based in Nagpur, Maharashtra', 'Custom software and products', 'In-house development team']}
        primaryCta={{ label: 'Work with us', to: '/request-quote' }}
        secondaryCta={{ label: 'See our work', to: '/portfolio' }}
        meta={[
          { icon: 'MapPin', text: `${site.address.city}, ${site.address.region}, India` },
          { icon: 'Layers', text: `${featuredSolutions.length} business software solutions and custom development` },
        ]}
        media={{
          src: '/assets/tech/team-meeting.jpg',
          alt: 'Right Serve Infotech System team working on a software project',
        }}
      />

      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="split split--wide-left">
            <div className="prose">
              <p className="eyebrow">Our story</p>
              <h2>How the company developed</h2>
              <p>
                Right Serve Infotech System started in {site.workingSince} as a small technology team in Nagpur
                delivering websites and software for local businesses. The work has grown in two directions since
                then: custom software built to specific client requirements, and our own business software products
                for FMCG billing, jewellery shops, tuition institutes, cooperative societies and construction
                businesses.
              </p>
              <p>
                Two things shaped the way we work. First, most of our clients are businesses rather than technology
                companies, so software has to be explained and delivered in their language. Second, because we also
                supply and support servers, networks and office hardware, we end up accountable for the whole system —
                not just the application layer.
              </p>
              <p>
                Today the team includes engineers across frontend, backend and mobile development, design and QA. We
                work with clients in Nagpur, across Maharashtra and elsewhere in India, combining online reviews with
                on-site visits where the project needs them.
              </p>

              <h3>What we do</h3>
              <ul>
                <li>
                  <Link to="/services">Software development services</Link> — custom applications, ERP systems, web
                  and mobile apps, AI features and SEO.
                </li>
                <li>
                  <Link to="/solutions">Business software solutions</Link> — ready products implemented around your
                  masters, documents and reports.
                </li>
                <li>
                  <Link to="/services/hardware-it-infrastructure">IT infrastructure</Link> — servers, networks, storage
                  and the support that keeps them running.
                </li>
              </ul>

              <h3>How we are set up</h3>
              <p>
                Development, design and quality assurance are handled in-house. That means the person who designed a
                screen is available when a user reports a problem with it, and the team that built your system is the
                team that supports it.
              </p>
            </div>

            <aside className="stack">
              <div className="callout">
                <h3>Company facts</h3>
                <ul className="tick-list">
                  <li>Legal name: {site.legalName}</li>
                  <li>Working with clients since {site.workingSince}</li>
                  <li>Head office in {site.address.city}, {site.address.region}</li>
                  <li>Software development, products and IT infrastructure under one roof</li>
                  <li>Languages: {site.languages.join(', ')}</li>
                </ul>
              </div>

              <div className="callout callout--accent">
                <h3>Registered office</h3>
                <p className="mb-0">{site.addressOneLine}</p>
                <div className="btn-row mt-5">
                  <a className="btn btn--ghost btn--sm" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Icon name="MapPin" size={15} />
                    Open in Maps
                  </a>
                  <Link className="btn btn--primary btn--sm" to="/contact">
                    Contact us
                  </Link>
                </div>
              </div>

              <figure className="product-visual mb-0">
                <SmartImage
                  src="/assets/tech/workspace-team.jpg"
                  alt="Development workspace at Right Serve Infotech System"
                  width={1200}
                  height={800}
                />
                <figcaption>Our development and design work is handled in-house in Nagpur.</figcaption>
              </figure>
            </aside>
          </div>
        </div>
      </section>

      {/* Services and solutions summary */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Two ways to work with us"
            title="We can build your software, and we already have software you can use"
            lead="Both routes are real engagements for us. The choice depends on whether your requirement is specific to your business or standard for your industry."
          />

          <div className="grid grid--2">
            <div className="card">
              <span className="card__icon" aria-hidden="true">
                <Icon name="Code2" size={22} />
              </span>
              <h3 className="card__title">Custom development</h3>
              <p className="card__text">
                Bring us a requirement and we build the software around your workflow. Read about our{' '}
                {services.length} service lines, each with the problems solved, the capabilities included and how the
                work is delivered.
              </p>
              <ul className="tick-list mt-5">
                {services.slice(0, 5).map((service) => (
                  <li key={service.slug}>
                    <Link to={service.path}>{service.navTitle}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <span className="card__icon card__icon--teal" aria-hidden="true">
                <Icon name="Layers" size={22} />
              </span>
              <h3 className="card__title">Ready solutions</h3>
              <p className="card__text">
                Deploy software that is already built and running, configured to your business. Each solution page
                explains who it is for, the problems it solves and the platforms it supports.
              </p>
              <ul className="tick-list mt-5">
                {featuredSolutions.map((solution) => (
                  <li key={solution.slug}>
                    <Link to={solution.path}>{solution.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title="The principles we hold to on every project"
            lead="These are not slogans — they are the behaviours clients hold us to, and the reasons most of our work comes from referrals."
          />
          <div className="grid grid--2">
            {approach.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 60}>
                <div className="capability" style={{ height: '100%' }}>
                  <span className="capability__icon" aria-hidden="true">
                    <Icon name="CheckCircle2" size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Industries
        className="section section--soft"
        title="Sectors our projects have covered"
        lead="Each of these corresponds to work we have delivered — projects, products or both."
      />

      <Technology
        className="section"
        title="The technology our projects run on"
        lead="A working stack, kept deliberately practical so systems remain maintainable by our team and yours."
      />

      <Process
        variant="navy"
        title="How a project is delivered"
        lead="The same sequence applies to custom development and to product implementation, scaled to the size of the engagement."
      />

      <WhyUs
        className="section"
        title="Why clients stay with us"
        lead="Stated as capabilities rather than adjectives, because that is what matters when you are choosing a technology partner."
      />

      {/* Team */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="The team"
            title="Who works on your project"
            lead="Development, design and quality assurance are handled by our in-house team in Nagpur. You meet the people delivering the work, not only a sales contact."
          />
          <div className="grid grid--4">
            {team.map((member) => (
              <div className="value-tile" key={member.name}>
                <span className="badge badge--navy">{member.role}</span>
                <h3 className="mt-4" style={{ fontSize: '1.02rem' }}>
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
          <p className="text-muted mt-6" style={{ fontSize: 'var(--fs-xs)' }}>
            Team members are listed as published by the company. We are hiring for several roles — see{' '}
            <Link to="/careers">careers</Link>.
          </p>
        </div>
      </section>

      <FaqSection
        items={generalFaqs.slice(0, 5)}
        title="About working with Right Serve Infotech System"
        lead="Practical questions about how engagements work, answered without marketing language."
      />

      <CtaBand
        title="Let's start with your requirement"
        text="Whether you need a custom system, a product implemented, or a second opinion on something you already have — the first conversation is free and specific."
        primaryLabel="Request a Quote"
        primaryPath="/request-quote"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </>
  );
}
