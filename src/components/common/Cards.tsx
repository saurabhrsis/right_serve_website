import { Link } from 'react-router-dom';
import Icon from './Icon';
import SmartImage from './SmartImage';
import type { Solution } from '../../data/solutions';
import type { Project } from '../../data/portfolio';
import type { Article } from '../../data/blog';

/* ------------------------------------------------------------------ Solution */

const accentClass: Record<Solution['accent'], string> = {
  azure: 'badge--azure',
  teal: 'badge--teal',
  amber: 'badge--amber',
  navy: 'badge--navy',
};

/**
 * Product card used on the homepage and solutions index. When a genuine
 * product screenshot exists it is shown; otherwise a branded panel carrying the
 * product name and its platforms is rendered instead of a stock placeholder.
 */
export function SolutionCard({ solution, priority }: { solution: Solution; priority?: boolean }) {
  return (
    <article className="solution-card">
      <Link className="solution-card__media" to={solution.path} tabIndex={-1} aria-hidden="true">
        {solution.media ? (
          <SmartImage
            src={solution.media.src}
            alt={solution.media.alt}
            priority={priority}
            width={1200}
            height={675}
            objectPosition="top center"
          />
        ) : (
          <span className="solution-card__fallback">
            <span>{solution.category}</span>
            <strong>{solution.name}</strong>
            <span>{solution.platforms.join(' · ')}</span>
          </span>
        )}
      </Link>

      <div className="solution-card__body">
        <div className="solution-card__head">
          <h3>
            <Link to={solution.path}>{solution.name}</Link>
          </h3>
          <span className={`badge ${accentClass[solution.accent]}`}>{solution.category}</span>
        </div>
        <p>{solution.summary}</p>
        <div className="badge-row">
          {solution.platforms.map((platform) => (
            <span className="badge" key={platform}>
              <Icon name={platform === 'Mobile' ? 'Smartphone' : platform === 'Web' ? 'Globe' : 'Monitor'} size={13} />
              {platform}
            </span>
          ))}
        </div>
        <div className="solution-card__footer">
          <Link className="link-arrow" to={solution.path}>
            View solution
            <Icon name="ChevronRight" size={15} />
          </Link>
          <Link className="btn btn--ghost btn--sm" to="/contact">
            Request demo
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------- Project */

export function ProjectCard({ project }: { project: Project }) {
  const isLogo = project.imageStyle === 'logo';

  return (
    <article className="project-card">
      {project.image ? (
        <Link
          className={`project-card__media${isLogo ? ' project-card__media--logo' : ''}`}
          to={project.caseStudy ? `/case-studies/${project.caseStudy}` : '/portfolio'}
          tabIndex={-1}
          aria-hidden="true"
        >
          <SmartImage
            src={project.image}
            alt={project.title}
            width={1200}
            height={750}
            objectPosition="top center"
          />
        </Link>
      ) : null}

      <div className="project-card__body">
        <span className="badge badge--azure">{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="project-card__meta">
          <li>
            <strong>Industry:</strong> {project.industry}
          </li>
          {project.client ? (
            <li>
              <strong>Client:</strong> {project.client}
            </li>
          ) : null}
          <li>
            <strong>Platform:</strong> {project.platforms.join(', ')}
          </li>
          <li>
            <strong>Technology:</strong> {project.technologies.join(', ')}
          </li>
        </ul>
        <div className="project-card__footer">
          {project.caseStudy ? (
            <Link className="link-arrow" to={`/case-studies/${project.caseStudy}`}>
              Read case study
              <Icon name="ChevronRight" size={15} />
            </Link>
          ) : (
            <Link className="link-arrow" to="/request-quote">
              Build something similar
              <Icon name="ChevronRight" size={15} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------- Article */

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="post-card">
      <Link className="post-card__media" to={`/blog/${article.slug}`} tabIndex={-1} aria-hidden="true">
        <SmartImage src={article.heroImage} alt="" width={1200} height={675} objectPosition="center" />
      </Link>
      <div className="post-card__body">
        <div className="post-card__meta">
          <span className="badge badge--navy">{article.category}</span>
          <span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time> · {article.readingMinutes} min
            read
          </span>
        </div>
        <h3>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.description}</p>
        <div className="post-card__footer">
          <Link className="link-arrow" to={`/blog/${article.slug}`}>
            Read article
            <Icon name="ChevronRight" size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ----------------------------------------------------------------- Capability */

export function CapabilityTile({
  icon,
  title,
  text,
  items,
}: {
  icon: string;
  title: string;
  text?: string;
  items?: string[];
}) {
  return (
    <div className="capability">
      <span className="capability__icon" aria-hidden="true">
        <Icon name={icon} size={22} />
      </span>
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
      {items?.length ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
