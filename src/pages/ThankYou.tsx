import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import Icon from '../components/common/Icon';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';
import CtaBand from '../components/common/CtaBand';
import { defaultWhatsAppMessage, site, whatsappLink } from '../data/site';

/**
 * Post-conversion page. Kept out of the sitemap and marked noindex: it is
 * reached after a form submission, or from a campaign that points here.
 */

const nextSteps = [
  {
    icon: 'FileText',
    title: 'We read your requirement',
    text: 'Your enquiry reaches our team with everything you submitted — the problem, the modules or the product you asked about.',
  },
  {
    icon: 'MessageCircle',
    title: 'We come back with questions',
    text: 'If something is unclear we ask before quoting, so the estimate reflects what you actually need instead of assumptions.',
  },
  {
    icon: 'FileText',
    title: 'You receive an approach and a quote',
    text: 'Scope, modules or phases, the technology we recommend and the commercial estimate — in writing.',
  },
];

const exploreLinks = [
  { label: 'Ready business software', path: '/solutions', description: 'Billing, ERP and management products' },
  { label: 'Services', path: '/services', description: 'Custom software, web, mobile, AI and SEO' },
  { label: 'Case studies', path: '/case-studies', description: 'How real delivery problems were solved' },
  { label: 'Portfolio', path: '/portfolio', description: 'Projects built for clients across industries' },
];

export default function ThankYou() {
  return (
    <>
      <Seo
        path="/thank-you"
        title="Thank you — your enquiry has reached us | Right Serve Infotech System"
        description="Your enquiry has been received by the Right Serve Infotech System team in Nagpur. Here is what happens next."
        robots="noindex, follow"
      />

      <PageHero
        eyebrow="Enquiry received"
        title="Thank you — your enquiry has reached us"
        lead="Our team will review the details you shared and respond with questions, an approach and a quote. If your requirement is urgent, calling is the fastest way to reach us."
        meta={[
          { icon: 'MapPin', text: `${site.address.city}, ${site.address.region}` },
          { icon: 'Clock', text: 'Mon–Sat, 10:30 am – 7:00 pm' },
        ]}
        primaryCta={{ label: 'Explore our solutions', to: '/solutions' }}
        secondaryCta={{ label: 'Back to home', to: '/' }}
      />

      <section className="section section--soft" aria-labelledby="thankyou-next-heading">
        <div className="container">
          <SectionHeading
            id="thankyou-next-heading"
            eyebrow="What happens next"
            title="Three steps from enquiry to proposal"
            lead="No automated sales sequence — someone from our Nagpur office reads your enquiry and replies."
          />

          <div className="grid grid--3 mt-7">
            {nextSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <article className="card card--soft">
                  <span className="card__icon" aria-hidden="true">
                    <Icon name={step.icon} size={22} />
                  </span>
                  <h3 className="card__title">{step.title}</h3>
                  <p className="card__text">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="thankyou-explore-heading">
        <div className="container">
          <div className="split">
            <div>
              <SectionHeading
                id="thankyou-explore-heading"
                eyebrow="While you wait"
                title="See what we have already built"
                lead="Browse the products we sell and the systems we have delivered for businesses like yours."
              />

              <ul className="tick-list tick-list--lg mt-6">
                {exploreLinks.map((link) => (
                  <li key={link.path}>
                    <Link className="link-arrow" to={link.path}>
                      {link.label}
                      <Icon name="ArrowRight" size={16} />
                    </Link>{' '}
                    <span className="text-muted">— {link.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="contact-card">
              <h2>Reach us directly</h2>
              <p>Monday to Saturday, 10:30 am to 7:00 pm IST. We are closed on Sundays and public holidays.</p>

              <ul className="contact-card__list">
                {site.phones.map((phone) => (
                  <li key={phone.display}>
                    <Icon name="Phone" size={16} />
                    <a href={phone.href}>{phone.display}</a>
                  </li>
                ))}
                <li>
                  <Icon name="Mail" size={16} />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              </ul>

              <a
                className="btn btn--primary btn--block"
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="thankyou-whatsapp"
              >
                <Icon name="MessageCircle" size={18} />
                Chat on WhatsApp
              </a>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to talk it through instead?"
        text="Send a WhatsApp message or call us — we are happy to walk through your requirement before you commit to anything."
        primaryLabel="Contact our team"
        primaryPath="/contact"
        secondaryLabel="Request a quote"
        secondaryPath="/request-quote"
      />
    </>
  );
}
