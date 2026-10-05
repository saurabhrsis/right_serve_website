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
 * The panel on the right switches between real product screens so a visitor
 * sees both halves of the business immediately: software we build and software
 * we already run.
 */
export default function HomeHero() {
  const showcase = featuredSolutions.slice(0, 4);
  const [active, setActive] = useState(0);
  const current = showcase[active];
  const currentMedia = current?.media;

  return (
    <section className="home-hero">
      <div className="container container--wide">
        <div className="home-hero__inner">
          <div className="home-hero__content">
            <div className="home-hero__badges">
              <span className="badge badge--dark">
                <Icon name="MapPin" size={14} />
                Nagpur, Maharashtra
              </span>
              <span className="badge badge--dark">
                <Icon name="Layers" size={14} />
                Custom software + ready products
              </span>
            </div>

            <h1>
              Software that runs your business — <em>built to fit, not to sell</em>
            </h1>

            <p className="home-hero__lead">
              We build custom software, web and mobile applications, ERP systems and AI features for growing
              businesses. Where a ready product already fits, we deploy our own billing, institute, society and
              construction software instead of starting a project from zero.
            </p>

            <div className="home-hero__actions">
              <Link className="btn btn--primary btn--lg" to="/request-quote" data-track="hero_quote">
                Get a project estimate
                <Icon name="ArrowRight" size={18} className="btn__icon btn__icon--arrow" />
              </Link>
              <Link className="btn btn--ghost-light btn--lg" to="/solutions" data-track="hero_solutions">
                See our software
              </Link>
            </div>

            <div className="home-hero__assurance">
              {assurance.map((item) => (
                <span key={item.text}>
                  <Icon name={item.icon} size={15} />
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          <div className="home-hero__visual">
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

              <div className="showcase__footer">
                <p className="showcase__note">Screens from software delivered by our team.</p>
                <Link className="btn btn--light btn--sm" to={current?.path ?? '/solutions'}>
                  Solution details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
