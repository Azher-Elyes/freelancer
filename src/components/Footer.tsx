import { ArrowUp, Phone, Mail, Globe, MapPin, ArrowRight, Linkedin, Github, MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollTo } from '@/hooks/useSmoothScroll';

const CONTACT = {
  phone: '+216 27 893 834',
  email: 'azherelyes@gmail.com',
  website: 'mohamedelyesazher.com',
  websiteUrl: 'https://mohamedelyesazher.com',
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

      <div className="container-main relative py-20 md:py-28">
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
              label="Website"
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
          className="mt-16 grid gap-6 rounded-2xl border border-border bg-surface/40 p-4 backdrop-blur-sm md:p-5 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:gap-6"
        >
          {/* Location — left column */}
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted lg:justify-start">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{CONTACT.location}</span>
          </div>

          {/* CTA — center column (aligned under hexagon) */}
          <div className="flex items-center justify-center">
          </div>

          {/* Socials — right column */}
        <div className="flex items-center justify-center gap-2 lg:justify-end">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-text-muted transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-bright"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
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
      <span className="mx-2 text-border-bright">·</span>
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