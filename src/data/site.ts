/**
 * Central site configuration.
 * Everything that is reused across pages / SEO / structured data lives here,
 * so NAP (name, address, phone) details stay consistent - a core local-SEO rule.
 */

export const SITE = {
  name: 'Right Serve Infotech System Pvt. Ltd.',
  shortName: 'RSIS',
  legalName: 'RIGHT SERVE INFOTECH SYSTEM PVT. LTD.',
  tagline: 'Software, Hardware & Digital Marketing',
  /** Production URL - override with VITE_SITE_URL at build time. */
  url: (import.meta.env?.VITE_SITE_URL as string) || 'https://rightserveinfotechsystem.com',
  foundingYear: 2019,
  yearsInBusiness: new Date().getFullYear() - 2019,
  description:
    'Right Serve Infotech System (RSIS) provides top-notch custom software, app development, website design, ERP & digital marketing services in Nagpur & India. Call us for cost-effective IT services.',
  shortDescription:
    'A Nagpur-based IT company delivering custom software, web & mobile apps, IT hardware infrastructure and result-driven digital marketing.',
  contact: {
    addressLine: '10, Saurabh Nagar-2, Besa Rd, near Hanuman Mandir',
    addressLine2: 'Saubhagya Nagar, Ghogali, Nagpur, Maharashtra 440034',
    street: '10, Saurabh Nagar-2, Besa Rd, near Hanuman Mandir, Saubhagya Nagar, Ghogali',
    locality: 'Nagpur',
    region: 'Maharashtra',
    postalCode: '440034',
    country: 'IN',
    email: 'rightserveinfotechSystem@gmail.com',
    salesEmail: 'rightserveinfotechSystem@gmail.com',
    phones: ['+91 9545073418', '+91 8669308288'],
    phonePrimary: '+918669308288',
    whatsapp: '919545073418',
    hours: [
      { days: 'Monday – Saturday', time: '10:30 AM – 7:00 PM' },
      { days: 'Sunday', time: 'Closed' },
    ],
    geo: { lat: 21.0718299, lng: 79.090919 },
  },
  socials: {
    facebook: 'https://www.facebook.com/share/19xdRSCobX/',
    linkedin: 'https://www.linkedin.com/company/rightserveinfotechSystem/',
    instagram: 'https://www.instagram.com/right_serve_infotech_system?igsh=MWx5emYxYXdrbHM3Yg==',
    x: 'https://x.com/company/rsinfotechsys',
    youtube: '',
    google: 'https://www.google.com/maps?q=10,+Saurabh+Nagar-2,+Besa+Rd,+near+Hanuman+Mandir,+Saubhagya+Nagar,+Ghogali,+Nagpur,+Maharashtra+440034',
  },
  images: {
    logo: '/images/rsis-logo.png',
    logoMark: '/images/rsis-logo-mark.png',
    og: '/images/og-rsis.jpg',
  },
  keywords: [
    'IT company in Nagpur',
    'software development company Nagpur',
    'web development company Nagpur',
    'mobile app development Nagpur',
    'digital marketing agency Nagpur',
    'SEO services India',
    'custom software development',
    'ERP software Nagpur',
    'CRM development',
    'computer hardware dealer Nagpur',
    'CCTV installation Nagpur',
    'AMC IT support Nagpur',
    'Right Serve Infotech System',
    'RSIS Nagpur',
  ],
} as const

export const MAPS_QUERY = encodeURIComponent(
  '10, Saurabh Nagar-2, Besa Rd, near Hanuman Mandir, Saubhagya Nagar, Ghogali, Nagpur, Maharashtra 440034',
)

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`

export const WHATSAPP_LINK = (message = 'Hi Right Serve Infotech System, I would like to discuss a project.') =>
  `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(message)}`

export const TEL_LINK = `tel:${SITE.contact.phonePrimary}`
export const MAILTO_LINK = `mailto:${SITE.contact.email}`

/** Headline trust numbers - reused on home, about, service pages. */
export const COMPANY_STATS = [
  { value: '150+', label: 'Projects delivered', caption: 'Websites, apps, ERPs & marketing campaigns' },
  { value: '100+', label: 'Happy clients', caption: 'Across India & overseas' },
  { value: '20+', label: 'In-house experts', caption: 'Developers, designers & strategists' },
  { value: '24/7', label: 'Support', caption: 'Monitoring, AMC & maintenance' },
]

/** "Where are you in the website process?" - from the existing brand messaging. */
export const WEBSITE_JOURNEY = [
  {
    title: 'Getting Started',
    description: 'I need help with the entire website process — strategy, design, content, development and launch.',
    icon: 'Rocket',
  },
  {
    title: 'Have a Design',
    description: 'I already have a design (Figma/PSD) and need it converted into a fast, responsive website.',
    icon: 'PenTool',
  },
  {
    title: 'Need Changes',
    description: 'My existing website needs an upgrade, better speed, or fixes to design and features.',
    icon: 'Wrench',
  },
  {
    title: 'Ongoing Support',
    description: 'My site is good but I need monthly upkeep, SEO, content updates and security patches.',
    icon: 'LifeBuoy',
  },
]

/** Industries served - keyword rich and useful for internal linking. */
export const INDUSTRIES = [
  { name: 'Attorneys & Law Firms', slug: 'legal', image: '/images/industry-legal.jpg', blurb: 'Case-management portals, secure document workflows and websites that win trust.' },
  { name: 'Construction & Infra', slug: 'construction', image: '/images/industry-construction.jpg', blurb: 'Billing, project tracking, labour management and inventory systems.' },
  { name: 'IT & Managed Services', slug: 'it-msp', image: '/images/industry-it.jpg', blurb: 'Ticketing, remote monitoring and AMC platforms for MSPs and IT teams.' },
  { name: 'Libraries & Education', slug: 'education', image: '/images/industry-library.jpg', blurb: 'School ERP, library automation, LMS and fee-management solutions.' },
  { name: 'Manufacturers', slug: 'manufacturing', image: '/images/industry-manufacturing.jpg', blurb: 'Production planning, stock control and dealer/CRM automation.' },
  { name: 'Healthcare & Clinics', slug: 'healthcare', image: '/images/industry-healthcare.jpg', blurb: 'Clinic management, patient reminders and HMS integrations.' },
  { name: 'Retail & E-commerce', slug: 'retail', image: '/images/industry-retail.jpg', blurb: 'POS, inventory, seasonal billing and WooCommerce/Shopify stores.' },
  { name: 'Finance & Professional Services', slug: 'finance', image: '/images/industry-finance.jpg', blurb: 'Lead CRM, tax-audit portals and compliance-ready dashboards.' },
]

/** Technology marquee (kept from the existing site, expanded). */
export const TECH_STACK = [
  { name: 'React', logo: '/images/tech/react.png' },
  { name: 'Node.js', logo: '/images/tech/nodejs.png' },
  { name: 'Express', logo: '/images/tech/express.png' },
  { name: 'MongoDB', logo: '/images/tech/mongodb.png' },
  { name: 'PostgreSQL', logo: '/images/tech/postgresql.png' },
  { name: 'AWS', logo: '/images/tech/aws.png' },
  { name: 'Flutter', logo: '/images/tech/flutter.png' },
  { name: 'React Native', logo: '/images/tech/react-native.png' },
  { name: 'Electron', logo: '/images/tech/electron.png' },
  { name: 'HTML5', logo: '/images/tech/html.png' },
  { name: 'CSS3', logo: '/images/tech/css.png' },
  { name: 'Git', logo: '/images/tech/git.png' },
  { name: 'Bootstrap', logo: '/images/tech/bootstrap.png' },
  { name: 'JavaScript', logo: '/images/tech/javascript.png' },
  { name: 'SQL', logo: '/images/tech/sql.png' },
]

export const WHY_US = [
  {
    title: '7+ years of delivery experience',
    description: 'Since 2019 we have shipped 150+ projects across software, hardware and growth marketing.',
    icon: 'Award',
  },
  {
    title: 'One partner, three capabilities',
    description: 'Software, hardware and digital marketing under one roof — no coordination gaps, no blame games.',
    icon: 'Layers',
  },
  {
    title: 'In-house, Nagpur-based team',
    description: 'You meet the people building your product. Walk-ins are welcome at our Besa Road office.',
    icon: 'Users',
  },
  {
    title: 'Fixed scope, transparent pricing',
    description: 'Written proposals, milestone billing and no hidden costs. Indian pricing, global quality.',
    icon: 'IndianRupee',
  },
  {
    title: 'Security & quality first',
    description: 'Code reviews, QA cycles, vulnerability scans and NDA-backed confidentiality.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Support that answers',
    description: 'Dedicated account manager, WhatsApp support and 24/7 monitoring for AMC clients.',
    icon: 'Headphones',
  },
]

export const DELIVERY_PROCESS = [
  { step: '01', title: 'Discover', description: 'Free consultation, requirement workshop and competitor/SEO research.' },
  { step: '02', title: 'Plan & Design', description: 'Sitemap, wireframes, UI design and a milestone-based project plan.' },
  { step: '03', title: 'Build', description: 'Agile sprints with weekly demos on staging before anything goes live.' },
  { step: '04', title: 'Test & Launch', description: 'QA, speed, security and SEO checks, then a monitored go-live.' },
  { step: '05', title: 'Grow', description: 'Analytics reviews, feature iterations, AMC support and marketing campaigns.' },
]
