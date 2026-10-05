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
 * Credibility band directly under the homepage hero: the clients whose projects
 * are published in our portfolio, plus capability statements the company can
 * verify from its own records. No counters, awards or invented figures.
 */
export default function TrustStrip() {
  return (
    <section className="proof-band" aria-label="Clients and capabilities">
      <div className="container container--wide">
        <div className="proof-band__label">
          <span>Working with</span>
          <Link className="link-arrow" to="/portfolio">
            See the projects
            <Icon name="ArrowRight" size={15} />
          </Link>
        </div>

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

        <ul className="proof-band__facts">
          {facts.map((fact) => (
            <li key={fact.text}>
              <Icon name={fact.icon} size={16} />
              {fact.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
