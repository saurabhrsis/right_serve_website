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
  /** Trail shown above the headline; the parent page supplies the items. */
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
 * Two compositions keep the band from reading as an empty coloured strip:
 *  - with media  → headline on the left, framed screenshot on the right;
 *  - without media → editorial split: headline left, copy and actions right.
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
      <div className="hero__actions">
        {primaryCta ? (
          <Link className="btn btn--primary" to={primaryCta.to}>
            {primaryCta.label}
            <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
          </Link>
        ) : null}
        {secondaryCta ? (
          <Link className="btn btn--ghost" to={secondaryCta.to}>
            {secondaryCta.label}
          </Link>
        ) : null}
      </div>
    ) : null;

  const badgeRow = badges?.length ? (
    <div className="badge-row">
      {badges.map((badge) => (
        <span className="badge" key={badge}>
          <Icon name="Check" size={13} />
          {badge}
        </span>
      ))}
    </div>
  ) : null;

  const metaRow = meta?.length ? (
    <div className="hero__facts">
      {meta.map((item) => (
        <span key={item.text}>
          <Icon name={item.icon} size={15} />
          {item.text}
        </span>
      ))}
    </div>
  ) : null;

  const eyebrowLine = eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null;

  const className = [
    'hero',
    'hero--page',
    variant === 'light' ? 'theme-light' : '',
    compact ? 'hero--compact' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={className}>
      <div className="container container--wide">
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} variant="hero" /> : null}

        <div className={`hero__inner ${media ? 'hero__inner--split' : 'hero__inner--text'}`}>
          {media ? (
            <>
              <div className="hero__copy">
                {eyebrowLine}
                <h1>{title}</h1>
                <p className="hero__lead">{lead}</p>
                {badgeRow}
                {actions}
                {metaRow}
                {children}
              </div>

              <figure className="hero__visual">
                <div className="frame">
                  <div className="frame__bar">
                    <span className="frame__dot" />
                    <span className="frame__dot" />
                    <span className="frame__dot" />
                    <span className="frame__label">{media.label ?? 'Software preview'}</span>
                  </div>
                  <div className="frame__screen">
                    <SmartImage
                      src={media.src}
                      alt={media.alt}
                      width={1200}
                      height={750}
                      priority
                      objectPosition="top center"
                    />
                  </div>
                  {media.caption ? <p className="frame__caption">{media.caption}</p> : null}
                </div>
              </figure>
            </>
          ) : (
            <>
              <div className="hero__title">
                {eyebrowLine}
                <h1>{title}</h1>
              </div>
              <div className="hero__copy">
                <p className="hero__lead">{lead}</p>
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
