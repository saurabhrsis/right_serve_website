/**
 * Portfolio projects.
 *
 * This list is derived from the project records maintained on the company's
 * existing website. Descriptions follow the delivered project records; client
 * names are shown only where the record clearly attributes the project to that
 * client. Nothing has been invented, and no result figures are claimed.
 */

export type ProjectType = 'Web Application' | 'Website' | 'Mobile App' | 'Business Software' | 'Desktop' | 'AI & Automation';

export interface Project {
  slug: string;
  title: string;
  client?: string;
  industry: string;
  type: ProjectType;
  summary: string;
  technologies: string[];
  platforms: string[];
  image?: string;
  /** Logos are rendered contained rather than cropped. */
  imageStyle?: 'cover' | 'logo';
  year?: string;
  caseStudy?: string;
}

export const projectTypes: ProjectType[] = [
  'Web Application',
  'Website',
  'Mobile App',
  'Business Software',
  'Desktop',
  'AI & Automation',
];

export const projects: Project[] = [
  {
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    client: 'Anand Computer Systems',
    industry: 'IT & Retail Hardware',
    type: 'Business Software',
    summary:
      'Stock and user management software with role-based access, giving the business a live view of inventory instead of periodic manual counts.',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/screens/inventory-management.png',
    imageStyle: 'cover',
    year: '2024',
    caseStudy: 'inventory-management-system',
  },
  {
    slug: 'document-generating-system',
    title: 'Document Generating System',
    client: 'Ashish Constructions',
    industry: 'Construction',
    type: 'Business Software',
    summary:
      'Automates the creation of standard project documents from templates and stored data, replacing repeated manual preparation.',
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/screens/document-generating-system.png',
    imageStyle: 'cover',
    year: '2025',
    caseStudy: 'document-generating-system',
  },
  {
    slug: 'my-naai-booking-app',
    title: 'My Naai — Booking App and Admin Panel',
    client: 'My Naai',
    industry: 'Beauty & Salon Services',
    type: 'Mobile App',
    summary:
      'Customer mobile application for salon and barber appointment booking, supported by a web admin panel that manages users, services and bookings.',
    technologies: ['React Native', 'React', 'Node.js', 'PostgreSQL'],
    platforms: ['Android', 'iOS', 'Web'],
    image: '/assets/screens/my-naai-app.jpeg',
    imageStyle: 'cover',
    year: '2026',
    caseStudy: 'my-naai-booking-app',
  },
  {
    slug: 'grievance-management-portal',
    title: 'Grievance Management Portal',
    industry: 'Public Administration',
    type: 'Web Application',
    summary:
      'A district-level online grievance management system that brings multiple government departments onto a single platform for registering, routing and tracking citizen complaints.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/screens/grievance-portal.png',
    imageStyle: 'cover',
    year: '2025',
    caseStudy: 'grievance-management-portal',
  },
  {
    slug: 'lead-crm',
    title: 'Lead CRM',
    industry: 'Business Services',
    type: 'Web Application',
    summary:
      'Customer relationship management platform for tracking leads, managing the sales pipeline and improving follow-up discipline.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/screens/crm-login.png',
    imageStyle: 'cover',
    year: '2025',
  },
  {
    slug: 'mdr-management-software',
    title: 'MDR Management Software',
    industry: 'Banking & Financial Services',
    type: 'Business Software',
    summary:
      'Financing software that works with bank-specified MDR rates and provides the financial management and reporting layer large organisations require.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    platforms: ['Web'],
    image: '/assets/screens/mdr-bank-finance.png',
    imageStyle: 'cover',
    year: '2024',
  },
  {
    slug: 'blueladder-epc-platform',
    title: 'BlueLadder EPC Platform',
    industry: 'Engineering & Construction',
    type: 'Business Software',
    summary:
      'Project planning, collaboration and resource allocation system built for an EPC solutions company, keeping project communication and team alignment in one place.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/screens/blueladder-app.png',
    imageStyle: 'cover',
    year: '2024',
  },
  {
    slug: 'nsm-associates-crm',
    title: 'NSM & Associates Client Management',
    client: 'NSM & Associates',
    industry: 'Audit, Taxation & Consulting',
    type: 'Web Application',
    summary:
      'Web and mobile CRM that gives field executives real-time access to client data for lead tracking, scheduling and communication.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web', 'Mobile'],
    image: '/assets/screens/nsm-crm.png',
    imageStyle: 'cover',
    year: '2024',
  },
  {
    slug: 'pocho-online-store',
    title: 'Pocho Online Store',
    industry: 'Retail & E-commerce',
    type: 'Website',
    summary:
      'Product showcase and online selling platform with an administration panel for catalogue, orders and content management.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/screens/pocho-storefront.png',
    imageStyle: 'cover',
    year: '2025',
    caseStudy: 'pocho-online-store',
  },
  {
    slug: 'virtual-pointer-system',
    title: 'Virtual Pointer Software',
    industry: 'Design & 3D Visualisation',
    type: 'Business Software',
    summary:
      'Lets users customise 3D models — changing colours and structural elements — for real-time design visualisation during customer discussions.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/screens/virtual-pointer.png',
    imageStyle: 'cover',
    year: '2024',
  },
  {
    slug: 'institute-management-erp',
    title: 'Institute Management ERP',
    industry: 'Education',
    type: 'Business Software',
    summary:
      'Academic management system covering departments, staff and student records with fee and activity dashboards for institute administration.',
    technologies: ['React', 'Node.js', 'NestJS', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/screens/institute-erp.png',
    imageStyle: 'cover',
    year: '2024',
  },
  {
    slug: 'secure-build-app',
    title: 'Secure Build',
    industry: 'Construction',
    type: 'Mobile App',
    summary:
      'Mobile application that embeds security checks into the construction delivery process, supporting document verification and compliance records.',
    technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
    platforms: ['Android', 'iOS'],
    image: '/assets/clients/secure-build.png',
    imageStyle: 'logo',
    year: '2024',
  },
  {
    slug: 'citri-hub-app',
    title: 'Citri Hub',
    industry: 'Agri-business',
    type: 'Mobile App',
    summary:
      'Mobile application for an agri-business incubation programme, connecting participants with programme information and services.',
    technologies: ['React Native', 'React', 'Node.js', 'MongoDB'],
    platforms: ['Android', 'Web'],
    image: '/assets/clients/citri-hub.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'mnymkt-investment-platform',
    title: 'MNYMKT Investment Platform',
    industry: 'Financial Services',
    type: 'Web Application',
    summary:
      'Digital finance platform presenting loan, investment and money management products with a structured enquiry and onboarding flow.',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/clients/mnymkt.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'iron-horse-expedition-website',
    title: 'Iron Horse Expedition Website',
    client: 'Iron Horse Expedition',
    industry: 'Travel & Adventure',
    type: 'Website',
    summary:
      'High-performance travel website built to present expedition packages clearly and keep navigation simple across mobile, tablet and desktop.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    platforms: ['Web'],
    image: '/assets/clients/iron-horse-expedition.png',
    imageStyle: 'logo',
    year: '2026',
  },
  {
    slug: 'ashish-constructions-website',
    title: 'Ashish Constructions Website',
    client: 'Ashish Constructions',
    industry: 'Construction',
    type: 'Website',
    summary:
      'Corporate website for a construction company covering building, renovation and infrastructure capability with completed project presentation.',
    technologies: ['React', 'Node.js', 'MySQL'],
    platforms: ['Web'],
    image: '/assets/clients/ashish-constructions.png',
    imageStyle: 'logo',
    year: '2024',
  },
  {
    slug: 'gaurav-infra-website',
    title: 'Gaurav Infra Website',
    client: 'Gaurav Infra',
    industry: 'Infrastructure',
    type: 'Website',
    summary:
      'Website for an infrastructure development firm presenting its design and construction capability to prospective clients.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/clients/gaurav-infra.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'madhuprabha-constructions-website',
    title: 'Madhuprabha Constructions Website',
    industry: 'Construction & Real Estate',
    type: 'Website',
    summary:
      'Website for a construction company delivering residential and commercial projects, structured around project presentation and enquiry generation.',
    technologies: ['React', 'Vite', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/clients/madhuprabha-constructions.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'caliber-enterprise-website',
    title: 'Caliber Enterprise Website',
    industry: 'Building Materials',
    type: 'Website',
    summary:
      'Product-focused website for a bricks and building-material supplier, presenting product range and enquiry routes to builders and contractors.',
    technologies: ['React', 'Next.js', 'Node.js'],
    platforms: ['Web'],
    image: '/assets/clients/caliber-enterprise.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'shree-sai-services-website',
    title: 'Shree Sai Services Website',
    industry: 'Facility Services',
    type: 'Website',
    summary:
      'Service website for a maintenance, repair and facility management company, built around service categories and enquiry capture.',
    technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/clients/shree-sai-services.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'kashish-enterprises-website',
    title: 'Kashish Enterprises Website',
    industry: 'Business Supplies',
    type: 'Website',
    summary:
      'Website for a business solutions and supplies provider presenting its product range and service capability.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/clients/kashish-enterprises.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'playzone-website',
    title: 'PlayZone Website',
    industry: 'Entertainment',
    type: 'Website',
    summary:
      'Entertainment and gaming platform website presenting indoor activities and digital games for different age groups.',
    technologies: ['React', 'Node.js'],
    platforms: ['Web'],
    image: '/assets/clients/playzone.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'email-system',
    title: 'Email System',
    industry: 'Business Communication',
    type: 'Business Software',
    summary:
      'Business email system built to keep company communication protected, with message archiving for record keeping.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    platforms: ['Web'],
    image: '/assets/clients/email-system.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'trajectoryfy',
    title: 'Trajectoryfy',
    industry: 'Business Operations',
    type: 'Business Software',
    summary:
      'Inventory and operations management software with real-time stock tracking, team collaboration and reporting for growing businesses.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/clients/trajectoryfy.png',
    imageStyle: 'logo',
    year: '2025',
  },
  {
    slug: 'seasonal-business-management',
    title: 'Seasonal Business Management',
    industry: 'Retail & Distribution',
    type: 'Business Software',
    summary:
      'Billing and management system designed for businesses with seasonal sales cycles, with role-based access and structured record keeping.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/screens/sbm-roles.png',
    imageStyle: 'cover',
    year: '2024',
  },
  {
    slug: 'shree-gajanan-mauli-electrical-website',
    title: 'Shree Gajanan Mauli Electrical Website',
    industry: 'Electrical Contracting',
    type: 'Website',
    summary:
      'Website for an electrical contracting firm presenting installation and maintenance services for homes and industries.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    platforms: ['Web'],
    image: '/assets/clients/ashish-constructions.png',
    imageStyle: 'logo',
    year: '2025',
  },
];

/** Client logos displayed as a credibility strip on the portfolio and home pages. */
export const clientLogos: { name: string; logo: string; industry: string }[] = [
  { name: 'Iron Horse Expedition', logo: '/assets/clients/iron-horse-expedition.png', industry: 'Travel & adventure' },
  { name: 'BlueLadder EPC Solutions', logo: '/assets/clients/blueladder-epc.png', industry: 'Engineering & construction' },
  { name: 'Ashish Constructions', logo: '/assets/clients/ashish-constructions.png', industry: 'Construction' },
  { name: 'Anand Computer Systems', logo: '/assets/clients/anand-computers.png', industry: 'IT hardware & retail' },
  { name: 'Gaurav Infra', logo: '/assets/clients/gaurav-infra.png', industry: 'Infrastructure' },
  { name: 'NSM & Associates', logo: '/assets/clients/nsm-associates.png', industry: 'Audit & taxation' },
  { name: 'Introis Technologies', logo: '/assets/clients/introis-technologies.png', industry: 'Technology services' },
  { name: 'Caliber Enterprise', logo: '/assets/clients/caliber-enterprise.png', industry: 'Building materials' },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
