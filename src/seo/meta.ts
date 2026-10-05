/**
 * Single source of truth for per-route SEO metadata.
 *
 *  - `renderHeadTags()` is used by scripts/prerender.mjs to bake the correct
 *    title/description/canonical/OG tags into every generated HTML file.
 *  - `applyRouteMeta()` performs the same update on the client after route changes.
 *
 * Keeping both paths fed by one registry guarantees crawler and user always see
 * the same markup (no hydration mismatch, no stale titles).
 */
import { SITE } from '@/data/site'
import { SERVICE_PILLARS } from '@/data/services'
import { INSIGHTS } from '@/data/insights'
import { PRODUCTS } from '@/data/products'
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  reviewsSchema,
  serviceSchema,
  websiteSchema,
  itemListSchema,
} from './schema'

export type RouteMeta = {
  path: string
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  noindex?: boolean
  priority?: number
  changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly'
  lastmod?: string
  jsonLd?: unknown[]
}

export const HOME_KEYWORDS =
  'infotech, it company, right serve infotech, Right Serve Infotech System, rsi infotech pvt ltd, RSIS, IT solutions, brand identity, illustrations, marketing, AI, UI/UX design, frontend design, reliable IT services, cost-effective IT services, Right Serve Infotech System PVT.LTD, India, Website Development, Android iOS Application, Right Serve Infotech Systems, IT Company Nagpur, Software Development Company India, Web Design Company, Custom Software Development, Enterprise Software Solutions, B2B Portal Development, E-commerce Website Design, WooCommerce, WordPress, PHP, Static Website, Dynamic Website, Responsive Web Design, Corporate Website, Startup IT Services, Mobile App Development, Android App Developers, iOS App Design, Flutter App Development, React Native, Hybrid Mobile Apps, UI UX Design, ReactJS Development, Node.js, Angular, MongoDB, AWS Cloud, API Integration, Backend, Frontend, Full Stack Developers, ERP Software, CRM Solutions, Hospital Management System, HMS Software, Clinic Management, Education Management System, School ERP, Accounting Software, GST Billing Software, Inventory Management, Payroll Software, HRMS, Real Estate CRM, MLM Software, POS Software, Restaurant Management, IT Infrastructure Services, Computer Hardware Dealers, IT Hardware Support, Computer AMC, Networking Solutions, Server Maintenance, Data Recovery, CCTV Installation, Biometric Systems, Firewall Configuration, Digital Marketing Agency, SEO Services India, Social Media Marketing, Google Ads, PPC, Content Writing, Graphic Design, Logo Design, Best IT Company in Nagpur, Top Software Company Maharashtra, Affordable IT Services'

const STATIC_ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Right Serve Infotech System | Best IT Company in Nagpur & India',
    description: SITE.description,
    keywords: HOME_KEYWORDS.split(', '),
    priority: 1,
    changefreq: 'weekly',
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      localBusinessSchema(),
      ...reviewsSchema(),
      serviceSchema({
        name: 'Software, Hardware & Digital Marketing Services',
        description:
          'Custom software development, website and app development, IT hardware & networking, CCTV and digital marketing services in Nagpur, India.',
        path: '/',
      }),
      faqSchema([
        {
          question: 'What services does Right Serve Infotech System provide?',
          answer:
            'We provide custom software development, website and mobile app development, ERP/CRM solutions, IT hardware, networking and CCTV infrastructure, computer AMC, and digital marketing including SEO, Google Ads and social media.',
        },
        {
          question: 'Where is Right Serve Infotech System located?',
          answer: `Our office is at ${SITE.contact.addressLine}, ${SITE.contact.addressLine2}. Call ${SITE.contact.phones[0]} or email ${SITE.contact.email}.`,
        },
        {
          question: 'How many projects has RSIS delivered?',
          answer:
            'Since 2019 we have delivered 150+ projects for more than 100 clients across manufacturing, construction, healthcare, education, retail, legal and government segments.',
        },
      ]),
    ],
  },
  {
    path: '/about',
    title: 'About Us | Right Serve Infotech System Pvt. Ltd., Nagpur',
    description:
      'Learn about Right Serve Infotech System — a Nagpur-based IT company offering software development, hardware solutions and digital marketing since 2019. Meet our mission, vision and values.',
    keywords: ['about Right Serve Infotech System', 'IT company Nagpur profile', 'RSIS company Nagpur'],
    priority: 0.9,
    changefreq: 'monthly',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
      ]),
      organizationSchema(),
    ],
  },
  {
    path: '/our-team',
    title: 'Our Team | Meet the Experts Behind RSIS Nagpur',
    description:
      'Meet the directors, engineers, designers and support team of Right Serve Infotech System — 20+ professionals in Nagpur delivering software, hardware and marketing projects.',
    keywords: ['RSIS team Nagpur', 'software company team Nagpur'],
    priority: 0.7,
    changefreq: 'monthly',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Our Team', path: '/our-team' },
      ]),
    ],
  },
  {
    path: '/career',
    title: 'Careers at Right Serve Infotech System | IT Jobs in Nagpur',
    description:
      'Apply for full stack, frontend, backend, app developer, UI/UX, QA, graphics design, digital marketing and sales jobs at Right Serve Infotech System, Nagpur. Freshers welcome.',
    keywords: ['IT jobs in Nagpur', 'fresher jobs Nagpur', 'software developer vacancy Nagpur', 'internship Nagpur IT'],
    priority: 0.8,
    changefreq: 'weekly',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Careers', path: '/career' },
      ]),
    ],
  },
  {
    path: '/portfolio',
    title: 'Portfolio | Software, Web & App Projects by RSIS Nagpur',
    description:
      'Explore 150+ projects delivered by Right Serve Infotech System — custom software, ERP, CRM, mobile apps, websites and digital marketing campaigns for clients across India.',
    keywords: ['software company portfolio Nagpur', 'web development projects Nagpur', 'app development portfolio India'],
    priority: 0.8,
    changefreq: 'monthly',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
      ]),
    ],
  },
  {
    path: '/products',
    title: 'Our Products | Ready-to-Deploy Business Software | RSIS',
    description:
      'Ready-to-deploy software products by Right Serve Infotech System — Secure Build construction billing, Trajectoryfy inventory, DoseCare healthcare, Shiksha Sutra school ERP, TubeMonitize and encrypted email.',
    keywords: ['ready to deploy software India', 'construction billing software', 'school ERP software', 'inventory software Nagpur'],
    priority: 0.8,
    changefreq: 'monthly',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
      ]),
      itemListSchema(
        'Software products by Right Serve Infotech System',
        PRODUCTS.map((product) => ({ name: product.name, path: `/products#${product.slug}` })),
      ),
    ],
  },
  {
    path: '/contact',
    title: 'Contact Right Serve Infotech System | IT Company in Nagpur',
    description:
      'Contact Right Serve Infotech System, Nagpur — call +91 8669308288 or +91 9545073418, email rightserveinfotechSystem@gmail.com, or send an enquiry. Office open Mon–Sat, 10:30 AM – 7:00 PM.',
    keywords: ['contact IT company Nagpur', 'software company contact Nagpur', 'RSIS contact number'],
    priority: 0.9,
    changefreq: 'monthly',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
      localBusinessSchema(),
    ],
  },
  {
    path: '/insights',
    title: 'Insights & Guides | Web, Software & Digital Marketing Tips | RSIS',
    description:
      'Practical guides from Right Serve Infotech System on website costs, local SEO, custom software vs ERP, Google Ads budgeting and office IT infrastructure in India.',
    keywords: ['digital marketing blog India', 'SEO tips Nagpur', 'software buying guide India'],
    priority: 0.7,
    changefreq: 'weekly',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Insights', path: '/insights' },
      ]),
    ],
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Right Serve Infotech System Pvt. Ltd.',
    description:
      'Read the privacy policy of Right Serve Infotech System Pvt. Ltd. — how we collect, use, store and protect your personal information when you use our website and services.',
    priority: 0.3,
    changefreq: 'yearly',
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions | Right Serve Infotech System Pvt. Ltd.',
    description:
      'Terms and conditions governing the use of the Right Serve Infotech System website and the delivery of our software development, hardware and digital marketing services.',
    priority: 0.3,
    changefreq: 'yearly',
  },
  {
    path: '/privacy-policy-bhajnarthi-app',
    title: 'Bhajnarthi App - Privacy Policy | Right Serve Infotech System',
    description:
      'Privacy policy for the Bhajnarthi devotional app — no personal data collection, no tracking, offline-first devotional content. Your bhakti, your data, your device.',
    keywords: ['Bhajnarthi app privacy policy', 'devotional app privacy'],
    priority: 0.2,
    changefreq: 'yearly',
  },
  {
    path: '/terms-and-conditions-bhajnarthi-app',
    title: 'Bhajnarthi App - Terms & Conditions | Right Serve Infotech System',
    description:
      'Terms and conditions for using the Bhajnarthi devotional app — lawful devotional use, content ownership, no reverse engineering and support contact details.',
    keywords: ['Bhajnarthi app terms', 'devotional app terms and conditions'],
    priority: 0.2,
    changefreq: 'yearly',
  },
  {
    path: '/sitemap',
    title: 'Sitemap | All Pages of Right Serve Infotech System',
    description:
      'Complete index of every page on rightserveinfotechsystem.com — services, portfolio, products, insights, legal pages and contact information.',
    priority: 0.4,
    changefreq: 'monthly',
  },
  {
    path: '/thank-you',
    title: 'Thank you | Right Serve Infotech System',
    description: 'Your enquiry has been received. Our team will get back to you within one business day.',
    noindex: true,
    priority: 0.1,
  },
  {
    path: '/404',
    title: 'Page not found | Right Serve Infotech System',
    description: 'The page you are looking for has moved or no longer exists. Explore our services instead.',
    noindex: true,
    priority: 0.1,
  },
]

const SERVICE_ROUTES: RouteMeta[] = SERVICE_PILLARS.flatMap((pillar) => [
  {
    path: pillar.path,
    title: pillar.seoTitle,
    description: pillar.metaDescription,
    keywords: [
      `${pillar.name} company Nagpur`,
      `${pillar.name} services India`,
      `${pillar.shortName} Nagpur`,
    ],
    priority: 0.9,
    changefreq: 'monthly' as const,
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services/software' },
        { name: pillar.name, path: pillar.path },
      ]),
      serviceSchema({
        name: `${pillar.name} in Nagpur`,
        description: pillar.metaDescription,
        path: pillar.path,
        category: pillar.name,
      }),
      faqSchema(pillar.faqs),
      itemListSchema(
        `${pillar.name} services`,
        pillar.subServices.map((sub) => ({ name: sub.name, path: `${pillar.path}/${sub.slug}` })),
      ),
    ],
  },
  ...pillar.subServices.map<RouteMeta>((sub) => ({
    path: `${pillar.path}/${sub.slug}`,
    title: sub.seoTitle,
    description: sub.metaDescription,
    keywords: [sub.name, `${sub.name} in Nagpur`, `${sub.name} India`, `${pillar.name} Nagpur`],
    priority: 0.8,
    changefreq: 'monthly',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: pillar.name, path: pillar.path },
        { name: sub.name, path: `${pillar.path}/${sub.slug}` },
      ]),
      serviceSchema({
        name: `${sub.name} in Nagpur`,
        description: sub.metaDescription,
        path: `${pillar.path}/${sub.slug}`,
        category: pillar.name,
        offers: { price: sub.priceFrom, description: `Starts from ${sub.priceFrom}` },
      }),
      faqSchema(sub.faqs),
    ],
  })),
])

const INSIGHT_ROUTES: RouteMeta[] = INSIGHTS.map((post) => ({
  path: `/insights/${post.slug}`,
  title: post.seoTitle,
  description: post.metaDescription,
  keywords: post.keywords,
  ogType: 'article',
  ogImage: post.image,
  priority: 0.6,
  changefreq: 'yearly',
  lastmod: post.updated ?? post.date,
  jsonLd: [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Insights', path: '/insights' },
      { name: post.title, path: `/insights/${post.slug}` },
    ]),
    articleSchema({
      title: post.title,
      description: post.metaDescription,
      path: `/insights/${post.slug}`,
      image: post.image,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      keywords: post.keywords,
    }),
    ...(post.faqs ? [faqSchema(post.faqs)] : []),
  ],
}))

export const ROUTES: RouteMeta[] = [...STATIC_ROUTES, ...SERVICE_ROUTES, ...INSIGHT_ROUTES]

/** Routes that should end up in sitemap.xml (indexable pages only). */
export const SITEMAP_ROUTES = ROUTES.filter((route) => !route.noindex && route.path !== '/404')

/** Legacy/alternate URLs that must be redirected to the new structure. */
export const REDIRECTS: { from: string; to: string }[] = [
  { from: '/home', to: '/' },
  { from: '/about-us', to: '/about' },
  { from: '/aboutus', to: '/about' },
  { from: '/team', to: '/our-team' },
  { from: '/careers', to: '/career' },
  { from: '/jobs', to: '/career' },
  { from: '/software', to: '/services/software' },
  { from: '/hardware', to: '/services/hardware' },
  { from: '/marketing', to: '/services/marketing' },
  { from: '/blog', to: '/insights' },
  { from: '/privacy', to: '/privacy-policy' },
  { from: '/terms', to: '/terms-and-conditions' },
]

export function normalizePath(pathname: string) {
  if (!pathname) return '/'
  const clean = pathname.split('?')[0].split('#')[0]
  if (clean.length > 1 && clean.endsWith('/')) return clean.slice(0, -1)
  return clean
}

export function getRouteMeta(pathname: string): RouteMeta | undefined {
  const path = normalizePath(pathname)
  return ROUTES.find((route) => route.path === path)
}

const plain = (value: string) => value.replace(/\s+/g, ' ').trim()

/** Builds the full `<head>` SEO block for a route (used at build time). */
export function renderHeadTags(meta: RouteMeta, siteUrl = SITE.url): string {
  const canonical = `${siteUrl.replace(/\/$/, '')}${meta.path === '/' ? '/' : meta.path}`
  const image = `${siteUrl.replace(/\/$/, '')}${meta.ogImage ?? SITE.images.og}`
  const robots = meta.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'

  const tags = [
    `<title>${plain(meta.title)}</title>`,
    `<meta name="description" content="${plain(meta.description)}" />`,
    meta.keywords?.length ? `<meta name="keywords" content="${plain(meta.keywords.join(', '))}" />` : '',
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${meta.ogType ?? 'website'}" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${plain(meta.title)}" />`,
    `<meta property="og:description" content="${plain(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${plain(meta.title)}" />`,
    `<meta name="twitter:description" content="${plain(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].filter(Boolean)

  return tags.join('\n    ')
}

/** JSON-LD blocks for a route, rendered as `<script>` tags at build time. */
export function renderJsonLd(meta: RouteMeta): string {
  if (!meta.jsonLd?.length) return ''
  return meta.jsonLd
    .map(
      (block) =>
        `<script type="application/ld+json" data-route="${meta.path}">${JSON.stringify(block).replace(/</g, '\\u003c')}</script>`,
    )
    .join('\n    ')
}

/* ------------------------------------------------------------------------ */
/* Client-side head management                                               */
/* ------------------------------------------------------------------------ */

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
}

/** Applies the route metadata to `document.head` after client-side navigation. */
export function applyRouteMeta(meta: RouteMeta, siteUrl = SITE.url) {
  if (typeof document === 'undefined') return
  const canonical = `${siteUrl.replace(/\/$/, '')}${meta.path === '/' ? '/' : meta.path}`
  const image = `${siteUrl.replace(/\/$/, '')}${meta.ogImage ?? SITE.images.og}`

  document.title = plain(meta.title)

  upsertMeta('meta[name="description"]', { name: 'description', content: plain(meta.description) })
  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: meta.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  })
  if (meta.keywords?.length) {
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: meta.keywords.join(', ') })
  }

  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: plain(meta.title) })
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: plain(meta.description) })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: meta.ogType ?? 'website' })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: plain(meta.title) })
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: plain(meta.description) })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

  let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.rel = 'canonical'
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.href = canonical

  // Route specific JSON-LD (keeps the static organization block in index.html intact)
  document.head.querySelectorAll('script[data-route]').forEach((node) => node.remove())
  meta.jsonLd?.forEach((block) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-route', meta.path)
    script.textContent = JSON.stringify(block)
    document.head.appendChild(script)
  })
}
