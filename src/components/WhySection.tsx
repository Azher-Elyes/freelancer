import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { WHY_POINTS } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';

export function WhySection() {
  return (
    <section id="why" className="relative py-28 md:py-40">
      <div className="container-main">
        <div className="mb-16 max-w-3xl">
          <SectionLabel number="05" label="Why Work With Me" className="mb-6" />
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="More Than Just a Freelancer." />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg text-text-muted"
          >
            I don't just deliver tasks. I focus on solving the problem behind them.
          </motion.p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {WHY_POINTS.map((point, i) => {
            const Icon = (Icons[point.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) ?? Icons.Sparkles;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-bg p-8 transition-colors duration-500 hover:bg-surface/60 md:p-10"
              >
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-border-bright bg-surface text-accent transition-all duration-500 group-hover:border-accent/50 group-hover:bg-accent/10">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mb-3 text-lg font-medium tracking-tight text-text">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {point.description}
                </p>
                <span className="absolute top-8 right-8 font-mono text-[10px] text-text-dim">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
          {/* Filler cell for grid balance */}
          <div className="hidden bg-bg lg:block" />
        </div>
      </div>
    </section>
  );
}