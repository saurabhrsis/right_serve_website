/**
 * Service content model.
 * Three pillars (Software / Hardware / Marketing) each with dedicated,
 * SEO-optimised landing pages - one route per service, as required.
 */

export type Faq = { question: string; answer: string }

export type Feature = { title: string; description: string; icon?: string }

export type SubService = {
  slug: string
  name: string
  /** Short label used in menus and cards. */
  shortName?: string
  /** SEO title used on the child page. */
  seoTitle: string
  metaDescription: string
  tagline: string
  icon: string
  image: string
  summary: string
  intro: string[]
  features: Feature[]
  deliverables: string[]
  tech?: string[]
  faqs: Faq[]
  priceFrom: string
  timeline: string
}

export type ServicePillar = {
  slug: 'software' | 'hardware' | 'marketing'
  path: string
  name: string
  shortName: string
  seoTitle: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  heroHeading: string
  heroSub: string
  heroImage: string
  heroImageAlt: string
  icon: string
  summary: string
  intro: string[]
  highlights: string[]
  stats: { value: string; label: string }[]
  whyUs: Feature[]
  faqs: Faq[]
  subServices: SubService[]
}

const software: ServicePillar = {
  slug: 'software',
  path: '/services/software',
  name: 'Software Development',
  shortName: 'Software',
  seoTitle: 'Software Development Company in Nagpur | Custom Software, Web & Mobile Apps',
  metaTitle: 'Software Development Services in Nagpur | RSIS',
  metaDescription:
    'Custom software development, web & mobile app development, ERP/CRM, cloud and AI automation services from Right Serve Infotech System, Nagpur. Get a free quote today.',
  eyebrow: 'Software Development',
  heroHeading: 'Custom software that runs your business — not the other way around',
  heroSub:
    'Websites, mobile apps, ERP/CRM platforms and AI automation, engineered by an in-house team in Nagpur and supported for years, not weeks.',
  heroImage: '/images/software-hero.jpg',
  heroImageAlt: 'Software development team at Right Serve Infotech System, Nagpur',
  icon: 'Code2',
  summary:
    'End-to-end product engineering: discovery, UI/UX, development, QA, deployment and long-term support.',
  intro: [
    'Right Serve Infotech System builds software for businesses that have outgrown spreadsheets and ready-made tools. We start with your process, not our tech stack — mapping how leads, orders, inventory, staff and money actually move through your company.',
    'The result is software your team adopts on day one: clean interfaces, sensible roles and permissions, mobile-friendly screens, and reports your management actually reads. Everything is delivered on a documented milestone plan, with source code and training included.',
  ],
  highlights: [
    'Free discovery call and written scope',
    'Milestone-based delivery with weekly demos',
    'Source code, documentation and training included',
    'Optional AMC for maintenance after launch',
  ],
  stats: [
    { value: '150+', label: 'Software projects' },
    { value: '100%', label: 'Client satisfaction' },
    { value: '24/7', label: 'Technical support' },
    { value: '7+', label: 'Years experience' },
  ],
  whyUs: [
    { title: 'Expert team', description: 'React, Node.js, Flutter, .NET and PostgreSQL engineers with 7+ years of shipping experience.', icon: 'Users' },
    { title: 'Agile methodology', description: 'Two-week sprints, weekly staging builds and transparent progress you can see.', icon: 'RefreshCw' },
    { title: 'Quality assurance', description: 'Manual + automated testing, code review and security scans before release.', icon: 'ShieldCheck' },
    { title: 'Scalable architecture', description: 'Cloud-ready, API-first systems that keep working when your user count multiplies.', icon: 'TrendingUp' },
  ],
  faqs: [
    {
      question: 'How much does custom software development cost in Nagpur?',
      answer:
        'A focused web application typically starts around ₹75,000, while multi-module ERP or CRM platforms range from ₹2,00,000 upwards. After a free discovery call we send a written proposal with module-wise pricing, timelines and payment milestones.',
    },
    {
      question: 'How long does a software project take?',
      answer:
        'A marketing website takes 2–4 weeks, a custom web application 6–12 weeks, and large ERP/CRM rollouts 3–6 months. We share a milestone plan before starting so you always know what is being delivered next.',
    },
    {
      question: 'Do you provide support after the project goes live?',
      answer:
        'Yes. Every project includes a warranty period, after which you can continue with an annual maintenance contract (AMC) covering bug fixes, security patches, backups and feature enhancements.',
    },
    {
      question: 'Can you take over an existing project built by another team?',
      answer:
        'Absolutely. We audit the codebase, document what exists, fix critical issues first and then continue feature development — with or without a full rewrite, depending on what makes commercial sense.',
    },
  ],
  subServices: [
    {
      slug: 'custom-software-development',
      name: 'Custom Software Development',
      shortName: 'Custom Software',
      seoTitle: 'Custom Software Development Company in Nagpur | Tailored Business Software',
      metaDescription:
        'Custom software development in Nagpur — tailored desktop and web applications for billing, inventory, HR, manufacturing and service businesses. Free consultation from RSIS.',
      tagline: 'Software shaped around your workflow, not a template',
      icon: 'Code2',
      image: '/images/services/custom-software-development.jpg',
      summary:
        'Tailored business applications that digitise billing, inventory, HR, production and reporting exactly the way your company works.',
      intro: [
        'Off-the-shelf software forces you to change how you work. We build the opposite: applications designed around your approvals, rate cards, GST rules, field processes and reporting formats — so adoption is instant.',
        'Typical builds include billing and invoicing systems, inventory and purchase management, HR/payroll, production planning, service ticketing and management dashboards with real-time MIS.',
      ],
      features: [
        { title: 'Process-first discovery', description: 'Workshops with your team to map each step, exception and approval.', icon: 'Search' },
        { title: 'Role-based access', description: 'Granular permissions for owners, managers, accountants and field staff.', icon: 'KeyRound' },
        { title: 'MIS & dashboards', description: 'Live sales, stock and productivity dashboards — exportable to Excel and PDF.', icon: 'BarChart3' },
        { title: 'Integrations', description: 'Tally, payment gateways, WhatsApp/SMS, biometric devices and government portals.', icon: 'Plug' },
        { title: 'Mobile-ready', description: 'Responsive web plus companion apps for field teams and approvals on the go.', icon: 'Smartphone' },
        { title: 'Audit trail', description: 'Every change is logged with user, timestamp and previous value.', icon: 'History' },
      ],
      deliverables: [
        'Requirement document and process flow diagrams',
        'UI designs approved before development starts',
        'Deployed application with admin, user and backup setup',
        'Source code handover and documentation',
        'Team training plus 30–90 days of warranty support',
      ],
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'AWS'],
      faqs: [
        { question: 'Can the software work offline or on a local server?', answer: 'Yes. We deploy browser-based systems on your office server or on the cloud, and can add offline-first modules for shops and factories with unstable internet.' },
        { question: 'Will I own the source code?', answer: 'Yes — on final payment the complete source code, database schema and deployment documentation are handed over to you.' },
        { question: 'Can you digitise our current Excel-based process?', answer: 'That is our most common project. We migrate your existing masters, opening balances and formats so the transition takes hours, not weeks.' },
      ],
      priceFrom: '₹75,000',
      timeline: '6–12 weeks',
    },
    {
      slug: 'web-development',
      name: 'Website & Web Development',
      shortName: 'Web Development',
      seoTitle: 'Website Development Company in Nagpur | Fast, SEO-Ready Websites',
      metaDescription:
        'Professional website development in Nagpur — corporate websites, landing pages, portals and WooCommerce stores built with React/Next.js, WordPress and PHP. Fast, secure and SEO-ready.',
      tagline: 'Corporate websites, portals and landing pages that convert',
      icon: 'Globe',
      image: '/images/services/web-development.jpg',
      summary:
        'Responsive, lightning-fast websites — from corporate sites and landing pages to customer portals and e-commerce stores.',
      intro: [
        'A website is your hardest-working salesperson. We design and build sites that load in under two seconds, rank for the terms your customers search, and turn visitors into enquiries through clear structure and strong calls to action.',
        'Every build ships with on-page SEO, analytics, Google Business integration, lead forms, WhatsApp chat and a simple CMS so your team can update content without a developer.',
      ],
      features: [
        { title: 'Design that reflects your brand', description: 'Modern, mobile-first layouts with your colours, fonts and imagery.', icon: 'Palette' },
        { title: 'Core Web Vitals optimised', description: 'Optimised images, caching, lazy loading and CDN delivery for green scores.', icon: 'Gauge' },
        { title: 'On-page SEO built in', description: 'Semantic HTML, meta tags, schema markup, sitemap and clean URLs.', icon: 'Search' },
        { title: 'Easy content management', description: 'Edit pages, blogs, products and banners yourself — no coding needed.', icon: 'LayoutDashboard' },
        { title: 'Lead capture & CRM', description: 'Enquiry forms routed to email, WhatsApp and your CRM with spam protection.', icon: 'Inbox' },
        { title: 'E-commerce ready', description: 'WooCommerce or custom storefronts with payment, shipping and GST invoicing.', icon: 'ShoppingCart' },
      ],
      deliverables: [
        'Sitemap, wireframes and page-by-page content plan',
        'Custom UI design approved before coding',
        'Mobile, tablet and desktop tested build',
        'Google Analytics 4, Search Console and sitemap submission',
        'Training session for your content team',
      ],
      tech: ['React', 'Next.js', 'WordPress', 'PHP', 'Tailwind CSS', 'WooCommerce'],
      faqs: [
        { question: 'How much does a website cost in Nagpur?', answer: 'A professional 5–8 page corporate website starts at ₹25,000; custom design portals and e-commerce stores typically range from ₹60,000 to ₹2,50,000 depending on features.' },
        { question: 'Do you provide hosting and domain?', answer: 'Yes — we arrange domain registration, business email and fast hosting (shared, VPS or cloud), or work with the provider you already use and manage it for you.' },
        { question: 'Will my website rank on Google?', answer: 'Every site is built SEO-ready: clean code, target keywords in titles and headings, schema markup, sitemaps and fast loading. Ongoing SEO retainers are available for competitive keywords.' },
      ],
      priceFrom: '₹25,000',
      timeline: '2–4 weeks',
    },
    {
      slug: 'mobile-app-development',
      name: 'Mobile App Development',
      shortName: 'Mobile Apps',
      seoTitle: 'Mobile App Development Company in Nagpur | Android & iOS Apps',
      metaDescription:
        'Android and iOS app development in Nagpur using Flutter and React Native. Custom apps for delivery, field sales, healthcare, education and retail — published to Play Store & App Store.',
      tagline: 'Android & iOS apps your users open every day',
      icon: 'Smartphone',
      image: '/images/services/mobile-app-development.jpg',
      summary:
        'Native-quality Android and iOS applications built with Flutter and React Native, complete with backend, admin panel and store publishing.',
      intro: [
        'We build apps for real Indian conditions: lean data usage, offline-friendly screens, multilingual labels and devices across price bands. One codebase covers Android and iOS, which keeps cost and maintenance low.',
        'Along with the app you get an admin dashboard, API backend, push notifications and store submission support — everything needed to launch and grow.',
      ],
      features: [
        { title: 'Cross-platform builds', description: 'One Flutter/React Native codebase for Android and iOS with shared design system.', icon: 'Layers' },
        { title: 'Offline-first sync', description: 'Field apps keep working without network and sync when connectivity returns.', icon: 'WifiOff' },
        { title: 'Push notifications', description: 'Segmented campaigns, order updates and reminders via FCM.', icon: 'BellRing' },
        { title: 'Payments & maps', description: 'Razorpay/PhonePe integration, live tracking and route optimisation.', icon: 'CreditCard' },
        { title: 'Secure auth', description: 'OTP, password, biometric and role-based access with encrypted storage.', icon: 'Lock' },
        { title: 'Store publishing', description: 'Play Store and App Store listings with privacy policies and assets prepared.', icon: 'UploadCloud' },
      ],
      deliverables: [
        'App UI/UX design and clickable prototype',
        'Android + iOS builds with admin panel and APIs',
        'Analytics, crash reporting and push notification setup',
        'Store listing assets, privacy policy and submission',
        'Post-launch support and version updates',
      ],
      tech: ['Flutter', 'React Native', 'Node.js', 'Firebase', 'MongoDB', 'REST APIs'],
      faqs: [
        { question: 'How much does a mobile app cost?', answer: 'A single-purpose app (booking, CRM, catalogue) starts around ₹1,20,000. Multi-role apps with payments, tracking and dashboards range from ₹2,50,000 upwards.' },
        { question: 'Do you publish the app on the Play Store and App Store?', answer: 'Yes — we prepare the listing, screenshots, privacy policy and content rating, then submit and handle review feedback until the app is live.' },
        { question: 'Can you add offline mode?', answer: 'Yes. We build local caching and sync queues so field teams can capture data without internet and push it once they are back online.' },
      ],
      priceFrom: '₹1,20,000',
      timeline: '8–14 weeks',
    },
    {
      slug: 'ecommerce-development',
      name: 'E-Commerce Development',
      shortName: 'E-Commerce',
      seoTitle: 'E-Commerce Website Development in Nagpur | WooCommerce & Custom Stores',
      metaDescription:
        'E-commerce development in Nagpur — WooCommerce, Shopify and custom online stores with payment gateways, shipping, GST invoicing, offers and marketplace integrations.',
      tagline: 'Online stores built to sell, not just to look good',
      icon: 'ShoppingCart',
      image: '/images/services/ecommerce-development.jpg',
      summary:
        'WooCommerce, Shopify and headless storefronts with payments, shipping, GST invoicing, offers and marketplace sync.',
      intro: [
        'We build e-commerce experiences that keep the buying journey short: fast category browsing, clear pricing with GST, trustworthy checkout and instant order confirmation on WhatsApp and email.',
        'For growing catalogues we add bulk upload, multi-warehouse stock, coupon engines, abandoned-cart recovery and marketplace/ERP sync so operations stay effortless.',
      ],
      features: [
        { title: 'Conversion-first design', description: 'Sticky add-to-cart, trust badges, reviews and one-page checkout.', icon: 'MousePointerClick' },
        { title: 'Payment gateways', description: 'Razorpay, PayU, PhonePe, UPI and COD with automatic reconciliation.', icon: 'CreditCard' },
        { title: 'Shipping & logistics', description: 'Pincode serviceability, weight-based rates and Shiprocket/Delhivery integration.', icon: 'Truck' },
        { title: 'GST invoicing', description: 'Compliant tax invoices, credit notes and HSN-wise reporting.', icon: 'ReceiptText' },
        { title: 'Marketplace sync', description: 'Push stock and pull orders from Amazon, Flipkart and Meesho.', icon: 'RefreshCw' },
        { title: 'Growth analytics', description: 'Funnel tracking, product performance and remarketing audiences.', icon: 'LineChart' },
      ],
      deliverables: [
        'Catalogue structure, categories and filter strategy',
        'Responsive store with cart, checkout and payment integration',
        'Shipping, tax and invoice configuration',
        'Google Analytics 4 e-commerce + Meta Pixel events',
        'Operations training for order and stock management',
      ],
      tech: ['WooCommerce', 'Shopify', 'React', 'Node.js', 'Razorpay', 'Shiprocket'],
      faqs: [
        { question: 'How many products can the store handle?', answer: 'WooCommerce comfortably manages 10,000+ products with good hosting, proper indexing and cached pages. For very large or multi-vendor catalogues we recommend a headless build.' },
        { question: 'Can you migrate our existing store?', answer: 'Yes — products, customers, order history and SEO URLs are migrated with 301 redirects so rankings and traffic are preserved.' },
        { question: 'Do you manage orders after launch?', answer: 'We can. Many clients take our e-commerce AMC, where we handle catalogue updates, offers, bug fixes, backups and monthly performance reporting.' },
      ],
      priceFrom: '₹60,000',
      timeline: '4–8 weeks',
    },
    {
      slug: 'erp-crm-solutions',
      name: 'ERP & CRM Solutions',
      shortName: 'ERP & CRM',
      seoTitle: 'ERP & CRM Software Development in Nagpur | Custom Business Automation',
      metaDescription:
        'Custom ERP and CRM software in Nagpur for manufacturing, construction, healthcare, education and services — sales pipelines, inventory, payroll, billing and MIS dashboards.',
      tagline: 'One system for sales, stock, people and money',
      icon: 'Boxes',
      image: '/images/services/erp-crm.jpg',
      summary:
        'Custom ERP and CRM platforms that connect sales pipelines, inventory, production, payroll, billing and management reporting.',
      intro: [
        'When departments work in separate files, decisions get slower and errors multiply. Our ERP/CRM platforms give every team one source of truth — from the first enquiry to the final invoice.',
        'We deploy modularly, so you can start with CRM or inventory and expand to production, HR and finance later without rebuilding anything.',
      ],
      features: [
        { title: 'Lead-to-order pipeline', description: 'Enquiry capture, follow-up reminders, quotations and order conversion.', icon: 'Filter' },
        { title: 'Inventory & production', description: 'Multi-warehouse stock, BOM, work orders and wastage tracking.', icon: 'Package' },
        { title: 'Finance & billing', description: 'GST invoices, receivables ageing, payment follow-ups and ledger sync.', icon: 'IndianRupee' },
        { title: 'HR & payroll', description: 'Attendance, leave, shifts, salary processing and statutory reports.', icon: 'Users' },
        { title: 'Approvals & workflow', description: 'Configurable multi-level approvals with escalation and audit logs.', icon: 'CheckSquare' },
        { title: 'Dashboards & alerts', description: 'Owner dashboards with daily WhatsApp/email MIS summaries.', icon: 'BarChart3' },
      ],
      deliverables: [
        'Module-wise rollout plan and data migration',
        'Configured ERP/CRM with roles for every department',
        'Mobile apps or web access for field teams',
        'Reports mapped to your existing formats',
        'On-site/online training and go-live support',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Flutter', 'AWS', 'REST APIs'],
      faqs: [
        { question: 'Can ERP integrate with Tally or our existing accounting software?', answer: 'Yes. We build two-way integration with Tally (XML/ODBC), plus accounting exports for Zoho Books and other platforms.' },
        { question: 'Is the ERP available on mobile?', answer: 'Every module is responsive, and we add Android apps for field sales, site supervisors and delivery teams where needed.' },
        { question: 'How do you ensure the team actually uses it?', answer: 'We involve department heads during design, keep screens role-specific and simple, migrate their data, and train each team on their own workflows before go-live.' },
      ],
      priceFrom: '₹2,00,000',
      timeline: '3–6 months',
    },
    {
      slug: 'cloud-devops',
      name: 'Cloud, DevOps & Support',
      shortName: 'Cloud & DevOps',
      seoTitle: 'Cloud & DevOps Services in Nagpur | AWS Setup, Migration & CI/CD',
      metaDescription:
        'Cloud computing and DevOps services in Nagpur — AWS/Azure setup, cloud migration, CI/CD pipelines, monitoring, backups, security hardening and IT consulting.',
      tagline: 'Cloud infrastructure that stays fast, safe and affordable',
      icon: 'CloudCog',
      image: '/images/services/cloud-devops.jpg',
      summary:
        'AWS/Azure architecture, migrations, CI/CD automation, monitoring, backups and security hardening with predictable monthly costs.',
      intro: [
        'Moving to the cloud should reduce cost and risk — not create surprise bills and downtime. We design right-sized architectures, automate deployments and put monitoring in place so issues are caught before users notice.',
        'For existing setups we run cost and security audits: removing idle resources, adding backups, hardening access and documenting a recovery plan.',
      ],
      features: [
        { title: 'Cloud architecture', description: 'Right-sized AWS/Azure environments with autoscaling and least-privilege IAM.', icon: 'Server' },
        { title: 'Zero-downtime migration', description: 'Staged migration of apps, databases and files with rollback plans.', icon: 'Shuffle' },
        { title: 'CI/CD pipelines', description: 'Automated build, test and deploy on every Git commit.', icon: 'GitBranch' },
        { title: 'Monitoring & alerts', description: 'Uptime, performance and error monitoring with WhatsApp/email alerts.', icon: 'Activity' },
        { title: 'Backup & DR', description: 'Scheduled encrypted backups with tested restore procedures.', icon: 'DatabaseBackup' },
        { title: 'Cost optimisation', description: 'Monthly reviews that typically cut cloud spend by 20–40%.', icon: 'PiggyBank' },
      ],
      deliverables: [
        'Infrastructure diagram and security checklist',
        'Provisioned environment with IaC where applicable',
        'Deployment pipeline with staging and production stages',
        'Monitoring dashboards, alert routing and backup policy',
        'Runbook plus handover/training for your team',
      ],
      tech: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Nginx', 'Cloudflare'],
      faqs: [
        { question: 'Can you reduce our current cloud bill?', answer: 'In most audits we find 20–40% savings by resizing instances, using reserved capacity, cleaning unused storage and adding caching.' },
        { question: 'Do you manage servers on a monthly basis?', answer: 'Yes — our managed services cover patching, monitoring, backups, security and monthly health reports, starting from a modest monthly retainer.' },
        { question: 'Is our data safe during migration?', answer: 'We migrate in stages with encrypted transfers, a tested rollback plan and a maintenance window agreed in advance, so business disruption is minimal.' },
      ],
      priceFrom: '₹20,000',
      timeline: '1–6 weeks',
    },
    {
      slug: 'ai-automation',
      name: 'AI & Automation',
      shortName: 'AI & Automation',
      seoTitle: 'AI & Business Automation Services in Nagpur | Chatbots & Workflow Automation',
      metaDescription:
        'AI and automation services in Nagpur — chatbots, WhatsApp automation, document AI, sales forecasting, workflow automation and data science solutions for growing businesses.',
      tagline: 'Automate the repetitive work, free your team for the important work',
      icon: 'Sparkles',
      image: '/images/services/ai-automation.jpg',
      summary:
        'Chatbots, WhatsApp automation, document processing and workflow automation that cut manual effort and response times.',
      intro: [
        'Most businesses lose hours every day to copy-paste work: answering the same enquiries, entering invoices, chasing follow-ups and preparing reports. AI and workflow automation remove that load.',
        'We start with a process audit to find the highest-ROI automation, then implement it in weeks — measurable, safe and integrated with the systems you already use.',
      ],
      features: [
        { title: 'Website & WhatsApp chatbots', description: 'Trained on your catalogue and FAQs, handing over to humans when needed.', icon: 'MessageSquare' },
        { title: 'Document AI', description: 'Extract data from invoices, purchase orders and forms into your ERP.', icon: 'FileScan' },
        { title: 'Workflow automation', description: 'Approvals, reminders, escalations and report distribution on autopilot.', icon: 'Workflow' },
        { title: 'Sales & demand forecasting', description: 'ML models that predict stock needs and highlight at-risk customers.', icon: 'TrendingUp' },
        { title: 'Report automation', description: 'Daily MIS to email and WhatsApp, generated from live data.', icon: 'FileSpreadsheet' },
        { title: 'Data science', description: 'Dashboards and models for pricing, churn and route optimisation.', icon: 'BrainCircuit' },
      ],
      deliverables: [
        'Automation opportunity audit with ROI estimates',
        'Configured chatbot/flows integrated with your CRM or WhatsApp Business API',
        'Model training, validation and monitoring plan',
        'Staff training and SOP documentation',
        'Monthly performance review of automated processes',
      ],
      tech: ['Python', 'OpenAI APIs', 'Node.js', 'WhatsApp Business API', 'Power BI', 'PostgreSQL'],
      faqs: [
        { question: 'Will AI replace our staff?', answer: 'Our automations target repetitive, low-value tasks. In practice teams redeploy that time to sales, service and quality — we have never built an automation to cut headcount.' },
        { question: 'How do you keep our data private?', answer: 'We use your own cloud accounts or private deployments, sign NDAs, mask sensitive fields before processing and never train public models on your data.' },
        { question: 'What is a realistic first automation project?', answer: 'Usually enquiry capture and follow-up, or invoice data entry. Both typically go live in 2–4 weeks and show measurable time savings immediately.' },
      ],
      priceFrom: '₹40,000',
      timeline: '2–8 weeks',
    },
    {
      slug: 'ui-ux-design',
      name: 'UI/UX Design',
      shortName: 'UI/UX Design',
      seoTitle: 'UI/UX Design Services in Nagpur | Website & App Design Studio',
      metaDescription:
        'UI/UX design services in Nagpur — user research, wireframes, prototypes, design systems and conversion-focused website/app interfaces by Right Serve Infotech System.',
      tagline: 'Interfaces that feel obvious the first time',
      icon: 'PenTool',
      image: '/images/services/ui-ux-design.jpg',
      summary:
        'Research-backed wireframes, prototypes, design systems and conversion-focused interfaces for websites, apps and dashboards.',
      intro: [
        'Good design is not decoration — it removes doubt. We study your users, map their journeys and design screens where the next step is always clear, whether they are booking a service or operating a factory dashboard.',
        'You receive organised Figma files, a reusable design system and dev-ready specs so implementation stays pixel-accurate.',
      ],
      features: [
        { title: 'User & market research', description: 'Interviews, competitor teardowns and journey mapping.', icon: 'Search' },
        { title: 'Wireframes & flows', description: 'Low-fidelity structures approved before visual design begins.', icon: 'LayoutTemplate' },
        { title: 'Clickable prototypes', description: 'Test usability and stakeholder buy-in before writing code.', icon: 'MousePointerClick' },
        { title: 'Design systems', description: 'Reusable components, tokens and responsive grids for consistency.', icon: 'Component' },
        { title: 'Conversion optimisation', description: 'Hierarchy, microcopy and CTA placement tuned to lift enquiries.', icon: 'Target' },
        { title: 'Accessibility', description: 'Colour contrast, keyboard navigation and screen-reader-friendly markup.', icon: 'Accessibility' },
      ],
      deliverables: [
        'Research summary and information architecture',
        'Wireframes and interactive prototype',
        'Hi-fidelity UI design for every screen/state',
        'Design system and component library in Figma',
        'Developer handoff with specs and assets',
      ],
      tech: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Framer', 'Tailwind CSS'],
      faqs: [
        { question: 'Can you redesign an existing product without rebuilding it?', answer: 'Yes. We can deliver a design refresh plus an implementation plan, or work incrementally with your developers to apply the new system screen by screen.' },
        { question: 'Do you test designs with real users?', answer: 'For key journeys, yes — we run quick moderated tests (5–8 users) on the prototype and iterate before development.' },
        { question: 'What if I already have a design?', answer: 'We will review it for responsiveness, accessibility and conversion gaps, then build it pixel-accurately with any sensible improvements you approve.' },
      ],
      priceFrom: '₹30,000',
      timeline: '2–5 weeks',
    },
    {
      slug: 'qa-testing',
      name: 'QA & Testing',
      shortName: 'QA & Testing',
      seoTitle: 'Software Testing & QA Services in Nagpur | Manual & Automation Testing',
      metaDescription:
        'Software QA and testing services in Nagpur — manual testing, automation, API testing, performance testing and security assessment to ship bug-free releases.',
      tagline: 'Ship confidently, with fewer surprises in production',
      icon: 'Bug',
      image: '/images/services/qa-testing.jpg',
      summary:
        'Manual and automated testing, API and performance testing, plus security assessment for reliable releases.',
      intro: [
        'Bugs found in production cost far more than bugs found before release. Our QA team builds structured test plans around your critical journeys and runs them on every build.',
        'We combine manual exploratory testing with automation for regression suites, so releases stay fast and predictable as your product grows.',
      ],
      features: [
        { title: 'Test strategy', description: 'Risk-based test plans covering critical business journeys and edge cases.', icon: 'ClipboardList' },
        { title: 'Manual & exploratory QA', description: 'Cross-browser, cross-device testing of real user flows.', icon: 'MousePointer2' },
        { title: 'Automation suites', description: 'Selenium/Cypress/Playwright suites that run on every deployment.', icon: 'Bot' },
        { title: 'API & integration testing', description: 'Contract, validation and error-handling checks with Postman.', icon: 'Plug' },
        { title: 'Performance testing', description: 'Load and stress testing with JMeter/k6 and tuning recommendations.', icon: 'Gauge' },
        { title: 'Security assessment', description: 'OWASP-based checks for injection, access control and data exposure.', icon: 'ShieldAlert' },
      ],
      deliverables: [
        'Test plan, cases and traceability matrix',
        'Defect reports with severity, evidence and reproduction steps',
        'Automation framework and CI integration',
        'Performance and security assessment reports',
        'Release sign-off checklist',
      ],
      tech: ['Selenium', 'Cypress', 'Playwright', 'Postman', 'JMeter', 'k6'],
      faqs: [
        { question: 'Can you test a product built by another company?', answer: 'Yes — independent QA is one of our most requested engagements. We work directly with your vendor and share findings through a shared defect tracker.' },
        { question: 'Do you provide testers on a monthly basis?', answer: 'Yes, we offer dedicated QA resources on monthly retainer for teams that need continuous testing capacity.' },
        { question: 'How quickly can testing start?', answer: 'For a standard web application we can start within 3–5 working days of receiving access to the staging environment.' },
      ],
      priceFrom: '₹25,000',
      timeline: '1–6 weeks',
    },
  ],
}

const hardware: ServicePillar = {
  slug: 'hardware',
  path: '/services/hardware',
  name: 'Hardware & IT Infrastructure',
  shortName: 'Hardware',
  seoTitle: 'Computer Hardware, Networking & CCTV Services in Nagpur | RSIS',
  metaTitle: 'Hardware & IT Infrastructure Services in Nagpur | RSIS',
  metaDescription:
    'Hardware solutions in Nagpur — servers, workstations, networking, CCTV & biometric security, storage, IoT/embedded and computer AMC support from Right Serve Infotech System.',
  eyebrow: 'Hardware & IT Infrastructure',
  heroHeading: 'Reliable hardware and IT infrastructure, installed and maintained properly',
  heroSub:
    'Servers, workstations, structured networking, CCTV surveillance, IoT devices and AMC support — supplied, configured and serviced by our own engineers.',
  heroImage: '/images/hardware-hero.jpg',
  heroImageAlt: 'Hardware and networking solutions by Right Serve Infotech System, Nagpur',
  icon: 'Cpu',
  summary:
    'Supply, installation, configuration and maintenance of the physical IT backbone your software runs on.',
  intro: [
    'Software performs only as well as the hardware underneath it. We plan infrastructure around your actual workload — user count, applications, growth projections and budget — then supply, install and service it end to end.',
    'From a five-machine office to a multi-floor factory network, our engineers handle site survey, cabling, rack setup, device configuration, documentation and ongoing maintenance visits.',
  ],
  highlights: [
    'Free site survey and infrastructure audit',
    'Branded hardware with warranty + our own service support',
    'Structured cabling, rack and power planning',
    'AMC contracts with defined response times',
  ],
  stats: [
    { value: '500+', label: 'Devices deployed' },
    { value: '24/7', label: 'Remote support' },
    { value: '4 hrs', label: 'Response SLA*' },
    { value: '7+', label: 'Years experience' },
  ],
  whyUs: [
    { title: 'Site-first planning', description: 'We survey before we quote — cable routes, power load, rack space and future expansion.', icon: 'MapPin' },
    { title: 'Certified installations', description: 'Racks, crimping, tagging and labelling done to standards you can audit.', icon: 'BadgeCheck' },
    { title: 'Genuine components', description: 'Branded hardware with valid warranty, invoices and serial-wise records.', icon: 'PackageCheck' },
    { title: 'Support that reaches you', description: 'Remote diagnostics, WhatsApp escalation and on-site engineers in Nagpur.', icon: 'Headphones' },
  ],
  faqs: [
    {
      question: 'Do you provide computer AMC in Nagpur?',
      answer:
        'Yes. Our AMC plans cover desktops, laptops, printers, servers, networking and CCTV with preventive visits, unlimited remote support, defined on-site response times and quarterly health reports.',
    },
    {
      question: 'Can you upgrade our existing office network?',
      answer:
        'Absolutely. We audit current cabling and devices, recommend improvements (switching, Wi-Fi coverage, VLANs, firewalls, internet redundancy) and upgrade in phases without stopping work.',
    },
    {
      question: 'Do you supply hardware outside Nagpur?',
      answer:
        'We serve clients across Maharashtra and central India, with remote support everywhere and on-site visits scheduled for project and AMC work.',
    },
    {
      question: 'Are the products covered by warranty?',
      answer:
        'All hardware is supplied with the manufacturer’s warranty plus our installation and configuration support. Extended warranty and spare-pool options are available.',
    },
  ],
  subServices: [
    {
      slug: 'server-workstation-solutions',
      name: 'Server & Workstation Solutions',
      shortName: 'Servers & Workstations',
      seoTitle: 'Server & Workstation Solutions in Nagpur | Supply, Setup & Support',
      metaDescription:
        'Server and workstation solutions in Nagpur — rack/tower servers, NAS, virtualisation, CAD/graphics workstations, backup servers, installation and configuration by RSIS.',
      tagline: 'Capacity planned for today, headroom for tomorrow',
      icon: 'Server',
      image: '/images/hardware/server.jpg',
      summary:
        'Rack and tower servers, NAS storage, virtualisation hosts and high-performance CAD/graphics workstations, installed and configured.',
      intro: [
        'We size servers by workload: users, applications, databases, concurrency and growth. That avoids two common mistakes — undersized hardware that slows the business, and oversized hardware that wastes capital.',
        'Installation includes RAID configuration, OS and role setup, antivirus, backup jobs, UPS/rack integration, documentation and administrator training.',
      ],
      features: [
        { title: 'Workload sizing', description: 'Capacity planning based on real usage data, not guesswork.', icon: 'Gauge' },
        { title: 'RAID & redundancy', description: 'RAID arrays, dual power supply and UPS-backed protection.', icon: 'HardDrive' },
        { title: 'Virtualisation', description: 'Hyper-V/VMware hosts to consolidate multiple servers safely.', icon: 'Boxes' },
        { title: 'Backup servers & NAS', description: 'Scheduled, versioned backups with periodic restore drills.', icon: 'DatabaseBackup' },
        { title: 'Workstation builds', description: 'CAD, video-editing and accounting machines optimised for their application.', icon: 'Monitor' },
        { title: 'Rack & power planning', description: 'Neat racks, labelled cabling, earthing and load balancing.', icon: 'Cable' },
      ],
      deliverables: [
        'Hardware specification sheet with justifications',
        'Supply, installation and OS/role configuration',
        'RAID, backup jobs and monitoring agents configured',
        'Asset register with serial numbers and warranty details',
        'Admin handover and documentation',
      ],
      faqs: [
        { question: 'Which server brand do you recommend?', answer: 'For most SMB workloads Dell, HP or Lenovo tower/rack servers offer the best balance of price, warranty and spare availability. We quote options with comparisons so you can decide.' },
        { question: 'Can you virtualise our existing physical servers?', answer: 'Yes — we perform P2V migrations with a tested rollback plan, usually over a weekend to avoid production impact.' },
        { question: 'Do you supply refurbished hardware?', answer: 'On request, for non-critical workloads, with warranty. We always disclose condition transparently and never mix refurbished parts into new builds.' },
      ],
      priceFrom: '₹45,000',
      timeline: '1–3 weeks',
    },
    {
      slug: 'networking-solutions',
      name: 'Networking Solutions',
      shortName: 'Networking',
      seoTitle: 'Networking Solutions in Nagpur | LAN, Wi-Fi, Firewall & Cabling',
      metaDescription:
        'Office networking in Nagpur — structured cabling, managed switches, Wi-Fi access points, VLANs, firewalls, VPN and internet redundancy, installed by RSIS.',
      tagline: 'Networks that do not slow your team down',
      icon: 'Network',
      image: '/images/hardware/networking.jpg',
      summary:
        'Structured LAN/WAN cabling, managed switching, enterprise Wi-Fi, firewall security, VPN and failover internet.',
      intro: [
        'A slow or unreliable network affects every department. We design networks that carry data, CCTV and voice traffic without congestion — with separate VLANs, clean cabling and monitoring.',
        'Installation is documented floor by floor, with port maps and labels, so troubleshooting later takes minutes instead of hours.',
      ],
      features: [
        { title: 'Structured cabling', description: 'Cat6/6A and fibre cabling with testing, labelling and certification.', icon: 'Cable' },
        { title: 'Managed switching', description: 'Layer 2/3 switches with VLANs, PoE for access points and cameras.', icon: 'Network' },
        { title: 'Enterprise Wi-Fi', description: 'Site surveys and controller-managed APs for seamless roaming.', icon: 'Wifi' },
        { title: 'Firewall & security', description: 'UTM firewalls, content filtering, IPS and secure remote access.', icon: 'ShieldCheck' },
        { title: 'VPN & branch links', description: 'Site-to-site and client VPN connectivity between offices and WFH staff.', icon: 'Lock' },
        { title: 'Internet redundancy', description: 'Dual-ISP failover so business keeps running when one line drops.', icon: 'RefreshCw' },
      ],
      deliverables: [
        'Network design with floor-wise cabling plan',
        'Supply and installation of cabling, switches and APs',
        'Firewall rules, VLAN segmentation and VPN setup',
        'Cable certification or performance test reports',
        'Network diagram, port map and credential handover',
      ],
      faqs: [
        { question: 'Can you work after office hours?', answer: 'Yes — cutovers, cabling and firewall changes are usually scheduled on weekends or after business hours to keep your operations running.' },
        { question: 'Do you support Wi-Fi across multiple floors?', answer: 'We perform a site survey, position access points for coverage, and use controller-based roaming so devices switch seamlessly between floors.' },
        { question: 'Can you isolate CCTV traffic from office data?', answer: 'Yes, CCTV runs on its own VLAN with bandwidth limits and QoS, so recording and business applications never compete for the same resources.' },
      ],
      priceFrom: '₹25,000',
      timeline: '1–4 weeks',
    },
    {
      slug: 'cctv-security-systems',
      name: 'CCTV & Security Systems',
      shortName: 'CCTV & Security',
      seoTitle: 'CCTV Installation in Nagpur | IP Cameras, Biometric & Access Control',
      metaDescription:
        'CCTV installation in Nagpur — IP cameras, NVR/DVR setup, remote mobile viewing, biometric attendance and access control systems with AMC support from RSIS.',
      tagline: 'See everything, from anywhere',
      icon: 'Cctv',
      image: '/images/hardware/security.jpg',
      summary:
        'IP and HD CCTV, NVR/DVR configuration, mobile viewing, biometric attendance and access control for offices, factories and shops.',
      intro: [
        'We install surveillance that is actually usable: clear coverage of entry points, exits, cash counters, stores and production floors, with retention that matches your compliance requirements.',
        'You get remote viewing on mobile, motion alerts, storage health checks and documented camera maps, plus AMC for cleaning, firmware and replacement support.',
      ],
      features: [
        { title: 'Site survey & coverage plan', description: 'Camera positioning, lens selection and lighting assessment.', icon: 'MapPin' },
        { title: 'IP/HD camera systems', description: '2MP to 4K cameras with IR/colour night vision and audio options.', icon: 'Camera' },
        { title: 'NVR/DVR & storage', description: 'Recording profiles tuned for 15–90 day retention with RAID protection.', icon: 'HardDrive' },
        { title: 'Remote & mobile viewing', description: 'Secure apps with user-wise access and playback on phone or laptop.', icon: 'Smartphone' },
        { title: 'Biometric attendance', description: 'Fingerprint/face attendance integrated with HR and payroll systems.', icon: 'Fingerprint' },
        { title: 'Access control', description: 'Cards, fobs and turnstiles with door-wise time-zone permissions.', icon: 'DoorOpen' },
      ],
      deliverables: [
        'Coverage plan and equipment proposal',
        'Installation with concealed/RG-outdoor rated cabling',
        'NVR, storage, alert and user access configuration',
        'Camera map, credentials and SOP handover',
        'Optional AMC with periodic health checks',
      ],
      faqs: [
        { question: 'How many days of recording can be stored?', answer: 'It depends on camera count, resolution and frame rate — typically 30 days is achieved with a properly sized surveillance hard drive. We calculate storage before quoting.' },
        { question: 'Can I view cameras on my phone from another city?', answer: 'Yes. We configure secure remote viewing on Android/iOS with individual credentials and optional VPN-only access for higher security.' },
        { question: 'Do you integrate CCTV with biometric attendance?', answer: 'Yes — attendance devices can export data into our HR/payroll software, and access control events can trigger camera recording.' },
      ],
      priceFrom: '₹18,000',
      timeline: '3–10 days',
    },
    {
      slug: 'it-amc-support',
      name: 'IT AMC & Maintenance',
      shortName: 'AMC & Support',
      seoTitle: 'Computer AMC & IT Support in Nagpur | Annual Maintenance Contracts',
      metaDescription:
        'Computer AMC and IT support in Nagpur — preventive maintenance, unlimited remote support, on-site engineer visits, backup monitoring and asset management for offices and factories.',
      tagline: 'Preventive support instead of emergency firefighting',
      icon: 'Wrench',
      image: '/images/hardware/amc.jpg',
      summary:
        'Annual maintenance contracts covering desktops, laptops, printers, servers, networks and CCTV with defined response times.',
      intro: [
        'Most IT problems announce themselves early — rising disk usage, failing backups, ageing hardware, expanding Wi-Fi dead zones. Our AMC catches those signals before they become downtime.',
        'Each plan includes a documented audit, preventive visit schedule, unlimited remote support, on-site response SLA and a quarterly health report for management.',
      ],
      features: [
        { title: 'Preventive maintenance visits', description: 'Scheduled cleaning, updates, patch review and hardware checks.', icon: 'CalendarCheck' },
        { title: 'Unlimited remote support', description: 'Phone, remote-desktop and WhatsApp support during business hours.', icon: 'Headphones' },
        { title: 'On-site SLA', description: 'Defined response windows with escalation contacts.', icon: 'Timer' },
        { title: 'Backup monitoring', description: 'Daily backup success checks with immediate alerts on failures.', icon: 'DatabaseBackup' },
        { title: 'Asset management', description: 'Serial-wise asset register with warranty and renewal reminders.', icon: 'ClipboardList' },
        { title: 'Security hygiene', description: 'Antivirus updates, patch management and user access reviews.', icon: 'ShieldCheck' },
      ],
      deliverables: [
        'Initial infrastructure audit and risk register',
        'AMC scope document with SLA and escalation matrix',
        'Scheduled preventive maintenance visits',
        'Quarterly health report and renewal planning',
        'Spare and consumable recommendations',
      ],
      faqs: [
        { question: 'What is included in a computer AMC?', answer: 'Plans differ by tier, but all include remote support, preventive visits and software maintenance; comprehensive plans add hardware spares, OS reinstallation and CCTV coverage.' },
        { question: 'Do you support Windows, macOS and Linux?', answer: 'Yes. Our team supports Windows and Linux desktops/servers plus macOS devices, and we manage mixed environments every day.' },
        { question: 'Can you handle a one-time problem without an AMC?', answer: 'Yes — we take up one-time repairs, data recovery, virus removal and network troubleshooting on a visit or per-incident basis.' },
      ],
      priceFrom: '₹1,200/system/year',
      timeline: 'Immediate start',
    },
    {
      slug: 'iot-embedded-solutions',
      name: 'IoT & Embedded Solutions',
      shortName: 'IoT & Embedded',
      seoTitle: 'IoT & Embedded Solutions in Nagpur | Raspberry Pi, Arduino, ESP32, 3D Printing',
      metaDescription:
        'IoT and embedded development in Nagpur — Raspberry Pi, Arduino, ESP32, sensor integration, 3D printing, industrial automation prototypes and custom hardware-software products.',
      tagline: 'Connect machines, sensors and dashboards',
      icon: 'CircuitBoard',
      image: '/images/hardware/iot.jpg',
      summary:
        'IoT prototypes and production devices with sensors, gateways, dashboards and 3D-printed enclosures.',
      intro: [
        'We turn physical processes into data: machine run-hours, temperature, tank levels, energy usage, gate entries. Sensors feed a gateway, and the gateway feeds dashboards and alerts your team already understands.',
        'Beyond prototypes we deliver enclosures (3D printed or fabricated), field-ready wiring, firmware with OTA updates and a monitoring portal.',
      ],
      features: [
        { title: 'Prototyping', description: 'Rapid proof-of-concept on Raspberry Pi, Arduino, ESP32 and industrial PLCs.', icon: 'CircuitBoard' },
        { title: 'Sensor integration', description: 'Temperature, humidity, level, energy, load-cell, RFID and GPS sensors.', icon: 'Radio' },
        { title: 'Edge gateways', description: 'Local buffering and offline operation with cloud sync when available.', icon: 'Router' },
        { title: 'Custom firmware', description: 'OTA-updatable firmware with watchdog and fail-safe behaviour.', icon: 'Cpu' },
        { title: '3D printing & enclosures', description: 'Functional parts, jigs and enclosures printed in-house.', icon: 'Box' },
        { title: 'Monitoring dashboards', description: 'Live values, trends, alarms and WhatsApp/email alerts.', icon: 'LineChart' },
      ],
      deliverables: [
        'Feasibility study and bill of materials',
        'Working prototype with firmware and dashboard',
        'Pilot deployment with data validation',
        'Enclosure design and 3D printing',
        'Documentation, source code and scale-up plan',
      ],
      tech: ['Raspberry Pi', 'Arduino', 'ESP32', 'MQTT', 'Node-RED', 'Node.js'],
      faqs: [
        { question: 'Can you automate an old machine that has no data port?', answer: 'Yes — we use current sensors, vibration sensors, pulse counters and optical sensors to derive run status, cycles and consumption without touching machine internals.' },
        { question: 'Do you manufacture the devices too?', answer: 'We build pilot and small-batch devices with 3D-printed or fabricated enclosures, and partner with EMS vendors for larger manufacturing volumes.' },
        { question: 'How long does a pilot take?', answer: 'A single-machine monitoring pilot with dashboard typically takes 2–4 weeks, including field installation and calibration.' },
      ],
      priceFrom: '₹35,000',
      timeline: '2–8 weeks',
    },
    {
      slug: 'storage-backup-data-recovery',
      name: 'Storage, Backup & Data Recovery',
      shortName: 'Storage & Backup',
      seoTitle: 'Data Backup & Recovery Services in Nagpur | NAS, Cloud Backup, Data Recovery',
      metaDescription:
        'Storage and backup services in Nagpur — NAS setup, RAID configuration, automated local and cloud backup, ransomware protection and data recovery for failed drives.',
      tagline: 'Your data, safe and recoverable',
      icon: 'DatabaseBackup',
      image: '/images/hardware/storage.jpg',
      summary:
        'NAS and RAID storage, scheduled local + cloud backup, ransomware protection and data recovery from failed media.',
      intro: [
        'The 3-2-1 rule still holds: three copies of data, on two types of media, with one copy off-site. We design backup systems that follow it automatically and, crucially, verify that restores actually work.',
        'If data is already lost, our recovery specialists attempt safe imaging of failed drives and logical recovery — with clear reporting on what is recoverable before you commit.',
      ],
      features: [
        { title: 'NAS & RAID storage', description: 'Centralised, redundant storage for files, databases and CCTV archives.', icon: 'HardDrive' },
        { title: 'Automated backups', description: 'Scheduled image/file backups with versioning and retention policies.', icon: 'CalendarClock' },
        { title: 'Cloud/off-site copies', description: 'Encrypted backup to S3-compatible or cloud destinations.', icon: 'CloudUpload' },
        { title: 'Ransomware protection', description: 'Immutable snapshots, air-gapped copies and access hardening.', icon: 'ShieldAlert' },
        { title: 'Restore drills', description: 'Documented restore tests with recovery-time objectives.', icon: 'RefreshCw' },
        { title: 'Data recovery', description: 'Logical and clean-room recovery attempts for failed drives.', icon: 'LifeBuoy' },
      ],
      deliverables: [
        'Data inventory and RPO/RTO recommendation',
        'Backup appliance/NAS supply and configuration',
        'Backup job schedule, retention and alert setup',
        'Restore test report and documented procedure',
        'Disaster recovery runbook',
      ],
      faqs: [
        { question: 'Is cloud backup safe for confidential data?', answer: 'We encrypt data in transit and at rest, and can use Indian data-centre regions, your own cloud account, or private storage if compliance requires it.' },
        { question: 'Can you recover data from a dead hard disk?', answer: 'In many cases, yes. We first create a raw image without writing anything to the original drive, then attempt logical recovery — you get an assessment before paying for a full recovery.' },
        { question: 'How often should backups run?', answer: 'For accounting and ERP databases we recommend at least daily with intra-day transaction logs; file servers usually run nightly with versioned retention.' },
      ],
      priceFrom: '₹15,000',
      timeline: '1–2 weeks',
    },
  ],
}

const marketing: ServicePillar = {
  slug: 'marketing',
  path: '/services/marketing',
  name: 'Digital Marketing',
  shortName: 'Marketing',
  seoTitle: 'Digital Marketing Agency in Nagpur | SEO, Google Ads & Social Media | RSIS',
  metaTitle: 'Digital Marketing Agency in Nagpur | SEO, Ads & Social Media',
  metaDescription:
    'Result-driven digital marketing agency in Nagpur — SEO, Google Ads, Meta ads, social media management, content, bulk SMS/email, election campaigns and influencer marketing.',
  eyebrow: 'Digital Marketing',
  heroHeading: 'Marketing measured in leads and revenue, not vanity metrics',
  heroSub:
    'SEO, Google & Meta ads, social media, content and offline-to-online campaigns for businesses across Nagpur and India — reported on a live dashboard.',
  heroImage: '/images/marketing-hero.jpg',
  heroImageAlt: 'Digital marketing team planning a campaign at Right Serve Infotech System',
  icon: 'Megaphone',
  summary:
    'Strategy, content, paid media and reporting that fill your pipeline with qualified enquiries.',
  intro: [
    'We start every engagement with the numbers you care about: cost per qualified lead, enquiry-to-order ratio, and revenue attributed to marketing. Then we build the channel mix that gets you there fastest.',
    'Local businesses get the most from a combination of Google Business Profile optimisation, high-intent Google Ads and a fast, credible website. Growing brands add SEO content, social media and email/SMS retention.',
  ],
  highlights: [
    'Free digital audit with competitor benchmark',
    'Monthly reporting on leads, cost per lead and ROI',
    'Full-funnel campaigns: awareness, lead, retention',
    'Creatives, copy and landing pages produced in-house',
  ],
  stats: [
    { value: '100+', label: 'Campaigns run' },
    { value: '4.5x', label: 'Average ROAS*' },
    { value: '150+', label: 'Keywords ranked' },
    { value: '100%', label: 'Transparent reporting' },
  ],
  whyUs: [
    { title: 'Certified strategists', description: 'Google Ads, Meta and analytics specialists who work on your account, not an intern.', icon: 'BadgeCheck' },
    { title: 'Data-driven decisions', description: 'Every rupee tracked to a lead source, so budget moves to what works.', icon: 'LineChart' },
    { title: 'Consistent brand voice', description: 'One team handles copy, design and media, so your brand stays coherent.', icon: 'Megaphone' },
    { title: 'Scalable campaigns', description: 'Start with a local campaign, scale to multi-city or pan-India budgets.', icon: 'TrendingUp' },
  ],
  faqs: [
    {
      question: 'How much should I budget for digital marketing?',
      answer:
        'Most local service businesses in Nagpur see results with ₹15,000–₹40,000 of monthly ad spend plus a modest management fee. E-commerce and B2B export campaigns scale higher — we recommend a starting budget after the free audit.',
    },
    {
      question: 'How long before SEO shows results?',
      answer:
        'Technical and local SEO improvements typically show movement in 4–8 weeks. Competitive national keywords need 4–6 months of consistent content and linking work — we share ranking progress every month.',
    },
    {
      question: 'Do you work on a monthly retainer or per project?',
      answer:
        'Both. Websites and campaign setups are quoted per project; SEO, ads and social media run on monthly retainers with a 3-month minimum for meaningful data.',
    },
    {
      question: 'Who owns the ad accounts and data?',
      answer:
        'You do. We work inside your Google Ads, Meta Business Manager, GA4 and Search Console accounts, so all history and audiences stay with your business.',
    },
  ],
  subServices: [
    {
      slug: 'seo-services',
      name: 'SEO Services',
      shortName: 'SEO',
      seoTitle: 'SEO Company in Nagpur | Local SEO, Technical & Content SEO Services',
      metaDescription:
        'SEO services in Nagpur — technical SEO audits, local SEO and Google Business optimization, keyword research, content, link building and monthly ranking reports.',
      tagline: 'Show up when customers are ready to buy',
      icon: 'Search',
      image: '/images/marketing/seo.jpg',
      summary:
        'Technical fixes, local SEO, keyword-focused content and quality link building that grow qualified organic traffic.',
      intro: [
        'SEO is not a one-time task; it is an operating system for your online visibility. We fix technical issues, structure your site around real search demand, publish content that answers buying questions, and build authority month after month.',
        'For local businesses, half the battle is won in Google Business Profile and location pages — reviews, categories, posts, photos and consistent NAP data across directories.',
      ],
      features: [
        { title: 'Technical SEO audit', description: 'Crawlability, indexation, Core Web Vitals, schema and duplicate-content fixes.', icon: 'Gauge' },
        { title: 'Keyword & intent research', description: 'Topic clusters mapped to buyer intent and your service areas.', icon: 'KeyRound' },
        { title: 'Local SEO', description: 'Google Business Profile optimisation, citations, reviews and map rankings.', icon: 'MapPin' },
        { title: 'On-page optimisation', description: 'Titles, headings, internal links, images and structured data per page.', icon: 'FileSearch' },
        { title: 'Content & links', description: 'Blogs, service pages and legitimate authority building — no spam tactics.', icon: 'PenLine' },
        { title: 'Reporting & CRO', description: 'Rank, traffic and conversion reporting with continuous improvements.', icon: 'LineChart' },
      ],
      deliverables: [
        'SEO audit report with prioritised action plan',
        'Keyword map and content calendar',
        'On-page and technical fixes implemented',
        'Google Business Profile and citation optimisation',
        'Monthly ranking, traffic and lead reports',
      ],
      tech: ['Google Search Console', 'GA4', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Looker Studio'],
      faqs: [
        { question: 'Do you guarantee first-page rankings?', answer: 'No honest agency can guarantee positions — Google itself says so. We commit to the work: technical fixes, content and authority building, with transparent monthly ranking and traffic reporting.' },
        { question: 'Do you do local SEO for multi-location businesses?', answer: 'Yes. We build location landing pages, optimise each Google Business Profile and manage reviews consistently across branches.' },
        { question: 'Will you write the content or do we?', answer: 'We can do either. Our writers produce SEO content based on your subject-matter inputs, and your team reviews it before publishing.' },
      ],
      priceFrom: '₹15,000/month',
      timeline: 'Ongoing retainer',
    },
    {
      slug: 'google-ads',
      name: 'Google Ads (PPC)',
      shortName: 'Google Ads',
      seoTitle: 'Google Ads Management in Nagpur | PPC Agency for Lead Generation',
      metaDescription:
        'Google Ads management in Nagpur — search, performance max, display and remarketing campaigns with conversion tracking, landing pages and transparent ROI reporting.',
      tagline: 'Capture high-intent demand the day you launch',
      icon: 'Target',
      image: '/images/marketing/google-ads.jpg',
      summary:
        'Search, Performance Max, display and remarketing campaigns with airtight conversion tracking and landing pages that convert.',
      intro: [
        'Google Ads works when intent, offer and landing page match. We research the exact phrases buyers use, write ads that answer them, and send traffic to pages built for one action — enquiry, call or WhatsApp.',
        'Every account gets proper conversion tracking (calls, forms, WhatsApp clicks), negative keyword hygiene and weekly optimisation so budget keeps moving toward the cheapest qualified lead.',
      ],
      features: [
        { title: 'Account structure & keywords', description: 'Tightly themed ad groups with match-type and negative keyword strategy.', icon: 'Filter' },
        { title: 'Ad copy & extensions', description: 'Multiple responsive variants, sitelinks, callouts and call assets.', icon: 'PenLine' },
        { title: 'Landing pages', description: 'Fast, focused pages with trust signals and a single clear CTA.', icon: 'LayoutTemplate' },
        { title: 'Conversion tracking', description: 'GA4, call tracking, form and WhatsApp events with offline import.', icon: 'Activity' },
        { title: 'Remarketing & PMax', description: 'Audience lists, YouTube and Performance Max for scalable reach.', icon: 'Repeat' },
        { title: 'Budget & bid management', description: 'Weekly optimisation, geo/time scheduling and wasted-spend cleanup.', icon: 'IndianRupee' },
      ],
      deliverables: [
        'Keyword, competitor and offer research',
        'Campaign build with tracking and landing pages',
        'Weekly optimisation and search-term pruning',
        'Monthly report: spend, leads, CPL and ROI',
        'Quarterly strategy review call',
      ],
      tech: ['Google Ads', 'GA4', 'Tag Manager', 'Looker Studio', 'CallRail'],
      faqs: [
        { question: 'What is the minimum ad budget you recommend?', answer: 'For a local service business, ₹500–₹1,500 per day gives enough data to optimise. Below that, campaigns learn too slowly to be efficient.' },
        { question: 'Who pays Google — you or us?', answer: 'Your business pays Google directly through your own billing profile. Our fee is separate, so you always see the true cost of ads.' },
        { question: 'How soon will I get leads?', answer: 'Search campaigns can generate enquiries within 24–72 hours of going live, assuming your offer and landing page are ready. Optimisation continues for weeks afterwards.' },
      ],
      priceFrom: '₹12,000/month + ad spend',
      timeline: 'Setup in 5–7 days',
    },
    {
      slug: 'meta-ads',
      name: 'Meta Ads (Facebook & Instagram)',
      shortName: 'Meta Ads',
      seoTitle: 'Meta Ads Agency in Nagpur | Facebook & Instagram Advertising',
      metaDescription:
        'Meta Ads management in Nagpur — Facebook and Instagram lead generation, catalogue sales, retargeting, creative production and pixel/CAPI tracking that reports real ROI.',
      tagline: 'Demand generation and retargeting at scale',
      icon: 'Facebook',
      image: '/images/marketing/meta-ads.jpg',
      summary:
        'Facebook and Instagram campaigns for lead generation, store visits, catalogue sales and retargeting — creatives included.',
      intro: [
        'Meta is where demand is created. We combine scroll-stopping creatives with clean audience structure: broad prospecting to find new buyers, and retargeting sequences that recover the people who nearly converted.',
        'Creative is refreshed on a schedule, audiences are kept clean, and Pixel/CAPI tracking is verified so your reported cost per lead matches reality.',
      ],
      features: [
        { title: 'Creative production', description: 'Static, carousel and reel-style videos designed for feed performance.', icon: 'Image' },
        { title: 'Lead form & WhatsApp campaigns', description: 'Instant forms, click-to-WhatsApp and call campaigns.', icon: 'MessageSquare' },
        { title: 'Catalogue & shopping ads', description: 'Dynamic product ads for e-commerce with feed optimisation.', icon: 'ShoppingBag' },
        { title: 'Retargeting funnels', description: 'Video viewers, site visitors and cart abandoners brought back.', icon: 'Repeat' },
        { title: 'Pixel & CAPI tracking', description: 'Server-side events for accurate attribution on iOS.', icon: 'Activity' },
        { title: 'Audience research', description: 'Interest, lookalike and location targeting tuned to your margins.', icon: 'Users' },
      ],
      deliverables: [
        'Audience and offer strategy document',
        'Ad creatives and copy variations',
        'Campaign build with Pixel/CAPI verification',
        'Weekly creative and budget optimisation',
        'Monthly performance report with creative learnings',
      ],
      tech: ['Meta Ads Manager', 'Meta Pixel', 'Conversions API', 'Canva', 'GA4'],
      faqs: [
        { question: 'What creative sizes do you produce?', answer: 'We deliver 1:1, 4:5 and 9:16 variants for feed, reels and stories, with copy variants for testing in each placement.' },
        { question: 'Do you handle Instagram too?', answer: 'Yes — Facebook and Instagram are managed together inside Meta Ads Manager, with placement-level reporting and optimisation.' },
        { question: 'Can you run ads for a local store or clinic?', answer: 'Yes. Local awareness, store-traffic and lead campaigns with radius targeting work very well for clinics, showrooms and restaurants.' },
      ],
      priceFrom: '₹12,000/month + ad spend',
      timeline: 'Setup in 5–7 days',
    },
    {
      slug: 'social-media-management',
      name: 'Social Media Management',
      shortName: 'Social Media',
      seoTitle: 'Social Media Marketing Agency in Nagpur | Content & Management',
      metaDescription:
        'Social media management in Nagpur — monthly content calendars, graphic design, reels, posting, community management and growth reporting across Instagram, Facebook and LinkedIn.',
      tagline: 'A consistent, credible brand presence — every week',
      icon: 'Instagram',
      image: '/images/marketing/social-media.jpg',
      summary:
        'Content calendars, design, reels, posting and community management that keep your brand visible and trusted.',
      intro: [
        'Buyers check your social profiles before they call. An active, well-designed feed with real work, real people and useful answers builds trust that no advertisement can buy.',
        'We plan a month of content around your services, festivals, team and customer stories, then design, schedule and engage — reporting on reach, engagement and enquiries.',
      ],
      features: [
        { title: 'Content calendar', description: 'Monthly plan mixing education, offers, behind-the-scenes and festivals.', icon: 'CalendarDays' },
        { title: 'Design & copywriting', description: 'On-brand posts, carousels and infographics with captions and hashtags.', icon: 'Palette' },
        { title: 'Reels & short video', description: 'Scripting, shooting guidance and editing for vertical video.', icon: 'Video' },
        { title: 'Community management', description: 'Comment and DM replies within agreed response windows.', icon: 'MessagesSquare' },
        { title: 'Employee advocacy', description: 'Turn your team into credible brand voices with ready content.', icon: 'UserPlus' },
        { title: 'Growth reporting', description: 'Follower quality, reach, saves, engagement and lead attribution.', icon: 'LineChart' },
      ],
      deliverables: [
        'Monthly content calendar approved in advance',
        '12–20 designed posts plus reels per month',
        'Scheduling, publishing and comment management',
        'Profile optimisation and highlight covers',
        'Monthly performance report and next-month plan',
      ],
      tech: ['Canva', 'Figma', 'Meta Business Suite', 'Buffer', 'CapCut'],
      faqs: [
        { question: 'Do you shoot photos and videos for us?', answer: 'Yes — we offer monthly shoot days at your office, factory, clinic or site, and edit the material into posts and reels.' },
        { question: 'Which platforms do you manage?', answer: 'Instagram, Facebook, LinkedIn, YouTube and Google Business Profile posts. We recommend focusing on the two platforms where your buyers actually spend time.' },
        { question: 'Is ad spend included in the retainer?', answer: 'No — the retainer covers content and management. Ad campaigns are quoted separately, and you pay platforms directly.' },
      ],
      priceFrom: '₹8,000/month',
      timeline: 'Monthly retainer',
    },
    {
      slug: 'content-graphic-design',
      name: 'Content & Graphic Design',
      shortName: 'Content & Design',
      seoTitle: 'Content Writing & Graphic Design Services in Nagpur | Branding & Creatives',
      metaDescription:
        'Content writing and graphic design in Nagpur — website copy, blogs, brochures, product catalogues, logos, packaging and social creatives that build a consistent brand.',
      tagline: 'Words and visuals that make you look as good as you are',
      icon: 'PenLine',
      image: '/images/marketing/content-design.jpg',
      summary:
        'Website copy, blogs, brochures, catalogues, logos and brand collateral designed to sell your work.',
      intro: [
        'Content is where most businesses leak credibility: inconsistent brochures, thin website copy, unclear product descriptions. We fix that with an editorial style guide and a library of reusable brand assets.',
        'Engagements range from a one-time brand refresh and brochure set to ongoing blog and social content production.',
      ],
      features: [
        { title: 'Brand identity', description: 'Logo refinement, colour, typography, stationery and brand guidelines.', icon: 'Palette' },
        { title: 'Website & SEO copy', description: 'Page copy structured for search intent and conversion.', icon: 'FileText' },
        { title: 'Blog & thought leadership', description: 'Keyword-mapped articles that answer real buyer questions.', icon: 'PenLine' },
        { title: 'Sales collateral', description: 'Brochures, product catalogues, presentations and price lists.', icon: 'BookOpen' },
        { title: 'Packaging & labels', description: 'Print-ready artwork with correct bleeds and specifications.', icon: 'Package' },
        { title: 'Video scripting', description: 'Scripts, storyboards and subtitles for promos and explainers.', icon: 'Clapperboard' },
      ],
      deliverables: [
        'Brand/style guide and asset library',
        'Approved copy for every page or asset',
        'Print-ready and digital-ready design files',
        'Editable source files (Figma/AI/PSD)',
        'Revision rounds as per the agreed scope',
      ],
      tech: ['Figma', 'Illustrator', 'Photoshop', 'InDesign', 'Grammarly'],
      faqs: [
        { question: 'Do you write in Hindi and Marathi too?', answer: 'Yes — our team produces English, Hindi and Marathi content, including website copy, brochures and social media creatives.' },
        { question: 'Can you match our existing brand guidelines?', answer: 'Absolutely. Share your brand book or existing material and we will follow it precisely, or propose refinements if the current identity is limiting response.' },
        { question: 'How many revisions are included?', answer: 'Standard scope includes two rounds of revisions per deliverable. Additional rounds or new concepts are billed transparently at an agreed rate.' },
      ],
      priceFrom: '₹5,000',
      timeline: '1–3 weeks',
    },
    {
      slug: 'bulk-sms-email-marketing',
      name: 'Bulk SMS & Email Marketing',
      shortName: 'SMS & Email',
      seoTitle: 'Bulk SMS & Email Marketing Services in Nagpur | WhatsApp Campaigns',
      metaDescription:
        'Bulk SMS, WhatsApp and email marketing services in Nagpur — DLT-compliant transactional and promotional campaigns, automation flows, segmentation and performance reports.',
      tagline: 'Repeat business from the database you already own',
      icon: 'Mail',
      image: '/images/marketing/email-sms.jpg',
      summary:
        'DLT-compliant bulk SMS, WhatsApp Business and email campaigns with automation, segmentation and reporting.',
      intro: [
        'Your past customers are the cheapest source of new revenue. We set up compliant SMS and WhatsApp campaigns for offers, festivals and reminders, plus email automation for nurturing leads that are not ready yet.',
        'Everything is measured: delivery, click, reply and conversion — so you know exactly which message produced which enquiry.',
      ],
      features: [
        { title: 'DLT compliance', description: 'Entity/header registration, template approval and consent management.', icon: 'ShieldCheck' },
        { title: 'WhatsApp Business API', description: 'Verified business profile, catalogues, quick replies and broadcasts.', icon: 'MessageCircle' },
        { title: 'Email automation', description: 'Welcome, follow-up, abandoned-cart and re-engagement journeys.', icon: 'MailCheck' },
        { title: 'Database hygiene', description: 'Segmentation, deduplication and opt-out handling.', icon: 'DatabaseBackup' },
        { title: 'Campaign creatives', description: 'Templates, banners and copy written for mobile screens.', icon: 'Image' },
        { title: 'Analytics', description: 'Delivery, open, click and conversion reporting per campaign.', icon: 'LineChart' },
      ],
      deliverables: [
        'Channel setup (DLT, WhatsApp API, sending domain)',
        'Segmented contact lists and consent records',
        'Campaign calendar with creatives and templates',
        'Automation flows for retention and reactivation',
        'Campaign-wise performance reports',
      ],
      tech: ['WhatsApp Business API', 'SendGrid', 'Mailchimp', 'DLT SMS Gateways'],
      faqs: [
        { question: 'Is bulk SMS still effective?', answer: 'Yes, when it is compliant and relevant. Transactional updates and well-timed festive offers regularly outperform email on open rates for Indian audiences.' },
        { question: 'Will you handle DLT registration?', answer: 'Yes — we assist with entity registration, sender ID approval and template submission so campaigns are not blocked.' },
        { question: 'Can you use our existing customer list?', answer: 'We can, provided it meets consent requirements. We help clean and segment the data and add opt-out handling before the first send.' },
      ],
      priceFrom: '₹5,000/campaign',
      timeline: '3–10 days',
    },
    {
      slug: 'election-campaigns',
      name: 'Election Campaign Management',
      shortName: 'Election Campaigns',
      seoTitle: 'Election Campaign Digital Marketing in Nagpur | Political Campaign Management',
      metaDescription:
        'Political and election campaign management in Nagpur — voter outreach, WhatsApp broadcasts, social media war rooms, LED van promotions, missed-call campaigns and booth analytics.',
      tagline: 'Voter outreach with speed and discipline',
      icon: 'Vote',
      image: '/images/marketing/election.jpg',
      summary:
        'Political digital campaigns: voter outreach, WhatsApp broadcasts, creative war rooms, LED vans and booth-level analytics.',
      intro: [
        'Election timelines are unforgiving. We run disciplined digital war rooms: rapid creative approval, daily publishing, area-wise messaging, WhatsApp and SMS broadcasts, and volunteer coordination dashboards.',
        'All messaging follows published guidelines — no deepfakes, no misinformation. Just fast, measurable, well-organised outreach.',
      ],
      features: [
        { title: 'Campaign strategy', description: 'Constituency-wise messaging, timeline and budget planning.', icon: 'ClipboardList' },
        { title: 'Creative war room', description: 'Same-day creatives, videos and localised content production.', icon: 'Zap' },
        { title: 'WhatsApp & SMS outreach', description: 'Segmented broadcast lists with campaign-wise tracking.', icon: 'Megaphone' },
        { title: 'Social media management', description: 'Coordinated publishing across all handles with rapid response.', icon: 'Share2' },
        { title: 'LED van & ground promos', description: 'Mobile LED campaigns, digital visiting cards and audio-video vans.', icon: 'Truck' },
        { title: 'Booth analytics', description: 'Area-wise sentiment tracking and daily reporting dashboards.', icon: 'BarChart3' },
      ],
      deliverables: [
        'Campaign plan with phase-wise calendar',
        'Daily creative production and publishing',
        'WhatsApp/SMS outreach to segmented voter groups',
        'Ground promotion support (LED van, print coordination)',
        'Daily dashboards up to the final day',
      ],
      faqs: [
        { question: 'How early should a campaign start?', answer: 'Ideally 60–90 days before polling for digital presence building, with an intense 21-day push after nominations. We can onboard in under a week if time is short.' },
        { question: 'Do you handle multiple constituencies?', answer: 'Yes. We have run multi-constituency campaigns with separate content calendars, resource allocation and reporting per region.' },
        { question: 'Do you provide on-site teams?', answer: 'Yes — war-room staff, designers, videographers and coordinators can be deployed at your office for the campaign duration.' },
      ],
      priceFrom: '₹50,000/month',
      timeline: '1–3 months',
    },
    {
      slug: 'influencer-digital-cards',
      name: 'Influencer, Podcast & Digital Card Marketing',
      shortName: 'Influencer & Digital Cards',
      seoTitle: 'Influencer Marketing & Digital Visiting Cards in Nagpur | RSIS',
      metaDescription:
        'Influencer marketing, podcast advertising, LED van promotions and NFC/QR digital visiting cards in Nagpur — creative offline-to-online campaigns that drive measurable footfall and leads.',
      tagline: 'Borrow trust, go offline, get remembered',
      icon: 'Sparkles',
      image: '/images/marketing/influencer.jpg',
      summary:
        'Creator collaborations, podcast sponsorships, LED van promotions and smart digital visiting cards that connect offline to online.',
      intro: [
        'Some audiences do not respond to ads — they respond to people they trust. We identify relevant local creators, negotiate deliverables and measure actual impact through unique links and codes.',
        'For events, expos and field sales we add LED van promotions and smart digital visiting cards, so every handshake becomes a tracked enquiry.',
      ],
      features: [
        { title: 'Creator matching', description: 'Local and regional influencers vetted for audience fit and engagement quality.', icon: 'Users' },
        { title: 'Campaign briefs & contracts', description: 'Deliverables, timelines, usage rights and disclosure compliance.', icon: 'FileCheck' },
        { title: 'Podcast advertising', description: 'Spot and host-read placements in relevant shows with promo codes.', icon: 'Mic' },
        { title: 'LED van promotions', description: 'Route planning, audio-visual content and lead capture at events.', icon: 'Truck' },
        { title: 'Digital visiting cards', description: 'NFC/QR cards with analytics, WhatsApp chat and catalogue links.', icon: 'ContactRound' },
        { title: 'Attribution', description: 'UTM links, promo codes and call tracking to measure real ROI.', icon: 'Activity' },
      ],
      deliverables: [
        'Influencer shortlist with audience benchmarks',
        'Negotiation and campaign execution management',
        'Content approvals and disclosure compliance',
        'LED van/digital card deployment',
        'Post-campaign performance report',
      ],
      faqs: [
        { question: 'How do you measure influencer marketing results?', answer: 'Each creator gets a unique link, code or landing page. We track clicks, code usage and conversions, then report cost per acquisition per creator.' },
        { question: 'What is a digital visiting card?', answer: 'A smart card (NFC + QR) that instantly opens your digital profile with contact details, catalogue, payment links and WhatsApp chat — with analytics on every tap.' },
        { question: 'Do you manage payments to creators?', answer: 'We can handle negotiation, contracts and payment coordination on your behalf, with transparent documentation of every payout.' },
      ],
      priceFrom: '₹10,000',
      timeline: '2–4 weeks',
    },
  ],
}

export const SERVICE_PILLARS: ServicePillar[] = [software, hardware, marketing]

export const getPillar = (slug: string) => SERVICE_PILLARS.find((pillar) => pillar.slug === slug)

export const getSubService = (pillarSlug: string, subSlug: string) => {
  const pillar = getPillar(pillarSlug)
  const service = pillar?.subServices.find((item) => item.slug === subSlug)
  return pillar && service ? { pillar, service } : undefined
}

/** Flat list used for sitemaps, internal linking and the footer. */
export const ALL_SERVICE_LINKS = SERVICE_PILLARS.flatMap((pillar) =>
  pillar.subServices.map((sub) => ({
    label: sub.name,
    href: `${pillar.path}/${sub.slug}`,
    pillar: pillar.slug,
  })),
)
