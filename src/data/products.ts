export type Product = {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  features: string[]
  image: string
  price?: string
  rating?: number
  badge?: string
  industries?: string[]
  cta?: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'secure-build',
    name: 'Secure Build',
    category: 'Construction Software',
    tagline: 'Project billing & site management for contractors',
    description:
      'Construction billing and project management software for contractors, builders and EPC companies. Track BOQ, RA bills, material, labour and site progress with owner-level dashboards.',
    features: [
      'BOQ, estimation & rate analysis',
      'RA bills, work orders & measurement sheets',
      'Material inward, consumption & wastage',
      'Labour attendance and DPR',
      'Client-wise profitability reports',
    ],
    image: '/images/products/secure-build.jpg',
    price: '₹4,999/month',
    rating: 4.8,
    badge: 'Most popular',
    industries: ['Construction', 'Infrastructure', 'EPC'],
  },
  {
    slug: 'trajectoryfy',
    name: 'Trajectoryfy',
    category: 'Inventory & Project Management',
    tagline: 'Real-time inventory with automated reordering',
    description:
      'Advanced inventory and project management platform with real-time stock tracking, multi-location transfers, automated reorder alerts and detailed reporting for growing businesses.',
    features: [
      'Real-time stock across locations',
      'Automated reorder & low-stock alerts',
      'Team collaboration and task tracking',
      'Time tracking with productivity reports',
      'Role-based data security & audit logs',
    ],
    image: '/images/products/trajectoryfy.jpg',
    price: '₹2,999/month',
    rating: 4.6,
    industries: ['Manufacturing', 'Trading', 'Retail'],
  },
  {
    slug: 'dosecare',
    name: 'DoseCare',
    category: 'Healthcare Software',
    tagline: 'Patient care, reminders and clinic workflows',
    description:
      'Smart healthcare management platform for clinics, hospitals and pharmacies — patient records, prescriptions, medication reminders, refill alerts and appointment scheduling in one place.',
    features: [
      'Medication reminders & adherence tracking',
      'Digital prescriptions & patient history',
      'Appointment scheduling and alerts',
      'Pharmacy refill and stock alerts',
      'Doctor-wise consultation analytics',
    ],
    image: '/images/products/dosecare.jpg',
    price: '₹3,499/month',
    rating: 4.7,
    industries: ['Healthcare', 'Pharmacy', 'Diagnostics'],
  },
  {
    slug: 'tubemonitize',
    name: 'TubeMonitize',
    category: 'Creator Analytics',
    tagline: 'Revenue and growth analytics for YouTube channels',
    description:
      'Analytics platform for content creators and agencies — track monetisation revenue, channel growth, audience retention and multi-channel performance with interactive dashboards.',
    features: [
      'Revenue & RPM tracking',
      'Multi-channel dashboards',
      'Audience retention insights',
      'Growth and trend alerts',
      'Exportable brand-deal reports',
    ],
    image: '/images/products/tubemonitize.jpg',
    price: '₹5,499/month',
    rating: 4.5,
    industries: ['Media', 'Creators', 'Agencies'],
  },
  {
    slug: 'shiksha-sutra',
    name: 'Shiksha Sutra',
    category: 'Education ERP',
    tagline: 'School ERP from admission to results',
    description:
      'Complete school and coaching ERP covering admissions, fees, attendance, exams, results, transport, staff payroll and parent communication — accessible online from any device.',
    features: [
      'Student & staff management',
      'Fees collection with receipts',
      'Exam, grade and result automation',
      'Parent portal & app notifications',
      'Study notes, timetable and reports',
    ],
    image: '/images/products/shiksha-sutra.jpg',
    price: '₹1,999/month',
    rating: 4.3,
    industries: ['Schools', 'Coaching', 'Colleges'],
  },
  {
    slug: 'email-system',
    name: 'Encrypted Email System',
    category: 'Business Communication',
    tagline: 'Secure, private email for your organisation',
    description:
      'Business email solution with end-to-end encryption, spam protection, archiving and compliance controls — ideal for firms that exchange confidential client information.',
    features: [
      'End-to-end encryption',
      'Advanced spam & phishing filtering',
      'Unlimited archiving with search',
      'Custom domain & user provisioning',
      'DLP rules for confidential data',
    ],
    image: '/images/products/email-system.jpg',
    price: '₹3,299/year',
    rating: 4.4,
    industries: ['Legal', 'Finance', 'Healthcare'],
  },
]

export const PRODUCT_BENEFITS = [
  { title: 'Enterprise security', description: 'Encryption, role-based access and daily backups come standard with every product.', icon: 'ShieldCheck' },
  { title: 'Multi-user ready', description: 'Unlimited team members with granular permissions and activity logs.', icon: 'Users' },
  { title: 'Built for performance', description: 'Optimised queries and caching keep large datasets responsive.', icon: 'Gauge' },
  { title: 'Assured quality', description: 'Structured QA cycles, UAT with your team and a documented release process.', icon: 'BadgeCheck' },
]

export const PRODUCT_REVIEWS = [
  {
    name: 'Aman Kewalramani',
    role: 'BlueLadder EPC Solution Pvt. Ltd.',
    text: 'Secure Build transformed the way we manage site billing. RA bills and material tracking that used to take days now happen the same evening.',
    logo: '/images/clients/blue-ladder.png',
  },
  {
    name: 'Harish Zade',
    role: 'Vidyacure Solution',
    text: 'DoseCare is simple enough for our staff and powerful enough for the doctors. Reminder accuracy has improved patient retention noticeably.',
    logo: '/images/clients/vidyacure.png',
  },
  {
    name: 'Shreyans Bhandari',
    role: 'Aanand Computers',
    text: 'Trajectoryfy gives us live stock visibility across branches. Reorder alerts alone saved us from repeated stock-outs.',
    logo: '/images/clients/anand-computers.png',
  },
]
