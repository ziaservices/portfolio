export const C = {
  bg: '#080809',
  surface: '#0f0f11',
  surface2: '#141416',
  border: '#1d1d21',
  borderHover: '#2d2d33',
  fg: '#f0f0f0',
  fg2: '#9898a4',
  muted: '#5a5a66',
  accent: '#6366f1',
  green: '#22c55e',
} as const

export const FONT = {
  serif: "'Fraunces', Georgia, serif",
  sans: "'Plus Jakarta Sans', system-ui, sans-serif",
  mono: "'DM Mono', monospace",
} as const

export const PROJECTS = [
  {
    number: '01',
    name: 'Premium E-Commerce',
    category: 'E-Commerce',
    description:
      'A conversion-focused e-commerce experience designed for a modern lifestyle brand. Cart-to-checkout optimised for speed, trust, and revenue.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    result: '38% increase in checkout conversion',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&auto=format',
  },
  {
    number: '02',
    name: 'SaaS Analytics Dashboard',
    category: 'Web Application',
    description:
      'A responsive analytics platform with real-time data visualization and a streamlined UX designed for clarity, speed, and fast decision-making.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    result: '2× faster data access vs previous tool',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&auto=format',
  },
  {
    number: '03',
    name: 'Agency Marketing Site',
    category: 'Marketing Website',
    description:
      'A premium marketing website crafted to turn visitors into qualified leads. CMS-driven, performance-first, and built for measurable conversion.',
    tech: ['Next.js', 'Framer Motion', 'Sanity CMS', 'TypeScript'],
    result: '62% increase in qualified lead volume',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&h=900&fit=crop&auto=format',
  },
  {
    number: '04',
    name: 'AI Web Application',
    category: 'AI Application',
    description:
      'A modern AI-powered application with a fast, intuitive interface. Complex queries rendered simple through intentional UX and clean architecture.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL'],
    result: '4.8/5 user satisfaction score at launch',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&h=900&fit=crop&auto=format',
  },
] as const

export const SKILLS = [
  { category: 'Frontend',   items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Backend',    items: ['Node.js', 'PostgreSQL', 'REST APIs'] },
  { category: 'Tools',      items: ['Git', 'GitHub', 'Figma', 'Docker'] },
  { category: 'Motion / UI', items: ['Framer Motion', 'GSAP'] },
] as const

export const EXPERIENCE = [
  {
    period: '2026 — Present',
    role: 'Web Developer',
    company: 'Digital Studio',
    type: 'Full-time',
    points: [
      'Production client websites from brief to deployment',
      'Responsive interfaces across all devices and viewports',
      'API integrations and backend endpoint development',
      'Core Web Vitals and performance optimisation',
    ],
  },
  {
    period: '2025 — 2026',
    role: 'Freelance Web Developer',
    company: 'Independent',
    type: 'Freelance',
    points: [
      'End-to-end project delivery for international clients',
      'E-commerce builds, SaaS frontends, custom CMS',
      'Design-to-code handoffs from Figma',
      'Client communication and technical scoping',
    ],
  },
] as const
