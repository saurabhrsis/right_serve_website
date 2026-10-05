/**
 * Company-level content: industries, process, technology stack, differentiators,
 * client statements already published by the company, and the general FAQ set.
 */

export interface Industry {
  name: string;
  icon: string;
  description: string;
}

/** Industries where the company has delivered software or projects. */
export const industries: Industry[] = [
  {
    name: 'Education',
    icon: 'GraduationCap',
    description: 'Institute and academic management systems covering students, staff, exams and fees.',
  },
  {
    name: 'FMCG & Distribution',
    icon: 'Truck',
    description: 'Billing and business management software for distributors, wholesalers and stockists.',
  },
  {
    name: 'Retail & E-commerce',
    icon: 'Store',
    description: 'Billing, stock and online selling platforms for retail and product businesses.',
  },
  {
    name: 'Jewellery',
    icon: 'Gem',
    description: 'Jewellery billing and showroom management software built around trade billing practice.',
  },
  {
    name: 'Construction & Infrastructure',
    icon: 'HardHat',
    description: 'Project billing, document generation and site record systems for contractors and builders.',
  },
  {
    name: 'Finance & Cooperative Societies',
    icon: 'Landmark',
    description: 'Society and financial record management software with role-based access.',
  },
  {
    name: 'Agri-business',
    icon: 'Sprout',
    description: 'Digital platforms and applications for agri-business and incubation programmes.',
  },
  {
    name: 'Healthcare',
    icon: 'HeartPulse',
    description: 'Patient care, medication tracking and health monitoring products and systems.',
  },
  {
    name: 'Public Administration',
    icon: 'Building2',
    description: 'Departmental portals such as grievance management and record tracking systems.',
  },
  {
    name: 'Professional & Business Services',
    icon: 'Briefcase',
    description: 'CRM, client management and internal systems for service businesses and consultancies.',
  },
  {
    name: 'Travel & Hospitality',
    icon: 'Compass',
    description: 'Booking and showcase websites for travel, adventure and hospitality businesses.',
  },
  {
    name: 'Electrical & Facility Services',
    icon: 'Wrench',
    description: 'Service websites and job record systems for contracting and facility businesses.',
  },
];

/** Delivery process used across software projects. */
export const processSteps: { number: string; title: string; text: string }[] = [
  {
    number: '01',
    title: 'Discovery',
    text: 'We meet the teams who will use the system, review current records and spreadsheets, and agree the outcomes that matter.',
  },
  {
    number: '02',
    title: 'Requirement & planning',
    text: 'Scope in writing — modules, users, screens, reports, integrations and what is deliberately left out of this phase.',
  },
  {
    number: '03',
    title: 'Architecture & data design',
    text: 'Database structure, user roles, security model and integrations, explained in plain language for approval.',
  },
  {
    number: '04',
    title: 'UI/UX design',
    text: 'Key screens designed and approved before development, so the system fits the people who use it daily.',
  },
  {
    number: '05',
    title: 'Development',
    text: 'Delivery in reviewable phases rather than one long build, so you see working software early.',
  },
  {
    number: '06',
    title: 'Testing & UAT',
    text: 'Internal testing followed by acceptance testing with your team on your own data and scenarios.',
  },
  {
    number: '07',
    title: 'Deployment & training',
    text: 'Data migration, deployment, role-wise training and documentation at handover.',
  },
  {
    number: '08',
    title: 'Support & improvement',
    text: 'Post-go-live support, monitoring and a defined process for enhancements as your business changes.',
  },
];

/** Technology ecosystem actually used in delivered projects. */
export const technologyGroups: { title: string; items: string[] }[] = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Authentication & authorisation'],
  },
  {
    title: 'Mobile & desktop',
    items: ['React Native', 'Flutter', 'Electron', 'Android', 'iOS'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    title: 'AI & data science',
    items: ['Python', 'Machine learning', 'Computer vision', 'AI API integrations'],
  },
  {
    title: 'Cloud, deployment & tooling',
    items: ['AWS', 'Linux & Windows Server', 'Docker', 'Git', 'CI/CD pipelines'],
  },
];

/** Concrete reasons clients give for working with the team. */
export const differentiators: { title: string; text: string }[] = [
  {
    title: 'Custom development and ready products',
    text: 'We build software to a client\'s requirement and also run our own business software products. That means you can adopt a working solution when it fits, and commission custom development only where your process is genuinely different.',
  },
  {
    title: 'Software and infrastructure from one team',
    text: 'We have supplied and supported servers, networks and business hardware alongside software since our early years. When something stops working, there is one team to call rather than two vendors pointing at each other.',
  },
  {
    title: 'Software built around your workflow',
    text: 'Our projects start by documenting how your business actually operates — including exceptions and approvals — before any screen is designed.',
  },
  {
    title: 'Scope and pricing in writing',
    text: 'You receive a written scope: what is included, what is not, what phase two could contain and what each phase costs.',
  },
  {
    title: 'Industry-specific understanding',
    text: 'Existing products for FMCG billing, jewellery billing, education, cooperative societies and construction mean we already understand those billing and record-keeping practices.',
  },
  {
    title: 'Support after go-live',
    text: 'Deployment is the middle of the relationship, not the end. We handle fixes, enhancements, new reports and user questions after the system is in daily use.',
  },
];

/**
 * Client statements already published on the company's existing website.
 * Reproduced as written there, with the client name as published.
 */
export const clientStatements: { quote: string; name: string; company: string; logo?: string }[] = [
  {
    quote:
      'Right Serve Infotech Pvt. Ltd. transformed our business with their custom software solutions. Their team is professional, responsive, and truly understands client needs.',
    name: 'Aman Kewalramani',
    company: 'BlueLadder EPC Solution Pvt. Ltd.',
    logo: '/assets/clients/blueladder-epc.png',
  },
  {
    quote:
      'The team was awesome to work with. They listened to what we needed, gave great suggestions, and made sure everything ran smoothly.',
    name: 'Kashish Jariye',
    company: 'Kashish Enterprises',
    logo: '/assets/clients/kashish-enterprises.png',
  },
  {
    quote:
      'Thanks to them, our workflow has become so much easier. Their software is intuitive, and the support team is always quick to respond.',
    name: 'Ashish Londhe',
    company: 'Ashish Construction',
    logo: '/assets/clients/ashish-constructions.png',
  },
  {
    quote:
      'I have had a great experience working with them. The team really knows what they are doing — they understood our needs and delivered exactly what we were hoping for.',
    name: 'Nabeesh R',
    company: 'Introis Technologies',
    logo: '/assets/clients/introis-technologies.png',
  },
];

/** General FAQs used on the homepage and contact page. */
export const generalFaqs: { q: string; a: string }[] = [
  {
    q: 'What kind of software does Right Serve Infotech System build?',
    a: 'We build custom software to a client\'s requirement — web applications, business management systems, ERP modules, desktop software and mobile applications — and we also implement our own products such as FMCG billing, jewellery billing, tuition ERP, cooperative society software, construction ERP and business management software.',
  },
  {
    q: 'Can we start with a small project and expand later?',
    a: 'Yes, and we usually recommend it. Most projects begin with the workflow causing the most pain, go live, and then expand module by module. Products such as our business management software are explicitly designed to be extended over time.',
  },
  {
    q: 'Do you work with businesses outside Nagpur?',
    a: 'Yes. We are based in Nagpur and work with clients across Maharashtra and other parts of India. Meetings and reviews happen online, with on-site visits where the project requires them.',
  },
  {
    q: 'How do you price a project?',
    a: 'After the requirement discussion we share a written scope with a scope-based estimate for a defined phase, or a monthly effort-based engagement if the requirement will evolve. Implementation, training and support are stated separately so nothing is assumed.',
  },
  {
    q: 'Do we own the software you build for us?',
    a: 'The software built for you, along with its database structure and documentation, is delivered to you. For product-based solutions, licensing and deployment terms are stated in the proposal.',
  },
  {
    q: 'Can you take over or extend software we already have?',
    a: 'Often yes. We start by reviewing the existing codebase, database and hosting, then tell you honestly whether extending it or rebuilding a specific part is the better route.',
  },
  {
    q: 'Do you provide support after the project goes live?',
    a: 'Yes. Support covers issue resolution, small enhancements, new reports and user queries. The support arrangement and response expectations are agreed in writing before go-live.',
  },
  {
    q: 'Can you demonstrate a product before we commit?',
    a: 'Yes. Product demonstrations for FMCG billing, jewellery billing, tuition ERP and the other solutions are arranged on request, using examples relevant to your business.',
  },
];

/** FAQs used on the request-a-quote page (shared with the prerendered metadata). */
export const quoteFaqs: { q: string; a: string }[] = [
  {
    q: 'How soon will I get a response?',
    a: 'We reply within one working day. If your requirement needs internal discussion before an estimate, we will tell you when to expect the proposal instead of leaving it open.',
  },
  {
    q: 'What if I do not know my budget yet?',
    a: 'Leave the budget field as "Not decided yet". We will describe what is achievable at different levels so you can decide with information rather than a guess.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. If your requirement involves confidential processes or data, tell us at the start and we will sign a mutual NDA before detailed discussions.',
  },
  {
    q: 'Will you tell me if my requirement is not a good fit?',
    a: 'Yes. If your requirement sits outside what we do well, we will say so and, where we can, point you towards the kind of vendor who would suit it.',
  },
  {
    q: 'Do you work with clients outside Nagpur?',
    a: 'Yes. We work with clients across Maharashtra and other parts of India, with online reviews and on-site visits where the project needs them.',
  },
  {
    q: 'Is there any charge for a quotation?',
    a: 'No. Discussion, scope preparation and the estimate are free. Charges begin only when you approve a phase of work.',
  },
];
