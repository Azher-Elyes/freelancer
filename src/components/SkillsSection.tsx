import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';
import { cn } from '@/lib/utils';

export function SkillsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="skills" className="relative py-28 md:py-40">
      <div className="container-main">
        <div className="mb-16 max-w-3xl">
          <SectionLabel number="08" label="Skills & Technology" className="mb-6" />
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="Tools of the Trade" />
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          {/* Category selector */}
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
                      <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                      <span className="text-xl font-medium tracking-tight md:text-2xl">
                        {cat.name}
                      </span>
                    </span>
                    <motion.span
                      animate={{ 
                        opacity: activeIdx === i ? 1 : 0,
                        x: activeIdx === i ? 0 : -8 
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills display */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-3"
              >
                {SKILL_CATEGORIES[activeIdx].skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className={cn(
                      'rounded-full border px-5 py-3 font-medium tracking-tight transition-all duration-300',
                      i === 0
                        ? 'border-accent/50 bg-accent/10 text-text text-lg'
                        : 'border-border-bright bg-surface/50 text-text-muted hover:border-accent/30 hover:text-text text-base'
                    )}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Decorative labels */}
            <div className="pointer-events-none absolute right-0 bottom-0 font-mono text-[10px] tracking-widest text-text-dim uppercase">
              {SKILL_CATEGORIES[activeIdx].skills.length} items
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}