/**
 * Case studies.
 *
 * Structure: Challenge → Solution → Key capabilities → Technology →
 * Implementation → Outcome. Outcome sections describe what the delivered
 * system does for the client. No numeric results, savings or performance
 * figures are claimed because none have been verified for publication.
 */

export interface CaseStudy {
  slug: string;
  title: string;
  client?: string;
  industry: string;
  projectType: string;
  year?: string;
  summary: string;
  challenge: string[];
  solution: string[];
  capabilities: string[];
  technology: { group: string; items: string[] }[];
  implementation: string[];
  outcome: string[];
  image?: string;
  imageAlt?: string;
  relatedSolutions: { label: string; path: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'inventory-management-system',
    title: 'Inventory management system for a computer hardware retailer',
    client: 'Anand Computer Systems',
    industry: 'IT hardware retail and distribution',
    projectType: 'Business software (web)',
    year: '2024',
    summary:
      'A stock and user management system that replaced periodic manual stock review with a live inventory record and controlled user access.',
    challenge: [
      'Stock was being tracked in a way that made the current position hard to confirm without a physical count, and movement between purchases and sales was not visible in real time.',
      'Different staff members needed access to inventory and user records, but there was no consistent way to limit what each person could see or change.',
      'Reporting meant assembling information from multiple sources rather than reading it directly from the system of record.',
    ],
    solution: [
      'We built a web-based inventory management system with a structured item and stock master, so every purchase and sale updates one live stock position.',
      'A user management module was added with role-based access, allowing the owner to control which staff members can view or modify inventory and user records.',
      'Operational reports were built on the same data, so stock position and movement can be reviewed without manual compilation.',
    ],
    capabilities: [
      'Item and stock master with current position',
      'Purchase and sale stock movement records',
      'User management with role-based permissions',
      'Stock and activity reports for management review',
      'Web access for counter and back-office users',
    ],
    technology: [
      { group: 'Frontend', items: ['Next.js', 'React'] },
      { group: 'Backend', items: ['Node.js'] },
      { group: 'Database', items: ['MongoDB'] },
    ],
    implementation: [
      'Requirement discussion with the business owner covering item structure, existing stock and staff responsibilities',
      'Data setup for items, stock position and user accounts',
      'Role configuration so each staff member has the access their work requires',
      'Training for the team and handover with documentation',
    ],
    outcome: [
      'Current stock position is available in the system instead of depending on a physical count.',
      'Staff access to inventory and user records is controlled by role.',
      'Management reviews stock and movement reports directly from the software.',
    ],
    image: '/assets/screens/inventory-management.png',
    imageAlt: 'Inventory management system interface showing user management and stock records',
    relatedSolutions: [
      { label: 'Business management software', path: '/solutions/business-management' },
      { label: 'Custom software development', path: '/services/software-development' },
    ],
  },
  {
    slug: 'document-generating-system',
    title: 'Document generating system for a construction company',
    client: 'Ashish Constructions',
    industry: 'Construction',
    projectType: 'Business software (web)',
    year: '2025',
    summary:
      'A system that generates standard construction project documents from templates and stored data, removing repeated manual preparation.',
    challenge: [
      'Project paperwork followed repeatable formats but was prepared manually each time, which consumed administrative hours and introduced inconsistency between documents.',
      'Records relating to generated documents were not stored centrally, so retrieving an earlier document required searching files and folders.',
      'The company needed a reliable way to produce accurate, consistently formatted documents for multiple ongoing projects.',
    ],
    solution: [
      'We built a document generating system in which standard formats are maintained as templates, with project and party details supplied from stored data.',
      'Documents are generated from the system with consistent formatting, and each generated document is recorded against the relevant project.',
      'Field and office access allows documents to be produced when they are needed rather than being batched for a later administrative session.',
    ],
    capabilities: [
      'Template-based document generation',
      'Project and party data used directly in documents',
      'Record of documents generated per project',
      'Web access for office and site staff',
      'Printing and reprinting of previously generated documents',
    ],
    technology: [
      { group: 'Frontend', items: ['Next.js', 'React'] },
      { group: 'Backend', items: ['Node.js', 'Express'] },
      { group: 'Database', items: ['MongoDB'] },
    ],
    implementation: [
      'Review of the document formats the company issues regularly',
      'Template setup matching existing formats and required fields',
      'Linking of project and party data to document generation',
      'Training for administrative and site staff, with support during the first project cycle',
    ],
    outcome: [
      'Standard project documents are produced from templates rather than typed afresh each time.',
      'Generated documents are recorded against their project and can be retrieved later.',
      'Formatting is consistent across the documents the company issues.',
      'The same document-generation approach is available to construction businesses through our construction ERP solution.',
    ],
    image: '/assets/screens/document-generating-system.png',
    imageAlt: 'Document generating system screen showing generated construction documents',
    relatedSolutions: [
      { label: 'Construction ERP', path: '/solutions/construction-erp' },
      { label: 'Custom software development', path: '/services/software-development' },
    ],
  },
  {
    slug: 'my-naai-booking-app',
    title: 'Appointment booking app with a management panel for a salon service',
    client: 'My Naai',
    industry: 'Beauty and personal care services',
    projectType: 'Mobile application + web admin panel',
    year: '2026',
    summary:
      'A customer booking application paired with a web administration panel that gives the service business control over bookings, users and services.',
    challenge: [
      'Bookings were being coordinated informally, which made appointment conflicts likely and left no dependable record of customer history.',
      'The business needed a customer-facing way to book appointments while keeping control of services, availability and staff.',
      'Operational information such as bookings, users and services had to be manageable by the business itself, without developer involvement.',
    ],
    solution: [
      'We built a cross-platform mobile application for customers to browse services and schedule appointments.',
      'A web administration panel was developed alongside it, covering bookings, user records, services and day-to-day business operations.',
      'Both sides work on the same data, so a booking made in the app appears immediately for the business and customer history stays available for repeat visits.',
    ],
    capabilities: [
      'Customer appointment booking through a mobile application',
      'Service and availability management',
      'Booking control and status management from the admin panel',
      'User and customer records with booking history',
      'Operational visibility for the business owner',
    ],
    technology: [
      { group: 'Mobile', items: ['React Native'] },
      { group: 'Web application', items: ['React'] },
      { group: 'Backend', items: ['Node.js'] },
      { group: 'Database', items: ['PostgreSQL'] },
    ],
    implementation: [
      'Requirement workshops covering the booking journey and how staff manage appointments in practice',
      'Design of the mobile booking flow and the administrative screens',
      'Development of the application, admin panel and shared backend in reviewable stages',
      'Device testing across screen sizes and store release preparation',
      'Training for the business on managing services, bookings and users',
    ],
    outcome: [
      'Customers book appointments directly instead of coordinating by phone or message.',
      'Booking, user and service records are managed by the business from one admin panel.',
      'Customer booking history is preserved, supporting repeat appointments.',
    ],
    image: '/assets/screens/my-naai-app.jpeg',
    imageAlt: 'My Naai appointment booking mobile application screens',
    relatedSolutions: [
      { label: 'Mobile app development', path: '/services/mobile-app-development' },
      { label: 'Custom software development', path: '/services/software-development' },
    ],
  },
  {
    slug: 'grievance-management-portal',
    title: 'District grievance management portal',
    industry: 'Public administration',
    projectType: 'Web application',
    year: '2025',
    summary:
      'An online grievance management system designed to bring multiple government departments under one platform for complaint registration, routing and follow-up.',
    challenge: [
      'Citizen complaints arriving through different departments had no common register, which made it difficult to see whether an issue had been addressed.',
      'Different departments followed their own processes, so there was no single view of pending, in-progress and resolved complaints.',
      'Administrative review needed department-wise visibility without manual consolidation of registers from each office.',
    ],
    solution: [
      'We built a web-based grievance management platform in which complaints are registered centrally and assigned to the responsible department.',
      'Status tracking follows each complaint from registration through action, giving administrators a department-wise view of pending and resolved cases.',
      'Role-based access allows departments to work on their own cases while reviewers see consolidated information.',
    ],
    capabilities: [
      'Central complaint registration',
      'Department-wise routing and assignment',
      'Status tracking through the resolution process',
      'Role-based access for departments and reviewing authorities',
      'Consolidated reporting across departments',
    ],
    technology: [
      { group: 'Frontend', items: ['React'] },
      { group: 'Backend', items: ['Node.js'] },
      { group: 'Database', items: ['MongoDB'] },
    ],
    implementation: [
      'Process study across departments to define how complaints are received and escalated',
      'Role and workflow design for registration, assignment and closure',
      'Portal development with department-wise access control',
      'User training and rollout across participating departments',
    ],
    outcome: [
      'Complaints are registered in one system rather than separate department registers.',
      'Administrators can review pending and resolved cases department by department.',
      'Each complaint carries a visible status history from registration onwards.',
    ],
    image: '/assets/screens/grievance-portal.png',
    imageAlt: 'Grievance management portal showing complaint list and status tracking',
    relatedSolutions: [
      { label: 'Custom software development', path: '/services/software-development' },
      { label: 'Business management software', path: '/solutions/business-management' },
    ],
  },
  {
    slug: 'pocho-online-store',
    title: 'Product showcase and online selling platform',
    industry: 'Retail and e-commerce',
    projectType: 'Website + administration panel',
    year: '2025',
    summary:
      'A product platform enabling a business to present and sell its range online, with an administration panel for catalogue, orders and content.',
    challenge: [
      'The product range had no structured online presence, so customers could not browse what was available or enquire conveniently.',
      'The business needed to manage its own catalogue, product information and incoming orders without technical help.',
      'The website had to work reliably for visitors on mobile devices, which is where most browsing happens.',
    ],
    solution: [
      'We developed a product showcase and selling platform with a structured catalogue, product detail pages and enquiry routes.',
      'An administration panel was delivered with the site, allowing the business to manage products, categories, orders and site content directly.',
      'The front end was built to load quickly on mobile connections and to stay readable across device sizes.',
    ],
    capabilities: [
      'Structured product catalogue with categories',
      'Product detail pages and enquiry flow',
      'Administration panel for catalogue and order management',
      'Content management for site sections',
      'Responsive front end for mobile and desktop visitors',
    ],
    technology: [
      { group: 'Frontend', items: ['React'] },
      { group: 'Backend', items: ['Node.js'] },
      { group: 'Database', items: ['MongoDB'] },
    ],
    implementation: [
      'Catalogue structure definition with the business',
      'Product data preparation and entry support',
      'Website and admin panel development with review cycles',
      'Deployment, analytics configuration and handover training',
    ],
    outcome: [
      'The product range can be browsed and transacted online.',
      'The business updates its own catalogue, products and content through the admin panel.',
      'Incoming orders are visible and manageable in one place.',
    ],
    image: '/assets/screens/pocho-storefront.png',
    imageAlt: 'Pocho online store product listing page',
    relatedSolutions: [
      { label: 'Website development', path: '/services/website-development' },
      { label: 'SEO & digital marketing', path: '/services/seo-digital-marketing' },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
