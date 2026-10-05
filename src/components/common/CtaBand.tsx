import { Link } from 'react-router-dom';

export interface CtaBandProps {
  title: string;
  text: string;
  primaryLabel: string;
  primaryPath?: string;
  secondaryLabel?: string;
  secondaryPath?: string;
  /** Extra content such as phone / WhatsApp links. */
  aside?: React.ReactNode;
  fullWidth?: boolean;
}

/** Conversion band used above the footer and at the end of key pages. */
export default function CtaBand({
  title,
  text,
  primaryLabel,
  primaryPath = '/request-quote',
  secondaryLabel,
  secondaryPath = '/contact',
  aside,
  fullWidth,
}: CtaBandProps) {
  return (
    <section className={`section${fullWidth ? ' section--full' : ''}`} aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-band">
          <div className="cta-band__inner">
            <div>
              <h2 id="cta-heading">{title}</h2>
              <p>{text}</p>
              {aside ? <div className="cta-band__aside">{aside}</div> : null}
            </div>
            <div className="cta-band__actions">
              <Link className="btn btn--light" to={primaryPath} data-track="cta-primary">
                {primaryLabel}
              </Link>
              {secondaryLabel ? (
                <Link className="btn btn--ghost-light" to={secondaryPath} data-track="cta-secondary">
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
