import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAnalyticsPageView } from '../../hooks/useAnalyticsPageView';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';

/** Resets scroll position on navigation, except when an in-page anchor is used. */
function useScrollReset() {
  const location = useLocation();

  useIsomorphicLayoutEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);
}

export default function Layout() {
  useScrollReset();
  useAnalyticsPageView();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
