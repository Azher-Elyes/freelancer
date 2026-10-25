import { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';

export function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Calculate which card is currently in view
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const scrollPosition = el.scrollLeft;
    const cardWidth = el.scrollWidth / SERVICES.length;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveIdx(Math.min(index, SERVICES.length - 1));
  };

  return (
    <section id="services" className="relative py-2 md:py-8">
      <div className="container-main">
        
        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="What I Do Best" />
          </h2>
          <p className="max-w-xl text-lg text-text-muted">
            From strategy to execution delivering high-quality digital solutions tailored to your goals.
          </p>
        </div>

        {/* ═══ CAROUSEL (Mobile) / LIST (Desktop) ═══ */}
        <div 
          onScroll={handleScroll}
          className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-col md:gap-4 md:overflow-visible md:pb-0"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-[85vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-surface/30 transition-all duration-500 hover:border-accent/40 md:w-full md:max-w-none md:shrink md:rounded-3xl"
            >
              {/* Hover Glow */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" 
                style={{ background: `radial-gradient(600px at 20% 50%, ${service.accent}15, transparent 60%)` }} 
              />
              {/* Layout Grid */}
              <div className="relative grid gap-6 p-6 md:grid-cols-[1fr_1fr] md:items-center md:gap-2 md:p-6">
                
                {/* 1 & 2. Number + Title (Same line) + Tagline (Next line) */}
                <div>
                  {/* Number and Title on the same line */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <span 
                      className="shrink-0 font-mono text-2xl tracking-tight md:text-3xl transition-colors duration-500"
                      style={{ color: service.accent }}
                    >
                      {service.number}
                    </span>
                    <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Tagline drops down to the next line, aligned to the left */}
                  <p className="mt-2 text-sm text-text-muted md:mt-3 md:text-base">
                    {service.tagline}
                  </p>
                </div>

                {/* 3. Services List */}
                <div>
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {service.services.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-2.5 font-mono text-[11px] leading-relaxed tracking-wide text-text-dim"
                      >
                        <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-border-bright" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Animated Bottom Border */}
              <div 
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" 
                style={{ backgroundColor: service.accent }} 
              />
            </motion.div>
          ))}
        </div>

        {/* ═══ MOBILE SCROLL INDICATORS ═══ */}
        <div className="mt-6 flex flex-col items-center gap-3 md:hidden">
          <div className="flex items-center gap-2">
            {SERVICES.map((_, idx) => (
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