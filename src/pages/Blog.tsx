import Seo from '../seo/Seo';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { ArticleCard } from '../components/common/Cards';
import CtaBand from '../components/common/CtaBand';
import { articleCategories, sortedArticles } from '../data/blog';
import { breadcrumbSchema, itemListSchema } from '../seo/schema';

export default function Blog() {
  const [featured, ...rest] = sortedArticles;

  return (
    <>
      <Seo
        path="/blog"
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]),
          itemListSchema(
            sortedArticles.map((article) => ({ name: article.title, path: `/blog/${article.slug}` })),
            'Articles',
          ),
        ]}
      />

      <PageHero
        eyebrow="Insights"
        title="Practical reading on business software"
        lead="Articles written for owners and decision-makers: how to evaluate software, when to move off spreadsheets, which platform to deploy on, and what actually drives cost. No promotional filler."
        badges={['Written by our team', 'No sponsored rankings', 'Updated as practice changes']}
        primaryCta={{ label: 'Request a quote', to: '/request-quote' }}
        secondaryCta={{ label: 'Explore solutions', to: '/solutions' }}
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest"
            title="Start with the most recent article"
            lead={`We publish on topics we deal with in client projects. Current categories: ${articleCategories.join(', ')}.`}
          />

          {featured ? (
            <article className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="split split--wide-left" style={{ gap: 0, alignItems: 'stretch' }}>
                <a href={`/blog/${featured.slug}`} aria-hidden="true" tabIndex={-1}>
                  <img
                    src={featured.heroImage}
                    alt=""
                    width={1200}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '260px' }}
                  />
                </a>
                <div style={{ padding: 'clamp(1.5rem, 1.2rem + 1vw, 2.5rem)', display: 'grid', gap: 'var(--space-3)' }}>
                  <div className="post-card__meta">
                    <span className="badge badge--azure">{featured.category}</span>
                    <span>
                      <time dateTime={featured.publishedAt}>
                        {new Date(featured.publishedAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>{' '}
                      · {featured.readingMinutes} min read
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 0 }}>
                    <a href={`/blog/${featured.slug}`}>{featured.title}</a>
                  </h2>
                  <p className="text-muted mb-0">{featured.description}</p>
                  <a className="link-arrow" href={`/blog/${featured.slug}`}>
                    Read the article
                  </a>
                </div>
              </div>
            </article>
          ) : null}

          <div className="post-grid mt-7">
            {rest.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need advice specific to your business?"
        text="Articles cover the general case. If you want an opinion on your own requirement — a system to replace, a process to digitise, a platform to choose — ask us directly."
        primaryLabel="Ask our team"
        primaryPath="/contact"
        secondaryLabel="Request a Quote"
        secondaryPath="/request-quote"
      />
    </>
  );
}
