import { motion } from 'framer-motion';
import { Award, CheckCircle2, Users, Briefcase } from 'lucide-react';
import { AnimatedText } from './ui/AnimatedText';

const STATS = [
  { value: '2Y+',   label: 'Experience',  icon: Award },
  { value: '54+',  label: 'Projects',  icon: Briefcase },
  { value: '100%', label: 'On-Time',  icon: CheckCircle2 },
  { value: '25+',  label: 'Clients',  icon: Users },
];

export function DiamondStats() {
  return (
    // ✅ Increased section padding to give the whole area more height
    <section id="process" className="relative overflow-hidden bg-bg pb-16 pt-2 md:pb-24 md:pt-8">      
      <div className="container-main relative z-10 w-full">

        {/* ═══ HEADER ═══ */}
        <div className="mb-2 max-w-3xl md:mb-2">
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="Numbers That Matter" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg text-text-muted"
          >
            A track record built on reliability, speed, and delivering exactly what was promised.
          </motion.p>
        </div>        

        {/* ✅ Increased top margin (mt-20) to push the diamonds down from the header */}
        <div className="mx-auto mt-20 flex w-full max-w-[400px] items-center justify-center gap-0.15 md:mt-24 md:max-w-4xl md:gap-4">
          
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            
            // ✅ Increased the vertical offset to stretch the wave further
            const waveOffset = i % 2 === 0 ? 'translate-y-6 md:translate-y-16' : '-translate-y-10 md:-translate-y-16';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`
                  group relative flex h-23 w-23 shrink-0 items-center justify-center
                  border border-white/10 bg-gradient-to-br from-surface/90 to-bg shadow-2xl transition-all duration-500 hover:border-accent/40
                  sm:h-28 sm:w-28 md:h-40 md:w-40
                  ${waveOffset}
                `}
              >
                {/* Neon Glow */}
                <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content wrapper (Rotated back to upright) */}
                <div className="relative z-10 flex -rotate-45 flex-col items-center justify-center p-1 text-center">
                  
                  {/* Glowing Icon Container */}
                  <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-transform duration-500 group-hover:scale-110 sm:mb-2 sm:h-9 sm:w-9 md:mb-3 md:h-12 md:w-12">
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6" strokeWidth={1.5} />
                  </div>
                  
                  <span className="text-base font-bold tracking-tight text-white sm:text-xl md:text-3xl">
                    {stat.value}
                  </span>
                  
                  <span className="mt-0.5 text-[7px] font-medium tracking-wider text-text-muted uppercase sm:text-[9px] md:text-[11px]">
                    {stat.label}
                  </span>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}