import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, initConversionTracking, trackPageView } from '../services/analytics';

let analyticsInitialised = false;
let conversionTrackingCleanup: (() => void) | undefined;

/**
 * Initialises analytics once and reports a page view on every navigation.
 * Loads tags only after the first paint so they never block rendering.
 */
export function useAnalyticsPageView() {
  const location = useLocation();

  useEffect(() => {
    const start = () => {
      if (!analyticsInitialised) {
        initAnalytics();
        conversionTrackingCleanup = initConversionTracking();
        analyticsInitialised = true;
      }
      trackPageView(`${location.pathname}${location.search}`, document.title);
    };

    // Defer until the browser is idle so tracking never competes with rendering.
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof idleWindow.requestIdleCallback === 'function') {
      const id = idleWindow.requestIdleCallback(start, { timeout: 2500 });
      return () => idleWindow.cancelIdleCallback?.(id);
    }

    const timer = setTimeout(start, 1200);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  useEffect(
    () => () => {
      conversionTrackingCleanup?.();
      conversionTrackingCleanup = undefined;
    },
    [],
  );
}
