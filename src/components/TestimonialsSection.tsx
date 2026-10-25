import { useState, useRef } from 'react';
import { TESTIMONIALS } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';
import { motion } from 'framer-motion';
import { Quote, ShieldCheck, Zap, Target, ArrowLeft, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Calculate active dot based on scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const scrollPosition = el.scrollLeft;
    
    const firstChild = el.firstElementChild as HTMLElement;
    if (!firstChild) return;
    
    // Calculate based on the first card's actual width + gap
    const cardWidth = firstChild.offsetWidth + 24; // 24 is the gap-6
    const index = Math.round(scrollPosition / cardWidth);
    
    setActiveIdx(Math.min(index, Math.max(0, TESTIMONIALS.length - 1)));
  };

  // Scroll to a specific card (used by desktop arrows)
  const scrollToCard = (idx: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const firstChild = el.firstElementChild as HTMLElement;
    if (!firstChild) return;
    
    const cardWidth = firstChild.offsetWidth + 24;
    el.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
  };

  if (TESTIMONIALS.length === 0) {
    // ... (Your existing fallback code remains here, I didn't touch it)
    return null; 
  }

  return (
    <section id="process" className="relative py-2 md:py-8">
      <div className="container-main relative">
        
        {/* Section Header */}
        <div className="mb-4 max-w-3xl">
          <h2 className="mb-2 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="What Clients Say" />
          </h2>
        </div>

        {/* ═══ CAROUSEL WRAPPER ═══ */}
        <div className="relative group/carousel">
          
          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex w-[85vw] shrink-0 snap-start flex-col justify-between rounded-2xl border border-border bg-surface/20 p-6 transition-all duration-500 hover:border-accent/30 hover:bg-surface/40 sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] md:p-8"
              >
                <div className="mb-2 flex items-center gap-4">
                  <Quote className="h-6 w-6 shrink-0 text-accent transition-transform duration-500 group-hover:scale-110" />
                  <div>
                    <p className="text-sm font-medium text-white">{t.author}</p>
                    <p className="mt-0.5 font-mono text-[10px] tracking-wider text-text-muted uppercase">
                      {t.role}{t.company ? ` · ${t.company}` : ''}
                    </p>
                  </div>
                </div>
                
                <footer className="mt-auto border-t border-border/50 pt-5">
                  <p className="text-[15px] leading-relaxed text-text">
                    "{t.quote}"
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>

          {/* ═══ DESKTOP ARROWS (Centered on Edges) ═══ */}
          <button
            onClick={() => scrollToCard(Math.max(0, activeIdx - 1))}
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-border bg-bg/80 text-silver shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-silver hover:text-white disabled:opacity-0 disabled:pointer-events-none md:flex"
            disabled={activeIdx === 0}
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => scrollToCard(Math.min(TESTIMONIALS.length - 1, activeIdx + 1))}
            className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-border bg-bg/80 text-silver shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-silver hover:text-white disabled:opacity-0 disabled:pointer-events-none md:flex"
            disabled={activeIdx === TESTIMONIALS.length - 1}
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

        </div>

        {/* ═══ MOBILE INDICATORS ONLY ═══ */}
        <div className="mt-6 flex flex-col items-center gap-3 md:hidden">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
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