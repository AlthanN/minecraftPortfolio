export const profile = {
  name: 'Althan Nguyen',
  role: 'Full-Stack Developer and AI/ML Enthusiast',
  tagline:
    'I mine problems, craft software, and place blocks until they become products.',
  location: 'Overworld · Remote',
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    "Hey! I'm a rising junior studying Computer Science at Umass Amherst, and I am passionate about creating projects that make an impact! I enjoy creating products that makes peoples' lives easier and more enjoyable. I also enjoy working with AI/ML!",
  ],
  stats: [
    { label: 'Years Coding', value: '6+' },
    { label: 'Projects Shipped', value: '40+' },
    { label: 'Coffee Blocks Mined', value: '9999' },
  ],
  inventory: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'SQL', 'AWS', 'Figma'],
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Creeper Labs',
    period: '2023 — Present',
    points: [
      'Lead a squad of 4 engineers building a real-time collaboration platform.',
      'Cut page load times by 45% by redstone-wiring a smarter caching layer.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Redstone Systems',
    period: '2021 — 2023',
    points: [
      'Shipped a payments service handling millions of transactions a month.',
      'Mentored junior devs and ran the internal "crafting recipes" tech talks.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Blockworks Studio',
    period: '2019 — 2021',
    points: [
      'Built the design system used across every client-facing product.',
      'Turned Figma frames into pixel-perfect, accessible interfaces.',
    ],
  },
]

export type Project = {
  title: string
  description: string
  tech: string[]
  href: string
  ore: 'diamond' | 'emerald' | 'gold' | 'amethyst'
}

export const projects: Project[] = [
  {
    title: 'Enderchest',
    description:
      'An end-to-end encrypted file vault that syncs your stuff across every dimension (device).',
    tech: ['Next.js', 'Rust', 'WebCrypto'],
    href: '#',
    ore: 'diamond',
  },
  {
    title: 'AutoFarm',
    description:
      'A workflow automation tool that plants triggers and harvests results while you sleep.',
    tech: ['TypeScript', 'Node.js', 'Postgres'],
    href: '#',
    ore: 'emerald',
  },
  {
    title: 'MapMaker',
    description:
      'A procedural terrain generator and level editor for browser-based games.',
    tech: ['React', 'Three.js', 'WebGL'],
    href: '#',
    ore: 'gold',
  },
  {
    title: 'BeaconBoard',
    description:
      'A team status dashboard that lights up like a beacon when something needs attention.',
    tech: ['Next.js', 'SWR', 'Tailwind'],
    href: '#',
    ore: 'amethyst',
  },
]

export const contacts = [
  {
    label: 'LinkedIn',
    handle: '/in/alexstone',
    href: 'https://linkedin.com',
    ore: 'diamond' as const,
    blurb: 'Rare ore — great for professional trades.',
  },
  {
    label: 'GitHub',
    handle: '@alexstone',
    href: 'https://github.com',
    ore: 'emerald' as const,
    blurb: 'Where all my crafting recipes live.',
  },
  {
    label: 'Instagram',
    handle: '@alex.builds',
    href: 'https://instagram.com',
    ore: 'amethyst' as const,
    blurb: 'Screenshots from the build worlds.',
  },
]
