import Icon from '../common/Icon';
import { site } from '../../data/site';

const facts = [
  { icon: 'Calendar', text: `Delivering software and IT solutions since ${site.workingSince}` },
  { icon: 'Code2', text: 'Custom software, web, desktop and mobile development' },
  { icon: 'Layers', text: 'Six industry software products ready to deploy' },
  { icon: 'Server', text: 'Software and IT infrastructure from one team' },
  { icon: 'MapPin', text: `Based in ${site.address.city}, serving clients across India` },
];

/**
 * Factual capability strip for the homepage.
 * Every statement is verifiable from the company's own records — there are no
 * counters, awards or client numbers here.
 */
export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Company capability summary">
      <div className="container container--wide">
        <div className="trust-strip__inner">
          <p className="trust-strip__label mb-0">At a glance</p>
          <ul className="trust-strip__items">
            {facts.map((fact) => (
              <li key={fact.text}>
                <Icon name={fact.icon} size={17} />
                {fact.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
