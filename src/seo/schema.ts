/**
 * JSON-LD structured data builders.
 *
 * Only schema types that the page content genuinely supports are emitted, and
 * business details come from one place (src/data/site.ts) so the organisation
 * information is consistent across the whole site.
 */

import { site } from '../data/site';

const ORGANISATION_ID = `${site.url}/#organization`;

export function organisationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANISATION_ID,
    name: site.nameWithSuffix,
    legalName: site.legalName,
    alternateName: site.shortName,
    url: site.url,
    logo: `${site.url}${site.logoMark}`,
    image: `${site.url}${site.ogImage}`,
    description: site.description,
    foundingDate: site.workingSince,
    email: site.email,
    telephone: site.phones[0].display.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.street}, ${site.address.locality}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.areaServed.map((area) => ({ '@type': 'AdministrativeArea', name: area })),
    knowsLanguage: site.languages,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.phones[0].display.replace(/\s/g, ''),
        contactType: 'sales',
        email: site.email,
        areaServed: 'IN',
        availableLanguage: site.languages,
      },
      {
        '@type': 'ContactPoint',
        telephone: site.phones[1].display.replace(/\s/g, ''),
        contactType: 'customer support',
        email: site.email,
        areaServed: 'IN',
        availableLanguage: site.languages,
      },
    ],
    sameAs: site.socials.map((social) => social.href),
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#localbusiness`,
    name: site.nameWithSuffix,
    url: site.url,
    image: `${site.url}${site.ogImage}`,
    email: site.email,
    telephone: site.phones[0].display.replace(/\s/g, ''),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.street}, ${site.address.locality}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:30',
        closes: '19:00',
      },
    ],
    areaServed: site.areaServed.map((area) => ({ '@type': 'AdministrativeArea', name: area })),
    parentOrganization: { '@id': ORGANISATION_ID },
    sameAs: site.socials.map((social) => social.href),
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.nameWithSuffix,
    description: site.description,
    publisher: { '@id': ORGANISATION_ID },
    inLanguage: 'en-IN',
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${site.url}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    url: `${site.url}${input.path}`,
    provider: { '@id': ORGANISATION_ID },
    areaServed: site.areaServed.map((area) => ({ '@type': 'AdministrativeArea', name: area })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${site.url}${input.path}`,
      servicePhone: site.phones[0].display.replace(/\s/g, ''),
    },
  };
}

export function productSchema(input: {
  name: string;
  description: string;
  path: string;
  category?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: input.name,
    description: input.description,
    url: `${site.url}${input.path}`,
    applicationCategory: input.category ?? 'BusinessApplication',
    operatingSystem: 'Windows, Web (browser), Android, iOS',
    ...(input.image ? { image: `${site.url}${input.image}` } : {}),
    publisher: { '@id': ORGANISATION_ID },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      description: 'Pricing provided on request after a requirement discussion.',
      url: `${site.url}/contact`,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  authorName: string;
  section?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: `${site.url}${input.path}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}${input.path}` },
    datePublished: input.publishedAt,
    dateModified: input.updatedAt,
    image: `${site.url}${input.image}`,
    author: { '@type': 'Organization', name: input.authorName, url: site.url },
    publisher: { '@id': ORGANISATION_ID },
    ...(input.section ? { articleSection: input.section } : {}),
    inLanguage: 'en-IN',
  };
}

export function caseStudySchema(input: {
  title: string;
  description: string;
  path: string;
  industry: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: `${site.url}${input.path}`,
    about: input.industry,
    ...(input.image ? { image: `${site.url}${input.image}` } : {}),
    author: { '@id': ORGANISATION_ID },
    publisher: { '@id': ORGANISATION_ID },
    inLanguage: 'en-IN',
  };
}

export function itemListSchema(items: { name: string; path: string }[], name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${site.url}${item.path}`,
    })),
  };
}
