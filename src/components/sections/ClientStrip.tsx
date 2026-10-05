import SectionHeading from '../common/SectionHeading';
import { clientLogos } from '../../data/portfolio';
import { clientStatements } from '../../data/company';
import Icon from '../common/Icon';

interface ClientStripProps {
  className?: string;
  showStatements?: boolean;
  logoLimit?: number;
}

/**
 * Client credibility strip.
 *
 * Shows only clients the company has publicly listed as project clients, with
 * the logos that exist in the project records.
 */
export default function ClientStrip({
  className = 'section section--soft',
  showStatements = true,
  logoLimit,
}: ClientStripProps) {
  const logos = logoLimit ? clientLogos.slice(0, logoLimit) : clientLogos;

  return (
    <section className={className} id="clients">
      <div className="container">
        <SectionHeading
          eyebrow="Clients"
          title="Businesses we have worked with"
          lead="A selection of clients whose projects — websites, applications and business software — are part of our portfolio."
          align="center"
        />

        <ul className="logo-strip">
          {logos.map((client) => (
            <li key={client.name}>
              <img src={client.logo} alt={`${client.name} — ${client.industry}`} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>

        {showStatements ? (
          <div className="grid grid--2 mt-7">
            {clientStatements.map((statement) => (
              <figure className="quote-card" key={statement.name}>
                <Icon name="Quote" size={20} />
                <blockquote>{statement.quote}</blockquote>
                <figcaption>
                  <div>
                    <span className="quote-card__name">{statement.name}</span>
                    <span className="quote-card__role">{statement.company}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
