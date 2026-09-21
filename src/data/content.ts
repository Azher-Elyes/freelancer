import type { 
  NavItem, Need, Service, Project, WhyPoint, 
  ProcessStep, SkillCategory, Testimonial, Stat, SocialLink 
} from '@/types';

export const SITE = {
  name: 'Elyes',
  tagline: 'Technology · Creativity · Results',
  email: 'hello@elyes.dev',
  location: 'Available Worldwide · Remote',
  availability: 'Available for new projects',
  description: 'Freelance Digital Studio — AI, Software, Marketing & Design',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const NEEDS: Need[] = [
  { id: 'automate', title: 'Automate My Business', description: 'Save time. Reduce repetitive work.', icon: 'Zap', serviceAnchor: 'services-ai' },
  { id: 'website', title: 'Build a Website or App', description: 'Web, mobile or custom software.', icon: 'Globe', serviceAnchor: 'services-software' },
  { id: 'data', title: 'Analyze My Data', description: 'Turn information into insights.', icon: 'BarChart3', serviceAnchor: 'services-ai' },
  { id: 'brand', title: 'Design My Brand', description: 'Logo, identity and visual assets.', icon: 'Palette', serviceAnchor: 'services-design' },
  { id: 'grow', title: 'Grow My Online Presence', description: 'SEO, social media and content.', icon: 'TrendingUp', serviceAnchor: 'services-marketing' },
  { id: 'video', title: 'Create Video or Media', description: 'Video editing, motion and audio.', icon: 'Video', serviceAnchor: 'services-marketing' },
  { id: 'uiux', title: 'Design a Website / UI', description: 'Modern, user-friendly digital experiences.', icon: 'Layout', serviceAnchor: 'services-design' },
  { id: 'custom', title: 'Build Something Custom', description: "Have a unique idea? Let's build it.", icon: 'Sparkles', serviceAnchor: 'services-software' },
];

export const SERVICES: Service[] = [
  {
    id: 'ai',
    number: '01',
    title: 'AI & Automation',
    tagline: 'Smarter systems. Better workflows.',
    description: 'Intelligent systems that automate work, extract insight and unlock new capabilities for your business.',
    services: [
      'Digital Transformation',
      'ERP Systems',
      'AI Chatbots & Assistants',
      'Business Intelligence',
      'Workflow Automation',
      'Business Process Automation',
      'Data & Analytics',
      'Strategy & Implementation',
    ],
    accent: '#8b5cf6',
  },
  {
    id: 'software',
    number: '02',
    title: 'Software Development',
    tagline: 'Ideas built into powerful digital products.',
    description: 'From web platforms to mobile apps and custom software — built to scale, built to last.',
    services: [
      'Website Development',
      'Web Application Development',
      'Full-Stack Development',
      'Mobile App Development',
      'Custom Software Development',
      'API Development & Integration',
      'SaaS Development',
      'E-commerce Development',
    ],
    accent: '#3b82f6',
  },
  {
    id: 'design',
    number: '03',
    title: 'Design & Creative',
    tagline: 'Ideas turned into experiences people remember.',
    description: 'Design that communicates clearly, feels premium and works across every touchpoint.',
    services: [
      'UI/UX Design',
      'Web Design',
      'Mobile App Design',
      'Landing Page Design',
      'Design Systems',
      'Digital Product Design',
      '3D Design & Visualization',
      'CAD Design',
    ],
    accent: '#a78bfa',
  },  
  {
    id: 'marketing',
    number: '04',
    title: 'Marketing & Media',
    tagline: 'Get noticed. Build your audience. Grow your brand.',
    description: 'Strategic marketing, content and media that attracts the right audience and converts.',
    services: [
      'Digital Marketing',
      'SEO',
      'Social Media Marketing',
      'Content Marketing',
      'Paid Advertising',
      'Brand Strategy',
      'Video & Content Production',
      'Marketing Analytics',
    ],
    accent: '#06b6d4',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'dashboard',
    title: 'Intelligent Business Dashboard',
    category: 'AI & Automation',
    description: 'A unified analytics platform that consolidates business data into a live decision dashboard with AI-powered anomaly detection.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'OpenAI'],
    result: 'Real-time visibility across every business metric',
    size: 'large',
    year: '2026',
  },
  {
    id: 'ecommerce',
    title: 'SaaS Web Application',
    category: 'Software Development',
    description: 'A multi-tenant SaaS platform with role-based access, subscription billing, and a full admin dashboard built for scale.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Stripe', 'PostgreSQL'],
    result: 'Production-ready platform with subscription infrastructure',
    size: 'medium',
    year: '2026',
  },
  {
    id: 'campaign',
    title: 'Digital Marketing Campaign',
    category: 'Marketing & Media',
    description: 'A multi-channel campaign combining content strategy, SEO optimization, and paid advertising across social platforms.',
    technologies: ['SEO', 'Content Strategy', 'Google Ads', 'Meta Ads', 'Analytics'],
    result: 'Organic + paid reach with measurable conversion funnel',
    size: 'medium',
    year: '2026',
  },
  {
    id: 'brand',
    title: 'Brand Identity & Digital Experience',
    category: 'Design & Creative',
    description: 'A complete brand identity system — logo, typography, color, and a matching design system for web and mobile products.',
    technologies: ['Figma', 'UI/UX', 'Branding', 'Design System', 'Prototyping'],
    result: 'A cohesive brand and product design language',
    size: 'large',
    year: '2026',
  },
];

export const WHY_POINTS: WhyPoint[] = [
  { 
    title: 'One Partner', 
    description: 'Technology, AI, automation, marketing, and creative services brought together through one reliable point of contact.', 
    icon: 'Layers' 
  },
  { 
    title: 'Smart Solutions', 
    description: 'I look beyond the request to understand the real problem and find a practical solution that makes sense for your business.', 
    icon: 'Target' 
  },
  { 
    title: 'End-to-End', 
    description: 'From the initial idea and strategy to design, development, integration, testing, and final delivery.', 
    icon: 'ArrowRight' 
  },
  { 
    title: 'Custom Built', 
    description: 'Every project is shaped around your goals, users, workflow, and requirements instead of relying on generic templates.', 
    icon: 'Puzzle' 
  },
  { 
    title: 'Quality That Matters', 
    description: 'From development to final delivery, every detail is carefully reviewed and tested to ensure a reliable, polished, and professional result.', 
    icon: 'CheckCircle2' 
  },
  { 
    title: 'Clear Process', 
    description: 'Clear deliverables, transparent progress, direct communication, and a straightforward process from start to finish.', 
    icon: 'MessageSquare' 
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Discover', description: 'Understand your goals, requirements and challenges.' },
  { number: '02', title: 'Define', description: 'Shape the scope and determine the right solution.' },
  { number: '03', title: 'Design', description: 'Create the experience, architecture and visual direction.' },
  { number: '04', title: 'Build', description: 'Develop, integrate, test and refine.' },
  { number: '05', title: 'Launch', description: 'Deliver, deploy and support the final solution.' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Development',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'PHP',
      'Tailwind CSS',
    ],
  },
  {
    name: 'AI & Data',
    skills: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'LLM Integration',
      'Generative AI',
      'Data Analysis',
    ],
  },
  {
    name: 'Design',
    skills: [
      'UI/UX Design',
      'Web Design',
      'Mobile App Design',
      'Prototyping',
      'Design Systems',
      'Interaction Design',
      'CAD Design',
    ],
  },
  {
    name: 'Marketing',
    skills: [
      'Digital Marketing',
      'SEO',
      'Social Media',
      'Content Marketing',
      'Paid Advertising',
      'Marketing Strategy',
      'Analytics',
    ],
  },
];

// Testimonials — placeholders only. Do NOT invent fake testimonials.
export const TESTIMONIALS: Testimonial[] = [];

// Stats — hidden until real values are provided.
export const STATS: Stat[] = [];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Dribbble', href: '#' },
];

export const ABOUT = {
  bio: [
    "I'm an independent Digital Solutions Engineer focused on building practical, thoughtful, and high-quality solutions for modern businesses.",
    "I combine software development, AI, automation, design, and digital strategy to turn ideas and business challenges into reliable solutions that work in the real world.",
  ],
  expertise: [
    'Web Development',
    'App Development',
    'Backend Development',
    'API Development',
    'Cloud & DevOps',
    'AI & Machine Learning',
    'Data Science',
    'UI/UX Design',
  ],
  tools: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'PHP',
    'SQL / NoSQL',
    'REST APIs',
    'Docker',
    'AWS',
  ],
};