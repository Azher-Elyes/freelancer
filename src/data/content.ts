import type { 
  NavItem, Need, Service, Project, WhyPoint, 
  ProcessStep, SkillCategory, Testimonial, Stat, SocialLink 
} from '@/types';

export const SITE = {
  name: 'Elyes',
  tagline: 'Technology · Creativity · Results',
  email: 'hello@elyes.dev',
  location: ' Worldwide · Remote',
  availability: 'Available for new projects',
  description: 'Freelance Digital Studio — AI, Software, Marketing & Design',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Value', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const NEEDS: Need[] = [
  {
    id: 'automate',
    title: 'Automate My Business',
    description: 'Streamline workflows, reduce manual tasks, and improve efficiency.',
    icon: 'Zap',
    serviceAnchor: 'services-ai'
  },
  {
    id: 'website',
    title: 'Build a Website or App',
    description: 'Build responsive websites, mobile apps, and custom software.',
    icon: 'Globe',
    serviceAnchor: 'services-software'
  },
  {
    id: 'data',
    title: 'Analyze My Data',
    description: 'Discover insights, track performance, and support better decisions.',
    icon: 'BarChart3',
    serviceAnchor: 'services-ai'
  },
  {
    id: 'brand',
    title: 'Design My Brand',
    description: 'Create distinctive logos, visual identities, and brand assets.',
    icon: 'Palette',
    serviceAnchor: 'services-design'
  },
  {
    id: 'grow',
    title: 'Grow My Online Presence',
    description: 'Reach more customers through SEO, content, and social media.',
    icon: 'TrendingUp',
    serviceAnchor: 'services-marketing'
  },
  {
    id: 'video',
    title: 'Create Video or Media',
    description: 'Produce engaging videos, motion graphics, and digital media.',
    icon: 'Video',
    serviceAnchor: 'services-marketing'
  },
  {
    id: 'uiux',
    title: 'Design a Website / UI',
    description: 'Design intuitive interfaces and seamless digital experiences.',
    icon: 'Layout',
    serviceAnchor: 'services-design'
  },
  {
    id: 'custom',
    title: 'Build Something Custom',
    description: 'Transform unique ideas into tailored digital solutions.',
    icon: 'Sparkles',
    serviceAnchor: 'services-software'
  },
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
    description: 'A unified analytics platform combining business data, real-time reporting, and AI-powered anomaly detection.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'OpenAI'],
    result: 'Real-time insights for faster, data-driven decisions',
    size: 'large',
    year: '2026',
  },
  {
    id: 'campaign',
    title: 'Digital Marketing Campaign',
    category: 'Marketing & Media',
    description: 'A multi-channel marketing strategy combining SEO, targeted advertising, and content across digital platforms.',
    technologies: ['SEO', 'Content Strategy', 'Google Ads', 'Meta Ads', 'Analytics'],
    result: 'Measurable audience growth and campaign performance',
    size: 'medium',
    year: '2026',
  },
  {
    id: 'brand',
    title: 'Brand Identity & Digital Experience',
    category: 'Design & Creative',
    description: 'A cohesive visual identity combining logo design, typography, and a unified system for digital products.',
    technologies: ['Figma', 'UI/UX', 'Branding', 'Design System', 'Prototyping'],
    result: 'Consistent branding across digital touchpoints',
    size: 'large',
    year: '2026',
  },

  {
    id: 'ecommerce',
    title: 'SaaS Web Application',
    category: 'Software Development',
    description: 'A scalable web platform combining secure user access, subscription billing, and centralized administration.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Stripe', 'PostgreSQL'],
    result: 'Scalable infrastructure for subscription-based services',
    size: 'medium',
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
      'LLM Int.',
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
      'Content Marketing',
      'Social Media',
      'Paid Advertising',
      'Marketing Strategy',
      'Analytics',
    ],
  },
];
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Elyes completely transformed our workflow. He built an automated dashboard that saved our team at least 15 hours a week. Highly recommended.",
    author: "Sarah Jenkins",
    role: "Operations Director",
    company: "Visteon"
  },
  {
    quote: "Working with Elyes was seamless. He understood our vision instantly and delivered a stunning, high-performance website ahead of schedule.",
    author: "Karim Ben Ali",
    role: "Founder",
    company: "NovaTech"
  },
  {
    quote: "A rare freelancer who actually cares about the business impact, not just the code. His AI integration solutions gave us a massive competitive edge.",
    author: "Mei Lin",
    role: "Product Manager",
    company: "Tianma"
  },
  {
    quote: "The level of professionalism and communication was outstanding. Every deadline was met, and the quality of the final product exceeded our expectations.",
    author: "Thomas Müller",
    role: "Marketing Lead",
    company: "GrowthScale"
  },
  {
    quote: "Elyes is a problem solver. He took a complex, messy idea and turned it into a clean, functional web app that our users love.",
    author: "Elena Rossi",
    role: "CEO",
    company: "Studio Bella"
  },
  {
    quote: "Fast, reliable, and incredibly skilled. If you need a developer who can handle everything from design to deployment, he's the one.",
    author: "David Chen",
    role: "CTO",
    company: "StartupHub"
  }
];

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
  "I'm an independent Digital Solutions Engineer turning business needs into practical, high-quality digital solutions.",
  "I combine software development, AI, automation, design, and digital strategy to turn ideas into solutions."
],
portfolioLink: {
  text: "Beyond digital solutions, explore my engineering background, professional experience, and management-oriented mindset.",
  url: "https://azher-elyes.github.io/career/",
  label: "View Career Portfolio"
},
  tools: [
    'Web Development',
    'App Development',
    'Backend Development',
    'API Development',
    'Cloud & DevOps',
    'AI & Machine Learning',
    'Data Science',
    'UI/UX Design',
  ],
};