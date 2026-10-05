import SectionHeading from '../common/SectionHeading';
import { technologyGroups } from '../../data/company';

interface TechnologyProps {
  className?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
}

/**
 * Technology stack.
 *
 * Only technologies used in delivered projects are listed — this is a working
 * stack, not a keyword list.
 */
export default function Technology({
  className = 'section section--soft',
  eyebrow = 'Technology',
  title = 'The stack we build and maintain with',
  lead = 'We choose technology based on your requirement, hosting constraints and who will maintain the system — not on what is trending. These are the tools our projects run on today.',
}: TechnologyProps) {
  return (
    <section className={className} id="technology">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} align="center" />
        <div className="grid grid--3">
          {technologyGroups.map((group) => (
            <div className="card card--plain" key={group.title}>
              <h3 className="card__title">{group.title}</h3>
              <div className="badge-row">
                {group.items.map((item) => (
                  <span className="badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted mt-6" style={{ fontSize: 'var(--fs-xs)' }}>
          Where a client already runs on a different stack, we work with it rather than forcing a migration.
        </p>
      </div>
    </section>
  );
}
