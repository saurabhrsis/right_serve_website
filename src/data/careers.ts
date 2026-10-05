export type JobRole = {
  title: string
  type: 'Full-time' | 'Internship' | 'Freelance'
  experience: string
  skills: string[]
  openings: number
  department: 'Engineering' | 'Design' | 'Marketing' | 'Sales & Support'
  summary: string
}

export const JOB_ROLES: JobRole[] = [
  {
    title: 'Full Stack Developer',
    type: 'Full-time',
    experience: '1–4 years',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
    openings: 2,
    department: 'Engineering',
    summary: 'Build and maintain client web applications end to end, from API design to responsive UI.',
  },
  {
    title: 'Frontend Developer',
    type: 'Full-time',
    experience: '0–3 years',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'API Integration'],
    openings: 2,
    department: 'Engineering',
    summary: 'Turn approved designs into fast, accessible, pixel-accurate interfaces.',
  },
  {
    title: 'Backend Developer',
    type: 'Full-time',
    experience: '1–4 years',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'API Development', 'Server Management'],
    openings: 1,
    department: 'Engineering',
    summary: 'Design APIs, database schemas and background jobs that keep business systems reliable.',
  },
  {
    title: 'Application Developer (Flutter / React Native)',
    type: 'Full-time',
    experience: '1–4 years',
    skills: ['JavaScript ES6+', 'React Native', 'Navigation', 'State Management', 'REST APIs', 'App Store deployment'],
    openings: 1,
    department: 'Engineering',
    summary: 'Ship Android and iOS apps with clean UI, offline handling and reliable integrations.',
  },
  {
    title: 'UI/UX Developer',
    type: 'Full-time',
    experience: '1–3 years',
    skills: ['Figma', 'UX Research', 'Responsive Design', 'Interaction & Animation', 'Design Systems'],
    openings: 1,
    department: 'Design',
    summary: 'Research, wireframe and design websites, dashboards and mobile apps our developers love to build.',
  },
  {
    title: 'Graphics Designer',
    type: 'Full-time',
    experience: '0–3 years',
    skills: ['Illustrator', 'Photoshop', 'Branding', 'Social Media Creatives', 'Print Design'],
    openings: 1,
    department: 'Design',
    summary: 'Create brand identities, campaign creatives, brochures and social content for clients.',
  },
  {
    title: 'QA Tester',
    type: 'Full-time',
    experience: '0–3 years',
    skills: ['Manual Testing', 'Test Cases', 'Bug Reporting', 'Postman', 'Automation basics'],
    openings: 1,
    department: 'Engineering',
    summary: 'Own release quality — write test cases, run regression cycles and report defects clearly.',
  },
  {
    title: 'Digital Marketing Executive',
    type: 'Full-time',
    experience: '0–2 years',
    skills: ['Google Ads', 'Meta Ads', 'SEO basics', 'Analytics', 'Content Coordination'],
    openings: 1,
    department: 'Marketing',
    summary: 'Run client campaigns, report performance and help optimise cost per lead.',
  },
  {
    title: 'Sales & Business Development Executive',
    type: 'Full-time',
    experience: '0–3 years',
    skills: ['B2B Sales', 'Lead Qualification', 'CRM', 'Proposal Writing', 'Client Communication'],
    openings: 2,
    department: 'Sales & Support',
    summary: 'Convert enquiries into projects, maintain the CRM pipeline and build long-term relationships.',
  },
]

export const CULTURE_POINTS = [
  {
    title: 'Collaborative team environment',
    description: 'Small teams, open communication and mentorship. Your work is visible, and your opinions are heard in design reviews.',
    icon: 'Users',
  },
  {
    title: 'Continuous learning',
    description: 'Paid courses, certifications, internal knowledge sessions and exposure to multiple technologies and industries.',
    icon: 'GraduationCap',
  },
  {
    title: 'Merit-based recognition',
    description: 'Performance reviews twice a year with clear increments, bonuses and leadership opportunities for consistent performers.',
    icon: 'Award',
  },
  {
    title: 'Flexible work arrangements',
    description: 'Hybrid working, flexible hours for genuine reasons, and a genuinely supportive leave policy.',
    icon: 'Coffee',
  },
]

export const BENEFITS = [
  'Competitive salary with performance-linked increments',
  'Hands-on exposure to live client projects from week one',
  'Learning budget for certifications and courses',
  'Hybrid/flexible working hours',
  'Festival bonuses, celebrations and team outings',
  'Health insurance support for senior team members',
]

export const HIRING_PROCESS = [
  { step: '01', title: 'Apply online', description: 'Share your resume and portfolio — no lengthy forms.' },
  { step: '02', title: 'Screening call', description: 'A 15–20 minute conversation about your experience and expectations.' },
  { step: '03', title: 'Technical round', description: 'Practical discussion or a small paid task relevant to the role.' },
  { step: '04', title: 'Final discussion', description: 'Meet the team leads to assess fit on both sides.' },
  { step: '05', title: 'Offer & onboarding', description: 'Written offer, documentation and a structured onboarding plan.' },
]
