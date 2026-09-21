import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';
import { cn } from '@/lib/utils';

export function SkillsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCategory = SKILL_CATEGORIES[activeIdx];

  return (
    <section id="skills" className="relative py-28 md:py-40">
      <div className="container-main">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <SectionLabel number="08" label="Skills & Technology" className="mb-6" />
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="Tools of the Trade" />
          </h2>
        </div>

        {/* Main grid: categories + orbit */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:items-center">
          {/* LEFT — Category selector */}
          <div>
            <ul className="space-y-1">
              {SKILL_CATEGORIES.map((cat, i) => (
                <li key={cat.name}>
                  <button
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                    className={cn(
                      'group flex w-full items-center justify-between border-b border-border py-5 text-left transition-colors duration-300',
                      activeIdx === i ? 'text-text' : 'text-text-dim hover:text-text-muted'
                    )}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-accent">
                        0{i + 1}
                      </span>
                      <span className="text-xl font-medium tracking-tight md:text-2xl">
                        {cat.name}
                      </span>
                    </span>
                    <motion.span
                      animate={{
                        opacity: activeIdx === i ? 1 : 0,
                        x: activeIdx === i ? 0 : -8,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Orbital visualization */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* Decorative rings */}
            <div className="pointer-events-none absolute inset-0 rounded-full border border-border" />
            <div className="pointer-events-none absolute inset-[12%] rounded-full border border-border" />
            <div className="pointer-events-none absolute inset-[24%] rounded-full border border-accent/20" />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-accent/10"
            />

            {/* Center core — active category */}
            <div className="absolute inset-0 m-auto flex h-32 w-32 items-center justify-center rounded-full border border-accent/40 bg-accent/5 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeCategory.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="px-3 text-center font-mono text-[11px] tracking-[0.15em] text-accent uppercase"
                >
                  {activeCategory.name}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Skill nodes — computed positions around the circle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {activeCategory.skills.map((skill, i) => {
                  const total = activeCategory.skills.length;
                  const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
                  const radius = 42; // percent from center
                  const x = 50 + Math.cos(angle) * radius;
                  const y = 50 + Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-bright bg-surface/80 px-3 py-1.5 font-mono text-[11px] tracking-wide text-text-muted backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-text cursor-default"
                    >
                      {skill}
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Corner label */}
            <div className="pointer-events-none absolute right-0 bottom-0 font-mono text-[10px] tracking-widest text-text-dim uppercase">
              {activeCategory.skills.length} items
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}