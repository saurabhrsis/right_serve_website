import Seo from '../seo/Seo';
import PageHero from '../components/common/PageHero';
import CtaBand from '../components/common/CtaBand';
import type { LegalDocument } from '../data/legal';
import { breadcrumbSchema } from '../seo/schema';
import { site } from '../data/site';

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

/** Shared renderer for the four legal documents (website and app policies). */
export default function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <Seo
        path={document.path}
        title={document.seoTitle}
        description={document.seoDescription}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: document.breadcrumb, path: document.path },
          ]),
        ]}
      />

      <PageHero
        variant="light"
        compact
        eyebrow="Legal"
        title={document.title}
        lead={`Last updated: ${formatDate(document.updated)}`}
        breadcrumbs={[{ label: document.breadcrumb }]}
      />

      <section className="section">
        <div className="container">
          <div className="prose">
            {document.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <h2>Contact</h2>
            <p>
              {site.legalName}
              <br />
              {site.addressOneLine}
              <br />
              Phone:{' '}
              <a href={site.phones[0].href}>{site.phones[0].display}</a> ·{' '}
              <a href={site.phones[1].href}>{site.phones[1].display}</a>
              <br />
              Email: <a href={site.emailHref}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about our policies?"
        text="If anything here is unclear, or you want to know how we would handle a specific type of information in your project, ask us directly."
        primaryLabel="Contact us"
        primaryPath="/contact"
        secondaryLabel="Read our services"
        secondaryPath="/services"
      />
    </>
  );
}
