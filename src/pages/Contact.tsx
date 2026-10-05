import Seo from '../seo/Seo';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import CtaBand from '../components/common/CtaBand';
import { FaqSection } from '../components/common/Faq';
import Icon from '../components/common/Icon';
import { site, whatsappLink, defaultWhatsAppMessage } from '../data/site';
import { generalFaqs } from '../data/company';
import { breadcrumbSchema, faqSchema, professionalServiceSchema } from '../seo/schema';
import { trackEvent } from '../services/analytics';

export default function Contact() {
  const contactCards = [
    {
      icon: 'MapPin',
      title: 'Office address',
      content: <p>{site.addressOneLine}</p>,
      action: { label: 'Open in Google Maps', href: site.mapsUrl, external: true, track: 'maps_click' },
    },
    {
      icon: 'Phone',
      title: 'Phone',
      content: (
        <p>
          {site.phones.map((phone, index) => (
            <span key={phone.href}>
              {index > 0 ? ' · ' : ''}
              <a href={phone.href} onClick={() => trackEvent('phone_click', { source: 'contact_card' })}>
                {phone.display}
              </a>
            </span>
          ))}
        </p>
      ),
      action: {
        label: 'WhatsApp us',
        href: whatsappLink(defaultWhatsAppMessage),
        external: true,
        track: 'whatsapp_click',
      },
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: (
        <p>
          <a href={site.emailHref} onClick={() => trackEvent('email_click', { source: 'contact_card' })}>
            {site.email}
          </a>
        </p>
      ),
      action: { label: 'Send an email', href: site.emailHref, track: 'email_click' },
    },
    {
      icon: 'Clock',
      title: 'Working hours',
      content: (
        <p>
          {site.hours.weekdays}
          <br />
          {site.hours.sunday}
        </p>
      ),
    },
  ];

  return (
    <>
      <Seo
        path="/contact"
        schema={[
          professionalServiceSchema(),
          faqSchema(generalFaqs.slice(2, 6)),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
        ]}
      />

      <PageHero
        eyebrow="Contact"
        title="Talk to our team in Nagpur"
        lead="Tell us what you are trying to build, replace or fix. You will get a specific response from the people who would actually do the work — usually within one working day."
        badges={['Phone, email or WhatsApp', 'Response within one working day', 'No obligation']}
        meta={[
          { icon: 'Phone', text: site.phones[0].display },
          { icon: 'Mail', text: site.email },
          { icon: 'MapPin', text: `${site.address.city}, ${site.address.region}` },
        ]}
      />

      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div>
              <SectionHeading
                eyebrow="Reach us directly"
                title="Contact details"
                lead="For product demonstrations, project discussions or support on existing software, use whichever channel suits you."
              />

              <ul className="contact-cards">
                {contactCards.map((card) => (
                  <li className="contact-card" key={card.title}>
                    <span className="contact-card__icon" aria-hidden="true">
                      <Icon name={card.icon} size={20} />
                    </span>
                    <h3>{card.title}</h3>
                    {card.content}
                    {card.action ? (
                      <a
                        className="link-arrow"
                        href={card.action.href}
                        {...(card.action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        data-track={card.action.track}
                      >
                        {card.action.label}
                        <Icon name={card.action.external ? 'ExternalLink' : 'ArrowRight'} size={15} />
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>

              <div className="callout callout--accent mt-6">
                <h3>Looking for something specific?</h3>
                <ul className="tick-list">
                  <li>
                    Product demonstration — mention the product you want to see (FMCG billing, jewellery billing,
                    tuition ERP and others).
                  </li>
                  <li>
                    Pricing — use the <a href="/request-quote">request a quote</a> form so we can ask the right
                    questions before quoting.
                  </li>
                  <li>
                    Job applications — see <a href="/careers">careers</a> for current openings.
                  </li>
                  <li>
                    Support on software we delivered — call the numbers above and mention your company name.
                  </li>
                </ul>
              </div>

              <div className="map-frame mt-6">
                <iframe
                  title={`Map showing the ${site.name} office in ${site.address.city}`}
                  src={site.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <EnquiryForm
              variant="contact"
              title="Send an enquiry"
              description="Name, phone, email and a short description of your requirement are enough — everything else helps us respond more precisely."
              submitLabel="Send enquiry"
            />
          </div>
        </div>
      </section>

      <FaqSection
        items={generalFaqs.slice(2, 7)}
        title="Before you get in touch"
        lead="A few answers that save a round trip."
      />

      <CtaBand
        title="Prefer to talk it through?"
        text="Call us during working hours and describe the requirement. If we are the right fit we will say so; if we are not, we will tell you that too."
        primaryLabel="Request a Quote"
        primaryPath="/request-quote"
        secondaryLabel="Explore solutions"
        secondaryPath="/solutions"
      />
    </>
  );
}
