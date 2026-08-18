export const C = {
  bg: 'var(--bg)',
  surface: 'var(--surface)',
  surface2: 'var(--surface2)',
  border: 'var(--border)',
  borderHover: 'color-mix(in srgb, var(--border) 70%, var(--fg))',
  fg: 'var(--fg)',
  fg2: 'var(--fg2)',
  muted: 'var(--muted)',
  accent: 'var(--accent)',
  green: 'var(--green)',
} as const

export const FONT = {
  serif: "'Fraunces', Georgia, serif",
  sans: "'Plus Jakarta Sans', system-ui, sans-serif",
  mono: "'DM Mono', monospace",
} as const

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
