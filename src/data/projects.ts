export interface Project {
  id: string
  title: { ka: string; en: string }
  description: { ka: string; en: string }
  tech: string[]
  color: string
  image: string
  demoUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: 'merge-stars',
    image: '/projects/merge-stars.webp',
    title: { ka: 'MERGE STARS', en: 'MERGE STARS' },
    description: {
      ka: 'E-commerce სამკაულის პლატფორმა React 18-ით, NestJS-ით და Docker-ით',
      en: 'E-commerce jewelry platform built with React 18, NestJS, and Docker',
    },
    tech: ['React 18', 'NestJS', 'Docker', 'PostgreSQL'],
    color: '#00f5ff',
    demoUrl: 'https://mergestars.com/',
    githubUrl: 'https://github.com/tavdo/MERGE_STARS',
  },
  {
    id: 'wedding',
    image: '/projects/wedding.webp',
    title: { ka: 'ქორწილის მოწვევა', en: 'Wedding Invitation App' },
    description: {
      ka: 'ონლაინ ქორწილის მოწვევა ინტერაქტიული ისტორიით, გალერეით და RSVP ფორმით',
      en: 'Online wedding invitation with interactive story, gallery, and RSVP form',
    },
    tech: ['React', 'Framer Motion', 'TypeScript'],
    color: '#7c3aed',
    demoUrl: 'https://korwili.netlify.app/',
    githubUrl: 'https://github.com/tavdo/wedding',
  },
  {
    id: 'port',
    image: '/projects/port.webp',
    title: { ka: 'Port Disbursement Calculator', en: 'Port Disbursement Calculator' },
    description: {
      ka: 'საპორტო ხარჯების კალკულატორი — PDA/FDA პროფორმა ბათუმის ტანკერის მოდელით',
      en: 'Port disbursement calculator — PDA/FDA proforma based on the Batumi tanker model',
    },
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    color: '#00f5ff',
    demoUrl: 'https://prismatic-marzipan-aee9c1.netlify.app/',
    githubUrl: 'https://github.com/tavdo/PORT',
  },
  {
    id: 'cottages',
    image: '/projects/cottages.webp',
    title: { ka: 'Cottages', en: 'Cottages' },
    description: {
      ka: 'კოტეჯების დაჯავშნისა და პრეზენტაციის პლატფორმა',
      en: 'Cottage booking and showcase platform',
    },
    tech: ['React', 'Vite', 'Tailwind CSS'],
    color: '#7c3aed',
    demoUrl: 'https://cottagee.netlify.app/',
    githubUrl: 'https://github.com/tavdo/cottages',
  },
  {
    id: 'plaza',
    image: '/projects/plaza.webp',
    title: { ka: 'Plaza', en: 'Plaza' },
    description: {
      ka: 'სავაჭრო პლატფორმის ვებ აპლიკაცია თანამედროვე UI-ით',
      en: 'Commerce web application with a modern UI',
    },
    tech: ['React', 'Vite', 'Framer Motion'],
    color: '#00f5ff',
    demoUrl: 'https://plazaaa.netlify.app/',
    githubUrl: 'https://github.com/tavdo/plaza',
  },
]

export const coreSkills = [
  { name: 'React / React 18', level: 95 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js / NestJS', level: 80 },
  { name: 'Next.js 14', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'PostgreSQL / Supabase', level: 75 },
  { name: 'Docker / VPS Deploy', level: 70 },
]

export const techBadges = [
  'Vite', 'Redux Toolkit', 'React Router', 'Framer Motion',
  'Prisma', 'JWT Auth', 'Git', 'Figma', 'Three.js', 'Socket.IO', 'Stripe', 'Redis',
]
