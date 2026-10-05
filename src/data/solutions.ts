/**
 * Product / solution content.
 *
 * Feature lists contain only capabilities evidenced by the company's own
 * product pages, project records and delivered software screens. Platforms are
 * listed per product exactly as the business states them — no product claims
 * to support a platform it has not been built for.
 */

export interface SolutionFeatureGroup {
  title: string;
  items: string[];
}

export interface Solution {
  slug: string;
  path: string;
  name: string;
  navTitle: string;
  navDescription: string;
  icon: string;
  category: 'Billing & Distribution' | 'Retail' | 'Education' | 'Finance & Society' | 'Business Management' | 'Construction' | 'Healthcare';
  h1: string;
  subtitle: string;
  summary: string;
  heroLead: string;
  /** Platforms the product is actually offered on. */
  platforms: string[];
  audience: string[];
  problems: { title: string; text: string }[];
  featureGroups: SolutionFeatureGroup[];
  highlights: string[];
  deployment: string[];
  support: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  related: { label: string; path: string; description: string }[];
  cta: { title: string; text: string };
  media?: { src: string; alt: string; caption?: string };
  /** Visual theme used for solution cards and placeholder artwork. */
  accent: 'azure' | 'teal' | 'amber' | 'navy';
  status?: string;
  /** True when the product page is linked from the main navigation. */
  featured?: boolean;
}

export const solutions: Solution[] = [
  {
    slug: 'fmcg-billing',
    path: '/solutions/fmcg-billing',
    name: 'FMCG Billing Software',
    navTitle: 'FMCG Billing',
    navDescription: 'Billing, distribution and business management',
    icon: 'ShoppingCart',
    category: 'Billing & Distribution',
    h1: 'FMCG billing, distribution and business management software',
    subtitle: 'Desktop · Web · Mobile',
    summary:
      'Billing and business management software designed for FMCG distributors, wholesalers and stockists who run high-volume, fast-moving operations.',
    heroLead:
      'FMCG businesses work on thin margins and fast movement: hundreds of SKUs, daily routes, credit sales and constant rate changes. The software has to keep up at the counter, in the warehouse and on the road.',
    platforms: ['Desktop', 'Web', 'Mobile'],
    audience: [
      'FMCG distributors and super stockists',
      'Wholesalers and semi-wholesale counters',
      'Route sales and van sales operations',
      'Businesses moving from manual billing and spreadsheets to a proper system',
    ],
    problems: [
      {
        title: 'Billing slows down at peak hours',
        text: 'A counter can only move as fast as the software. We set the system up around your item and rate structure so a bill is generated in seconds, not minutes.',
      },
      {
        title: 'Rates and schemes differ per customer',
        text: 'Distributor pricing varies by party, quantity and scheme. The software is configured to your rate and discount arrangement instead of forcing one price list on everyone.',
      },
      {
        title: 'Stock figures never match',
        text: 'When billing, purchase and physical stock live in different registers, shortages appear at month end. One system keeps stock, sales and purchase in the same place.',
      },
      {
        title: 'Coordinating counter and field teams',
        text: 'Orders booked in the field or at the warehouse need to reach billing without being written twice. Desktop, web and mobile access let each role work where they are.',
      },
    ],
    featureGroups: [
      {
        title: 'Billing and sales',
        items: [
          'Fast counter and counter-side billing for high transaction volumes',
          'Invoice, cash memo and delivery challan generation',
          'Item, batch and rate-wise billing with discount handling',
          'Credit, cash and part-payment sales records',
          'Customer-wise and item-wise sales history',
        ],
      },
      {
        title: 'Products, rates and stock',
        items: [
          'Item master with categories, units and pack sizes',
          'Purchase entry and supplier records',
          'Stock position with low-stock visibility',
          'Rate structures and party-specific pricing practices',
          'Godown or warehouse-wise stock records where required',
        ],
      },
      {
        title: 'Parties and accounts',
        items: [
          'Customer and supplier masters with contact details',
          'Outstanding and ledger records per party',
          'Payment receipts and expense entries',
          'Credit limits and overdue visibility',
        ],
      },
      {
        title: 'Reports and operations',
        items: [
          'Daily sales, item-wise and party-wise sales reports',
          'Purchase and stock reports',
          'Outstanding and collection reports',
          'Sales and stock summaries for management review',
          'Data export for accounting and further analysis',
        ],
      },
    ],
    highlights: [
      'Runs on desktop, web and mobile so the counter, office and field team use the same data',
      'Designed for the pace of FMCG billing rather than general retail counter behaviour',
      'Configured to your item, rate and party structure during implementation',
      'Local deployment or cloud hosting, based on your preference and internet reliability',
    ],
    deployment: [
      'Desktop installation on counter or back-office machines',
      'Web application accessed through a browser from any location',
      'Mobile access for owners and field staff who need figures away from the office',
      'Cloud or on-premise server deployment, decided with your team',
      'Data migration from existing software or spreadsheets during implementation',
    ],
    support: [
      'Implementation and data setup with your item and party masters',
      'Training for counter, accounts and management users',
      'Post-go-live support and issue resolution',
      'Enhancement requests handled as scoped additions',
    ],
    useCases: [
      'A distributor issuing several hundred bills a day across multiple parties',
      'A wholesaler who needs party-wise outstanding visible before releasing goods',
      'A route sales operation booking orders during the day and billing at the depot',
      'A growing business adding a second counter or godown',
    ],
    faqs: [
      {
        q: 'Is the software available for both desktop and mobile?',
        a: 'Yes. FMCG billing is offered on desktop, web and mobile. Which combination you use depends on your operations — the counter may stay on desktop while the owner uses mobile for reports.',
      },
      {
        q: 'Can it work when our internet connection is unreliable?',
        a: 'Desktop deployment keeps billing running on local machines. Web and mobile features need connectivity, so we plan the deployment around how reliable your connection is.',
      },
      {
        q: 'Can you migrate our existing item and party data?',
        a: 'Yes. We migrate item masters, parties, rates and opening balances from your existing software or spreadsheets as part of implementation.',
      },
      {
        q: 'Can reports be customised for our business?',
        a: 'Yes. If a report is prepared manually for management review, we can build it into the system rather than leaving it as a monthly exercise.',
      },
      {
        q: 'Can we see the software before deciding?',
        a: 'Yes. Request a product demo and we will walk through billing, stock, parties and reports with your own examples.',
      },
    ],
    related: [
      { label: 'Business management software', path: '/solutions/business-management', description: 'When your requirement extends beyond billing' },
      { label: 'Mobile app development', path: '/services/mobile-app-development', description: 'Custom mobile apps for sales and delivery teams' },
      { label: 'Custom software development', path: '/services/software-development', description: 'Extensions built specifically for your operation' },
      { label: 'Request a demo', path: '/contact', description: 'See the software with your own data' },
    ],
    cta: {
      title: 'See FMCG billing software in action',
      text: 'Bring your item list and a sample bill format. We will show you how the software handles your daily billing and reporting.',
    },
    accent: 'azure',
    featured: true,
  },
  {
    slug: 'jewellery-billing',
    path: '/solutions/jewellery-billing',
    name: 'Jewellery Billing Software',
    navTitle: 'Jewellery Billing',
    navDescription: 'Showroom billing and jewellery business management',
    icon: 'Gem',
    category: 'Retail',
    h1: 'Jewellery billing and business management software',
    subtitle: 'Desktop · Web · Mobile',
    summary:
      'Industry-specific billing and management software for jewellers and showrooms, built around the billing practices of the jewellery trade rather than general retail.',
    heroLead:
      'Jewellery billing is not like other retail billing: metal, making charges, stone values, exchange of old items and customer-specific rates all sit on the same invoice. The software should handle that naturally.',
    platforms: ['Desktop', 'Web', 'Mobile'],
    audience: [
      'Jewellery showrooms and retail counters',
      'Gold and silver jewellers with multiple counters',
      'Manufacturer-cum-retailers handling their own stock',
      'Businesses upgrading from manual bill books and basic billing packages',
    ],
    problems: [
      {
        title: 'Every bill involves calculations no generic software handles',
        text: 'Metal value, making charges, stone or polki value and old jewellery exchange need to be computed on the same invoice. The billing flow is built around this instead of working against it.',
      },
      {
        title: 'Stock records do not reflect physical stock',
        text: 'Tag-wise or piece-wise stock is hard to maintain manually. Keeping inward, outward and sale records in one system makes physical verification far simpler.',
      },
      {
        title: 'Customer purchase history is hard to retrieve',
        text: 'When a customer returns with an old bill for exchange or repair, history should be searchable by name, mobile number or bill reference.',
      },
      {
        title: 'Owner visibility depends on the counter',
        text: 'Daily sales, stock position and outstanding figures are available to the owner directly rather than only through counter staff.',
      },
    ],
    featureGroups: [
      {
        title: 'Jewellery billing',
        items: [
          'Bill generation with metal, weight, making charge and stone components',
          'Customer-wise rates and negotiation-friendly billing practice',
          'Old gold or old jewellery exchange handling on the invoice',
          'Repair and job-work billing records',
          'Bill printing and reprinting for customer copy',
        ],
      },
      {
        title: 'Stock and items',
        items: [
          'Item and design master with purity, weight and category details',
          'Inward entry from purchases and karigar or job-work returns',
          'Stock records by counter or showroom where applicable',
          'Tag-wise or piece-wise tracking practices',
          'Physical stock verification support',
        ],
      },
      {
        title: 'Customers and parties',
        items: [
          'Customer master with contact and purchase history',
          'Party and karigar records',
          'Outstanding, advances and old-balance tracking',
          'Exchange and scheme-related customer records',
        ],
      },
      {
        title: 'Reports',
        items: [
          'Daily sales and counter-wise sales reports',
          'Item and category-wise sales analysis',
          'Stock and purity-wise stock position',
          'Outstanding, collection and expense reports',
          'Management summaries for owner review',
        ],
      },
    ],
    highlights: [
      'Built for jewellery billing conventions instead of adapted from general retail billing',
      'Available on desktop, web and mobile',
      'Supports multiple counters or showrooms using the same data',
      'Configured during implementation around your billing and stock practices',
    ],
    deployment: [
      'Desktop installation at the billing counter',
      'Web application for owners and multi-counter operations',
      'Mobile access for figures and approvals away from the showroom',
      'Cloud or on-premise deployment',
      'Data migration from existing systems where records are available',
    ],
    support: [
      'Implementation configured to your billing and stock practices',
      'Counter staff training and hand-holding in the initial days',
      'Ongoing support for billing, stock and report queries',
      'Additional reports or billing formats added as needed',
    ],
    useCases: [
      'A showroom needing bills that combine metal, making charges and exchange of old items',
      'A jeweller preparing for physical stock verification with a digital stock record',
      'An owner wanting daily sales and stock visibility on a phone',
      'A business opening a second counter or showroom',
    ],
    faqs: [
      {
        q: 'Does the software calculate making charges and exchange values?',
        a: 'Billing is designed around jewellery invoicing practice, including metal value, making charges and exchange of old items. The exact configuration is set up during implementation to match how your business bills.',
      },
      {
        q: 'Is it available on mobile?',
        a: 'Yes — desktop, web and mobile are all offered. Most showrooms bill on desktop or web and use mobile for owner-level visibility.',
      },
      {
        q: 'Can we print bills on our existing printer?',
        a: 'Yes. We set up bill printing on the printer you already use, and align the bill layout with your current format where required.',
      },
      {
        q: 'Can it handle multiple showrooms?',
        a: 'Yes. Multi-counter and multi-showroom operations are supported, with data visibility controlled by role.',
      },
      {
        q: 'Can we get a demonstration before purchasing?',
        a: 'Yes. Request a demo and we will demonstrate billing with representative examples of your jewellery categories.',
      },
    ],
    related: [
      { label: 'FMCG billing software', path: '/solutions/fmcg-billing', description: 'Billing for distribution and wholesale businesses' },
      { label: 'Business management software', path: '/solutions/business-management', description: 'General management modules for retail businesses' },
      { label: 'Custom software development', path: '/services/software-development', description: 'Additions specific to your showroom process' },
      { label: 'Request a demo', path: '/contact', description: 'See the billing flow with your examples' },
    ],
    cta: {
      title: 'Request a jewellery billing demo',
      text: 'Tell us how your counter bills today — metal, making charges, exchange and all. We will show you the matching flow in the software.',
    },
    accent: 'amber',
    featured: true,
  },
  {
    slug: 'tuition-erp',
    path: '/solutions/tuition-erp',
    name: 'Tuition ERP',
    navTitle: 'Tuition ERP',
    navDescription: 'Coaching and institute management software',
    icon: 'GraduationCap',
    category: 'Education',
    h1: 'Tuition and coaching institute ERP software',
    subtitle: 'Desktop · Web · Mobile',
    summary:
      'Education management software for tuition classes, coaching institutes and schools — covering students, staff, exams and results, with access on web, desktop and mobile.',
    heroLead:
      'A coaching institute runs on admissions, attendance, exams and fee collection. When those live in registers and spreadsheets, the office spends its day answering questions instead of managing the institute.',
    platforms: ['Desktop', 'Web', 'Mobile'],
    audience: [
      'Tuition classes and coaching centres',
      'Institutes running multiple batches and courses',
      'Schools and academies that need academic record management',
      'Administrators who currently track admissions and fees in registers or spreadsheets',
    ],
    problems: [
      {
        title: 'Admission and fee records are scattered',
        text: 'Admission forms, fee registers and receipts in different places make it hard to answer simple questions about a student. One system keeps the full record together.',
      },
      {
        title: 'Attendance and exam data take days to compile',
        text: 'Batch attendance and test results entered once can be reported immediately instead of being tabulated manually at the end of every test.',
      },
      {
        title: 'Parents ask for information the office cannot find quickly',
        text: 'With student and batch records in the system, attendance, results and fee status can be answered in seconds.',
      },
      {
        title: 'Staff and batch scheduling is managed informally',
        text: 'Batch, subject and staff records in the system make timetabling and workload visible instead of relying on individual notes.',
      },
    ],
    featureGroups: [
      {
        title: 'Student management',
        items: [
          'Admission and enquiry records',
          'Student profile with course, batch and contact details',
          'Batch allocation and student lists per batch',
          'Document and record keeping for the office',
          'Search and retrieval of any student record in seconds',
        ],
      },
      {
        title: 'Staff and batch management',
        items: [
          'Staff and faculty records with subject allocation',
          'Batch and course definitions',
          'Subject-wise faculty assignment',
          'Batch schedules and timetable records',
          'Workload visibility for management',
        ],
      },
      {
        title: 'Exams, results and academic records',
        items: [
          'Exam and test scheduling',
          'Marks entry and result preparation',
          'Batch-wise and student-wise result reports',
          'Progress records across tests',
          'Notes and study material sharing where configured',
        ],
      },
      {
        title: 'Fees, attendance and administration',
        items: [
          'Fee structure setup by course and batch',
          'Fee collection entries and receipt generation',
          'Outstanding and due fee visibility',
          'Attendance marking and attendance reports',
          'Administrative and management reports',
        ],
      },
    ],
    highlights: [
      'Student, staff, exam, result, attendance and fee management in one system',
      'Available on desktop, web and mobile — the office can work at a desk while parents or staff use mobile',
      'Batch and course structure that matches how your institute actually runs',
      'Reports prepared for institute management instead of raw data dumps',
    ],
    deployment: [
      'Web deployment for office and staff access from any location',
      'Desktop installation for the administration desk',
      'Mobile access for management and staff',
      'Cloud hosting or institute server deployment',
      'Initial data setup for courses, batches and existing students',
    ],
    support: [
      'Setup of courses, batches, fee structures and users',
      'Training for office staff and faculty',
      'Support during the first admission and result cycles',
      'Enhancement requests, including fee receipts and report formats specific to your institute',
    ],
    useCases: [
      'A coaching institute managing multiple batches and a staff of several faculty members',
      'A tuition class that wants fee dues visible without searching registers',
      'An institute preparing results for hundreds of students across batches',
      'An academy opening a second branch and needing shared records',
    ],
    faqs: [
      {
        q: 'Does it work for a single tuition class as well as a large institute?',
        a: 'Yes. The system is configured to the number of courses and batches you run, so a single-class setup is not burdened with modules it does not need.',
      },
      {
        q: 'Can parents access information directly?',
        a: 'Mobile access supports sharing information with parents where configured. The exact scope of external access depends on the modules you choose and is agreed during implementation.',
      },
      {
        q: 'Can we set our own fee structures?',
        a: 'Yes. Fee structures are configured by course, batch and category, and receipts follow your institute format.',
      },
      {
        q: 'Is it available on mobile?',
        a: 'Yes — the ERP is offered on desktop, web and mobile.',
      },
      {
        q: 'Can existing student data be imported?',
        a: 'Yes. Student, batch and staff data can be migrated from spreadsheets or existing software during setup.',
      },
    ],
    related: [
      { label: 'Custom software development', path: '/services/software-development', description: 'Modules specific to your institute' },
      { label: 'Mobile app development', path: '/services/mobile-app-development', description: 'Dedicated mobile apps for students or parents' },
      { label: 'Business management software', path: '/solutions/business-management', description: 'General administration modules' },
      { label: 'Request a demo', path: '/contact', description: 'Walk through the modules with your staff' },
    ],
    cta: {
      title: 'Request a Tuition ERP demo',
      text: 'Tell us how many courses, batches and students you manage. We will show you the matching setup in the software.',
    },
    accent: 'teal',
    featured: true,
    media: {
      src: '/assets/screens/institute-erp.png',
      alt: 'Institute ERP dashboard showing student and staff counts and fee collection figures',
      caption: 'Institute management dashboard — students, staff, fees and batch activity at a glance.',
    },
  },
  {
    slug: 'cooperative-society-software',
    path: '/solutions/cooperative-society-software',
    name: 'Cooperative Society Software',
    navTitle: 'Cooperative Society Software',
    navDescription: 'Society operations and record management',
    icon: 'Landmark',
    category: 'Finance & Society',
    h1: 'Cooperative society software',
    subtitle: 'Business and financial management for societies',
    summary:
      'Software for cooperative societies to manage members, records and day-to-day operations with a proper system of record instead of registers and spreadsheets.',
    heroLead:
      'Cooperative societies run on accurate records and continuity of information. The software keeps member and transaction records organised, searchable and available when a committee, auditor or member asks for them.',
    platforms: ['Desktop', 'Web'],
    audience: [
      'Cooperative societies and credit societies',
      'Housing and residential societies',
      'Societies with a managing committee and regular record requirements',
      'Administrators currently maintaining records manually',
    ],
    problems: [
      {
        title: 'Member records exist only on paper',
        text: 'Registers and files make it difficult to retrieve a member\'s history when it is needed. Digital records are searchable and can be shared when required.',
      },
      {
        title: 'Continuity depends on one person',
        text: 'When records live with an individual, change in office becomes a risk. A central system keeps information with the society.',
      },
      {
        title: 'Reporting takes days to prepare',
        text: 'Member lists, transaction records and summaries can be produced from the system instead of being compiled by hand.',
      },
      {
        title: 'Manual work is repeated every month',
        text: 'Recurring entries, notices and statements can be generated from stored data with far fewer manual steps.',
      },
    ],
    featureGroups: [
      {
        title: 'Member management',
        items: [
          'Member master with complete contact and identification details',
          'Member-wise history and transaction records',
          'Nomination and document reference records',
          'Member-wise and group-wise listings',
        ],
      },
      {
        title: 'Financial and transaction records',
        items: [
          'Transaction and receipt entry with running balances',
          'Deposit and recurring record keeping, configured to your society practices',
          'Receipts, statements and vouchers printed from the system',
          'Due and overdue records visible to the office',
        ],
      },
      {
        title: 'Operations and administration',
        items: [
          'Notice and communication records',
          'Meeting and resolution record keeping',
          'Expense and payment entries',
          'User roles for committee members and staff',
        ],
      },
      {
        title: 'Reports and records',
        items: [
          'Member and transaction reports',
          'Period-wise statements and summaries',
          'Records prepared for review and audit requirements',
          'Data export for further analysis or reporting',
        ],
      },
    ],
    highlights: [
      'A single system of record for members and transactions',
      'Role-based access so committee members and staff see only what is relevant',
      'Records that stay with the society when office bearers change',
      'Reports produced from the data rather than compiled manually each time',
    ],
    deployment: [
      'Desktop installation for the society office',
      'Web access for office bearers who need to check records remotely',
      'On-premise server or cloud deployment, whichever suits the society',
      'Role-based user creation for staff and committee members',
    ],
    support: [
      'Setup of member data, categories and record structures',
      'Training for office staff on daily entries and reports',
      'Support during the initial reporting cycles',
      'Additions configured as the society\'s requirements are finalised',
    ],
    useCases: [
      'A credit society wanting member and transaction records off paper',
      'A housing society issuing regular statements to members',
      'A society modernising records before an audit or committee transition',
      'An office where multiple staff members need controlled access to the same records',
    ],
    faqs: [
      {
        q: 'Can the software be adapted to our society\'s practices?',
        a: 'Yes. The system is implemented to match how your society records members and transactions. If a module needs to be added for a specific practice, it is scoped and built.',
      },
      {
        q: 'Is web access available for committee members?',
        a: 'Yes. User roles can be created for committee members with access limited to the information they are entitled to view.',
      },
      {
        q: 'What about our existing registers?',
        a: 'Existing member and balance records are migrated into the system during implementation so you start with complete data.',
      },
      {
        q: 'Does it generate receipts and statements?',
        a: 'Yes. Receipts, statements and vouchers are generated from the system and can be printed in your society\'s format.',
      },
      {
        q: 'How is data security handled?',
        a: 'Access is controlled by user role, with secure connections and regular backups. Deployment can be on-premise so data stays within the society\'s own infrastructure.',
      },
    ],
    related: [
      { label: 'Custom software development', path: '/services/software-development', description: 'Modules built for your society\'s specific practices' },
      { label: 'Business management software', path: '/solutions/business-management', description: 'Accounting and administrative modules' },
      { label: 'Hardware and IT infrastructure', path: '/services/hardware-it-infrastructure', description: 'Servers, networks and support for the society office' },
      { label: 'Request a demo', path: '/contact', description: 'Discuss your society\'s records' },
    ],
    cta: {
      title: 'Discuss your society\'s requirements',
      text: 'Share the records your society maintains today. We will show you how they map into the software and what implementation involves.',
    },
    accent: 'navy',
    featured: true,
  },
  {
    slug: 'business-management',
    path: '/solutions/business-management',
    name: 'Business Management Software',
    navTitle: 'Business Management Software',
    navDescription: 'Customisable management system for growing businesses',
    icon: 'LayoutDashboard',
    category: 'Business Management',
    h1: 'Business management software',
    subtitle: 'Customisable modules for SMEs and growing organisations',
    summary:
      'A configurable business management system for companies that need sales, purchase, inventory, CRM and reporting in one place — adapted to your process instead of replacing it.',
    heroLead:
      'Not every business needs a full ERP project. This software provides the core management modules and is then configured and extended around the specific way your company operates.',
    platforms: ['Desktop', 'Web', 'Mobile'],
    audience: [
      'SMEs moving up from spreadsheets and accounting-only software',
      'Companies that need sales, purchase, stock and CRM in a single system',
      'Businesses wanting a base product instead of a full custom build',
      'Growing organisations that will add modules over time',
    ],
    problems: [
      {
        title: 'Buying a big ERP is more than you need right now',
        text: 'Start with the modules you need today and add others as your business grows, instead of paying for enterprise complexity from day one.',
      },
      {
        title: 'Your team works differently from the demo',
        text: 'Modules are configured to your document formats, approval practice and report requirements as part of implementation.',
      },
      {
        title: 'Information is entered in more than one place',
        text: 'Sales, purchase, stock and customer records share one database, so entry happens once and reporting pulls from the same source.',
      },
      {
        title: 'Access control is an afterthought',
        text: 'User roles and permissions are set up from the beginning, so staff see their work and management sees the whole picture.',
      },
    ],
    featureGroups: [
      {
        title: 'Sales and customer management',
        items: [
          'Sales and quotation management',
          'Customer master and communication history',
          'Lead and follow-up records (CRM)',
          'Order to dispatch tracking',
          'Sales reports by party, item and period',
        ],
      },
      {
        title: 'Purchase and inventory',
        items: [
          'Purchase entry and supplier records',
          'Item and stock master',
          'Stock movement and current stock position',
          'Reorder and low-stock visibility',
          'Purchase and stock reports',
        ],
      },
      {
        title: 'Administration',
        items: [
          'User creation with role-based permissions',
          'Masters controlled by authorised users',
          'Document numbering and record keeping',
          'Notifications and reminders where configured',
          'Audit information on key records',
        ],
      },
      {
        title: 'Reporting and dashboards',
        items: [
          'Operational dashboards for management',
          'Period-wise business summaries',
          'Party outstanding and receivables reports',
          'Exceptions and pending-action views',
          'Export to Excel for further analysis',
        ],
      },
    ],
    highlights: [
      'Core modules available immediately, with scope to extend as requirements become clear',
      'Configured to your documents, rates and approval practice',
      'One database shared by sales, purchase and accounts teams',
      'Role-based access from day one',
    ],
    deployment: [
      'Cloud (web) deployment — accessible from anywhere with a browser',
      'Desktop installation where staff work offline or on local machines',
      'Mobile access for management and field team reporting',
      'Data migration from spreadsheets or an existing system',
    ],
    support: [
      'Requirement discussion and module configuration',
      'Data migration and opening balance setup',
      'User training by role',
      'Post-go-live support and phased module additions',
    ],
    useCases: [
      'A trading company replacing separate sales and stock registers',
      'A service business tracking enquiries, quotations and follow-ups in one place',
      'A manufacturer managing purchase, stock and dispatch records',
      'A growing SME preparing for more structured reporting before an ERP project',
    ],
    faqs: [
      {
        q: 'How is this different from a fully custom software project?',
        a: 'This starts from working modules, which means a faster and lower-risk implementation. Custom software starts from your requirement and builds exactly to it. Many clients begin here and extend it towards custom as specific needs appear.',
      },
      {
        q: 'Can modules be added later?',
        a: 'Yes. Additional modules, integrations and reports are added as scoped extensions to the same system.',
      },
      {
        q: 'Can it connect to our accounting software?',
        a: 'Yes, where the accounting package provides an API or a compatible export. Data export and import are also supported for manual reconciliation.',
      },
      {
        q: 'Do we need our own server?',
        a: 'No. Cloud deployment means you only need a browser and internet connection. On-premise deployment is also possible if you prefer to keep data on your own server.',
      },
      {
        q: 'How many users can work at the same time?',
        a: 'The system supports multiple concurrent users and branch or location-wise access. The exact sizing is discussed during implementation based on your user count.',
      },
    ],
    related: [
      { label: 'ERP development', path: '/services/erp-development', description: 'For a multi-department system built around your process' },
      { label: 'FMCG billing software', path: '/solutions/fmcg-billing', description: 'Industry-specific billing for distribution businesses' },
      { label: 'Custom software development', path: '/services/software-development', description: 'When you need something the modules do not cover' },
      { label: 'Request a demo', path: '/contact', description: 'See the modules relevant to your business' },
    ],
    cta: {
      title: 'Request a business management demo',
      text: 'Tell us which departments need the system and what management reports you expect. We will show you a matching configuration.',
    },
    accent: 'navy',
    featured: true,
    media: {
      src: '/assets/screens/sbm-roles.png',
      alt: 'Role and access management screen in the business management software',
      caption: 'User roles and access control — configured per business and per department.',
    },
  },
  {
    slug: 'construction-erp',
    path: '/solutions/construction-erp',
    name: 'Construction ERP',
    navTitle: 'Construction ERP',
    navDescription: 'Project billing, documents and construction workflows',
    icon: 'HardHat',
    category: 'Construction',
    h1: 'Construction ERP and project billing software',
    subtitle: 'Business management for construction workflows',
    summary:
      'Business management software for contractors, builders and infrastructure companies — project-based billing, payment tracking and document workflows for construction operations.',
    heroLead:
      'Construction businesses manage money project by project: running bills, part payments, retention and site documentation. The software keeps those records structured instead of spread across registers and files.',
    platforms: ['Desktop', 'Web'],
    audience: [
      'Contractors and civil work companies',
      'Builders and infrastructure firms',
      'EPC and project-based businesses',
      'Companies billing clients against project milestones and running accounts',
    ],
    problems: [
      {
        title: 'Project-wise billing takes days to prepare',
        text: 'Running account bills, measurement records and part payments rebuilt for every project create avoidable delay. The system keeps project billing data organised and printable.',
      },
      {
        title: 'Documents are created repeatedly',
        text: 'Covering letters, work orders and standard project documents should be generated from templates rather than retyped each time.',
      },
      {
        title: 'Payment status is not visible across projects',
        text: 'Consolidated visibility of billed, received and outstanding amounts per project is available without chasing the accounts register.',
      },
      {
        title: 'Site information reaches the office late',
        text: 'Site records captured in the system keep the office and site teams working from the same information.',
      },
    ],
    featureGroups: [
      {
        title: 'Project and billing management',
        items: [
          'Project and site records',
          'Project-based invoice and bill generation',
          'Running bill and progress billing records',
          'Payment received and outstanding tracking per project',
          'Project-wise billing and collection reports',
        ],
      },
      {
        title: 'Documents and records',
        items: [
          'Document generation from templates for standard formats',
          'Work order and covering letter records',
          'Project file and record management',
          'Printing and reprinting of records when required',
        ],
      },
      {
        title: 'Material, purchase and parties',
        items: [
          'Purchase and supplier records',
          'Material issue to project or site records',
          'Contractor, vendor and client masters',
          'Outstanding and payment records by party',
        ],
      },
      {
        title: 'Reporting',
        items: [
          'Project-wise profitability and expenditure views',
          'Outstanding and collection reports',
          'Party and vendor-wise summaries',
          'Management dashboards for project status',
        ],
      },
    ],
    highlights: [
      'Built for project-based commercial practice rather than retail billing',
      'Document generation for repetitive project paperwork',
      'Project-wise visibility of billing and outstanding amounts',
      'Implemented with your project, vendor and document structures',
    ],
    deployment: [
      'Desktop installation at the head office and accounts desk',
      'Web access for site teams and management',
      'Cloud or on-premise deployment',
      'Migration of ongoing project and party data during setup',
    ],
    support: [
      'Implementation configured to your project and billing practice',
      'Training for accounts and site staff',
      'Document template setup in your formats',
      'Ongoing support and additional report development',
    ],
    useCases: [
      'A contractor billing multiple clients against project milestones',
      'A builder tracking material issue and vendor payments per site',
      'An infrastructure company generating standard project documents repeatedly',
      'A growing construction company needing project-wise financial visibility',
    ],
    faqs: [
      {
        q: 'Can the software handle running account bills?',
        a: 'Project-based billing is the focus of this solution, including progress and running bill records. The exact formats are configured with your accounts team during implementation.',
      },
      {
        q: 'Does it generate project documents?',
        a: 'Yes. Standard documents are generated from templates — the same approach used in a document generation system we delivered for a construction client, shown in the screenshot on this page.',
      },
      {
        q: 'Can site staff enter data from mobile?',
        a: 'Web access works on mobile browsers, so site staff can enter records from a phone. A dedicated mobile app can be built if your site process needs one.',
      },
      {
        q: 'Can it track material issued to each site?',
        a: 'Yes. Purchase and material issue records are maintained per project and site, with reports by project.',
      },
      {
        q: 'Can you migrate our running projects?',
        a: 'Yes. Ongoing project records, opening billed amounts and outstanding balances are migrated during setup so old and new projects report consistently.',
      },
    ],
    related: [
      { label: 'ERP development', path: '/services/erp-development', description: 'Broader multi-department systems' },
      { label: 'Business management software', path: '/solutions/business-management', description: 'Core modules for smaller operations' },
      { label: 'Case studies', path: '/case-studies', description: 'Projects delivered for construction businesses' },
      { label: 'Request a demo', path: '/contact', description: 'See project billing with your formats' },
    ],
    cta: {
      title: 'Request a construction ERP demo',
      text: 'Share a sample running bill and project document. We will show you how the software handles billing, documents and outstanding tracking.',
    },
    accent: 'amber',
    media: {
      src: '/assets/screens/document-generating-system.png',
      alt: 'Document generating system built for a construction client, showing generated project documents',
      caption:
        'Document generation delivered for a construction client — the same approach used for project paperwork in the construction ERP.',
    },
  },
  {
    slug: 'dosecare',
    path: '/solutions/dosecare',
    name: 'DoseCare',
    navTitle: 'DoseCare',
    navDescription: 'Patient care and medication management',
    icon: 'HeartPulse',
    category: 'Healthcare',
    h1: 'DoseCare — patient care and medication management',
    subtitle: 'Patient care, medication tracking and health monitoring',
    summary:
      'DoseCare simplifies patient care, medication tracking and health monitoring, with an app for patients or caregivers and a management view for care teams.',
    heroLead:
      'Missed medication is one of the most avoidable problems in long-term care. DoseCare keeps reminders and patient records in one place so care continues consistently.',
    platforms: ['Mobile', 'Web'],
    audience: [
      'Clinics and healthcare providers supporting patients on long-term medication',
      'Care providers coordinating patient schedules',
      'Healthcare product businesses looking at patient engagement tools',
      'Patients and caregivers who need reliable medication reminders',
    ],
    problems: [
      {
        title: 'Medication schedules are missed',
        text: 'Timely reminders and a simple record of what was taken make adherence easier to maintain.',
      },
      {
        title: 'Patient medication history is not in one place',
        text: 'Prescription and medication records kept in a single system are easier to review during a consultation.',
      },
      {
        title: 'Follow-ups depend on the patient remembering',
        text: 'Scheduling and notifications support follow-up instead of relying on memory.',
      },
      {
        title: 'Care coordination has no shared view',
        text: 'A management view lets care providers see patient schedules and status without phone follow-ups.',
      },
    ],
    featureGroups: [
      {
        title: 'Medication management',
        items: [
          'Medication reminders and schedule management',
          'Prescription records',
          'Refill and repeat-medication alerts',
          'Medication history view',
        ],
      },
      {
        title: 'Patient records',
        items: [
          'Patient profile and contact details',
          'Care schedule and appointment records',
          'Health monitoring entries',
          'Record access for authorised care staff',
        ],
      },
      {
        title: 'Care team access',
        items: [
          'Web dashboard for care providers',
          'Patient list with schedule status',
          'Follow-up and coordination support',
          'Data visibility controlled by role',
        ],
      },
    ],
    highlights: [
      'Reminders and records designed around real medication routines',
      'Patient app supported by a care-team dashboard',
      'Suitable for clinics, care providers and healthcare product businesses',
      'Can be adapted or white-labelled for a specific care programme',
    ],
    deployment: ['Mobile application for patients and caregivers', 'Web dashboard for care teams', 'Cloud-hosted backend'],
    support: [
      'Product walkthrough and demo',
      'Setup assistance for care providers',
      'Adaptation for specific care programmes where required',
      'Ongoing application support',
    ],
    useCases: [
      'A clinic supporting patients through long-term medication',
      'A care provider coordinating schedules for multiple patients',
      'A healthcare business adding a patient engagement product',
    ],
    faqs: [
      {
        q: 'Is DoseCare available for both Android and iOS?',
        a: 'DoseCare is delivered as a mobile application with a web dashboard for care teams. Availability for your specific requirement is confirmed during the demo.',
      },
      {
        q: 'Can it be customised for our care programme?',
        a: 'Yes. DoseCare can be adapted to specific care programmes, including branding and workflow changes, as a scoped product customisation.',
      },
      {
        q: 'How is patient data protected?',
        a: 'Access is role-based with secure connections, and deployment options are discussed during implementation based on your data handling requirements.',
      },
      {
        q: 'Can we see a demonstration?',
        a: 'Yes. Contact us to arrange a DoseCare demonstration.',
      },
    ],
    related: [
      { label: 'Mobile app development', path: '/services/mobile-app-development', description: 'Custom apps for healthcare requirements' },
      { label: 'AI development', path: '/services/ai-development', description: 'Health data and reminder automation' },
      { label: 'Custom software development', path: '/services/software-development', description: 'Clinic and practice management systems' },
      { label: 'Request a demo', path: '/contact', description: 'Book a DoseCare walkthrough' },
    ],
    cta: {
      title: 'Request a DoseCare demonstration',
      text: 'See how reminders, patient records and the care-team dashboard fit your programme.',
    },
    accent: 'teal',
    media: {
      src: '/assets/screens/dosecare-dashboard.png',
      alt: 'DoseCare dashboard showing medication reminder settings and patient schedule',
      caption: 'DoseCare — medication reminders and patient schedule management.',
    },
  },
];

export const featuredSolutions = solutions.filter((solution) => solution.featured);


/** Commercial FAQs used on the solutions index (shared with prerendered metadata). */
export const productFaqs: { q: string; a: string }[] = [
  {
    q: 'Are these products or custom-built software?',
    a: 'They are products we have already built and implemented. You get working software from day one, configured around your masters, documents and reports — which is faster and less risky than building the same functionality from scratch.',
  },
  {
    q: 'What if our requirement does not match a product exactly?',
    a: 'Two options: the product can be extended with the modules you need as scoped development, or we build a custom system if the requirement is genuinely different. We will tell you which makes more sense.',
  },
  {
    q: 'Which platforms are available?',
    a: 'Each product states its own platforms. FMCG, jewellery and tuition software are offered on desktop, web and mobile, while cooperative society and construction software are desktop and web. We do not claim platform support a product does not have.',
  },
  {
    q: 'Is pricing published?',
    a: 'No. Pricing depends on the modules, number of users and deployment you choose. Share your requirement and we will send a written quotation rather than a generic price list.',
  },
  {
    q: 'Can we see a demonstration before deciding?',
    a: 'Yes. Demonstrations are arranged with examples from your business — your item list, bill format or reporting needs — so you can judge whether the software fits.',
  },
  {
    q: 'Do you charge for implementation?',
    a: 'Implementation — data setup, configuration, migration and training — is part of the proposal and is priced separately and transparently, so you know the total cost of getting live.',
  },
];

export const getSolution = (slug: string) => solutions.find((solution) => solution.slug === slug);

export const solutionsNav = solutions
  .filter((solution) => solution.featured)
  .map(({ navTitle, navDescription, path, icon }) => ({
    title: navTitle,
    description: navDescription,
    path,
    icon,
  }));
