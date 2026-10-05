import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import SmartImage from '../common/SmartImage';
import { projects } from '../../data/portfolio';
import { solutions } from '../../data/solutions';
import { site } from '../../data/site';

/**
 * Homepage hero.
 *
 * Built as a composition rather than a stack of text: a three-line headline on
 * the left, and on the right a layered pair of genuine product screens — one
 * custom system, one ready product — so the two halves of the business are
 * visible in the first five seconds.
 */

/** A custom system we delivered — shown in the main frame. */
const customBuild = projects.find((project) => project.slug === 'inventory-management-system');
/** One of our own products — shown as the layered card. */
const productApp = solutions.find((solution) => solution.slug === 'business-management');

const facts = [
  { icon: 'MapPin', text: `Nagpur, Maharashtra · clients across India` },
  { icon: 'Code2', text: 'Custom software, web and mobile' },
  { icon: 'Layers', text: 'Ready products you can deploy now' },
];

export default function HomeHero() {
  return (
    <section className="hero hero--home">
      <div className="container container--wide">
        <div className="hero__inner hero__inner--split">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              Software company in {site.address.city}
            </p>

            <h1>
              Software built
              <br />
              around your
              <br />
              business.
            </h1>

            <p className="hero__lead">
              We build custom web, desktop and mobile systems for businesses — and we already run our own
              billing, ERP and management products.
            </p>

            <div className="hero__actions">
              <Link className="btn btn--primary btn--lg" to="/request-quote" data-track="hero_quote">
                Request a quote
                <Icon name="ArrowRight" size={18} className="btn__icon btn__icon--arrow" />
              </Link>
              <Link className="btn btn--ghost btn--lg" to="/portfolio" data-track="hero_work">
                See delivered work
              </Link>
            </div>

            <div className="hero__facts">
              {facts.map((fact) => (
                <span key={fact.text}>
                  <Icon name={fact.icon} size={15} />
                  {fact.text}
                </span>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="stage">
              <span className="stage__glow" aria-hidden="true" />

              <figure className="stage__main">
                <div className="frame">
                  <div className="frame__bar">
                    <span className="frame__dot" />
                    <span className="frame__dot" />
                    <span className="frame__dot" />
                    <span className="frame__label">{customBuild?.title ?? 'Custom system'}</span>
                  </div>
                  <div className="frame__screen">
                    {customBuild?.image ? (
                      <SmartImage
                        src={customBuild.image}
                        alt={`${customBuild.title} — ${customBuild.industry}`}
                        width={1200}
                        height={750}
                        priority
                        objectPosition="top center"
                      />
                    ) : (
                      <div className="ui-mock" role="img" aria-label="Interface layout of a custom system we built">
                        <div className="ui-mock__side" aria-hidden="true">
                          <span className="ui-mock__dot ui-mock__dot--accent" />
                          <span className="ui-mock__dot" />
                          <span className="ui-mock__dot" />
                          <span className="ui-mock__dot" />
                          <span className="ui-mock__dot" />
                        </div>
                        <div className="ui-mock__body" aria-hidden="true">
                          <div className="ui-mock__cards">
                            <span className="ui-mock__card ui-mock__card--accent" />
                            <span className="ui-mock__card" />
                            <span className="ui-mock__card" />
                          </div>
                          <div className="ui-mock__rows">
                            <span className="ui-mock__row" />
                            <span className="ui-mock__row" />
                            <span className="ui-mock__row ui-mock__row--short" />
                          </div>
                          <span className="ui-mock__label">System layout</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </figure>

              {productApp?.media ? (
                <figure className="stage__float">
                  <img
                    src={productApp.media.src}
                    alt={productApp.media.alt}
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="stage__tag">
                    <Icon name="Layers" size={13} />
                    {productApp.navTitle} · our product
                  </figcaption>
                </figure>
              ) : null}
            </div>

            <div className="stage__caption">
              <span>
                <Icon name="Monitor" size={14} />
                Desktop
              </span>
              <span>
                <Icon name="Globe" size={14} />
                Web
              </span>
              <span>
                <Icon name="Smartphone" size={14} />
                Mobile
              </span>
              <span>Screens from software delivered by our team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
