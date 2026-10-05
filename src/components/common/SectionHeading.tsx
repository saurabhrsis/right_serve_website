import type { ReactNode } from 'react';
import Icon from './Icon';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: 'h2' | 'h3';
  align?: 'left' | 'center';
  id?: string;
  children?: ReactNode;
}

/** Consistent section heading: optional eyebrow, one heading level, optional lead. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Heading = 'h2',
  align = 'left',
  id,
  children,
}: SectionHeadingProps) {
  return (
    <div className={`section-head${align === 'center' ? ' section-head--center' : ''}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading id={id}>{title}</Heading>
      {lead ? <p className="lead">{lead}</p> : null}
      {children}
    </div>
  );
}

export interface BulletListProps {
  items: string[];
  variant?: 'check' | 'plain';
  large?: boolean;
  className?: string;
}

export function BulletList({ items, variant = 'check', large, className }: BulletListProps) {
  if (variant === 'plain') {
    return (
      <ul className={className}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`tick-list${large ? ' tick-list--lg' : ''}${className ? ` ${className}` : ''}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export interface FeatureRowsProps {
  items: { title: string; text: string }[];
  icon?: string;
}

/** Two-column row list used for capability and problem sections on service pages. */
export function FeatureRows({ items, icon = 'CheckCircle2' }: FeatureRowsProps) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item.title}>
          <span className="feature-list__icon" aria-hidden="true">
            <Icon name={icon} size={19} />
          </span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
