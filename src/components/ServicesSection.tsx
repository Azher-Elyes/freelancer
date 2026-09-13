import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';
import { cn } from '@/lib/utils';

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-28 md:py-40">
      {/* Ambient background */}
      <div className="pointer-events-none absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[140px]" />

      <div className="container-main relative">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel number="02" label="Services" className="mb-6" />
            <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
              <AnimatedText text="What I Can Do For You" />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-lg text-text-muted"
            >
              Four disciplines. One place to bring your ideas to life.
            </motion.p>
          </div>
        </div>

        <div className="space-y-4">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              active={activeId === service.id}
              onEnter={() => setActiveId(service.id)}
              onLeave={() => setActiveId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  active,
  onEnter,
  onLeave,
}: {
  service: typeof SERVICES[number];
  index: number;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      id={`services-${service.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={cn(
        'group relative overflow-hidden rounded-3xl border transition-all duration-700',
        active ? 'border-accent/40 bg-surface/80' : 'border-border bg-surface/30'
      )}
    >
      {/* Accent glow following state */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at 20% 50%, ${service.accent}10, transparent 60%)`,
        }}
      />

      <div className="relative grid gap-6 p-7 md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:gap-8 md:p-10">
        {/* Number */}
        <div className="flex items-start md:items-center">
          <motion.span
            animate={{ 
              scale: active ? 1.05 : 1,
              color: active ? service.accent : '#5a5a6a',
            }}
            transition={{ duration: 0.5 }}
            className="font-mono text-2xl tracking-tight md:text-3xl"
          >
            {service.number}
          </motion.span>
        </div>

        {/* Title + tagline */}
        <div>
          <h3 className="mb-2 text-2xl font-medium tracking-tight text-text md:text-3xl">
            {service.title}
          </h3>
          <p className="text-sm text-text-muted md:text-base">{service.tagline}</p>
        </div>

        {/* Service list */}
        <div className="relative">
          <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
            <AnimatePresence mode="wait">
              {service.services.slice(0, active ? service.services.length : 4).map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="font-mono text-[11px] tracking-wide text-text-dim"
                >
                  {s}
                  {i < service.services.length - 1 && <span className="ml-3 text-border-bright">·</span>}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-start md:justify-end">
          <a
            href={`#services-${service.id}`}
            className="group/cta flex items-center gap-2 whitespace-nowrap rounded-full border border-border-bright px-5 py-2.5 font-mono text-[11px] tracking-widest uppercase text-text-muted transition-all duration-500 hover:border-accent/50 hover:text-text"
            aria-label={`Explore ${service.title}`}
          >
            Explore
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left', backgroundColor: service.accent }}
        className="absolute bottom-0 left-0 h-px w-full"
      />
    </motion.div>
  );
}