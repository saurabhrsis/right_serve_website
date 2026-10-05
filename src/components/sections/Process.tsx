import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import { processSteps } from '../../data/company';

interface ProcessProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  variant?: 'light' | 'navy';
  id?: string;
}

/** Delivery process used on the homepage, services index and about page. */
export default function Process({
  eyebrow = 'Development process',
  title = 'How a project runs, from first discussion to support',
  lead = 'A repeatable process keeps scope, expectations and timelines visible. Each stage produces something you review and approve before the next one begins.',
  variant = 'light',
  id = 'process',
}: ProcessProps) {
  const steps = variant === 'navy' ? processSteps.slice(0, 7) : processSteps;

  return (
    <section className={`section${variant === 'navy' ? ' section--navy' : ' section--soft'}`} id={id}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} align="center" />
        <ol className="steps">
          {steps.map((step, index) => (
            <Reveal as="li" className="step" key={step.number} delay={index * 40}>
              <span className="step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
