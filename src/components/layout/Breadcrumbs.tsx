import { Link } from 'react-router-dom';
import Icon from '../common/Icon';

export interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

/**
 * Visible breadcrumb trail. The matching BreadcrumbList schema is emitted from
 * each page's SEO configuration so both stay in sync.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container container--wide">
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
      </div>
    </nav>
  );
}
