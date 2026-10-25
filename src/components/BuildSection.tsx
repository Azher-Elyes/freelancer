import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { NEEDS } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';

export function BuildSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Calculate which card is currently in view
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const scrollPosition = el.scrollLeft;
    const cardWidth = el.scrollWidth / NEEDS.length;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveIdx(Math.min(index, NEEDS.length - 1));
  };

  return (
    <section id="services" className="relative py-2 md:py-8">
      <div className="container-main">
        
        {/* Header */}
        <div className="mb-6 max-w-3xl">
          <SectionLabel number="02" label="What I Can Build" className="mb-6" />
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="From Problem to Solution" />
          </h2>
          <p className="max-w-xl text-lg text-text-muted">
            Tell me what you're trying to achieve. I'll help you find the right solution.
          </p>
        </div>

        {/* ═══ CAROUSEL (Mobile) / GRID (Desktop) ═══ */}
        <div 
          onScroll={handleScroll}
          className="flex w-full gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
        >
          {NEEDS.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string; strokeWidth?: number }>) ?? Icons.Sparkles;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                /* Mobile: Card width and snap | Desktop: Auto width for grid */
                className="group relative flex w-[85vw] max-w-[320px] shrink-0 snap-start cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 transition-all duration-500 hover:border-accent/30 hover:bg-surface/60 sm:w-auto sm:max-w-none sm:shrink"
              >
                {/* Animated preview glow */}
                <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-all duration-700 group-hover:bg-accent/15" />

                <div className="relative z-10">
                  {/* ✅ Grouped Icon and Title */}
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-accent transition-colors duration-500 group-hover:border-accent/50 group-hover:bg-accent/10">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-medium tracking-tight text-text">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Description drops down below */}
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>

                {/* Abstract line decoration */}
                <svg className="relative z-10 mt-6 h-8 w-full" viewBox="0 0 200 30" preserveAspectRatio="none" aria-hidden="true">
                  <motion.path
                    d="M0 25 Q 50 5, 100 15 T 200 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border-bright transition-colors duration-500 group-hover:text-accent/60"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 + (i % 4) * 0.1 }}
                  />
                </svg>
              </motion.article>
            );
          })}
        </div>

        {/* ═══ MOBILE SCROLL INDICATORS ═══ */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:hidden">
          <div className="flex items-center gap-2">
            {NEEDS.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIdx === idx
                    ? 'w-8 bg-accent'
                    : 'w-1.5 bg-border-bright'
                }`}
              />
            ))}
          </div>
          <p className="font-mono text-[10px] tracking-widest text-text-dim uppercase animate-pulse">
            Swipe to explore
          </p>
        </div>

      </div>
    </section>
  );
}