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
    services: ['AI Solutions', 'AI Assistants', 'Business Automation', 'Workflow Automation', 'AI Integrations', 'Data & Analytics', 'Machine Learning', 'AI Consulting'],
    accent: '#8b5cf6',
  },
  {
    id: 'software',
    number: '02',
    title: 'Software Development',
    tagline: 'Ideas built into powerful digital products.',
    description: 'From web platforms to mobile apps and custom software — built to scale, built to last.',
    services: ['Web Development', 'Web Applications', 'Mobile Applications', 'Custom Software', 'Backend & APIs', 'Databases', 'SaaS Platforms', 'Maintenance & Optimization'],
    accent: '#3b82f6',
  },
  {
    id: 'marketing',
    number: '03',
    title: 'Marketing & Media',
    tagline: 'Get noticed. Build your audience. Grow your brand.',
    description: 'Strategic marketing, content and media that attracts the right audience and converts.',
    services: ['Digital Marketing', 'SEO', 'Social Media', 'Content Creation', 'Video', 'Audio', 'Advertising', 'Marketing Strategy'],
    accent: '#06b6d4',
  },
  {
    id: 'design',
    number: '04',
    title: 'Design & Creative',
    tagline: 'Ideas turned into experiences people remember.',
    description: 'Design that communicates clearly, feels premium and works across every touchpoint.',
    services: ['UI/UX Design', 'Graphic Design', 'Branding', 'Digital Design', 'CAD Design'],
    accent: '#a78bfa',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'dashboard',
    title: 'Smart Business Dashboard',
    category: 'AI & Automation',
    description: 'An intelligent analytics platform that turns raw business data into actionable decisions.',
    technologies: ['React', 'Python', 'OpenAI', 'PostgreSQL'],
    result: 'Real-time insight across every business metric',
    size: 'large',
    year: '2025',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    category: 'Software Development',
    description: 'A full-featured commerce platform built for scale, speed and conversion.',
    technologies: ['Next.js', 'Stripe', 'Node.js', 'Tailwind'],
    result: 'Fast, conversion-optimized storefront',
    size: 'medium',
    year: '2025',
  },
  {
    id: 'campaign',
    title: 'Social Media Campaign',
    category: 'Marketing & Media',
    description: 'A multi-channel campaign built around content, timing and audience insight.',
    technologies: ['SEO', 'Content Strategy', 'Video', 'Analytics'],
    result: 'Consistent, measurable audience growth',
    size: 'medium',
    year: '2024',
  },
  {
    id: 'brand',
    title: 'Brand Identity & UI/UX',
    category: 'Design & Creative',
    description: 'A complete visual identity and digital experience system.',
    technologies: ['Figma', 'UI/UX', 'Branding', 'Design System'],
    result: 'A recognizable, cohesive brand presence',
    size: 'large',
    year: '2024',
  },
];

export const WHY_POINTS: WhyPoint[] = [
  { title: 'One Place for Multiple Needs', description: 'Technology, design, marketing and creative services under one roof.', icon: 'Layers' },
  { title: 'Solution-Focused', description: 'Start with the problem, then build the right solution.', icon: 'Target' },
  { title: 'End-to-End', description: 'From idea and strategy to design, development and delivery.', icon: 'ArrowRight' },
  { title: 'Custom Solutions', description: 'No unnecessary templates. Build what the project actually needs.', icon: 'Puzzle' },
  { title: 'Clear Communication', description: 'Simple communication, transparent progress and defined deliverables.', icon: 'MessageSquare' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Discover', description: 'Understand your goals, requirements and challenges.' },
  { number: '02', title: 'Define', description: 'Shape the scope and determine the right solution.' },
  { number: '03', title: 'Design', description: 'Create the experience, architecture and visual direction.' },
  { number: '04', title: 'Build', description: 'Develop, integrate, test and refine.' },
  { number: '05', title: 'Launch', description: 'Deliver, deploy and support the final solution.' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: 'Development', skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'SQL', 'APIs'] },
  { name: 'AI & Data', skills: ['AI', 'Machine Learning', 'Automation', 'Data Analysis', 'BI'] },
  { name: 'Design', skills: ['UI/UX', 'Figma', 'Graphic Design', 'CAD', '3D'] },
  { name: 'Marketing & Media', skills: ['SEO', 'Social Media', 'Video', 'Audio', 'Content'] },
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
    "I'm a freelance creator focused on building useful, thoughtful and high-quality digital solutions.",
    "I combine technology, design and creative thinking to turn ideas into things that actually work.",
  ],
  expertise: ['AI & Automation', 'Software Development', 'Design & Creative', 'Marketing & Media'],
  tools: ['React', 'TypeScript', 'Python', 'Node.js', 'Figma', 'PostgreSQL', 'OpenAI', 'Tailwind'],
};