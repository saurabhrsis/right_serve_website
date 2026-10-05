import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import SmartImage from '../common/SmartImage';
import { featuredSolutions } from '../../data/solutions';

const assurance = [
  { icon: 'CheckCircle2', text: 'Custom development to your workflow' },
  { icon: 'Layers', text: 'Industry software ready to deploy' },
  { icon: 'Headphones', text: 'Support after go-live' },
];

/**
 * Homepage hero.
 *
 * The right-hand panel switches between real product screens so a visitor sees
 * both halves of the business immediately: software we build and software we
 * already run.
 */
export default function HomeHero() {
  const showcase = featuredSolutions.slice(0, 4);
  const [active, setActive] = useState(0);
  const current = showcase[active];
  const currentMedia = current?.media;

  return (
    <section className="home-hero">
      <div className="page-hero__pattern" aria-hidden="true" />
      <div className="container container--wide">
        <div className="home-hero__inner">
          <div>
            <div className="home-hero__badges">
              <span className="badge badge--dark">
                <Icon name="MapPin" size={14} />
                Nagpur, Maharashtra
              </span>
              <span className="badge badge--dark">
                <Icon name="Calendar" size={14} />
                Serving businesses since 2019
              </span>
            </div>

            <h1>Custom software and digital systems built around your business</h1>

            <p className="home-hero__lead">
              We are a software development and technology solutions company. We build custom software, web
              applications, mobile apps, ERP systems and AI-powered features — and we also deploy our own billing,
              institute, society and construction software where a ready solution fits your business.
            </p>

            <div className="home-hero__actions">
              <Link className="btn btn--primary btn--lg" to="/request-quote" data-track="hero_quote">
                Start your project
                <Icon name="ArrowRight" size={18} className="btn__icon btn__icon--arrow" />
              </Link>
              <Link className="btn btn--ghost-light btn--lg" to="/solutions" data-track="hero_solutions">
                Explore our solutions
              </Link>
            </div>

            <div className="home-hero__assurance">
              {assurance.map((item) => (
                <span key={item.text}>
                  <Icon name={item.icon} size={16} />
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="showcase">
              <div className="showcase__bar">
                <span className="showcase__dot" />
                <span className="showcase__dot" />
                <span className="showcase__dot" />
                <span className="showcase__label">{current?.name}</span>
              </div>

              <div className="showcase__shot">
                {currentMedia ? (
                  <SmartImage
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    width={1200}
                    height={750}
                    priority={active === 0}
                    objectPosition="top center"
                  />
                ) : (
                  <div className="solution-card__fallback">
                    <span>{current?.category}</span>
                    <strong>{current?.name}</strong>
                    <span>{current?.platforms.join(' · ')}</span>
                  </div>
                )}
              </div>

              <div className="showcase__thumbs" role="tablist" aria-label="Software screenshots">
                {showcase.map((solution, index) => (
                  <button
                    type="button"
                    role="tab"
                    key={solution.slug}
                    className="showcase__thumb"
                    aria-selected={index === active}
                    aria-pressed={index === active}
                    onClick={() => setActive(index)}
                  >
                    {solution.media ? (
                      <img src={solution.media.src} alt="" loading="lazy" decoding="async" />
                    ) : null}
                    <span>{solution.navTitle}</span>
                  </button>
                ))}
              </div>

              <div className="mt-4" style={{ textAlign: 'right' }}>
                <Link className="btn btn--light btn--sm" to={current?.path ?? '/solutions'}>
                  View solution details
                </Link>
              </div>
            </div>
            <p className="text-muted mt-4 mb-0" style={{ fontSize: 'var(--fs-xs)' }}>
              Screens shown are from software delivered by our team — institute ERP, business management and
              document generation modules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
