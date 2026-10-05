export type Project = {
  slug: string
  title: string
  category: 'Software Development' | 'App Development' | 'Websites' | 'Digital Marketing'
  client?: string
  description: string
  image: string
  highlights?: string[]
  year?: string
}

/**
 * Portfolio - real client work delivered by Right Serve Infotech System.
 * Categories double as the filter tabs on /portfolio.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'mdr-management-software',
    title: 'MDR Management Software',
    category: 'Software Development',
    client: 'Banking & financial services',
    description:
      'Financing software that highlights bank-specified MDR rates and supports large enterprises, including multinational companies, in managing merchant discount rate reconciliation and financial reporting.',
    image: '/images/portfolio/mdr-management.jpg',
    highlights: ['Bank-wise MDR rate engine', 'Automated reconciliation', 'Multi-entity reporting'],
  },
  {
    slug: 'janta-darbar-grievance-portal',
    title: 'Janta Darbar Grievance Portal',
    category: 'Software Development',
    client: 'District administration',
    description:
      'A smart online grievance management system that brings every government department under one supervision platform — complaint registration, department-wise routing, SLA escalation and public status tracking.',
    image: '/images/portfolio/grievance-portal.jpg',
    highlights: ['Department-wise routing & SLA', 'Complaint tracking for citizens', 'Analytics dashboards'],
  },
  {
    slug: 'document-generating-system',
    title: 'Document Generating System',
    category: 'Software Development',
    client: 'Ashish Construction',
    description:
      'Automates the creation of professional construction documents — producing accurate, formatted files from predefined templates and live project data instead of manual typing.',
    image: '/images/portfolio/document-generating-system.jpg',
    highlights: ['Template-driven generation', 'Auto-filled project data', 'PDF & print formats'],
  },
  {
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    category: 'Software Development',
    client: 'Anand Computers',
    description:
      'Efficient inventory tracking that provides real-time stock visibility, reduces excess and stock-outs, and enables informed purchasing decisions for a multi-branch IT retail business.',
    image: '/images/portfolio/inventory-management.jpg',
    highlights: ['Multi-branch stock', 'Barcode support', 'Purchase & sales reports'],
  },
  {
    slug: 'nsm-associates-crm',
    title: 'NSM & Associates CRM',
    category: 'Software Development',
    client: 'NSM & Associates',
    description:
      'Web and mobile CRM solutions give field executives real-time access to customer data, improving lead tracking, meeting scheduling and communication for a professional audit and taxation firm.',
    image: '/images/portfolio/nsm-crm.jpg',
    highlights: ['Field executive mobile app', 'Lead & meeting tracking', 'Document checklists'],
  },
  {
    slug: 'lead-crm',
    title: 'Lead CRM',
    category: 'Software Development',
    client: 'Right Serve Infotech System',
    description:
      'Our own customer relationship management platform, used to track every enquiry from first call to project sign-off, with automated follow-up reminders and conversion analytics.',
    image: '/images/portfolio/lead-crm.jpg',
    highlights: ['Pipeline stages & reminders', 'Call/email logs', 'Conversion dashboards'],
  },
  {
    slug: 'seasonal-business-management',
    title: 'Seasonal Business Management',
    category: 'Software Development',
    client: 'Retail & agri businesses',
    description:
      'Seasonal billing software that helps businesses manage fluctuating sales cycles, maintain cash flow visibility and streamline operations through peak and off seasons.',
    image: '/images/portfolio/seasonal-billing.jpg',
    highlights: ['Season-wise billing', 'Credit & cash flow tracking', 'Peak-load performance'],
  },
  {
    slug: 'construction-billing-software',
    title: 'Construction Billing Software',
    category: 'Software Development',
    client: 'Builders & contractors',
    description:
      'Billing software for contractors and builders to manage project-based invoices, track payments, monitor retention amounts and streamline financial operations on multi-site projects.',
    image: '/images/portfolio/construction-billing.jpg',
    highlights: ['Project-wise invoicing', 'Retention & advance tracking', 'Payment follow-up reports'],
  },
  {
    slug: 'virtual-pointer-software',
    title: 'Virtual Pointer Software',
    category: 'Software Development',
    client: 'Design & training teams',
    description:
      'A virtual pointer and 3D customisation tool that lets users change colours and structural elements of models for real-time design visualisation during client presentations.',
    image: '/images/portfolio/virtual-pointer.jpg',
    highlights: ['Real-time 3D customisation', 'Presentation mode', 'Exportable views'],
  },
  {
    slug: 'shiksha-sutra-erp',
    title: 'Shiksha Sutra — School ERP',
    category: 'Software Development',
    client: 'Educational institutions',
    description:
      'A school ERP that streamlines admissions, fees, attendance, examinations and result publishing — improving efficiency and organisation across academic and administrative departments.',
    image: '/images/portfolio/shiksha-sutra.jpg',
    highlights: ['Fees & receipts', 'Exam and result automation', 'Parent communication'],
  },
  {
    slug: 'secure-build',
    title: 'Secure Build',
    category: 'Software Development',
    client: 'BlueLadder EPC Solution Pvt. Ltd.',
    description:
      'Secure Build embeds quality and compliance checks into the construction billing process, running measurement validations and approval workflows so billing data stays audit-ready.',
    image: '/images/portfolio/secure-build.jpg',
    highlights: ['BOQ & measurement validation', 'Approval workflow', 'Site progress dashboards'],
  },
  {
    slug: 'email-system',
    title: 'Encrypted Email System',
    category: 'Software Development',
    client: 'Confidentiality-driven firms',
    description:
      'Encrypted email service that protects company communication with end-to-end encryption, spam filtering, archiving and data-loss-prevention rules.',
    image: '/images/portfolio/email-system.jpg',
    highlights: ['End-to-end encryption', 'Spam & phishing filtering', 'Compliance archiving'],
  },
  {
    slug: 'kashish-enterprises-portal',
    title: 'Kashish Enterprises Portal',
    category: 'Software Development',
    client: 'Kashish Enterprises',
    description:
      'A business operations portal for a multi-industry solutions provider — product catalogue, enquiry management, quotation generation and order tracking in one system.',
    image: '/images/portfolio/kashish-enterprises.jpg',
    highlights: ['Catalogue & quotation engine', 'Enquiry pipeline', 'Order status tracking'],
  },
  {
    slug: 'my-naai-app',
    title: 'My Naai — Booking App',
    category: 'App Development',
    client: 'My Naai',
    description:
      'A user-friendly mobile application that simplifies salon and barber bookings, letting customers schedule appointments in seconds while helping service providers manage their day efficiently.',
    image: '/images/portfolio/my-naai-app.jpg',
    highlights: ['Slot-based booking', 'Push reminders', 'Ratings & rebooking'],
  },
  {
    slug: 'my-naai-admin',
    title: 'My Naai — Business Dashboard',
    category: 'Software Development',
    client: 'My Naai',
    description:
      'A powerful web-based dashboard to manage bookings, users, services and business operations — providing complete control and real-time insights for smooth salon management.',
    image: '/images/portfolio/my-naai-admin.jpg',
    highlights: ['Staff & service management', 'Revenue insights', 'Booking calendar'],
  },
  {
    slug: 'citri-hub',
    title: 'Citri Hub',
    category: 'App Development',
    client: 'Citri Hub',
    description:
      'Secure Build methodology applied to a digital commerce platform — security reviews, vulnerability assessments and compliance checks embedded directly into the release process.',
    image: '/images/portfolio/citri-hub.jpg',
    highlights: ['Security-first build', 'Vulnerability assessments', 'Compliance checks'],
  },
  {
    slug: 'dose-care-app',
    title: 'DoseCare — Health App',
    category: 'App Development',
    client: 'Vidyacure Solutions',
    description:
      'DoseCare is a smart healthcare management app designed to simplify patient care, medication tracking and health monitoring with timely reminders for patients and caregivers.',
    image: '/images/portfolio/dosecare-app.jpg',
    highlights: ['Medication reminders', 'Prescription storage', 'Caregiver alerts'],
  },
  {
    slug: 'mnymkt-app',
    title: 'MNYMKT — Finance App',
    category: 'App Development',
    client: 'RetailMax Solutions',
    description:
      'A digital finance platform offering easy loans, investments and money management solutions, with KYC flows, eligibility checks and secure document handling.',
    image: '/images/portfolio/mnymkt-app.jpg',
    highlights: ['Digital KYC', 'Loan eligibility engine', 'Secure document vault'],
  },
  {
    slug: 'nsm-associates-app',
    title: 'NSM & Associates — Field App',
    category: 'App Development',
    client: 'NSM & Associates',
    description:
      'Mobile CRM app for audit and taxation professionals, giving field teams offline access to client data, task checklists and site visit documentation.',
    image: '/images/portfolio/nsm-app.jpg',
    highlights: ['Offline-first data', 'Visit checklists', 'Document capture'],
  },
  {
    slug: 'tubemonitize-app',
    title: 'TubeMonitize',
    category: 'App Development',
    client: 'Creator economy',
    description:
      'Creator analytics app that brings monetisation revenue, RPM trends and channel growth insights to mobile, so creators can track performance without opening a laptop.',
    image: '/images/portfolio/tubemonitize-app.jpg',
    highlights: ['Revenue dashboards', 'Growth alerts', 'Multi-channel compare'],
  },
  {
    slug: 'iron-horse-expedition',
    title: 'Iron Horse Expedition',
    category: 'Websites',
    client: 'IRON HORSE EXPEDITION',
    description:
      'A professionally designed, high-performance travel and adventure website built to showcase expedition packages, capture bookings and deliver a seamless experience across all devices.',
    image: '/images/portfolio/iron-horse.jpg',
    highlights: ['Package showcase & enquiry', 'Mobile-first design', 'Fast image delivery'],
  },
  {
    slug: 'ashish-construction-website',
    title: 'Ashish Construction',
    category: 'Websites',
    client: 'Ashish Construction',
    description:
      'Corporate website for a building, renovation and infrastructure company — service pages, project gallery and enquiry funnel that positions them as a reliable, quality-first contractor.',
    image: '/images/portfolio/ashish-construction.jpg',
    highlights: ['Project gallery', 'Service pages', 'Local SEO setup'],
  },
  {
    slug: 'pocho',
    title: 'Pocho — Product Showcase',
    category: 'Websites',
    client: 'Pench Wildlife Resort',
    description:
      'An online platform developed to showcase and sell resort products and experiences, with a clean catalogue, enquiry flow and content that highlights the destination.',
    image: '/images/portfolio/pocho.jpg',
    highlights: ['Catalogue & enquiry', 'Seasonal offers', 'Booking enquiries'],
  },
  {
    slug: 'mnymkt-website',
    title: 'MNYMKT Website',
    category: 'Websites',
    client: 'RetailMax Solutions',
    description:
      'Web and mobile CRM solutions give field executives real-time access to customer data, and the MNYMKT website communicates the finance product suite with clear product pages and CTAs.',
    image: '/images/portfolio/mnymkt-website.jpg',
    highlights: ['Product storytelling', 'Lead capture flows', 'Compliance-ready copy'],
  },
  {
    slug: 'gaurav-infra',
    title: 'Gaurav Infra',
    category: 'Websites',
    client: 'Gaurav Infra',
    description:
      'Website for an infrastructure development firm focused on innovative design and durable construction solutions, built to win tenders and private contracts.',
    image: '/images/portfolio/gaurav-infra.jpg',
    highlights: ['Project showcase', 'Capability statements', 'Tender enquiries'],
  },
  {
    slug: 'madhuprabha-construction',
    title: 'Madhuprabha Construction',
    category: 'Websites',
    client: 'Madhuprabha Construction',
    description:
      'A trusted construction company website delivering residential and commercial project highlights with quality and precision front and centre.',
    image: '/images/portfolio/madhuprabha.jpg',
    highlights: ['Gallery-led design', 'Service listing', 'Enquiry forms'],
  },
  {
    slug: 'caliber-enterprises',
    title: 'Caliber Enterprises',
    category: 'Websites',
    client: 'Caliber Enterprises',
    description:
      'Product website for a supplier of high-quality bricks, cement bricks and ash bricks, with specifications, use cases and dealer enquiry forms.',
    image: '/images/portfolio/caliber-enterprises.jpg',
    highlights: ['Product specifications', 'Bulk enquiry flow', 'Dealer network page'],
  },
  {
    slug: 'shree-sai-services',
    title: 'Shree Sai Services',
    category: 'Websites',
    client: 'Shri Sai Services',
    description:
      'Website for a facility management and maintenance company offering repair and AMC services, structured to generate service enquiries from societies and commercial clients.',
    image: '/images/portfolio/shree-sai-services.jpg',
    highlights: ['Service packages', 'Enquiry funnel', 'WhatsApp integration'],
  },
  {
    slug: 'shree-gajanan-mauli-electrical',
    title: 'Shree Gajanan Mauli Electrical',
    category: 'Websites',
    client: 'Shree Gajanan Mauli Electrical',
    description:
      'A professional electrical contracting website covering installation and maintenance services for homes, societies and industries.',
    image: '/images/portfolio/electrical.jpg',
    highlights: ['Service catalogue', 'Site gallery', 'Quick contact'],
  },
  {
    slug: 'playzone',
    title: 'PlayZone',
    category: 'Websites',
    client: 'Sahil Ghormade',
    description:
      'An entertainment and gaming platform website offering indoor activities and digital games for all age groups, with packages and party-booking enquiries.',
    image: '/images/portfolio/playzone.jpg',
    highlights: ['Package pricing', 'Party booking enquiry', 'Location & timings'],
  },
  {
    slug: 'election-campaign-marketing',
    title: 'Election Campaign Management',
    category: 'Digital Marketing',
    client: 'Political campaigns',
    description:
      'Multi-channel election campaigning — constituency-wise messaging, rapid creative production, WhatsApp/SMS outreach, LED van promotions and daily booth-level analytics.',
    image: '/images/portfolio/election-campaign.jpg',
    highlights: ['War-room content production', 'Voter outreach at scale', 'Daily dashboards'],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'Digital Marketing',
    client: 'Multiple industries',
    description:
      'Social media programmes designed to elevate brand presence and engagement — content calendars, reels, community management and paid amplification.',
    image: '/images/portfolio/social-media-marketing.jpg',
    highlights: ['Content calendars', 'Reels & creatives', 'Engagement growth'],
  },
  {
    slug: 'seo-management',
    title: 'SEO Management',
    category: 'Digital Marketing',
    client: 'Multiple industries',
    description:
      'Ongoing SEO programmes that improve rankings, traffic and enquiry quality through technical fixes, content and consistent authority building.',
    image: '/images/portfolio/seo-management.jpg',
    highlights: ['Technical SEO', 'Local ranking growth', 'Monthly reporting'],
  },
  {
    slug: 'lead-generation-campaigns',
    title: 'Lead Generation Campaigns',
    category: 'Digital Marketing',
    client: 'B2B & services',
    description:
      'Google and Meta ad campaigns with landing pages, tracking and call/WhatsApp attribution that bring cost per qualified lead down month after month.',
    image: '/images/portfolio/lead-generation.jpg',
    highlights: ['High-intent keywords', 'Landing page CRO', 'CPL optimisation'],
  },
]

export const PORTFOLIO_CATEGORIES = ['All', 'Software Development', 'App Development', 'Websites', 'Digital Marketing'] as const

export const PORTFOLIO_STATS = [
  { value: '150+', label: 'Projects delivered' },
  { value: '25+', label: 'Industries served' },
  { value: '100+', label: 'Happy clients' },
  { value: '9', label: 'States reached' },
]
