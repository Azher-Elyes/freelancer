import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { WHY_POINTS } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';

export function WhySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardWidth = el.scrollWidth / WHY_POINTS.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIdx(Math.min(index, WHY_POINTS.length - 1));
  };

  const scrollToCard = (idx: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardWidth = el.scrollWidth / WHY_POINTS.length;
    el.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
  };

  return (
    <section id="process" className="relative py-2 md:py-8">
      <div className="container-main">
        
        {/* Header */}
        <div className="mb-2 max-w-3xl md:mb-6">
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

        {/* Desktop Grid (Hidden on mobile) */}
        <div className="hidden gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid md:grid-cols-2 lg:grid-cols-3">
          {WHY_POINTS.map((point, i) => {
            const Icon = (Icons[point.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) ?? Icons.Sparkles;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between bg-bg p-8 transition-colors duration-500 hover:bg-surface/60 md:p-10"
              >
                <div>
                  {/* ✅ Grouped Icon + Title */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-bright bg-surface text-accent transition-all duration-500 group-hover:border-accent/50 group-hover:bg-accent/10">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg font-medium tracking-tight text-text">
                      {point.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-text-muted">
                    {point.description}
                  </p>
                </div>

                {/* ✅ Number moved to bottom right to avoid overlapping title */}
                <span className="absolute bottom-8 right-8 font-mono text-[10px] text-text-dim md:bottom-10 md:right-10">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
          <div className="hidden bg-bg lg:block" />
        </div>

        {/* Mobile Bento Carousel (Hidden on desktop) */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {WHY_POINTS.map((point, i) => {
              const Icon = (Icons[point.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) ?? Icons.Sparkles;
              const isActive = activeIdx === i;

              return (
                <div
                  key={point.title}
                  /* ✅ Design: Active card is wider, inactive cards peek in */
                  className={`group relative flex shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all duration-500 ${
                    isActive 
                      ? 'w-[85vw] border-accent/40 bg-surface/40 shadow-2xl shadow-accent/5' 
                      : 'w-[65vw] border-border bg-surface/10'
                  }`}
                >
                  <div>
                    {/* ✅ Icon + Title Grouped on same line */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500 ${
                        isActive ? 'border-accent/50 bg-accent/10 text-accent' : 'border-border-bright bg-bg/50 text-text-dim'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className={`text-lg font-medium tracking-tight transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-text-muted'
                      }`}>
                        {point.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed transition-all duration-500 ${
                      isActive ? 'text-text-muted line-clamp-none' : 'text-text-dim line-clamp-2'
                    }`}>
                      {point.description}
                    </p>
                  </div>

                  {/* Number (Bottom right) */}
                  <div className="mt-6 flex justify-end">
                    <span className={`font-mono text-[10px] ${isActive ? 'text-accent' : 'text-text-dim'}`}>
                      0{i + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {WHY_POINTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to reason ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIdx === idx ? 'w-8 bg-accent' : 'w-1.5 bg-border-bright'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}