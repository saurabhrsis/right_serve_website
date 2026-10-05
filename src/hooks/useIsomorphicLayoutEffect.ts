import { useEffect, useLayoutEffect } from 'react';

/**
 * useLayoutEffect warns when it runs during server rendering, which happens
 * while prerendering pages at build time. This picks useEffect on the server
 * and useLayoutEffect in the browser.
 */
export const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
