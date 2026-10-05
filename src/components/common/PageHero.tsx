import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import SmartImage from './SmartImage';

export interface HeroMetaItem {
  icon: string;
  text: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lead: ReactNode;
  badges?: string[];
  meta?: HeroMetaItem[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  media?: { src: string; alt: string; caption?: string };
  variant?: 'dark' | 'light';
  children?: ReactNode;
}

/**
 * Standard page header used by every non-home page: one H1, supporting copy,
 * optional calls to action and an optional supporting visual.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  badges,
  meta,
  primaryCta,
  secondaryCta,
  media,
  variant = 'dark',
  children,
}: PageHeroProps) {
  return (
    <section className={`page-hero${variant === 'light' ? ' page-hero--light' : ''}`}>
      {variant === 'dark' ? <div className="page-hero__pattern" aria-hidden="true" /> : null}
      <div className="container container--wide">
        <div className={`page-hero__inner${media ? ' page-hero__inner--split' : ''}`}>
          <div>
            {eyebrow ? <p className="eyebrow page-hero__eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            <p className="lead">{lead}</p>

            {badges?.length ? (
              <div className="badge-row mt-5">
                {badges.map((badge) => (
                  <span className="badge badge--dark" key={badge}>
                    <Icon name="Check" size={14} />
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}

            {primaryCta || secondaryCta ? (
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
            ) : null}

            {meta?.length ? (
              <div className="page-hero__meta">
                {meta.map((item) => (
                  <span className="page-hero__meta-item" key={item.text}>
                    <Icon name={item.icon} size={16} />
                    {item.text}
                  </span>
                ))}
              </div>
            ) : null}

            {children}
          </div>

          {media ? (
            <figure className="product-visual mb-0">
              <SmartImage src={media.src} alt={media.alt} priority={false} width={1200} height={760} />
              {media.caption ? <figcaption>{media.caption}</figcaption> : null}
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}
