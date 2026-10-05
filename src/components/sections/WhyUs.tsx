import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
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
        <ol className="steps steps--proof">
          {items.map((item, index) => (
            <Reveal as="li" className="step" key={item.title} delay={(index % 3) * 50}>
              <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
