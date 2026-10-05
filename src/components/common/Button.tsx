import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

type Variant = 'primary' | 'navy' | 'ghost' | 'ghost-light' | 'light';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: Size;
  block?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  /** Marks the link as external, adding rel and target attributes. */
  external?: boolean;
  track?: string;
}

const classNames = (variant: Variant, size: Size, block?: boolean, className?: string) =>
  [
    'btn',
    variant !== 'primary' ? `btn--${variant}` : 'btn--primary',
    size !== 'md' ? `btn--${size}` : '',
    block ? 'btn--block' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  block,
  icon,
  iconPosition = 'right',
  className,
  disabled,
  ariaLabel,
  external,
  track,
}: ButtonProps) {
  const classes = classNames(variant, size, block, className);
  const iconNode = icon ? (
    <Icon name={icon} size={size === 'lg' ? 19 : 17} className={iconPosition === 'right' ? 'btn__icon btn__icon--arrow' : 'btn__icon'} />
  ) : null;

  const content = (
    <>
      {iconPosition === 'left' ? iconNode : null}
      <span>{children}</span>
      {iconPosition === 'right' ? iconNode : null}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} data-track={track}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        data-track={track}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      data-track={track}
    >
      {content}
    </button>
  );
}
