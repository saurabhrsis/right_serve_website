import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import SmartImage from '../common/SmartImage';
import { projects, clientLogos } from '../../data/portfolio';
import { featuredSolutions } from '../../data/solutions';
import { site } from '../../data/site';

/**
 * Homepage hero.
 *
 * Composition rather than a text block: a statement on the left, a real
 * screenshot of delivered software on the right with a product card layered
 * over it, and the client logo rail closing the band.
 */

const showpiece = projects.find((project) => project.slug === 'mdr-management-software');

const facts = [
  { icon: 'MapPin', text: `Based in ${site.address.city}, working across India` },
  { icon: 'Code2', text: 'Custom software, web and mobile development' },
  { icon: 'Layers', text: 'Our own billing and ERP products, ready to deploy' },
];

export default function HomeHero() {
  return (
    <section className="hero hero--home">
      <div className="container container--wide">
        <div className="hero__inner hero__inner--split">
          <div className="hero__copy">
            <p className="hero__eyebrow">Software company in {site.address.city}</p>

            <h1>
              <span className="hero__line">Software built</span>{' '}
              <span className="hero__line">around your</span>{' '}
              <span className="hero__line">business.</span>
            </h1>

            <p className="hero__lead">
              We build custom web, desktop and mobile systems for growing businesses — and we run our own billing,
              ERP and management products, so you can start from working software.
            </p>

            <div className="hero__actions">
              <Link className="btn btn--primary btn--lg" to="/request-quote" data-track="hero_quote">
                Request a quote
                <Icon name="ArrowRight" size={18} className="btn__icon btn__icon--arrow" />
              </Link>
              <Link className="btn btn--ghost btn--lg" to="/solutions" data-track="hero_solutions">
                See our products
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

              {showpiece?.image ? (
                <figure className="stage__main">
                  <div className="frame">
                    <div className="frame__bar">
                      <span className="frame__dot" />
                      <span className="frame__dot" />
                      <span className="frame__dot" />
                      <span className="frame__label">{showpiece.title}</span>
                    </div>
                    <div className="frame__screen">
                      <SmartImage
                        src={showpiece.image}
                        alt={`${showpiece.title} — ${showpiece.industry}`}
                        width={1366}
                        height={648}
                        priority
                        objectPosition="top center"
                      />
                    </div>
                  </div>
                  <figcaption className="stage__caption">
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
                    <span>Delivered and supported by our team</span>
                  </figcaption>
                </figure>
              ) : null}

              <aside className="stage__card">
                <p className="stage__card-label">Ready products</p>
                <ul className="stage__card-list">
                  {featuredSolutions.slice(0, 4).map((solution) => (
                    <li key={solution.slug}>
                      <Icon name="Check" size={13} />
                      {solution.navTitle}
                    </li>
                  ))}
                </ul>
                <Link className="link-arrow stage__card-link" to="/solutions">
                  Explore products
                  <Icon name="ArrowRight" size={15} />
                </Link>
              </aside>
            </div>
          </div>
        </div>

        <div className="hero__logos">
          <p className="hero__logos-label">Working with businesses in Nagpur and across India</p>
          <ul className="logo-rail">
            {clientLogos.map((client) => (
              <li key={client.name}>
                <img src={client.logo} alt={`${client.name} — ${client.industry}`} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
