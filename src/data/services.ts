/**
 * Service content for /services and the individual service pages.
 * Written from the capabilities already listed on the company's existing
 * website — no features are claimed that the team has not delivered.
 */

export interface ServiceStep {
  title: string;
  text: string;
}

export interface ServiceItem {
  slug: string;
  path: string;
  navTitle: string;
  navDescription: string;
  icon: string;
  h1: string;
  eyebrow: string;
  summary: string;
  heroLead: string;
  heroBadges: string[];
  intro: string[];
  audience: string[];
  problems: ServiceStep[];
  capabilities: ServiceStep[];
  approach: ServiceStep[];
  technologies?: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  related: { label: string; path: string; description: string }[];
  cta: { title: string; text: string; primaryLabel: string; secondaryLabel?: string; secondaryPath?: string };
  image?: { src: string; alt: string };
}

export const services: ServiceItem[] = [
  {
    slug: 'software-development',
    path: '/services/software-development',
    navTitle: 'Custom Software Development',
    navDescription: 'Software built around your workflow, not a template',
    icon: 'Code2',
    h1: 'Custom software development',
    eyebrow: 'Service',
    summary:
      'Software designed around the way your business actually runs — from requirement analysis and database design through development, deployment and support.',
    heroLead:
      'If your process does not fit an off-the-shelf product, we build the software around your process. You get a system your team does not have to fight, and that can change as your business changes.',
    heroBadges: ['Requirement analysis', 'Web, desktop & mobile', 'Ongoing support'],
    intro: [
      'Most businesses do not fail at software because the technology is hard. They struggle because the software does not match how work really happens — approvals that need two signatures, rates that change per customer, stock that moves between three warehouses, quotations that follow a format your client insists on.',
      'We start by mapping those realities: who uses the system, what they do daily, where information is currently lost, and what a good outcome looks like in numbers or in time saved. Only then do we design the screens, database and integrations.',
      'The result is a system that belongs to your business. It can be extended as you grow, integrated with the tools you already pay for, and maintained by the same team that built it.',
    ],
    audience: [
      'Businesses replacing spreadsheets, WhatsApp groups and repeated manual data entry',
      'Companies with a process specific enough that standard software forces compromises',
      'Organisations needing a customer, distributor or dealer portal around their existing systems',
      'Departments inside larger companies that need an internal tool their ERP does not cover',
    ],
    problems: [
      {
        title: 'Work is spread across tools that do not talk to each other',
        text: 'Excel files, paper registers and messaging apps hold different versions of the same information. We consolidate the flow into one system with a single source of truth.',
      },
      {
        title: 'The current software forces you to work its way',
        text: 'When a product cannot be adapted, teams invent workarounds. We model your actual workflow — including exceptions and approvals — before writing code.',
      },
      {
        title: 'Reports take hours to prepare',
        text: 'If month-end means exporting, cleaning and merging data by hand, we replace it with dashboards and scheduled reports generated from the operational data itself.',
      },
      {
        title: 'Nobody owns the system after launch',
        text: 'We stay involved after deployment: bug fixes, small enhancements, new reports and user support, with the code and database documented in your name.',
      },
    ],
    capabilities: [
      {
        title: 'Requirement analysis and workflow mapping',
        text: 'Structured discussions, process notes and screen-level specifications that you review and approve before development begins.',
      },
      {
        title: 'Architecture and database design',
        text: 'Data models, role structures, audit trails and APIs planned for the volume and reporting your business will need — not the smallest version that works today.',
      },
      {
        title: 'UI/UX design',
        text: 'Screens designed for the people who use them daily: data-entry heavy staff, supervisors and management, each with the right level of access and detail.',
      },
      {
        title: 'Web application development',
        text: 'Modern front-end and backend development with secure authentication, role-based permissions and responsive layouts for desktop, tablet and mobile users.',
      },
      {
        title: 'Desktop and mobile builds',
        text: 'Where the work happens offline, at a counter, in a warehouse or at a site, we deliver desktop or mobile builds that sync back to the central system.',
      },
      {
        title: 'Integrations and data migration',
        text: 'Connecting accounting, payment, SMS/WhatsApp, ERP or e-commerce systems, and moving your historical data across cleanly.',
      },
      {
        title: 'Deployment, training and support',
        text: 'Server or cloud deployment, user training sessions, documentation and a support channel your team can use after go-live.',
      },
    ],
    approach: [
      { title: 'Discovery', text: 'We meet the people who will use the system, review current spreadsheets and registers, and agree the outcomes that matter.' },
      { title: 'Requirement document', text: 'A written scope: modules, users, screens, reports, integrations, assumptions and what is out of scope for this phase.' },
      { title: 'Architecture and data model', text: 'Database structure, APIs, security model and integration points, reviewed with you in plain language.' },
      { title: 'UI/UX design', text: 'Key screens designed and approved early, so changes are cheap and go-live is not a surprise.' },
      { title: 'Development in phases', text: 'Working software delivered in phases so you can start using the core part while later modules are built.' },
      { title: 'Testing and UAT', text: 'Internal testing followed by user acceptance testing with your team on your real data and real scenarios.' },
      { title: 'Deployment and training', text: 'Data migration, deployment, user training and a documented handover.' },
      { title: 'Support and iteration', text: 'Post-launch support, monitoring and a clear process for requesting enhancements.' },
    ],
    technologies: ['React', 'React Native', 'Next.js', 'Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'MySQL', 'Electron', 'AWS'],
    benefits: [
      'You approve scope, screens and architecture before major development spending',
      'Working software in phases instead of a single long delivery at the end',
      'Your data stays with you — no lock-in to a vendor-controlled platform',
      'Support from the team that built the system, with documentation',
    ],
    faqs: [
      {
        q: 'How is a custom software project priced?',
        a: 'After discovery we share a scope-based estimate — a fixed range for a defined phase, or a monthly effort-based engagement if the scope will evolve. You will see what is included, what is not, and what can be added later.',
      },
      {
        q: 'How long does development take?',
        a: 'It depends on the number of modules and integrations. A focused internal tool can go live in a few weeks, while a multi-role operational system with integrations typically runs into a few months, delivered in phases.',
      },
      {
        q: 'Can you work with our existing software or vendor?',
        a: 'Yes. We often build around an existing ERP or accounting package — reading from it, writing back through its API, or replacing only the part that is failing you.',
      },
      {
        q: 'Who owns the source code?',
        a: 'The code and database are delivered to you as part of the project. We document the structure and keep a repository under your ownership.',
      },
      {
        q: 'What happens if we need changes after launch?',
        a: 'Small changes are handled through the support engagement. Larger additions are scoped as a new phase with its own estimate and timeline.',
      },
    ],
    related: [
      { label: 'ERP development', path: '/services/erp-development', description: 'Multi-module systems for operations, finance and reporting' },
      { label: 'Mobile app development', path: '/services/mobile-app-development', description: 'Apps for field teams, customers and counter staff' },
      { label: 'Business management software', path: '/solutions/business-management', description: 'A configurable starting point if you want to move faster' },
      { label: 'Request a quote', path: '/request-quote', description: 'Share your requirement and get a scoped estimate' },
    ],
    cta: {
      title: 'Discuss your requirement',
      text: 'Tell us what your team does today and where it breaks. We will suggest the smallest system that solves it properly.',
      primaryLabel: 'Discuss your requirement',
      secondaryLabel: 'See our process',
      secondaryPath: '/services',
    },
    image: { src: '/assets/tech/team-meeting.jpg', alt: 'Right Serve Infotech System team reviewing a software project plan' },
  },
  {
    slug: 'erp-development',
    path: '/services/erp-development',
    navTitle: 'ERP Development',
    navDescription: 'Multi-module systems for operations and reporting',
    icon: 'Layers',
    h1: 'ERP development',
    eyebrow: 'Service',
    summary:
      'ERP systems covering the workflows that run your business — with roles and permissions, approvals, reporting, automation and integration to the systems you already use.',
    heroLead:
      'An ERP should reduce the number of places your business information lives. We design ERP modules around your departments and reporting structure, then phase the rollout so operations keep running.',
    heroBadges: ['Modular rollout', 'Roles & permissions', 'Reporting & automation'],
    intro: [
      'ERP projects get difficult when they are treated as one enormous delivery. We break the system into modules, start with the workflow causing the most pain, and add the rest in an order that keeps the business running.',
      'Each module is designed with the people who will use it: purchase and stores, production, sales and dispatch, accounts, HR, or management review. Permissions are set by role, and approvals follow your existing authority levels.',
      'Because we build on standard web technologies and documented APIs, your ERP can exchange data with accounting software, payment gateways, portals, mobile apps and reporting tools.',
    ],
    audience: [
      'Growing companies where multiple departments now need to share the same data',
      'Manufacturers, distributors and project businesses with purchase, stock and dispatch flows',
      'Organisations that have outgrown a billing package but do not want a rigid enterprise suite',
      'Businesses that need approvals, audit trails and role-based access on every transaction',
    ],
    problems: [
      {
        title: 'Departments maintain separate records',
        text: 'Sales, stores and accounts each keep their own version of the same transaction. A single integrated database removes reconciliation work at month end.',
      },
      {
        title: 'Approvals happen verbally',
        text: 'Purchase approvals over phone or WhatsApp leave no trail. We digitise approval levels so authority and history are recorded.',
      },
      {
        title: 'Stock and dispatch information arrives late',
        text: 'When stock entries are updated at the end of the day, decisions wait. Mobile or counter-based entry updates the system as work happens.',
      },
      {
        title: 'Management reporting is manual',
        text: 'We build the reports management already asks for — and schedule them so they arrive without anyone assembling them.',
      },
    ],
    capabilities: [
      {
        title: 'Module design',
        text: 'Areas such as purchase, inventory and stores, sales and dispatch, production, accounts, HR and management dashboards — scoped to what your business needs now.',
      },
      {
        title: 'Roles, permissions and audit trails',
        text: 'Access control by role and location, restricted data visibility, approval workflows and a record of who changed what.',
      },
      {
        title: 'Reporting and dashboards',
        text: 'Operational reports, exception reports and management dashboards built on live data, exportable to Excel or PDF.',
      },
      {
        title: 'Automation',
        text: 'Document numbering, notifications, reorder alerts, reminders and scheduled jobs that remove repetitive manual steps.',
      },
      {
        title: 'Integrations',
        text: 'Connections to accounting packages, payment gateways, e-commerce platforms, SMS/WhatsApp services and third-party APIs.',
      },
      {
        title: 'Multi-location and multi-user access',
        text: 'Branches, warehouses and remote users working on the same system with location-appropriate access.',
      },
      {
        title: 'Data migration and rollout',
        text: 'Moving master data and history from existing spreadsheets or software, followed by phased training per department.',
      },
    ],
    approach: [
      { title: 'Process study', text: 'We document how each department works today, the documents generated and where information is delayed or re-entered.' },
      { title: 'Module blueprint', text: 'A module list with priority, owners and dependencies, so everyone knows the sequence and the phase boundaries.' },
      { title: 'Data and role design', text: 'Master data structure, user roles and permission matrix reviewed with department heads.' },
      { title: 'Phased development', text: 'Module-by-module development with review cycles, starting where the business case is strongest.' },
      { title: 'Parallel run', text: 'Where needed, the new system runs alongside the old process until results match and the team is confident.' },
      { title: 'Training per department', text: 'Role-specific training sessions and quick-reference guides rather than one generic demonstration.' },
      { title: 'Support and expansion', text: 'Post-go-live support plus a roadmap for the modules deliberately left for later phases.' },
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB', 'Electron', 'AWS'],
    benefits: [
      'One database shared by every department, with access controlled by role',
      'Rollout in phases — operations are never stopped for a big-bang switch',
      'Reports and dashboards produced from live operational data',
      'Room to add modules and integrations as the business grows',
    ],
    faqs: [
      {
        q: 'How is custom ERP different from buying a ready ERP package?',
        a: 'A package gives you standard modules quickly but expects your processes to adjust. Custom ERP follows your processes and reporting, at the cost of a design and development phase. Many clients choose a hybrid: our business management software extended with the modules that are specific to them.',
      },
      {
        q: 'Can you implement only one module?',
        a: 'Yes. Starting with a single high-pain module is often the fastest way to prove value before expanding to others.',
      },
      {
        q: 'Will our historical data be migrated?',
        a: 'We migrate master data and the transaction history you need for reporting and compliance. Old data that is not needed in the new system is archived and kept available.',
      },
      {
        q: 'Can the ERP work on mobile?',
        a: 'Yes. We build mobile or tablet interfaces for roles that work away from a desk — approvals, field sales, stores and dispatch confirmations.',
      },
      {
        q: 'How is access secured?',
        a: 'Role-based permissions, encrypted connections, password policies, session control and audit logging. Deployment can be on your own server or on cloud infrastructure you control.',
      },
    ],
    related: [
      { label: 'Custom software development', path: '/services/software-development', description: 'For focused applications that sit outside your ERP' },
      { label: 'Construction ERP', path: '/solutions/construction-erp', description: 'A ready solution for project-based businesses' },
      { label: 'Business management software', path: '/solutions/business-management', description: 'Configurable modules for SMEs' },
      { label: 'Request a quote', path: '/request-quote', description: 'Share your module list and get a phased estimate' },
    ],
    cta: {
      title: 'Plan your ERP rollout',
      text: 'Send us your department list and the reports management asks for. We will suggest which module to build first.',
      primaryLabel: 'Request an ERP consultation',
      secondaryLabel: 'Explore solutions',
      secondaryPath: '/solutions',
    },
    image: { src: '/assets/tech/server-room.jpg', alt: 'Server room hosting business ERP systems' },
  },
  {
    slug: 'website-development',
    path: '/services/website-development',
    navTitle: 'Website Development',
    navDescription: 'Business websites, corporate sites and web apps',
    icon: 'Globe',
    h1: 'Website and web application development',
    eyebrow: 'Service',
    summary:
      'Business websites, corporate sites and web applications built for speed, search visibility and conversions — with clean front-end code and reliable integrations.',
    heroLead:
      'A business website has to do more than exist. It should load quickly, explain what you do clearly, rank for the terms your customers search, and turn visitors into enquiries.',
    heroBadges: ['Responsive build', 'SEO foundations', 'CMS & API integrations'],
    intro: [
      'We build two kinds of web presence: marketing websites that represent your company and generate enquiries, and web applications that run part of your business inside the browser.',
      'Marketing sites are structured around search intent — the services you want to be found for, the locations you serve and the questions buyers ask before contacting you. Technical foundations such as clean markup, descriptive URLs, structured data, compressed images and fast hosting come standard.',
      'Web applications get the same engineering attention as our internal systems: authentication, roles, validation, integrations and reporting.',
    ],
    audience: [
      'Businesses whose current website does not represent the quality of their work',
      'Companies that need enquiries from search instead of relying only on referrals',
      'Organisations needing a customer, vendor or dealer portal in the browser',
      'Teams replacing an outdated website that is slow, hard to update or not secure',
    ],
    problems: [
      {
        title: 'The website is invisible in search',
        text: 'Thin content, missing metadata and slow pages keep you out of results. We rebuild the structure and the content around what your buyers search for.',
      },
      {
        title: 'Visitors cannot find what they need',
        text: 'We restructure navigation and page content so a first-time visitor understands your services, coverage and credibility within seconds.',
      },
      {
        title: 'Updating content requires a developer',
        text: 'Where a site manager needs to publish regularly, we integrate a suitable CMS or a simple admin panel so your team stays in control.',
      },
      {
        title: 'Enquiries disappear',
        text: 'Forms, phone links and WhatsApp actions are wired to the systems that receive them, with tracking so you know what generated each enquiry.',
      },
    ],
    capabilities: [
      {
        title: 'Business and corporate websites',
        text: 'Multi-page sites that present services, products, industries, credentials and contact routes clearly for business buyers.',
      },
      {
        title: 'Web application development',
        text: 'Browser-based systems with logins, roles, dashboards, data entry, file uploads and reports.',
      },
      {
        title: 'Responsive, mobile-first builds',
        text: 'Layouts designed for mobile, tablet, laptop, large desktop and 4K screens — tested at each size rather than scaled up from one design.',
      },
      {
        title: 'Performance engineering',
        text: 'Compressed and lazy-loaded images, code splitting, minimal dependencies and caching so pages stay fast on mobile networks.',
      },
      {
        title: 'SEO-friendly foundations',
        text: 'One clear heading per page, semantic HTML, unique titles and descriptions, canonical URLs, structured data, sitemap and robots configuration.',
      },
      {
        title: 'CMS, forms and third-party integrations',
        text: 'Contact and enquiry forms, payment links, maps, chat and WhatsApp, CRM or backend APIs, and analytics or tag manager setup.',
      },
      {
        title: 'Hosting, deployment and maintenance',
        text: 'Domain and hosting setup, SSL, deployment, backups and ongoing content or feature updates.',
      },
    ],
    approach: [
      { title: 'Goals and search research', text: 'We agree what the site must achieve and the searches and questions it should answer.' },
      { title: 'Structure and content plan', text: 'Page-by-page outline with target intent per page, internal links and calls to action.' },
      { title: 'Design', text: 'Layout and component design reviewed on desktop and mobile before development begins.' },
      { title: 'Development', text: 'Accessible, responsive front-end build; CMS or admin panel where content changes often.' },
      { title: 'Content and SEO implementation', text: 'Metadata, headings, alt text, structured data, sitemap and analytics configuration.' },
      { title: 'Testing and launch', text: 'Cross-browser and device checks, performance testing, redirect mapping and go-live.' },
      { title: 'Post-launch support', text: 'Monitoring, updates, content changes and improvement cycles based on real visitor data.' },
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'MySQL', 'Tailwind CSS', 'AWS'],
    benefits: [
      'A site that explains your business clearly to buyers who do not know you yet',
      'Search-friendly structure and metadata implemented from the start',
      'Fast, stable pages on mobile connections',
      'A platform your team can update without waiting on a developer',
    ],
    faqs: [
      {
        q: 'How long does a business website take?',
        a: 'A well-structured corporate website with original content typically takes a few weeks including design, development and content placement. Portals or e-commerce functionality take longer and are estimated after the requirement discussion.',
      },
      {
        q: 'Do you write the content?',
        a: 'We structure the pages and prepare the technical copy from information you provide, and we can support content writing where needed. Facts about your business always come from you, so nothing inaccurate is published.',
      },
      {
        q: 'Will the website work on large screens and 4K TVs?',
        a: 'Yes. Content width, type scale and layout are tested at 1440p, 2K, 4K and TV widths so pages look deliberate rather than stretched.',
      },
      {
        q: 'Can you redesign a website without losing search rankings?',
        a: 'Yes — we audit the existing pages, map every indexed URL to its new location, keep or improve the metadata, and implement redirects so existing search signals are preserved.',
      },
      {
        q: 'Do you provide hosting and maintenance?',
        a: 'We can arrange hosting, SSL, backups and monitoring, and you can also host on your own infrastructure. Maintenance can include content updates, new sections and performance monitoring.',
      },
    ],
    related: [
      { label: 'SEO & digital marketing', path: '/services/seo-digital-marketing', description: 'Turn a good website into consistent search visibility' },
      { label: 'Custom software development', path: '/services/software-development', description: 'For applications beyond a standard website' },
      { label: 'Portfolio', path: '/portfolio', description: 'Websites and portals we have delivered' },
      { label: 'Request a quote', path: '/request-quote', description: 'Get a scoped estimate for your website' },
    ],
    cta: {
      title: 'Build a website that works for your business',
      text: 'Send us your current website and the enquiries you want from it. We will tell you what is realistically achievable.',
      primaryLabel: 'Start your website project',
      secondaryLabel: 'See our portfolio',
      secondaryPath: '/portfolio',
    },
    image: { src: '/assets/tech/dev-workspace.jpg', alt: 'Developer workspace used for website development projects' },
  },
  {
    slug: 'mobile-app-development',
    path: '/services/mobile-app-development',
    navTitle: 'Mobile App Development',
    navDescription: 'Android, iOS and cross-platform business apps',
    icon: 'Smartphone',
    h1: 'Mobile app development',
    eyebrow: 'Service',
    summary:
      'Android, iOS and cross-platform mobile applications for business and product needs — with API integration, authentication, notifications and release support.',
    heroLead:
      'Mobile makes sense when the work happens away from a desk: sales visits, site inspections, deliveries, patient reminders or customer bookings. We build apps that fit those moments.',
    heroBadges: ['Android & iOS', 'Cross-platform builds', 'API & backend integration'],
    intro: [
      'We build two broad categories of mobile software: business apps that connect your team to internal systems, and product apps that your customers or users install themselves.',
      'Business apps are usually an extension of an existing system — the field team captures data, the counter confirms a sale, the supervisor approves a request. Role-based access decides who sees which screens and data.',
      'Product apps need a different focus: onboarding, clarity of a first session, dependable notifications, and a release process that keeps improving after launch.',
    ],
    audience: [
      'Sales and field teams capturing visits, orders and collections',
      'Businesses offering a booking, ordering or tracking experience to customers',
      'Operations where site staff need to record work with photos and location',
      'Product teams planning an app that must also work with an existing backend',
    ],
    problems: [
      {
        title: 'Field data arrives late or on paper',
        text: 'Apps with offline-friendly forms, photo capture and geo-stamps send information to the office as the work is completed.',
      },
      {
        title: 'Customers cannot transact outside office hours',
        text: 'Booking, ordering and status-tracking apps let customers act whenever it suits them, within the limits you define.',
      },
      {
        title: 'Follow-up depends on memory',
        text: 'Visit reminders, prescription or service schedules and notifications make sure the next action actually happens.',
      },
      {
        title: 'The app does not survive past launch',
        text: 'We plan for the release cycle — store submissions, crash monitoring, updates and the next set of features.',
      },
    ],
    capabilities: [
      {
        title: 'Android and iOS applications',
        text: 'Cross-platform builds for both stores from a shared codebase, with platform-specific behaviour where it matters.',
      },
      {
        title: 'Business and internal apps',
        text: 'Role-based screens, approvals, data capture, offline tolerance and reporting for teams working outside the office.',
      },
      {
        title: 'Backend and API integration',
        text: 'Secure connections to your existing system, or a backend we build alongside the app.',
      },
      {
        title: 'Authentication and access control',
        text: 'Login, OTP, session handling and permissions aligned with the roles in your web system.',
      },
      {
        title: 'Notifications and reminders',
        text: 'Transactional and scheduled notifications for appointments, orders, payments and follow-ups.',
      },
      {
        title: 'Design for real devices',
        text: 'Interfaces tested on small and large phones, tablets and different network conditions — not just on a desktop preview.',
      },
      {
        title: 'Store release and maintenance',
        text: 'Store listing preparation, submission support, version updates, monitoring and incremental improvements.',
      },
    ],
    approach: [
      { title: 'Use-case definition', text: 'We decide who the app is for, what they do in it, and which parts must work offline.' },
      { title: 'Technical approach', text: 'Cross-platform or native, backend approach, authentication, and how the app will sync with your systems.' },
      { title: 'UX design', text: 'Screen flows and visual design reviewed before development, with the shortest path to the main task.' },
      { title: 'Development and integration', text: 'App development plus the API work needed, in reviewable builds you can install early.' },
      { title: 'Testing on devices', text: 'Real-device testing across screen sizes and network conditions, including low-connectivity behaviour.' },
      { title: 'Store submission', text: 'Store assets, descriptions, privacy documentation and submission support for Play Store and App Store.' },
      { title: 'Post-launch iteration', text: 'Monitoring, fixes and feature releases based on how users actually behave in the app.' },
    ],
    technologies: ['React Native', 'React', 'Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'MySQL', 'Flutter', 'AWS'],
    benefits: [
      'Your team records work where it happens instead of at the end of the day',
      'One codebase covering both Android and iOS keeps cost and maintenance sensible',
      'Customers get a direct channel to book, order or track status',
      'Release planning and monitoring so the app keeps improving after launch',
    ],
    faqs: [
      {
        q: 'Do you build for both Android and iOS?',
        a: 'Yes. Most projects use a cross-platform build that covers both stores; where a feature needs platform-specific behaviour we handle that inside the same project.',
      },
      {
        q: 'Can the app work without internet access?',
        a: 'For field use cases we design offline-friendly capture that stores data on the device and syncs when connectivity returns. The exact behaviour depends on your process and is agreed in the scope.',
      },
      {
        q: 'Can the app connect to our existing software?',
        a: 'If your existing system exposes an API, we connect to it. If it does not, we either build a service layer around its database with your vendor, or build the backend the app needs.',
      },
      {
        q: 'How long does app development take?',
        a: 'A focused business app with login, a few data-entry screens and reports can be ready in a few weeks. Apps with complex workflows, payments or heavy integrations take longer.',
      },
      {
        q: 'Who publishes the app on the stores?',
        a: 'The app is published under your company account. We prepare the assets and documentation and support the submission process.',
      },
    ],
    related: [
      { label: 'Custom software development', path: '/services/software-development', description: 'The backend systems your app connects to' },
      { label: 'FMCG billing software', path: '/solutions/fmcg-billing', description: 'Billing on desktop, web and mobile' },
      { label: 'Tuition ERP', path: '/solutions/tuition-erp', description: 'Institute management across web, desktop and mobile' },
      { label: 'Request a quote', path: '/request-quote', description: 'Tell us what the app must do' },
    ],
    cta: {
      title: 'Plan your mobile application',
      text: 'Describe the users and the tasks. We will tell you whether a mobile app, a mobile-friendly web app, or both, is the right answer.',
      primaryLabel: 'Discuss your app idea',
      secondaryLabel: 'See our portfolio',
      secondaryPath: '/portfolio',
    },
    image: { src: '/assets/screens/my-naai-app.jpeg', alt: 'Mobile application screens from a Right Serve Infotech System project' },
  },
  {
    slug: 'ai-development',
    path: '/services/ai-development',
    navTitle: 'AI Development',
    navDescription: 'Applied AI, automation and machine learning',
    icon: 'Brain',
    h1: 'AI development and intelligent automation',
    eyebrow: 'Service',
    summary:
      'Applied AI inside real business software — intelligent automation, machine learning models, document and image processing, and AI API integrations.',
    heroLead:
      'We use AI where it removes repetitive human work or improves a decision with data you already have. If a simple rule does the job better, we will tell you so.',
    heroBadges: ['AI-powered applications', 'Machine learning models', 'AI APIs & integrations'],
    intro: [
      'AI is useful in business software when it is embedded in a workflow — not when it is a demonstration. We look for repetitive tasks, large document volumes, image or text classification, and forecasting problems where a model or an AI service can save real time.',
      'Typical work includes extracting structured data from documents and images, classifying and routing records, predicting values from historical data, summarising long text, and adding conversational interfaces on top of your own data.',
      'For every project we are clear about what the model can and cannot guarantee. AI output is presented for human review where mistakes are expensive, and accuracy is measured on your data before rollout.',
    ],
    audience: [
      'Businesses processing high volumes of documents, forms or images manually',
      'Teams making repeated decisions from the same kind of data',
      'Products that need search, recommendations or assistance inside their interface',
      'Operations that need forecasting for stock, demand or scheduling',
    ],
    problems: [
      {
        title: 'Manual data entry from documents',
        text: 'Invoices, forms, statements and reports can be read automatically and mapped into structured records for human verification.',
      },
      {
        title: 'Repetitive classification work',
        text: 'Records, enquiries, complaints and images can be categorised automatically and routed to the right person or queue.',
      },
      {
        title: 'Decisions made without looking at history',
        text: 'Historical data can support forecasts for demand, stock or workload instead of relying on intuition alone.',
      },
      {
        title: 'Knowledge buried in documents',
        text: 'An assistant trained on your own documents, with citations to the source, answers internal questions faster than searching folders.',
      },
    ],
    capabilities: [
      {
        title: 'AI-powered application features',
        text: 'Assistance, search, summarisation and recommendation features designed into the product interface rather than bolted on.',
      },
      {
        title: 'Computer vision and image analysis',
        text: 'Extraction and classification tasks over images and scanned documents, with confidence thresholds and review steps.',
      },
      {
        title: 'Machine learning models',
        text: 'Prediction and classification models trained on your historical data, evaluated before they are put into daily use.',
      },
      {
        title: 'Intelligent document processing',
        text: 'Pipelines that read documents, extract the fields you need and push the result into your existing system.',
      },
      {
        title: 'Automation and integrations',
        text: 'API-driven workflows that trigger actions across your software when a condition or model output is met.',
      },
      {
        title: 'AI API integrations',
        text: 'Wiring external AI services into your applications with rate control, error handling and cost awareness.',
      },
      {
        title: 'Measurement and human review',
        text: 'Accuracy tracking, feedback capture and review interfaces so the automation improves and stays accountable.',
      },
    ],
    approach: [
      { title: 'Identify the right task', text: 'We review where time is lost and confirm whether AI, a rule, or a better form is the correct fix.' },
      { title: 'Data check', text: 'What data exists, in what format, how clean it is and whether it is sufficient to train or evaluate a model.' },
      { title: 'Proof of concept', text: 'A small, measurable prototype on real samples to establish achievable accuracy before full development.' },
      { title: 'Integration design', text: 'Where the model sits in your workflow, what happens on low confidence, and who reviews the output.' },
      { title: 'Build and evaluate', text: 'Implementation with evaluation on held-out data, plus monitoring for drift or degradation.' },
      { title: 'Deploy with safeguards', text: 'Confidence thresholds, fallback behaviour, audit logging and clear ownership of exceptions.' },
      { title: 'Improve over time', text: 'Feedback loops and periodic re-evaluation as your data and processes change.' },
    ],
    technologies: ['Python', 'Node.js', 'React', 'PostgreSQL', 'MongoDB', 'AWS'],
    benefits: [
      'Fewer hours spent on repetitive reading, typing and sorting work',
      'Faster turnaround on document-heavy processes',
      'Decisions supported by your own historical data',
      'Honest feasibility checks before you commit budget to a model',
    ],
    faqs: [
      {
        q: 'Do we need a large dataset before starting?',
        a: 'Not always. For document extraction or classification with AI APIs, a few hundred representative samples are often enough to validate the approach. Training a model from scratch needs more data, and we will say so early if that is the case.',
      },
      {
        q: 'Will AI replace our staff?',
        a: 'In practice these projects reduce repetitive work and speed up processing. Staff move from typing data to checking and handling exceptions, which is where human judgement is genuinely needed.',
      },
      {
        q: 'How accurate is AI output?',
        a: 'It depends on the task and the data quality. We measure accuracy on your samples in a proof of concept and design the workflow around an agreed threshold, with review steps where errors are costly.',
      },
      {
        q: 'Where does our data go?',
        a: 'That is your choice. We can use hosted AI services under your account, or run local or self-hosted models where data cannot leave your environment. This is decided before the build starts.',
      },
      {
        q: 'Can AI be added to software we already use?',
        a: 'Often yes. If your existing system has an API or a database we can read, we can add AI processing as a connected service rather than replacing the whole system.',
      },
    ],
    related: [
      { label: 'Custom software development', path: '/services/software-development', description: 'The application layer AI features live inside' },
      { label: 'Data analytics and reporting', path: '/services/erp-development', description: 'Dashboards built on operational data' },
      { label: 'Business management software', path: '/solutions/business-management', description: 'Configurable systems that can include automation' },
      { label: 'Request a quote', path: '/request-quote', description: 'Describe the process you want to automate' },
    ],
    cta: {
      title: 'Explore where AI actually helps',
      text: 'Describe a repetitive process in your business. We will tell you whether automation or AI is worth pursuing — and what accuracy you can expect.',
      primaryLabel: 'Discuss an AI use case',
      secondaryLabel: 'Talk to our team',
      secondaryPath: '/contact',
    },
    image: { src: '/assets/tech/ai-automation.jpg', alt: 'Illustration of AI and intelligent automation in business software' },
  },
  {
    slug: 'seo-digital-marketing',
    path: '/services/seo-digital-marketing',
    navTitle: 'SEO & Digital Marketing',
    navDescription: 'Search visibility, local SEO and campaigns',
    icon: 'Search',
    h1: 'SEO and digital marketing',
    eyebrow: 'Service',
    summary:
      'Technical SEO, on-page and local SEO, content planning, Google Business Profile optimisation and digital campaigns measured against enquiries — not vanity metrics.',
    heroLead:
      'Search visibility is built from a website that is technically sound, pages that answer what buyers actually search, and consistent work over time. Nobody can promise a ranking position, and we will not.',
    heroBadges: ['Technical SEO', 'Local SEO', 'Content planning'],
    intro: [
      'We treat SEO as an engineering and content discipline. The technical side makes sure search engines can crawl, understand and trust your site. The content side makes sure the pages match the questions your potential customers are asking.',
      'For Nagpur-based businesses, local visibility matters most: a complete Google Business Profile, consistent business details across the web, pages that mention the areas you genuinely serve, and reviews that reflect real work.',
      'Reporting focuses on things you can act on — impressions, clicks, ranking movement for specific queries, and enquiries from organic and local sources.',
    ],
    audience: [
      'Businesses with a website that receives little or no organic traffic',
      'Local service businesses competing for nearby searches',
      'Companies launching a new website that needs to be indexed properly',
      'Organisations wanting search visibility tracked alongside paid campaigns',
    ],
    problems: [
      {
        title: 'The site does not appear for relevant searches',
        text: 'We audit technical health, page targeting and content depth, then fix what is blocking visibility, in priority order.',
      },
      {
        title: 'Traffic arrives but does not convert',
        text: 'Search intent and page content are matched, calls to action are made clearer, and enquiry tracking is set up so improvements can be measured.',
      },
      {
        title: 'Local presence is incomplete',
        text: 'Google Business Profile details, categories, service areas and contact consistency are corrected so local searches find you.',
      },
      {
        title: 'Reporting says nothing useful',
        text: 'We report on query-level visibility and enquiry sources instead of raw hit counts, and connect analytics to your forms and phone links.',
      },
    ],
    capabilities: [
      {
        title: 'Technical SEO',
        text: 'Crawlability, indexation, canonical tags, sitemap and robots configuration, page speed, mobile friendliness, structured data and broken-link repair.',
      },
      {
        title: 'On-page SEO',
        text: 'Unique titles and descriptions, one clear heading per page, logical heading structure, internal linking, descriptive image alt text and improved content depth.',
      },
      {
        title: 'Local SEO and Google Business Profile',
        text: 'Profile setup and optimisation, categories and service areas, business information consistency, posts and review guidance.',
      },
      {
        title: 'Content strategy and planning',
        text: 'Keyword and intent mapping, page-level content plans and article ideas that answer real buyer questions rather than chasing volume.',
      },
      {
        title: 'Search performance monitoring',
        text: 'Search Console, analytics and tag manager configuration, conversion tracking for forms, phone clicks and WhatsApp actions.',
      },
      {
        title: 'Digital campaigns',
        text: 'Search and social campaigns where they genuinely fit your business — aimed at enquiries, with conversion tracking from day one.',
      },
      {
        title: 'Ongoing reporting',
        text: 'Monthly reporting on visibility, traffic quality, enquiries and the specific actions taken during the period.',
      },
    ],
    approach: [
      { title: 'Audit', text: 'Technical health, indexation, current keyword visibility, competitor presence and analytics setup.' },
      { title: 'Priority plan', text: 'Fixes and content work ordered by expected impact against effort, with a realistic timeline.' },
      { title: 'Technical fixes', text: 'Resolving crawl, speed, metadata, structured data and indexation problems on the existing or new site.' },
      { title: 'Content and on-page work', text: 'Improving existing pages and adding content where genuine search demand exists.' },
      { title: 'Local optimisation', text: 'Business profile, citations and location-relevant content for the areas you actually serve.' },
      { title: 'Measurement', text: 'Search Console and analytics connected, conversions defined and validated.' },
      { title: 'Review cycle', text: 'Monthly review of query movement and enquiry quality, with the next priorities agreed.' },
    ],
    benefits: [
      'A technically clean site that search engines can index properly',
      'Pages targeted at the searches your buyers actually use',
      'Stronger local visibility for Nagpur and the areas you serve',
      'Reporting tied to enquiries rather than traffic alone',
    ],
    faqs: [
      {
        q: 'How long does SEO take to show results?',
        a: 'Technical improvements and local profile work can move quickly, while content-driven ranking growth usually takes several months of consistent effort. We report progress monthly so you can see the direction of travel.',
      },
      {
        q: 'Can you guarantee first-page rankings?',
        a: 'No, and any agency that guarantees specific positions is not being straight with you. Search results depend on competition, algorithm changes and your own site. We commit to the work, the reporting and the transparency.',
      },
      {
        q: 'Do you work on websites built by other developers?',
        a: 'Yes. We start with an audit and can work on your existing platform, or recommend a rebuild if the current foundation is limiting performance.',
      },
      {
        q: 'Do you handle paid ads as well?',
        a: 'We run search and social campaigns where they suit the business, always with conversion tracking. If paid advertising is not right for your situation, we will say so.',
      },
      {
        q: 'What do you need from us?',
        a: 'Access to your website, analytics and search accounts, accurate business information, and timely feedback on content. Approvals and information from your side are usually the biggest factor in how fast things move.',
      },
    ],
    related: [
      { label: 'Website development', path: '/services/website-development', description: 'The foundation SEO work depends on' },
      { label: 'Custom software development', path: '/services/software-development', description: 'Portals and tools that generate their own search demand' },
      { label: 'Case studies', path: '/case-studies', description: 'Projects where search and digital work formed part of the engagement' },
      { label: 'Request a quote', path: '/request-quote', description: 'Ask for an SEO audit and plan' },
    ],
    cta: {
      title: 'Get a straight assessment of your search visibility',
      text: 'Share your website and target locations. We will audit what is holding it back and outline a priority order for fixes.',
      primaryLabel: 'Request an SEO audit',
      secondaryLabel: 'Talk to our team',
      secondaryPath: '/contact',
    },
  },
  {
    slug: 'hardware-it-infrastructure',
    path: '/services/hardware-it-infrastructure',
    navTitle: 'Hardware & IT Infrastructure',
    navDescription: 'Servers, networks, storage and support',
    icon: 'Server',
    h1: 'Hardware and IT infrastructure',
    eyebrow: 'Service',
    summary:
      'Servers, workstations, networking, storage and security hardware supplied, installed and maintained — so the systems your business depends on keep running.',
    heroLead:
      'Software only performs as well as the infrastructure beneath it. We supply and support the servers, networks and devices that business applications run on.',
    heroBadges: ['Servers & workstations', 'Networking', 'Maintenance & support'],
    intro: [
      'Right Serve Infotech System has supplied and supported business hardware since its early years, alongside software development. This covers servers and workstations, structured networking, storage and backup, and security hardware.',
      'Because we also build the software, we can size hardware around the actual applications and user load rather than guessing — and take responsibility for both sides when something needs fixing.',
      'Support is available for offices in Nagpur and the surrounding region, with preventive maintenance to reduce downtime rather than just reactive repairs.',
    ],
    audience: [
      'Offices setting up or relocating and needing complete IT infrastructure',
      'Businesses whose servers, networks or storage are ageing or unreliable',
      'Organisations needing structured network and firewall setup with support',
      'Companies running our software on-premise that need suitable hardware',
    ],
    problems: [
      {
        title: 'Hardware that cannot handle the software',
        text: 'Under-specified servers and workstations cause slow reports and frustrated users. We size infrastructure against the applications you actually run.',
      },
      {
        title: 'Network and connectivity issues',
        text: 'Structured cabling, switching, wireless coverage and firewall configuration designed for the layout of your office or facility.',
      },
      {
        title: 'Backups that were never tested',
        text: 'Storage and backup setups with scheduled verification, so recovery is a procedure rather than a hope.',
      },
      {
        title: 'No support when something fails',
        text: 'A defined support channel and preventive maintenance visits instead of waiting for a failure to escalate.',
      },
    ],
    capabilities: [
      { title: 'Server solutions', text: 'Supply, installation, operating system and application setup, and ongoing maintenance of business servers.' },
      { title: 'Workstations and peripherals', text: 'Standard office systems through to higher-specification machines for development, design and accounting workloads.' },
      { title: 'Network infrastructure', text: 'Structured cabling, switches, routers, wireless access points, VPN and network security configuration.' },
      { title: 'Storage and backup', text: 'NAS and server storage with scheduled backup routines and periodic restore testing.' },
      { title: 'Security hardware', text: 'Firewalls, access control and surveillance equipment supplied and configured as part of the network setup.' },
      { title: 'Maintenance and support', text: 'Preventive maintenance, hardware diagnostics, repairs, upgrades and replacement planning.' },
      { title: 'IoT and prototyping hardware', text: 'Boards and components such as Raspberry Pi, Arduino and ESP32 for automation and prototype projects.' },
    ],
    approach: [
      { title: 'Site assessment', text: 'We record current hardware, network layout, user counts, applications and pain points.' },
      { title: 'Requirement and sizing', text: 'Specifications matched to application load, storage growth and budget — with an option to buy in phases.' },
      { title: 'Procurement', text: 'Supply of servers, machines, networking and peripherals with configuration before installation.' },
      { title: 'Installation and migration', text: 'On-site installation, cabling, configuration and data migration with planned downtime.' },
      { title: 'Handover and documentation', text: 'Asset list, configuration notes and basic training for the people who use the systems daily.' },
      { title: 'Maintenance', text: 'Scheduled service visits, health checks and a support contact for escalation.' },
    ],
    technologies: ['Windows Server', 'Linux', 'AWS', 'Raspberry Pi', 'Arduino', 'ESP32'],
    benefits: [
      'Hardware sized against the software you actually run',
      'One team accountable for both applications and infrastructure',
      'Preventive maintenance instead of emergency repairs',
      'Documentation of what you own and how it is configured',
    ],
    faqs: [
      {
        q: 'Do you supply hardware outside Nagpur?',
        a: 'We supply and support clients in and around Nagpur, and deliver hardware across Maharashtra and other parts of India. On-site support outside the region depends on the scope of the engagement.',
      },
      {
        q: 'Can you maintain hardware that you did not supply?',
        a: 'Yes. We assess the existing setup first and then propose a maintenance arrangement, including for mixed-vendor environments.',
      },
      {
        q: 'Do you provide annual maintenance contracts?',
        a: 'Yes. AMC arrangements include scheduled preventive visits, priority response and defined escalation. Scope and response levels are agreed in writing.',
      },
      {
        q: 'Can you help us move to cloud instead of buying servers?',
        a: 'Often that is the better choice for growing businesses. We compare on-premise and cloud options based on cost, control and reliability, and support either decision.',
      },
    ],
    related: [
      { label: 'Custom software development', path: '/services/software-development', description: 'Software designed for your infrastructure' },
      { label: 'ERP development', path: '/services/erp-development', description: 'Systems that need reliable servers and networks' },
      { label: 'Contact', path: '/contact', description: 'Arrange a site assessment' },
      { label: 'Request a quote', path: '/request-quote', description: 'Ask for hardware and support pricing' },
    ],
    cta: {
      title: 'Review your IT infrastructure',
      text: 'Tell us what you run today and where it struggles. We will assess what needs replacing, upgrading or leaving alone.',
      primaryLabel: 'Request an infrastructure assessment',
      secondaryLabel: 'Contact our team',
      secondaryPath: '/contact',
    },
    image: { src: '/assets/tech/network-infrastructure.jpg', alt: 'Network and IT infrastructure hardware in a server rack' },
  },
];

/** The broader capability list shown on the /services index page. */
export const capabilityGroups: { title: string; icon: string; items: string[] }[] = [
  {
    title: 'Application development',
    icon: 'Code2',
    items: [
      'Custom software development',
      'Web application development',
      'Website and corporate website development',
      'Mobile app development (Android, iOS, cross-platform)',
      'E-commerce and online ordering systems',
      'Enterprise application development',
      'Desktop application development',
    ],
  },
  {
    title: 'Business systems',
    icon: 'Layers',
    items: [
      'ERP development and module design',
      'CRM and lead management systems',
      'Billing and invoicing software',
      'Inventory and stock management',
      'Document generation and management',
      'Reporting, dashboards and business intelligence',
      'Role-based access and approval workflows',
    ],
  },
  {
    title: 'Data, AI and automation',
    icon: 'Brain',
    items: [
      'AI-powered application features',
      'Machine learning models for prediction and classification',
      'Computer vision and image analysis',
      'Intelligent document processing',
      'AI API integrations',
      'Data analytics and business intelligence dashboards',
    ],
  },
  {
    title: 'Integration and platform',
    icon: 'Plug',
    items: [
      'REST API development and integration',
      'Third-party and payment gateway integration',
      'SMS, WhatsApp and email service integration',
      'Accounting and ERP integrations',
      'Cloud deployment on AWS and similar providers',
      'DevOps and deployment automation',
      'Data migration from spreadsheets and legacy systems',
    ],
  },
  {
    title: 'Design and experience',
    icon: 'PenTool',
    items: [
      'UI/UX design for web, desktop and mobile',
      'Interface design for data-heavy operations',
      'Branding and graphic design support',
      'Accessibility and responsive layout work',
    ],
  },
  {
    title: 'Quality and support',
    icon: 'ShieldCheck',
    items: [
      'Manual and automated testing',
      'User acceptance testing support',
      'Software maintenance and enhancement',
      'Performance monitoring and optimisation',
      'IT consulting and technology planning',
      'Domain, hosting, SSL and deployment management',
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

export const servicesNav = services.map(({ navTitle, navDescription, path, icon }) => ({
  title: navTitle,
  description: navDescription,
  path,
  icon,
}));
