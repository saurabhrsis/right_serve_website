import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from '../common/Icon';
import { site } from '../../data/site';
import { servicesNav } from '../../data/services';
import { solutionsNav } from '../../data/solutions';
import { trackEvent } from '../../services/analytics';

interface NavItem {
  label: string;
  to: string;
  children?: {
    title: string;
    description: string;
    path: string;
    icon: string;
  }[];
}

const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', children: servicesNav },
  { label: 'Solutions', to: '/solutions', children: solutionsNav },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const MOBILE_NAV_ID = 'mobile-primary-navigation';

export default function Header() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const isActive = useCallback(
    (item: NavItem) => {
      if (item.to === '/') return location.pathname === '/';
      if (item.children) return location.pathname.startsWith(item.to);
      return location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
    },
    [location.pathname],
  );

  // Close the mobile menu and any dropdown when the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open, and close on Escape.
  useEffect(() => {
    document.body.classList.toggle('is-locked', mobileOpen);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('is-locked');
    };
  }, [mobileOpen]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header className="site-header">
      <div className="container container--wide site-header__inner">
        <Link to="/" className="site-header__brand" aria-label={`${site.name} — home`}>
          <img
            src={site.logoMark}
            alt=""
            className="site-header__brand-mark"
            width={44}
            height={44}
            decoding="async"
          />
          <span className="site-header__brand-text">
            <span className="site-header__brand-name">Right Serve Infotech</span>
            <span className="site-header__brand-sub">System Pvt. Ltd.</span>
          </span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <ul className="site-header__list">
            {navigation.map((item) => {
              const active = isActive(item);

              if (!item.children) {
                return (
                  <li className="site-header__item" key={item.to}>
                    <NavLink
                      to={item.to}
                      className={`nav-link${active ? ' is-active' : ''}`}
                      aria-current={location.pathname === item.to ? 'page' : undefined}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              }

              const expanded = openMenu === item.label;

              return (
                <li
                  className="site-header__item"
                  key={item.to}
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className={`nav-link${active ? ' is-active' : ''}`}
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(expanded ? null : item.label)}
                  >
                    {item.label}
                    <Icon name="ChevronDown" size={14} className="nav-link__chevron" />
                  </button>
                  <div className={`nav-dropdown${expanded ? ' is-open' : ''}`} role="group" aria-label={item.label}>
                    <ul className="nav-dropdown__list">
                      {item.children.map((child) => (
                        <li className="nav-dropdown__item" key={child.path}>
                          <Link className="nav-dropdown__link" to={child.path}>
                            <span className="nav-dropdown__icon" aria-hidden="true">
                              <Icon name={child.icon} size={17} />
                            </span>
                            <span>
                              <span className="nav-dropdown__title">{child.title}</span>
                              <span className="nav-dropdown__desc">{child.description}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="nav-dropdown__footer">
                      <Link
                        className="link-arrow"
                        to={item.to}
                        onClick={() => trackEvent('nav_view_all', { section: item.label.toLowerCase() })}
                      >
                        View all {item.label.toLowerCase()}
                        <Icon name="ChevronRight" size={15} />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a
            className="site-header__phone"
            href={site.phones[0].href}
            onClick={() => trackEvent('phone_click', { source: 'header' })}
          >
            <Icon name="Phone" size={16} />
            {site.phones[0].display}
          </a>
          <Link className="btn btn--primary btn--sm" to="/request-quote" data-track="header_quote">
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-controls={MOBILE_NAV_ID}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {mobileOpen ? (
        <div className="mobile-nav" id={MOBILE_NAV_ID}>
          <div className="mobile-nav__inner">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            {navigation.slice(1).map((item) =>
              item.children ? (
                <details className="mobile-nav__group" key={item.to}>
                  <summary>
                    {item.label}
                    <Icon name="ChevronDown" size={18} />
                  </summary>
                  <ul className="mobile-nav__sublist">
                    <li>
                      <Link to={item.to}>All {item.label}</Link>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path}>{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <div className="mobile-nav__group" key={item.to}>
                  <NavLink
                    to={item.to}
                    className="nav-link"
                    style={{ display: 'block', padding: '0.85rem 0', fontSize: '1.02rem' }}
                  >
                    {item.label}
                  </NavLink>
                </div>
              ),
            )}
          </div>
          <div className="mobile-nav__actions">
            <Link className="btn btn--primary" to="/request-quote">
              Request a Quote
            </Link>
            <a
              className="btn btn--ghost"
              href={site.phones[0].href}
              onClick={() => trackEvent('phone_click', { source: 'mobile_nav' })}
            >
              <Icon name="Phone" size={17} />
              {site.phones[0].display}
            </a>
            <p className="mobile-nav__contact">
              {site.address.city}, {site.address.region} · {site.email}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
