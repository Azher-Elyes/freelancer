import { motion } from 'framer-motion';
import { MapPin, Circle } from 'lucide-react';
import { ABOUT, SITE } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="container-main">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface/40">
              {/* Abstract portrait placeholder */}
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-16 rounded-full border border-accent/20"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-24 rounded-full border border-border-bright"
                  />
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-accent/40 bg-accent/5 backdrop-blur-sm">
                    <span className="font-mono text-3xl tracking-tight text-accent">E</span>
                  </div>
                </div>
              </div>
              {/* Corner labels */}
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-text-dim uppercase">
                Portrait
              </div>
              <div className="absolute right-4 bottom-4 font-mono text-[10px] tracking-widest text-text-dim uppercase">
                01 / 01
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <SectionLabel number="07" label="About" className="mb-6" />
            <h2 className="mb-8 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
              <AnimatedText text="Behind the Work" />
            </h2>

            {ABOUT.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className="mb-5 max-w-lg text-lg leading-relaxed text-text-muted"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10"
            >
              <p className="mb-4 font-mono text-[10px] tracking-widest text-text-dim uppercase">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {ABOUT.expertise.map((e) => (
                  <span
                    key={e}
                    className="rounded-full border border-border-bright bg-surface/50 px-4 py-1.5 text-xs text-text-muted"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <p className="mb-4 font-mono text-[10px] tracking-widest text-text-dim uppercase">
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-text-muted">
                {ABOUT.tools.map((t, i) => (
                  <span key={t} className="flex items-center gap-2">
                    {i > 0 && <span className="text-border-bright">/</span>}
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Location / availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-8"
            >
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin className="h-4 w-4 text-accent" />
                {SITE.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                {SITE.availability}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}