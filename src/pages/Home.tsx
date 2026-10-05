import Seo from '../seo/Seo';
import HomeHero from '../components/home/HomeHero';
import {
  CaseStudiesPreview,
  CustomDevelopment,
  InsightsPreview,
  PortfolioPreview,
  SolutionsShowcase,
  WhatWeDo,
} from '../components/home/HomeSections';
import TrustStrip from '../components/sections/TrustStrip';
import Industries from '../components/sections/Industries';
import Technology from '../components/sections/Technology';
import WhyUs from '../components/sections/WhyUs';
import Process from '../components/sections/Process';
import ClientStrip from '../components/sections/ClientStrip';
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

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        schema={[organisationSchema(), webSiteSchema(), professionalServiceSchema(), faqSchema(generalFaqs.slice(0, 6))]}
      />

      <HomeHero />
      <TrustStrip />
      <WhatWeDo />
      <SolutionsShowcase />
      <CustomDevelopment />
      <Industries
        limit={8}
        lead="Our projects and products cover these sectors. If your industry is not listed, the conversation still starts with your workflow rather than a template."
      />
      <PortfolioPreview />
      <CaseStudiesPreview />
      <Technology />
      <WhyUs limit={4} />
      <Process />
      <ClientStrip />
      <InsightsPreview />

      <FaqSection
        items={generalFaqs}
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
