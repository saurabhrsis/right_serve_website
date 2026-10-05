import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import SmartImage from './SmartImage';
import Breadcrumbs, { type Crumb } from '../layout/Breadcrumbs';

export interface HeroMetaItem {
  icon: string;
  text: string;
}

interface PageHeroProps {
  /** Trail shown on the dark band; the parent page supplies the items. */
  breadcrumbs?: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lead: ReactNode;
  badges?: string[];
  meta?: HeroMetaItem[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  media?: { src: string; alt: string; caption?: string; label?: string };
  /** `light` for legal and utility pages, `dark` (default) elsewhere. */
  variant?: 'dark' | 'light';
  /** Shorter band used by policy and confirmation pages. */
  compact?: boolean;
  children?: ReactNode;
}

/**
 * Standard page header used by every non-home page.
 *
 * Two compositions keep the band from looking empty:
 *  - with media  → copy on the left, framed screenshot on the right;
 *  - without media → editorial split, headline on the left, copy and actions
 *    on the right.
 * Every page renders exactly one H1 here.
 */
export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  badges,
  meta,
  primaryCta,
  secondaryCta,
  media,
  variant = 'dark',
  compact,
  children,
}: PageHeroProps) {
  const actions =
    primaryCta || secondaryCta ? (
      <div className="page-hero__actions">
        {primaryCta ? (
          <Link className="btn btn--primary btn--lg" to={primaryCta.to}>
            {primaryCta.label}
            <Icon name="ArrowRight" size={18} className="btn__icon btn__icon--arrow" />
          </Link>
        ) : null}
        {secondaryCta ? (
          <Link className="btn btn--ghost-light btn--lg" to={secondaryCta.to}>
            {secondaryCta.label}
          </Link>
        ) : null}
      </div>
    ) : null;

  const badgeRow = badges?.length ? (
    <div className="badge-row">
      {badges.map((badge) => (
        <span className="badge badge--dark" key={badge}>
          <Icon name="Check" size={14} />
          {badge}
        </span>
      ))}
    </div>
  ) : null;

  const metaRow = meta?.length ? (
    <div className="page-hero__meta">
      {meta.map((item) => (
        <span className="page-hero__meta-item" key={item.text}>
          <Icon name={item.icon} size={15} />
          {item.text}
        </span>
      ))}
    </div>
  ) : null;

  const eyebrowChip = eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null;

  const className = [
    'page-hero',
    variant === 'light' ? 'page-hero--light' : '',
    compact ? 'page-hero--compact' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={className}>
      <div className="container container--wide">
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} variant="hero" /> : null}

        <div className={`page-hero__inner ${media ? 'page-hero__inner--split' : 'page-hero__inner--text'}`}>
          {media ? (
            <>
              <div className="page-hero__content">
                {eyebrowChip}
                <h1>{title}</h1>
                <p className="lead">{lead}</p>
                {badgeRow}
                {actions}
                {metaRow}
                {children}
              </div>

              <figure className="page-hero__visual">
                <div className="hero-frame">
                  <div className="hero-frame__bar">
                    <span className="hero-frame__dot" />
                    <span className="hero-frame__dot" />
                    <span className="hero-frame__dot" />
                    <span className="hero-frame__label">{media.label ?? 'Software preview'}</span>
                  </div>
                  <div className="hero-frame__body">
                    <SmartImage src={media.src} alt={media.alt} width={1200} height={750} objectPosition="top center" />
                  </div>
                  {media.caption ? <p className="hero-frame__caption">{media.caption}</p> : null}
                </div>
              </figure>
            </>
          ) : (
            <>
              <div className="page-hero__title">
                {eyebrowChip}
                <h1>{title}</h1>
              </div>
              <div className="page-hero__copy">
                <p className="lead">{lead}</p>
                {badgeRow}
                {actions}
                {metaRow}
                {children}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
