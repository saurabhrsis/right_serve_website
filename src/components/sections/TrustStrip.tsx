import Icon from '../common/Icon';
import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import { clientLogos } from '../../data/portfolio';

const facts = [
  { icon: 'Code2', text: 'Custom software, web and mobile development' },
  { icon: 'Layers', text: 'Industry software products ready to deploy' },
  { icon: 'Server', text: 'Software, cloud and IT infrastructure from one team' },
  { icon: 'MapPin', text: `Based in ${site.address.city}, working with clients across India` },
];

/**
 * Credibility band directly under the homepage hero: factual capability chips
 * plus the clients whose projects are published in our portfolio.
 *
 * No counters, awards or numbers appear here — only statements the company can
 * verify from its own records.
 */
export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Company capability and clients">
      <div className="container container--wide">
        <div className="trust-strip__inner">
          <ul className="trust-strip__items">
            {facts.map((fact) => (
              <li key={fact.text}>
                <Icon name={fact.icon} size={17} />
                {fact.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="trust-strip__clients">
          <p className="trust-strip__label mb-0">Working with</p>
          <ul className="logo-rail">
            {clientLogos.map((client) => (
              <li key={client.name}>
                <img
                  src={client.logo}
                  alt={`${client.name} — ${client.industry}`}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
          <Link className="link-arrow trust-strip__link" to="/portfolio">
            See the projects
            <Icon name="ArrowRight" size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
