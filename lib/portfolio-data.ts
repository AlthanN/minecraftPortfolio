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
    "I'm a junior studying CS at Umass Amherst, and I am passionate about creating end to end projects that make an impact! I enjoy creating projects that make peoples' lives easier and enjoyable! I've build experience through building Full-Stack Applications as well as AI/ML Projects",
  ],
  inventory: ['Python', 'TypeScript', 'Java', 'JavaScript', 'C', 'SQL', 'React', 'Next.js', 'Node.js', 'Angular', 'Pandas'],
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Ignite Fellow',
    company: 'AI4ALL',
    period: 'May 2026 — Present',
    points: [
      'Built and evaluated ML classifiers (Logistic Regression and Random Forest) in Python, achieving 70% recall across 267K+ records',
      'Deployed a multi-page interactive web app (Streamlit, Plotly) translating model outputs into live dashboards, including a real-time threshold slider and geographic visualizations',
    ],
  },
  {
    role: 'Undergraduate Course Assistant',
    company: 'Manning College of Information and Computer Science',
    period: 'Feb 2026 — Present',
    points: [
      'Provided academic assistance to a class of 100+ students, teaching fundamentals of C, system design, assembly, and operating systems, improving student understanding and exam performance',
      'Promoted a positve learning environment for students during lab sessions by addressing questions and encouraging collaboration amongst themselves',
    ],
  },
  {
    role: 'ARQ Quant',
    company: 'Minutemen Alternative Investment Fund',
    period: 'March 2026 — May 2026',
    points: [
      'Developed a statistical pairs-trading signal algorithm using unsupervised learning (k-means), yielding 29.13% returns with a 1.12 Sharpe Ratio over 2 years',
      'Engineered a 6-year market data pipeline with train/eval/test splits using a multi-part scoring system to score tradable pairs'
    ],
  },
  {
    role: 'Software Developer',
    company: 'CodeCollab',
    period: 'May 2025 — March 2026',
    points: [
      'Designed PathFinder, an AI Chatbot for academic assistance and career-exploration within a 4 person team',
      'Developed a reusable portfolio website with React and Tailwind CSS, allowing for students to adopt as their own template',
      'Participated in Agile-like workflow with regular stand-ups and sprint reviews, keeping projects on schedule'
    ],
  },
  {
    role: 'Front-End Intern',
    company: 'BHS Flipped Pathway',
    period: 'April 2024 — June 2024',
    points: [
      'Underwent project based learning using HTML, CSS, Typescript, and Angular',
      'Collaborated with 5 interns and 2 mentors to solve issues and implement feedback on a weekly basis',
      'Developed a final website for a graduated art students portfolio website'
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
    title: 'Chicago Food Inspections',
    description:
      'ML classifer that analyzes data from Chicago food establishments to predict failing restaurants',
    tech: ['ML', 'Streamlit', 'Python'],
    href: 'https://chicago-food-inspections-11d.streamlit.app/',
    ore: 'diamond',
  },
  {
    title: 'Minecraft Stats Tracker',
    description:
      'MCSR Stats Tracker for speedrunning statistics to analyze your performance',
    tech: ['React', 'FastAPI', 'Next.js'],
    href: 'https://github.com/AlthanN/MCSR-Stats-Tracker',
    ore: 'amethyst',
  },
  
  {
    title: 'MoodScape',
    description:
      'A spotify analysis platform that caters your music taste into a virtual 3D world',
    tech: ['React', 'three.js', 'postgreSQL', 'Next.js'],
    href: 'https://github.com/AlthanN/Moodscape',
    ore: 'emerald',
  },
  {
    title: 'PathFinderAI',
    description:
      'AI Chatbot that helps ytou decide your academic and professional career',
    tech: ['Streamlit', 'Python', 'GeminiAI'],
    href: '#',
    ore: 'gold',
  },
  {
    title: 'uNotes',
    description:
      'A platform where UMass students can create and share notes based on current and past classes',
    tech: ['React', 'Supabase', 'Next.js'],
    href: 'https://github.com/ahaan0502/COMPSCI-320',
    ore: 'diamond',
  },
  {
    title: 'UMass Food Finder',
    description:
      'A platform where UMass students can search food cravings within 2 weeks out of 4 dining halls',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/mnedkova/hackathon2024',
    ore: 'amethyst',
  },
  
]

export const contacts = [
  {
    label: 'LinkedIn',
    handle: '/in/althan-nguyen',
    href: 'https://linkedin.com/althan-nguyen',
    ore: 'diamond' as const,
  },
  {
    label: 'GitHub',
    handle: '@AlthanN',
    href: 'https://github.com/AlthanN',
    ore: 'emerald' as const,
    blurb: 'Where all my crafting recipes live.',
  },
  {
    label: 'Instagram',
    handle: '@althan.nguyen',
    href: 'https://instagram.com/althan.nguyen',
    ore: 'amethyst' as const,
    blurb: 'Screenshots from the build worlds.',
  },
]
