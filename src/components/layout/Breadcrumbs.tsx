import { Link } from 'react-router-dom';
import Icon from '../common/Icon';

export interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  /**
   * `bar`   — standalone strip on the page background (used outside heroes).
   * `hero`  — light-on-dark trail rendered inside a page hero.
   */
  variant?: 'bar' | 'hero';
}

/**
 * Visible breadcrumb trail. The matching BreadcrumbList schema is emitted from
 * each page's SEO configuration so both stay in sync.
 */
export default function Breadcrumbs({ items, variant = 'bar' }: BreadcrumbsProps) {
  if (!items.length) return null;

  const trail = (
    <ol>
      <li>
        <Link to="/">Home</Link>
        <Icon name="ChevronRight" size={14} />
      </li>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={`${item.label}-${index}`}>
            {item.path && !isLast ? (
              <>
                <Link to={item.path}>{item.label}</Link>
                <Icon name="ChevronRight" size={14} />
              </>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        );
      })}
    </ol>
  );

  if (variant === 'hero') {
    return (
      <nav className="breadcrumbs breadcrumbs--hero" aria-label="Breadcrumb">
        {trail}
      </nav>
    );
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container container--wide">{trail}</div>
    </nav>
  );
}
