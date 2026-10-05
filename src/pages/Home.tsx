import Seo from '../seo/Seo';
import HomeHero from '../components/home/HomeHero';
import {
  CustomDevelopment,
  ProofPreview,
  SolutionsShowcase,
  WhatWeDo,
} from '../components/home/HomeSections';
import TrustStrip from '../components/sections/TrustStrip';
import Process from '../components/sections/Process';
import { FaqSection } from '../components/common/Faq';
import CtaBand from '../components/common/CtaBand';
import { generalFaqs } from '../data/company';
import { site, whatsappLink, defaultWhatsAppMessage } from '../data/site';
import {
  faqSchema,
  organisationSchema,
  professionalServiceSchema,
  webSiteSchema,
} from '../seo/schema';

/**
 * Homepage.
 *
 * Deliberately short and sales-focused: hero → credibility → what we do →
 * products → custom development → delivered work → process → FAQ → CTA.
 * Deep material (industries, technology, why us, articles) lives on the pages
 * that can present it properly.
 */
export default function Home() {
  const homeFaqs = generalFaqs.slice(0, 5);

  return (
    <>
      <Seo
        path="/"
        schema={[
          organisationSchema(),
          webSiteSchema(),
          professionalServiceSchema(),
          faqSchema(homeFaqs),
        ]}
      />

      <HomeHero />
      <TrustStrip />
      <WhatWeDo />
      <SolutionsShowcase />
      <CustomDevelopment />
      <ProofPreview />

      <Process
        limit={4}
        variant="navy"
        id="process-summary"
        eyebrow="How we work"
        title="A process that keeps scope and timelines visible"
        lead="Four stages, each ending in something you review and approve. The full seven-stage process is documented on the services page."
        cta={{ label: 'See the full process', to: '/services' }}
      />

      <FaqSection
        items={homeFaqs}
        title="Questions we are asked before a project starts"
        lead="If your question is not answered here, call us or send it through the enquiry form — you will get a direct answer."
      />

      <CtaBand
        title="Have a software requirement or a business problem to solve?"
        text="Tell us how your business works today and where it slows down. We will suggest the most practical route — a ready solution, a custom build, or a phased combination of both."
        primaryLabel="Request a Quote"
        primaryPath="/request-quote"
        secondaryLabel="Talk to Our Team"
        secondaryPath="/contact"
        aside={
          <>
            <span>
              <strong>Call:</strong>{' '}
              <a href={site.phones[0].href} data-track="cta_phone">
                {site.phones[0].display}
              </a>{' '}
              ·{' '}
              <a href={site.phones[1].href} data-track="cta_phone">
                {site.phones[1].display}
              </a>
            </span>
            <span>
              <strong>Email:</strong>{' '}
              <a href={site.emailHref} data-track="cta_email">
                {site.email}
              </a>
            </span>
            <span>
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="cta_whatsapp"
              >
                WhatsApp us
              </a>
            </span>
          </>
        }
      />
    </>
  );
}
