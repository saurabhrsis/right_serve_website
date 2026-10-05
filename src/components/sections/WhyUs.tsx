import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';
import { differentiators } from '../../data/company';

interface WhyUsProps {
  className?: string;
  title?: string;
  lead?: string;
  limit?: number;
}

/** Reasons stated as concrete capabilities rather than marketing adjectives. */
export default function WhyUs({
  className = 'section',
  title = 'Why businesses work with us',
  lead = 'These are the reasons clients give us, in the terms they use — not adjectives we have written about ourselves.',
  limit,
}: WhyUsProps) {
  const items = limit ? differentiators.slice(0, limit) : differentiators;

  return (
    <section className={className} id="why-us">
      <div className="container">
        <SectionHeading eyebrow="Why Right Serve" title={title} lead={lead} />
        <div className="grid grid--2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 60}>
              <div className="card card--soft" style={{ height: '100%' }}>
                <span className="card__icon" aria-hidden="true">
                  <Icon name="CheckCircle2" size={22} />
                </span>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
