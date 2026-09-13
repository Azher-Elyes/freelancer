import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { NEEDS } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';
import { scrollTo } from '@/hooks/useSmoothScroll';
import { cn } from '@/lib/utils';

export function NeedsSection() {
  return (
    <section id="needs" className="relative py-28 md:py-40">
      <div className="container-main">
        <div className="mb-16 max-w-3xl">
          <SectionLabel number="01" label="Client Needs" className="mb-6" />
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="What Do You Need?" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg text-text-muted"
          >
            Tell me what you're trying to achieve. I'll help you find the right solution.
          </motion.p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {NEEDS.map((need, i) => (
            <NeedCard key={need.id} need={need} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NeedCard({ need, index }: { need: typeof NEEDS[number]; index: number }) {
  const Icon = (Icons[need.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) ?? Icons.Sparkles;

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => scrollTo(`#${need.serviceAnchor}`)}
      className={cn(
        'group relative flex flex-col items-start overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 text-left',
        'transition-all duration-500 hover:border-accent/40 hover:bg-surface/80'
      )}
      data-cursor="hover"
    >
      {/* Cursor-follow glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-accent transition-all duration-500 group-hover:border-accent/50 group-hover:bg-accent/10">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="relative z-10 mb-2 text-base font-medium tracking-tight text-text">
        {need.title}
      </h3>
      <p className="relative z-10 text-sm leading-relaxed text-text-muted">
        {need.description}
      </p>

      <div className="relative z-10 mt-6 flex items-center gap-2 font-mono text-[10px] tracking-widest text-text-dim uppercase transition-colors duration-500 group-hover:text-accent">
        <span>Explore</span>
        <Icons.ArrowRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" />
      </div>
    </motion.button>
  );
}