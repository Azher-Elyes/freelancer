import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { AnimatedText } from './ui/AnimatedText';
import { MagneticButton } from './ui/MagneticButton';
import { HeroVisual } from './HeroVisual';
import { scrollTo } from '@/hooks/useSmoothScroll';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="pointer-events-none absolute -top-1/4 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-blue/10 blur-[120px]" />

      <motion.div style={{ y, opacity }} className="container-main relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs tracking-[0.2em] text-text-muted uppercase">
                Freelance Digital Studio
              </span>
            </motion.div>

            <h1 className="mb-8 text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.2] font-medium tracking-[-0.04em]">
              <AnimatedText text="Turn Ideas Into" as="span" className="block" delay={0.4} />
              <span className="block">
                <AnimatedText 
                  text="Digital Reality." 
                  as="span" 
                  delay={0.6} 
                  className="text-gradient" 
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 max-w-xl text-lg font-medium tracking-tight text-text-muted"
            >
              AI. Software. Marketing. Design. Built around your goals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-lg text-base leading-relaxed text-text-dim"
            >
              I help businesses turn ideas, problems and opportunities into digital products,
              intelligent solutions and creative experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                onClick={() => scrollTo('#contact')}
                variant="primary"
                className="group"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollTo('#work')}
                variant="secondary"
                strength={0.2}
              >
                Explore My Work
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => scrollTo('#build')} // Update this to your next section ID
          className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 text-text-dim transition-colors hover:text-text"
          aria-label="Scroll to next section"
        >          
          {/* Mouse Outline */}
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="relative flex h-8 w-5 justify-center rounded-full border-2 border-current pt-1.5">
              {/* Animated Scroll Wheel Dot */}
              <motion.div
                animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1.5 w-1 rounded-full bg-current"
              />
            </div>
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}