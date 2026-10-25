import { ArrowUp, Phone, Mail, Globe, MapPin, ArrowRight, Linkedin, Github, MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollTo } from '@/hooks/useSmoothScroll';

const CONTACT = {
  phone: '+216 27 893 834',
  email: 'azherelyes@gmail.com',
  website: 'azherelyes.career.com',
  websiteUrl: 'https://azher-elyes.github.io/career',
  location: 'Tunis · Tunisia',
};

const SOCIALS = [
  { label: 'LinkedIn',  icon: Linkedin,      href: '#' },
  { label: 'GitHub',    icon: Github,        href: '#' },
  { label: 'WhatsApp',  icon: MessageCircle, href: '#' },
  { label: 'Instagram', icon: Instagram,     href: '#' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/5 blur-[140px]" />

      <div className="container-main relative py-2 md:py-8">
        {/* Main 3-column grid */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:gap-16">

          {/* COLUMN 1 — Logo + Name + Tagline + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            {/* Logo — no bottom padding */}
            <button
              onClick={() => scrollTo('#home')}
              className="group mb-3 block"
              aria-label="Back to top"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Mohamed Elyes Azher logo"
                className="h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-105 md:h-44 md:w-44"
                width={176}
                height={176}
              />
            </button>

            {/* Name — gradient + spacing */}
            <h3 className="mb-3 bg-gradient-to-b from-text via-text to-text-muted bg-clip-text text-2xl font-semibold tracking-[0.12em] text-transparent uppercase md:text-3xl">
              Mohamed Elyes Azher
            </h3>

            {/* Decorative line */}
            <div className="mb-4 h-px w-16 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            {/* Badge — cooler design */}
            <div className="group relative mb-6 inline-flex items-center gap-2 overflow-hidden rounded-full border border-accent/30 bg-gradient-to-b from-accent/10 to-transparent px-4 py-1.5 backdrop-blur-sm">
              {/* Subtle pulse */}
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-accent-bright uppercase">
                Digital Solutions Engineer
              </span>
            </div>

            {/* Description */}
            <p className="text-left text-sm leading-relaxed text-text-muted lg:max-w-sm">
              Building practical, thoughtful digital solutions for modern businesses.
            </p>
          </motion.div>

          {/* COLUMN 2 — Hexagon Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-accent/10 blur-[60px]" />
              <div className="hexagon-frame">
                <img
                  src={`${import.meta.env.BASE_URL}portrait.jpg`}
                  alt="Mohamed Elyes Azher portrait"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3 — Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-3"
          >
            <ContactCard
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={CONTACT.phone}
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            />
            <ContactCard
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <ContactCard
              icon={<Globe className="h-4 w-4" />}
              label="career portfolio"
              value={CONTACT.website}
              href={CONTACT.websiteUrl}
            />
          </motion.div>
        </div>

        {/* BOTTOM BAR — aligned to same grid as above */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2 grid gap-6 rounded-2xl border border-border bg-surface/40 p-4 backdrop-blur-sm md:p-5 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:gap-6"
        >
          {/* Location — left column */}
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted lg:justify-start">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{CONTACT.location}</span>
          </div>

          {/* CTA — center column (aligned under hexagon) */}
          <div className="flex items-center justify-center">
          </div>

{/* Social Links */}
<div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/mohamed-elyes-lazher" 
    aria-label="LinkedIn" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-text-muted transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-bright"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>

  {/* GitHub */}
  <a 
    href="https://github.com/Azher-Elyes" 
    aria-label="GitHub" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-text-muted transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-bright"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  </a>

  {/* WhatsApp (Using the real WhatsApp brand icon) */}
  <a 
    href="https://wa.me/21627893834" 
    aria-label="WhatsApp" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-text-muted transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-bright"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
    </svg>
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/azher_elyes" 
    aria-label="Instagram" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-text-muted transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-bright"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  </a>

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/azher.elyes" 
    aria-label="Facebook" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-text-muted transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-bright"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  </a>
</div>
        </motion.div>

        {/* FINAL LINE */}
{/* FINAL LINE — centered */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-8 flex flex-col items-center gap-6 border-t border-border pt-8"
>
  {/* Copyright with decorative line + dot */}
  <div className="flex flex-col items-center gap-3 text-center">
    <div className="flex items-center gap-3">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40" />
      <div className="h-1 w-1 rounded-full bg-accent/60" />
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40" />
    </div>

    <p className="font-mono text-xs tracking-[0.2em] text-text-dim uppercase">
      <span className="text-accent">©</span>{' '}
      <span>{new Date().getFullYear()}</span>
      <span className="mx-2 text-border-bright">·</span>
      <span className="text-text-muted">Mohamed Elyes Azher</span>
      
      {/* ✅ Hide the separator dot on mobile, force line break */}
      <span className="mx-2 hidden text-border-bright sm:inline">·</span>
      <br className="sm:hidden" />
      
      <span>All rights reserved</span>
    </p>
  </div>
</motion.div>
      </div>
    </footer>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/40 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-surface/70"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] tracking-widest text-text-dim uppercase">
          {label}
        </p>
        <p className="truncate text-sm text-text-muted transition-colors group-hover:text-text">
          {value}
        </p>
      </div>
    </a>
  );
}