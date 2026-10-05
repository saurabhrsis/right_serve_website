import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import { processSteps } from '../../data/company';

interface ProcessProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  variant?: 'light' | 'dark';
  id?: string;
  /** Show only the first N steps (the homepage shows a shorter summary). */
  limit?: number;
  align?: 'left' | 'center';
  /** Optional link rendered under the steps. */
  cta?: { label: string; to: string };
}

/** Delivery process used on the homepage, services index and about page. */
export default function Process({
  eyebrow = 'Development process',
  title = 'How a project runs, from first discussion to support',
  lead = 'A repeatable process keeps scope, expectations and timelines visible. Each stage produces something you review and approve before the next one begins.',
  variant = 'light',
  id = 'process',
  limit,
  align = 'center',
  cta,
}: ProcessProps) {
  const steps = limit ? processSteps.slice(0, limit) : processSteps;

  return (
    <section className={`section${variant === 'dark' ? ' section--surface' : ' section--muted'}`} id={id}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} align={align} />
        <ol className="steps">
          {steps.map((step, index) => (
            <Reveal as="li" className="step" key={step.number} delay={index * 40}>
              <span className="step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>

        {cta ? (
          <div className="btn-row btn-row--center mt-7">
            <Link className="btn btn--ghost" to={cta.to}>
              {cta.label}
              <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
