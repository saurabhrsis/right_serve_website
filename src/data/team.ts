export type TeamMember = {
  name: string
  position: string
  image: string
  department: 'Leadership' | 'Engineering' | 'Design & Marketing' | 'Support'
  bio?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Piyush Pandey',
    position: 'Director',
    image: '/images/team/piyush-pandey.jpg',
    department: 'Leadership',
    bio: 'Leads client strategy, delivery governance and partnerships. Works directly with founders to translate business goals into technology roadmaps.',
  },
  {
    name: 'Saurabh Jagthap',
    position: 'Director',
    image: '/images/team/saurabh-jagthap.jpg',
    department: 'Leadership',
    bio: 'Drives engineering standards, infrastructure projects and hardware operations across software and IT service lines.',
  },
  {
    name: 'Abhishek Tijare',
    position: 'Senior Software Engineer',
    image: '/images/team/abhishek-tijare.jpg',
    department: 'Engineering',
    bio: 'Full-stack engineer specialising in Node.js, APIs and database performance for high-volume business applications.',
  },
  {
    name: 'Jayshree Bawankar',
    position: 'Software Engineer',
    image: '/images/team/jayshree-bawankar.jpg',
    department: 'Engineering',
    bio: 'Builds ERP and CRM modules with a focus on clean workflows, validations and reliable reporting.',
  },
  {
    name: 'M. A. Kadir',
    position: 'Software Engineer',
    image: '/images/team/kadir.jpg',
    department: 'Engineering',
    bio: 'Works across web platforms and integrations, connecting payment, SMS and accounting systems seamlessly.',
  },
  {
    name: 'Rajwal Jambhule',
    position: 'Software Engineer',
    image: '/images/team/rajwal-jambhule.jpg',
    department: 'Engineering',
    bio: 'Focuses on application security, API design and third-party service integrations.',
  },
  {
    name: 'Sakshi Wankhede',
    position: 'Software Engineer',
    image: '/images/team/sakshi-wankhede.jpg',
    department: 'Engineering',
    bio: 'Handles module development and QA collaboration, ensuring releases are tested before they reach clients.',
  },
  {
    name: 'Sharvari Malve',
    position: 'Frontend Developer',
    image: '/images/team/sharvari-malve.jpg',
    department: 'Engineering',
    bio: 'Converts designs into pixel-accurate, accessible, fast-loading interfaces using React and Tailwind CSS.',
  },
  {
    name: 'Mrunali Vaidya',
    position: 'Backend Developer',
    image: '/images/team/mrunali-vaidya.jpg',
    department: 'Engineering',
    bio: 'Designs database schemas, background jobs and secure authentication flows for our platforms.',
  },
  {
    name: 'Aarya Pandey',
    position: 'Graphics & UI Designer',
    image: '/images/team/aarya-pandey.jpg',
    department: 'Design & Marketing',
    bio: 'Creates brand identities, campaign creatives and social content that keep our clients visually consistent.',
  },
]

export const DEPARTMENTS = ['Leadership', 'Engineering', 'Design & Marketing', 'Support'] as const

export const TEAM_STATS = [
  { value: '20+', label: 'Team members' },
  { value: '7+', label: 'Years average experience' },
  { value: '12', label: 'Technologies mastered' },
  { value: '3', label: 'Cities served on-site' },
]
