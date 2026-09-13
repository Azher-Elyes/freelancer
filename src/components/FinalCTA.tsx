import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from './ui/AnimatedText';
import { MagneticButton } from './ui/MagneticButton';
import { scrollTo } from '@/hooks/useSmoothScroll';

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden py-32 md:py-48"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-accent/10 blur-[140px]" />
      </motion.div>

      {/* Floating particles */}
      <Particles />

      <div className="container-main relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 font-mono text-xs tracking-[0.2em] text-accent uppercase"
        >
          Have an Idea?
        </motion.p>

        <h2 className="mb-8 text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] font-medium tracking-[-0.04em]">
          <AnimatedText text="Let's build something" as="span" className="block" />
          <span className="block text-gradient">
            <AnimatedText text="great." as="span" delay={0.3} />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-12 max-w-xl text-lg text-text-muted"
        >
          Tell me what you're trying to achieve. We'll figure out the right way to make it happen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <MagneticButton
            onClick={() => scrollTo('#project-form')}
            variant="primary"
            className="group !px-8 !py-4 !text-base"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <p className="font-mono text-[11px] tracking-widest text-text-dim uppercase">
            Typically responds within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent/40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}