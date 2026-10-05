import { Link, useParams } from 'react-router-dom';
import Seo from '../seo/Seo';
import Icon from '../components/common/Icon';
import SmartImage from '../components/common/SmartImage';
import CtaBand from '../components/common/CtaBand';
import { ArticleCard } from '../components/common/Cards';
import NotFound from './NotFound';
import { articles, getArticle, sortedArticles } from '../data/blog';
import { articleSchema, breadcrumbSchema } from '../seo/schema';
import { site } from '../data/site';

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogPost() {
  const { slug = '' } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return <NotFound />;
  }

  const related = sortedArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Seo
        path={`/blog/${article.slug}`}
        title={`${article.title} | Right Serve Infotech System`}
        description={article.description}
        image={article.heroImage}
        type="article"
        publishedTime={article.publishedAt}
        modifiedTime={article.updatedAt}
        author={site.nameWithSuffix}
        keywords={[article.category, 'business software', 'software development Nagpur']}
        schema={[
          articleSchema({
            title: article.title,
            description: article.description,
            path: `/blog/${article.slug}`,
            publishedAt: article.publishedAt,
            updatedAt: article.updatedAt,
            image: article.heroImage,
            authorName: `${site.nameWithSuffix} team`,
            section: article.category,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: article.title, path: `/blog/${article.slug}` },
          ]),
        ]}
      />

      <article className="section">
        <div className="container">
          <div className="article">
            <nav className="breadcrumbs mb-5" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                  <Icon name="ChevronRight" size={14} />
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                  <Icon name="ChevronRight" size={14} />
                </li>
                <li>
                  <span aria-current="page">{article.category}</span>
                </li>
              </ol>
            </nav>

            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>

            <div className="article__meta">
              <span>
                <Icon name="Calendar" size={15} /> Published{' '}
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </span>
              {article.updatedAt !== article.publishedAt ? (
                <span>
                  Updated <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
                </span>
              ) : null}
              <span>
                <Icon name="Clock" size={15} /> {article.readingMinutes} min read
              </span>
              <span>
                <Icon name="Users" size={15} /> {site.nameWithSuffix}
              </span>
            </div>

            <figure className="article__hero">
              <SmartImage
                src={article.heroImage}
                alt={article.heroAlt}
                width={1400}
                height={800}
                priority
                objectPosition="center"
              />
            </figure>

            <nav className="article__toc" aria-label="On this page">
              <h2>On this page</h2>
              <ul>
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {article.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {article.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets?.length ? (
                  <ul className="tick-list tick-list--lg">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section>
              <h2>Key takeaways</h2>
              <ul className="tick-list tick-list--lg">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Related pages</h2>
              <ul>
                {article.related.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <div className="callout callout--accent mt-7">
              <h3>Want a recommendation for your own requirement?</h3>
              <p>
                Send us the process you want to improve. You will get a direct answer about what is involved — even if
                the answer is that you do not need software yet.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" to="/request-quote">
                  Request a Quote
                </Link>
                <Link className="btn btn--ghost" to="/contact">
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="section section--soft">
          <div className="container">
            <h2>More articles</h2>
            <div className="post-grid">
              {related.map((item) => (
                <ArticleCard article={item} key={item.slug} />
              ))}
            </div>
            <p className="text-muted mt-6" style={{ fontSize: 'var(--fs-xs)' }}>
              {articles.length} articles published so far — we add new ones as client questions repeat.
            </p>
          </div>
        </section>
      ) : null}

      <CtaBand
        title="Have a software requirement?"
        text="Let's discuss your business problem and find the right technology solution."
        primaryLabel="Request a Quote"
        primaryPath="/request-quote"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </>
  );
}
