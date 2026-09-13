export interface NavItem {
  label: string;
  href: string;
}

export interface Need {
  id: string;
  title: string;
  description: string;
  icon: string;
  serviceAnchor: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  accent: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  result: string;
  size: 'small' | 'medium' | 'large';
  year: string;
}

export interface WhyPoint {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ProjectFormData {
  serviceType: string;
  name: string;
  email: string;
  company: string;
  description: string;
  budget: string;
  timeline: string;
}