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
 * The statement (eyebrow → headline → lead → actions) occupies the left column.
 * The right column carries the proof: a framed screenshot on pages that have
 * one, otherwise an "at a glance" panel built from the page's own badges and
 * facts, so the band never reads as a stranded block of text.
 *
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
          <Link className="btn btn--primary btn--lg" to={primaryCta.to}>
            {primaryCta.label}
            <Icon name="ArrowRight" size={18} className="btn__icon btn__icon--arrow" />
          </Link>
        ) : null}
        {secondaryCta ? (
          <Link className="btn btn--ghost btn--lg" to={secondaryCta.to}>
            {secondaryCta.label}
          </Link>
        ) : null}
      </div>
    ) : null;

  const badgeChips = badges?.length ? (
    <div className="badge-row">
      {badges.map((badge) => (
        <span className="badge" key={badge}>
          <Icon name="Check" size={13} />
          {badge}
        </span>
      ))}
    </div>
  ) : null;

  const factRow = meta?.length ? (
    <div className="hero__facts">
      {meta.map((item) => (
        <span key={item.text}>
          <Icon name={item.icon} size={15} />
          {item.text}
        </span>
      ))}
    </div>
  ) : null;

  const hasAside = Boolean(media) || Boolean(badges?.length || meta?.length);

  const aside = media ? (
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
        {media.caption ? <figcaption className="frame__caption">{media.caption}</figcaption> : null}
      </div>
    </figure>
  ) : hasAside ? (
    <aside className="hero__aside">
      <div className="hero__panel">
        {badges?.length ? (
          <>
            <p className="hero__panel-label">At a glance</p>
            <ul className="hero__panel-list">
              {badges.map((badge) => (
                <li key={badge}>
                  <span className="hero__panel-check" aria-hidden="true">
                    <Icon name="Check" size={13} />
                  </span>
                  <span>{badge}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {meta?.length ? (
          <ul className="hero__panel-meta">
            {meta.map((item) => (
              <li key={item.text}>
                <Icon name={item.icon} size={15} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </aside>
  ) : null;

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

        <div
          className={`hero__inner${
            media ? ' hero__inner--split' : hasAside ? ' hero__inner--text' : ' hero__inner--single'
          }`}
        >
          <div className="hero__copy">
            {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            <p className="hero__lead">{lead}</p>
            {actions}
            {media ? badgeChips : null}
            {media ? factRow : null}
            {children}
          </div>

          {aside}
        </div>
      </div>
    </section>
  );
}
