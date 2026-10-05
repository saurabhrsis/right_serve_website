import type { ReactNode } from 'react';
import Icon from './Icon';

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  items: FaqItem[];
  /** Heading level for questions; the section heading should sit one level above. */
  headingLevel?: 'h2' | 'h3';
}

/**
 * Accessible FAQ accordion built on native <details>/<summary>, so it works
 * with keyboard navigation and without JavaScript.
 */
export default function Faq({ items, headingLevel: Heading = 'h3' }: FaqProps) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details className="faq__item" key={item.q}>
          <summary className="faq__question">
            <Heading className="mb-0">{item.q}</Heading>
            <Icon name="Plus" size={20} aria-hidden />
          </summary>
          <div className="faq__answer">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export interface FaqSectionProps {
  items: FaqItem[];
  title?: ReactNode;
  eyebrow?: string;
  lead?: ReactNode;
  className?: string;
  id?: string;
}

export function FaqSection({
  items,
  title = 'Frequently asked questions',
  eyebrow = 'FAQ',
  lead,
  className = 'section',
  id = 'faq',
}: FaqSectionProps) {
  if (!items.length) return null;

  return (
    <section className={className} id={id} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <div className="split split--wide-left" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 id={`${id}-heading`}>{title}</h2>
            {lead ? <p className="lead">{lead}</p> : null}
          </div>
          <Faq items={items} />
        </div>
      </div>
    </section>
  );
}
