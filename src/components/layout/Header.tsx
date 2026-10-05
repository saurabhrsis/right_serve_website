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

const MOBILE_NAV_ID = 'site-drawer';

export default function Header() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const isActive = useCallback(
    (item: NavItem) => {
      if (item.to === '/') return location.pathname === '/';
      if (item.children) return location.pathname.startsWith(item.to);
      return location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
    },
    [location.pathname],
  );

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  // Close the drawer and any dropdown whenever the route changes.
  useEffect(() => {
    setDrawerOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  // Lock body scroll while the drawer is open, close on Escape, and move focus
  // into the panel so keyboard users land inside the menu.
  useEffect(() => {
    document.body.classList.toggle('is-locked', drawerOpen);
    if (drawerOpen) {
      const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 40);
      return () => {
        window.clearTimeout(timer);
        document.body.classList.remove('is-locked');
      };
    }
    return () => document.body.classList.remove('is-locked');
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <>
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
                const menuId = `nav-menu-${item.label.toLowerCase()}`;

                return (
                  <li
                    className={`site-header__item site-header__item--menu${expanded ? ' is-open' : ''}`}
                    key={item.to}
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    {/* The label is a real link so a click always opens the section route. */}
                    <Link
                      to={item.to}
                      className={`nav-link${active ? ' is-active' : ''}`}
                      aria-current={location.pathname === item.to ? 'page' : undefined}
                      onClick={() => setOpenMenu(null)}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="nav-link__toggle"
                      aria-expanded={expanded}
                      aria-haspopup="true"
                      aria-controls={menuId}
                      aria-label={`${item.label} menu`}
                      onClick={() => setOpenMenu(expanded ? null : item.label)}
                      onFocus={() => openDropdown(item.label)}
                    >
                      <Icon name="ChevronDown" size={14} />
                    </button>

                    <div className="nav-dropdown" id={menuId} role="group" aria-label={item.label}>
                      <ul className="nav-dropdown__list">
                        {item.children.map((child) => (
                          <li className="nav-dropdown__item" key={child.path}>
                            <Link className="nav-dropdown__link" to={child.path} onClick={() => setOpenMenu(null)}>
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
                          onClick={() => {
                            setOpenMenu(null);
                            trackEvent('nav_view_all', { section: item.label.toLowerCase() });
                          }}
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
            aria-expanded={drawerOpen}
            aria-controls={MOBILE_NAV_ID}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setDrawerOpen((open) => !open)}
          >
            <Icon name={drawerOpen ? 'X' : 'Menu'} size={22} />
            <span className="nav-toggle__label">Menu</span>
          </button>
        </div>
      </header>

      {/*
        The drawer is rendered outside <header> on purpose: the header uses
        backdrop-filter, which makes it the containing block for fixed-position
        descendants and would collapse a drawer nested inside it.
      */}
      <div
        id={MOBILE_NAV_ID}
        className={`nav-drawer${drawerOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal={drawerOpen || undefined}
        aria-label="Site menu"
        aria-hidden={drawerOpen ? undefined : 'true'}
      >
        <button
          type="button"
          className="nav-drawer__scrim"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={closeDrawer}
        />

        <div className="nav-drawer__panel">
          <div className="nav-drawer__head">
            <span className="nav-drawer__brand">
              <img src={site.logoMark} alt="" width={36} height={36} decoding="async" />
              <span>
                <strong>Right Serve Infotech</strong>
                <span>System Pvt. Ltd.</span>
              </span>
            </span>
            <button ref={closeButtonRef} type="button" className="nav-drawer__close" onClick={closeDrawer}>
              <Icon name="X" size={20} />
              <span className="visually-hidden">Close menu</span>
            </button>
          </div>

          <nav className="nav-drawer__nav" aria-label="Menu">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-drawer__link${isActive ? ' is-active' : ''}`}
              end
              onClick={closeDrawer}
            >
              Home
              <Icon name="ArrowRight" size={16} />
            </NavLink>

            {navigation.slice(1).map((item) =>
              item.children ? (
                <details className="nav-drawer__group" key={item.to}>
                  <summary>
                    <span>{item.label}</span>
                    <Icon name="ChevronDown" size={18} />
                  </summary>
                  <div className="nav-drawer__sublist">
                    <Link to={item.to} onClick={closeDrawer}>
                      All {item.label.toLowerCase()}
                      <Icon name="ArrowRight" size={15} />
                    </Link>
                    {item.children.map((child) => (
                      <Link to={child.path} key={child.path} onClick={closeDrawer}>
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <NavLink
                  to={item.to}
                  key={item.to}
                  className={({ isActive }) => `nav-drawer__link${isActive ? ' is-active' : ''}`}
                  onClick={closeDrawer}
                >
                  {item.label}
                  <Icon name="ArrowRight" size={16} />
                </NavLink>
              ),
            )}
          </nav>

          <div className="nav-drawer__actions">
            <Link className="btn btn--primary btn--block" to="/request-quote" onClick={closeDrawer}>
              Request a Quote
            </Link>
            <a
              className="btn btn--ghost btn--block"
              href={site.phones[0].href}
              onClick={() => trackEvent('phone_click', { source: 'mobile_nav' })}
            >
              <Icon name="Phone" size={17} />
              {site.phones[0].display}
            </a>
            <p className="nav-drawer__meta">
              {site.address.city}, {site.address.region} ·{' '}
              <a href={site.emailHref}>{site.email}</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
