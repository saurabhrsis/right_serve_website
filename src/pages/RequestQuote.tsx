import Seo from '../seo/Seo';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/common/PageHero';
import SectionHeading, { BulletList } from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import CtaBand from '../components/common/CtaBand';
import { FaqSection } from '../components/common/Faq';
import Icon from '../components/common/Icon';
import { site } from '../data/site';
import { quoteFaqs } from '../data/company';
import { breadcrumbSchema, faqSchema } from '../seo/schema';

const steps = [
  {
    title: 'You send the requirement',
    text: 'Even a rough description is enough — what the software should do, who will use it and what it replaces.',
  },
  {
    title: 'We ask clarifying questions',
    text: 'Usually by phone or a short call: volumes, users, integrations, existing systems, reporting expectations.',
  },
  {
    title: 'You receive a written scope and estimate',
    text: 'Modules, deliverables, assumptions, what is excluded, timeline and pricing — or a product proposal if a ready solution fits better.',
  },
  {
    title: 'We agree the first phase',
    text: 'If the proposal works for you, we agree the starting phase and timeline. No work begins without your approval.',
  },
];


export default function RequestQuote() {
  return (
    <>
      <Seo
        path="/request-quote"
        schema={[
          faqSchema(quoteFaqs),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Request a Quote', path: '/request-quote' }]),
        ]}
      />

      <PageHero
        eyebrow="Request a quote"
        title="Tell us what you need and get a practical estimate"
        lead="Share your requirement, expected timeline and budget range. You will receive a written scope with pricing — and an honest opinion on whether a ready solution would serve you better than a custom build."
        badges={['Written scope and pricing', 'No obligation', 'Response within one working day']}
        meta={[
          { icon: 'Phone', text: site.phones[0].display },
          { icon: 'Mail', text: site.email },
        ]}
      />

      <Breadcrumbs items={[{ label: 'Request a Quote' }]} />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div>
              <SectionHeading
                eyebrow="What happens next"
                title="From enquiry to agreed scope"
                lead="No sales sequence — four steps, and you decide at each one whether to continue."
              />

              <ol className="steps" style={{ gridTemplateColumns: '1fr' }}>
                {steps.map((step, index) => (
                  <li className="step" key={step.title}>
                    <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </li>
                ))}
              </ol>

              <div className="callout mt-6">
                <h3>What helps us quote accurately</h3>
                <BulletList
                  items={[
                    'The process or problem you want the software to handle',
                    'Who will use it — counter staff, field team, managers, customers',
                    'Reports management asks for regularly',
                    'Systems it must connect to (accounting, ERP, payment, SMS/WhatsApp)',
                    'Whether you need desktop, web, mobile or a combination',
                    'Any deadline you are working towards',
                  ]}
                />
                <p className="text-muted mt-5 mb-0" style={{ fontSize: 'var(--fs-xs)' }}>
                  None of this is compulsory. Send what you have and we will ask for the rest.
                </p>
              </div>

              <div className="callout callout--accent mt-5">
                <h3>Prefer to talk first?</h3>
                <p className="mb-0">
                  Call{' '}
                  <a href={site.phones[0].href} data-track="quote_page_phone">
                    {site.phones[0].display}
                  </a>{' '}
                  or{' '}
                  <a href={site.phones[1].href} data-track="quote_page_phone">
                    {site.phones[1].display}
                  </a>{' '}
                  during working hours, or email{' '}
                  <a href={site.emailHref} data-track="quote_page_email">
                    {site.email}
                  </a>
                  .
                </p>
                <p className="text-muted mt-4 mb-0" style={{ fontSize: 'var(--fs-xs)' }}>
                  <Icon name="Clock" size={13} /> {site.hours.weekdays} · {site.hours.sunday}
                </p>
              </div>
            </div>

            <EnquiryForm
              variant="quote"
              title="Project details"
              description="Nine fields at most, and only the marked ones are required. The more context you give, the more specific the estimate."
              submitLabel="Send quote request"
            />
          </div>
        </div>
      </section>

      <FaqSection
        items={quoteFaqs}
        title="Questions about requesting a quote"
        lead="If something here is unclear, ask it in the form — we will answer it along with the estimate."
      />

      <CtaBand
        title="Not ready to request a quote?"
        text="That is fine. Explore the solutions and case studies first — they answer most of the questions buyers have before contacting a software company."
        primaryLabel="Explore solutions"
        primaryPath="/solutions"
        secondaryLabel="Read case studies"
        secondaryPath="/case-studies"
      />
    </>
  );
}
