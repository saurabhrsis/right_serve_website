import Seo from '../seo/Seo';
import HomeHero from '../components/home/HomeHero';
import {
  CustomDevelopment,
  DeliveredWork,
  ProductsShowcase,
  WhatWeBuild,
} from '../components/home/HomeSections';
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
 * A sales page, not a sitemap: seven bands, each one short, each ending in a
 * link that goes deeper. Industries, technology and the rest of the detail live
 * on the pages that can present them properly.
 */
export default function Home() {
  const homeFaqs = generalFaqs.slice(0, 3);

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
      <WhatWeBuild />
      <ProductsShowcase />
      <CustomDevelopment />
      <DeliveredWork />

      <Process
        limit={4}
        align="left"
        id="process-summary"
        eyebrow="How we work"
        title="From first discussion to support"
        lead="Four stages, each ending in something you review and approve. The full eight-stage process is documented on the services page."
        cta={{ label: 'See the full process', to: '/services' }}
      />

      <FaqSection
        items={homeFaqs}
        title="Questions we are asked before a project starts"
        lead="If yours is not here, call us or send it through the enquiry form — you will get a direct answer."
      />

      <CtaBand
        title="Have a requirement or a bottleneck to solve?"
        text="Tell us how the business works today and where it slows down. We will suggest the most practical route — a ready product, a custom build, or a phased combination."
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
