import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/content';
import { AnimatedText } from './ui/AnimatedText';
import { cn } from '@/lib/utils';

const CATEGORY_TAGLINES: Record<string, string> = {
  'Development': 'Building robust, scalable digital products.',
  'AI & Data': 'Turning raw data into intelligent systems.',
  'Design': 'Crafting intuitive, user-first experiences.',
  'Marketing': 'Driving growth through strategy and content.',
};


export function SkillsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCategory = SKILL_CATEGORIES[activeIdx];

  return (
    <section id="about" className="relative py-2 md:py-8">
      <div className="container-main">
        
        {/* Section header */}
        <div className="mb-6 max-w-3xl md:mb-2">
          <h2 className="mb-4 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="Tools of the Trade" />
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            A curated stack of technologies, frameworks, and creative tools I use to bring ideas to life.
          </p>
        </div>

        {/* Mobile Category Tabs */}
        <div className="mb-8 flex w-full justify-between gap-1.5 pb-2 lg:hidden">
          {SKILL_CATEGORIES.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveIdx(i)}
              className={cn(
                'flex-1 whitespace-nowrap rounded-full px-2.5 py-2 text-center font-mono text-[9px] tracking-wide uppercase transition-colors',
                activeIdx === i 
                  ? 'bg-accent text-bg' 
                  : 'border border-border bg-surface/50 text-text-muted'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Main grid: categories + orbit */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:gap-20">
          
          {/* LEFT — Category selector (Desktop only) */}
          <div className="hidden lg:block">
            <ul className="space-y-1">
              {SKILL_CATEGORIES.map((cat, i) => (
                <li key={cat.name}>
                  <button
                    onClick={() => setActiveIdx(i)}
                    className={cn(
                      'group flex w-full items-start justify-between border-b border-border py-5 text-left transition-colors duration-300',
                      activeIdx === i ? 'text-text' : 'text-text-dim hover:text-text-muted'
                    )}
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-1 font-mono text-[11px] text-accent">
                        0{i + 1}
                      </span>
                      <div>
                        <span className="text-xl font-medium tracking-tight md:text-2xl">
                          {cat.name}
                        </span>
                        <p className={cn(
                          "mt-1 text-sm tracking-wide transition-colors duration-300",
                          activeIdx === i ? 'text-text-muted' : 'text-text-dim group-hover:text-text-muted'
                        )}>
                          {CATEGORY_TAGLINES[cat.name] || 'Explore my capabilities in this field.'}
                        </p>
                      </div>
                    </span>
                    <motion.span
                      animate={{
                        opacity: activeIdx === i ? 1 : 0,
                        x: activeIdx === i ? 0 : -8,
                      }}
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Orbital visualization */}
          <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
            
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
            <div className="absolute inset-0 m-auto flex h-24 w-24 items-center justify-center rounded-full border border-accent/40 bg-accent/5 backdrop-blur-sm lg:h-32 lg:w-32">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeCategory.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="px-2 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-accent lg:px-3 lg:text-[11px]"
                >
                  {activeCategory.name}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Skill nodes */}
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
                  const radius = 36; 
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
                      className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full border border-border-bright bg-surface/80 px-2.5 py-1.5 text-center font-mono text-[9px] tracking-wide text-text-muted backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-text lg:px-3 lg:text-[11px]"
                    >
                      {skill}
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}