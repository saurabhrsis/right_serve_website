import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';
import { industries } from '../../data/company';

interface IndustriesProps {
  limit?: number;
  eyebrow?: string;
  title?: string;
  lead?: string;
  className?: string;
}

/**
 * Industries list. Each entry corresponds to work the company has actually
 * delivered — no additional sectors are claimed.
 */
export default function Industries({
  limit,
  eyebrow = 'Industries',
  title = 'Industries we have delivered software for',
  lead = 'Our projects and products cover the sectors below. If your industry is not listed, the same engineering approach applies — the first conversation is about your workflow, not a template.',
  className = 'section',
}: IndustriesProps) {
  const list = limit ? industries.slice(0, limit) : industries;

  return (
    <section className={className} id="industries">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <div className="grid grid--3">
          {list.map((industry, index) => (
            <Reveal key={industry.name} delay={(index % 3) * 60}>
              <div className="industry-tile">
                <span className="industry-tile__icon" aria-hidden="true">
                  <Icon name={industry.icon} size={20} />
                </span>
                <div>
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
