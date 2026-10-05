import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import Icon from '../components/common/Icon';

const links = [
  { label: 'Home', path: '/', description: 'Company overview and products' },
  { label: 'Services', path: '/services', description: 'What we build for clients' },
  { label: 'Solutions', path: '/solutions', description: 'Ready business software' },
  { label: 'Portfolio', path: '/portfolio', description: 'Delivered projects' },
  { label: 'Case studies', path: '/case-studies', description: 'Problem to outcome' },
  { label: 'Contact', path: '/contact', description: 'Talk to our team' },
];

export default function NotFound() {
  return (
    <>
      <Seo
        path="/404"
        title="Page not found | Right Serve Infotech System"
        description="The page you were looking for could not be found. Use the links below to continue browsing our services, software solutions and projects."
        robots="noindex, follow"
      />

      <div className="container">
        <div className="error-page">
          <div>
            <p className="error-page__code" aria-hidden="true">
              404
            </p>
            <h1>Page not found</h1>
            <p className="lead" style={{ marginInline: 'auto' }}>
              The page you were looking for has been moved, renamed or never existed. Everything on this site is
              reachable from the links below.
            </p>

            <h2 className="mt-7" style={{ fontSize: 'var(--fs-h4)' }}>
              Where to go next
            </h2>

            <ul className="error-page__links">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    {link.label}
                    <span>{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="btn-row btn-row--center mt-7">
              <Link className="btn btn--primary" to="/request-quote">
                Request a Quote
                <Icon name="ArrowRight" size={17} className="btn__icon btn__icon--arrow" />
              </Link>
              <a className="btn btn--ghost" href="/sitemap.xml">
                View sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
