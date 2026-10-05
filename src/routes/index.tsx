import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

/**
 * Single route table, used by both the browser app and the build-time
 * prerenderer.
 *
 * Pages are referenced through their dynamic import loader so they are
 * code-split per route in the browser, while the build script can pre-load them
 * before rendering static HTML for crawlers.
 */
const loaders = {
  home: () => import('../pages/Home'),
  about: () => import('../pages/About'),
  services: () => import('../pages/Services'),
  serviceDetail: () => import('../pages/ServiceDetail'),
  solutions: () => import('../pages/Solutions'),
  solutionDetail: () => import('../pages/SolutionDetail'),
  portfolio: () => import('../pages/Portfolio'),
  caseStudies: () => import('../pages/CaseStudies'),
  caseStudyDetail: () => import('../pages/CaseStudyDetail'),
  blog: () => import('../pages/Blog'),
  blogPost: () => import('../pages/BlogPost'),
  careers: () => import('../pages/Careers'),
  contact: () => import('../pages/Contact'),
  requestQuote: () => import('../pages/RequestQuote'),
  privacyPolicy: () => import('../pages/PrivacyPolicy'),
  termsAndConditions: () => import('../pages/TermsAndConditions'),
  bhajanPrivacy: () => import('../pages/BhajanAppPrivacy'),
  bhajanTerms: () => import('../pages/BhajanAppTerms'),
  thankYou: () => import('../pages/ThankYou'),
  notFound: () => import('../pages/NotFound'),
} satisfies Record<string, () => Promise<{ default: ComponentType }>>;

export type PageKey = keyof typeof loaders;

export const pageLoaders = loaders;

const lazyCache = new Map<PageKey, LazyExoticComponent<ComponentType>>();

export function getPage(key: PageKey): LazyExoticComponent<ComponentType> {
  let component = lazyCache.get(key);
  if (!component) {
    component = lazy(loaders[key]);
    lazyCache.set(key, component);
  }
  return component;
}

export interface AppRoute {
  path: string;
  key: PageKey;
  /** Route index used by the sitemap generator. */
  sitemap?: boolean;
}

export const appRoutes: AppRoute[] = [
  { path: '/', key: 'home', sitemap: true },
  { path: '/about', key: 'about', sitemap: true },
  { path: '/services', key: 'services', sitemap: true },
  { path: '/services/:slug', key: 'serviceDetail' },
  { path: '/solutions', key: 'solutions', sitemap: true },
  { path: '/solutions/:slug', key: 'solutionDetail' },
  { path: '/portfolio', key: 'portfolio', sitemap: true },
  { path: '/case-studies', key: 'caseStudies', sitemap: true },
  { path: '/case-studies/:slug', key: 'caseStudyDetail' },
  { path: '/blog', key: 'blog', sitemap: true },
  { path: '/blog/:slug', key: 'blogPost' },
  { path: '/careers', key: 'careers', sitemap: true },
  { path: '/contact', key: 'contact', sitemap: true },
  { path: '/request-quote', key: 'requestQuote', sitemap: true },
  { path: '/thank-you', key: 'thankYou' },
  { path: '/privacy-policy', key: 'privacyPolicy', sitemap: true },
  { path: '/terms-and-conditions', key: 'termsAndConditions', sitemap: true },
  { path: '/privacy-policy-bhajnarthi-app', key: 'bhajanPrivacy', sitemap: true },
  { path: '/terms-and-conditions-bhajnarthi-app', key: 'bhajanTerms', sitemap: true },
  { path: '/404', key: 'notFound' },
];
