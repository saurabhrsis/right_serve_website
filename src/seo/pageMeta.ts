/**
 * Route metadata resolver.
 *
 * Produces the complete metadata (title, description, canonical, Open Graph,
 * schema) for any route from one place. It is used by:
 *   - the build-time prerenderer, so static HTML carries full metadata, and
 *   - pages that want to override a specific field.
 */

import routeMeta from '../data/route-meta.json';
import { getService } from '../data/services';
import { getSolution, productFaqs } from '../data/solutions';
import { getCaseStudy } from '../data/caseStudies';
import { getArticle } from '../data/blog';
import { generalFaqs, quoteFaqs } from '../data/company';
import { site } from '../data/site';
import {
  articleSchema,
  breadcrumbSchema,
  caseStudySchema,
  faqSchema,
  itemListSchema,
  organisationSchema,
  productSchema,
  professionalServiceSchema,
  serviceSchema,
  webSiteSchema,
} from './schema';
import type { SeoInput } from './headTags';

type RouteRecord = {
  path: string;
  label: string;
  title: string;
  description: string;
  keywords?: string[];
  changefreq?: string;
  priority?: string;
  type?: string;
  robots?: string;
  schema?: string[];
};

const routes = routeMeta.routes as RouteRecord[];
const routeIndex = new Map(routes.map((route) => [route.path, route]));

export interface PageMeta extends Omit<SeoInput, 'siteUrl' | 'siteName'> {
  /** Human label used in the sitemap and internal tooling. */
  label: string;
  changefreq?: string;
  priority?: string;
  /** Dynamic page slugs, used to build the sitemap. */
  sitemap: boolean;
}

const breadcrumbTrail = (path: string, label: string) => {
  const segments = path.split('/').filter(Boolean);
  if (segments.length <= 1) {
    return [
      { name: 'Home', path: '/' },
      { name: label, path },
    ];
  }

  const parentPath = `/${segments[0]}`;
  const parent = routeIndex.get(parentPath);
  return [
    { name: 'Home', path: '/' },
    { name: parent?.label ?? segments[0], path: parentPath },
    { name: label, path },
  ];
};

/** Builds schema blocks declared for a static route in route-meta.json. */
const buildDeclaredSchema = (record: RouteRecord, schemaNames: string[]) => {
  const blocks: unknown[] = [];
  const trail = breadcrumbTrail(record.path, record.label);
  const [, section, slug] = record.path.split('/');
  const service = section === 'services' && slug ? getService(slug) : undefined;
  const solution = section === 'solutions' && slug ? getSolution(slug) : undefined;

  const faqSets: Record<string, { q: string; a: string }[] | undefined> = {
    '/': generalFaqs.slice(0, 5),
    '/services': generalFaqs.slice(0, 6),
    '/about': generalFaqs.slice(0, 4),
    '/contact': generalFaqs.slice(2, 7),
    '/request-quote': quoteFaqs,
    '/solutions': productFaqs,
    ...(service ? { [record.path]: service.faqs } : {}),
    ...(solution ? { [record.path]: solution.faqs } : {}),
  };

  for (const name of schemaNames) {
    switch (name) {
      case 'Organization':
        blocks.push(organisationSchema());
        break;
      case 'WebSite':
        blocks.push(webSiteSchema());
        break;
      case 'ProfessionalService':
        blocks.push(professionalServiceSchema());
        break;
      case 'BreadcrumbList':
        blocks.push(breadcrumbSchema(trail));
        break;
      case 'FAQPage': {
        const faqs = faqSets[record.path];
        if (faqs?.length) blocks.push(faqSchema(faqs));
        break;
      }
      case 'Service': {
        if (service) {
          blocks.push(
            serviceSchema({
              name: service.h1,
              description: service.summary,
              path: record.path,
              serviceType: service.navTitle,
            }),
          );
        }
        break;
      }
      case 'Product': {
        if (solution) {
          blocks.push(
            productSchema({
              name: solution.name,
              description: solution.summary,
              path: record.path,
              category: solution.category,
              image: solution.media?.src,
            }),
          );
        }
        break;
      }
      case 'CollectionPage':
        blocks.push({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: record.title,
          description: record.description,
          url: `${site.url}${record.path}`,
          isPartOf: { '@id': `${site.url}/#website` },
        });
        break;
      case 'ContactPage':
        blocks.push({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: record.title,
          description: record.description,
          url: site.url + record.path,
        });
        break;
      case 'AboutPage':
        blocks.push({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: record.title,
          description: record.description,
          url: `${site.url}${record.path}`,
          about: { '@id': `${site.url}/#organization` },
        });
        break;
      case 'Blog':
        blocks.push({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Right Serve Infotech System blog',
          url: `${site.url}/blog`,
          publisher: { '@id': `${site.url}/#organization` },
        });
        break;
      default:
        break;
    }
  }

  return blocks;
};

/**
 * Resolves metadata for a path. Dynamic routes (services, solutions, case
 * studies, blog posts) build their metadata from their own content record.
 */
export function resolvePageMeta(path: string): PageMeta {
  const normalised = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
  const staticRecord = routeIndex.get(normalised);

  if (staticRecord) {
    return {
      path: normalised,
      label: staticRecord.label,
      title: staticRecord.title,
      description: staticRecord.description,
      keywords: staticRecord.keywords,
      type: (staticRecord.type as SeoInput['type']) ?? 'website',
      robots: staticRecord.robots,
      schema: staticRecord.schema ? buildDeclaredSchema(staticRecord, staticRecord.schema) : [],
      changefreq: staticRecord.changefreq,
      priority: staticRecord.priority,
      sitemap: !(routeMeta.excludedFromSitemap as string[]).includes(normalised),
    };
  }

  const [, section, slug] = normalised.split('/');

  if (section === 'services' && slug) {
    const service = getService(slug);
    if (service) {
      return {
        path: normalised,
        label: service.navTitle,
        title: `${service.navTitle} | Right Serve Infotech System`,
        description: service.summary,
        keywords: service.heroBadges,
        image: service.image?.src,
        type: 'website',
        schema: [
          serviceSchema({
            name: service.h1,
            description: service.summary,
            path: normalised,
            serviceType: service.navTitle,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.navTitle, path: normalised },
          ]),
        ],
        changefreq: 'monthly',
        priority: '0.8',
        sitemap: true,
      };
    }
  }

  if (section === 'solutions' && slug) {
    const solution = getSolution(slug);
    if (solution) {
      return {
        path: normalised,
        label: solution.name,
        title: `${solution.name} | Right Serve Infotech System`,
        description: solution.summary,
        keywords: solution.platforms.map((platform) => `${solution.navTitle} ${platform}`),
        image: solution.media?.src,
        type: 'product',
        schema: [
          productSchema({
            name: solution.name,
            description: solution.summary,
            path: normalised,
            category: solution.category,
            image: solution.media?.src,
          }),
          faqSchema(solution.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Solutions', path: '/solutions' },
            { name: solution.name, path: normalised },
          ]),
        ],
        changefreq: 'monthly',
        priority: '0.8',
        sitemap: true,
      };
    }
  }

  if (section === 'case-studies' && slug) {
    const study = getCaseStudy(slug);
    if (study) {
      return {
        path: normalised,
        label: study.title,
        title: `${study.title} | Case Study | Right Serve Infotech System`,
        description: study.summary,
        image: study.image,
        type: 'article',
        schema: [
          caseStudySchema({
            title: study.title,
            description: study.summary,
            path: normalised,
            industry: study.industry,
            image: study.image,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: study.title, path: normalised },
          ]),
        ],
        changefreq: 'yearly',
        priority: '0.6',
        sitemap: true,
      };
    }
  }

  if (section === 'blog' && slug) {
    const article = getArticle(slug);
    if (article) {
      return {
        path: normalised,
        label: article.title,
        title: `${article.title} | Right Serve Infotech System`,
        description: article.description,
        keywords: [article.category, 'business software', 'software development Nagpur'],
        image: article.heroImage,
        type: 'article',
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
        author: site.nameWithSuffix,
        schema: [
          articleSchema({
            title: article.title,
            description: article.description,
            path: normalised,
            publishedAt: article.publishedAt,
            updatedAt: article.updatedAt,
            image: article.heroImage,
            authorName: `${site.nameWithSuffix} team`,
            section: article.category,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: article.title, path: normalised },
          ]),
        ],
        changefreq: 'monthly',
        priority: '0.5',
        sitemap: true,
      };
    }
  }

  // Unknown paths fall back to a non-indexable metadata set (rendered as 404).
  return {
    path: normalised,
    label: 'Page not found',
    title: 'Page not found | Right Serve Infotech System',
    description:
      'The page you were looking for could not be found. Browse our services, software solutions, portfolio or contact our team in Nagpur.',
    robots: 'noindex, follow',
    schema: [],
    sitemap: false,
  };
}

export const itemListForPortfolio = itemListSchema;
