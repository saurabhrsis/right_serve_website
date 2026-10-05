/**
 * JSON-LD structured-data builders.
 * Rich results (LocalBusiness, Service, FAQ, Article, JobPosting, Product, Breadcrumbs)
 * are one of the biggest SEO wins for a local service business.
 */
import { SITE, MAPS_LINK, COMPANY_STATS } from '@/data/site'
import { AGGREGATE_RATING, TESTIMONIALS } from '@/data/testimonials'

type Json = Record<string, unknown>

const ORG_ID = `${SITE.url}/#organization`
const WEBSITE_ID = `${SITE.url}/#website`
export const LOCAL_BUSINESS_ID = `${SITE.url}/#localbusiness`

export const organizationSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: SITE.shortName,
  url: `${SITE.url}/`,
  logo: { '@type': 'ImageObject', url: `${SITE.url}${SITE.images.logo}` },
  image: `${SITE.url}${SITE.images.og}`,
  description: SITE.description,
  foundingDate: String(SITE.foundingYear),
  email: SITE.contact.email,
  telephone: SITE.contact.phonePrimary,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.contact.street,
    addressLocality: SITE.contact.locality,
    addressRegion: SITE.contact.region,
    postalCode: SITE.contact.postalCode,
    addressCountry: SITE.contact.country,
  },
  areaServed: [
    { '@type': 'City', name: 'Nagpur' },
    { '@type': 'State', name: 'Maharashtra' },
    { '@type': 'Country', name: 'India' },
  ],
  sameAs: Object.values(SITE.socials).filter(Boolean),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: SITE.contact.phones[0],
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'mr'],
    },
    {
      '@type': 'ContactPoint',
      telephone: SITE.contact.phones[1],
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'mr'],
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: AGGREGATE_RATING.value,
    reviewCount: AGGREGATE_RATING.count,
    bestRating: 5,
    worstRating: 1,
  },
})

export const websiteSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE.url}/`,
  name: SITE.name,
  inLanguage: 'en-IN',
  publisher: { '@id': ORG_ID },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/insights?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
})

export const localBusinessSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': LOCAL_BUSINESS_ID,
  name: SITE.name,
  image: `${SITE.url}${SITE.images.og}`,
  logo: `${SITE.url}${SITE.images.logo}`,
  url: `${SITE.url}/`,
  telephone: SITE.contact.phonePrimary,
  email: SITE.contact.email,
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer, Cheque',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.contact.street,
    addressLocality: SITE.contact.locality,
    addressRegion: SITE.contact.region,
    postalCode: SITE.contact.postalCode,
    addressCountry: SITE.contact.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.contact.geo.lat, longitude: SITE.contact.geo.lng },
  hasMap: MAPS_LINK,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:30',
      closes: '19:00',
    },
  ],
  areaServed: { '@type': 'City', name: 'Nagpur' },
  knowsAbout: SITE.keywords,
  makesOffer: [
    'Custom software development',
    'Website design and development',
    'Mobile app development',
    'IT hardware and networking solutions',
    'CCTV and security systems',
    'Digital marketing, SEO and Google Ads',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: AGGREGATE_RATING.value,
    reviewCount: AGGREGATE_RATING.count,
    bestRating: 5,
  },
})

export const breadcrumbSchema = (items: { name: string; path: string }[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.path.startsWith('http') ? item.path : `${SITE.url}${item.path}`,
  })),
})

export const serviceSchema = (input: {
  name: string
  description: string
  path: string
  category?: string
  areaServed?: string
  offers?: { price?: string; description?: string }
}): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: input.name,
  description: input.description,
  serviceType: input.category ?? input.name,
  url: `${SITE.url}${input.path}`,
  provider: { '@id': ORG_ID },
  areaServed: [{ '@type': 'City', name: input.areaServed ?? 'Nagpur' }, { '@type': 'Country', name: 'India' }],
  ...(input.offers?.price
    ? {
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          description: input.offers.description ?? 'Starts from',
          price: input.offers.price.replace(/[^\d]/g, ''),
          availability: 'https://schema.org/InStock',
          url: `${SITE.url}/contact`,
        },
      }
    : {}),
})

export const faqSchema = (faqs: { question: string; answer: string }[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
})

export const articleSchema = (input: {
  title: string
  description: string
  path: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
  keywords?: string[]
}): Json => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: input.title,
  description: input.description,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${input.path}` },
  image: [`${SITE.url}${input.image}`],
  datePublished: input.datePublished,
  dateModified: input.dateModified ?? input.datePublished,
  author: { '@type': 'Organization', name: input.author ?? SITE.name, url: `${SITE.url}/` },
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-IN',
  ...(input.keywords?.length ? { keywords: input.keywords.join(', ') } : {}),
})

export const productSchema = (input: {
  name: string
  description: string
  image: string
  path: string
  price?: string
  rating?: number
}): Json => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: input.name,
  description: input.description,
  image: `${SITE.url}${input.image}`,
  url: `${SITE.url}${input.path}`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  publisher: { '@id': ORG_ID },
  ...(input.price ? { offers: { '@type': 'Offer', priceCurrency: 'INR', price: input.price.replace(/[^\d]/g, ''), url: `${SITE.url}${input.path}` } } : {}),
  ...(input.rating
    ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: input.rating, bestRating: 5, ratingCount: 12 } }
    : {}),
})

export const jobPostingSchema = (input: {
  title: string
  description: string
  datePosted: string
  employmentType: string
  experience: string
}): Json => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: input.title,
  description: input.description,
  datePosted: input.datePosted,
  validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90).toISOString(),
  employmentType: input.employmentType.toUpperCase().replace('-', '_'),
  hiringOrganization: { '@id': ORG_ID },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.contact.street,
      addressLocality: SITE.contact.locality,
      addressRegion: SITE.contact.region,
      postalCode: SITE.contact.postalCode,
      addressCountry: SITE.contact.country,
    },
  },
  experienceRequirements: { '@type': 'OccupationalExperienceRequirements', monthsOfExperience: 0 },
  skills: input.experience,
  directApply: true,
})

/** Individual reviews - rendered on the home and services pages next to the visible testimonials. */
export const reviewsSchema = (): Json[] =>
  TESTIMONIALS.slice(0, 6).map((testimonial) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': ORG_ID, '@type': 'Organization', name: SITE.name },
    reviewRating: { '@type': 'Rating', ratingValue: testimonial.rating, bestRating: 5, worstRating: 1 },
    author: { '@type': 'Person', name: testimonial.name, affiliation: testimonial.role },
    reviewBody: testimonial.text,
    datePublished: '2025-11-20',
  }))

export const itemListSchema = (name: string, items: { name: string; path: string }[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: `${SITE.url}${item.path}`,
  })),
})

export const statsAboutSchema = () =>
  COMPANY_STATS.map((stat) => ({
    '@type': 'PropertyValue',
    name: stat.label,
    value: stat.value,
  }))
