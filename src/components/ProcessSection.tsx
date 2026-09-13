import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 40%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative py-28 md:py-40">
      <div className="container-main">
        <div className="mb-16 max-w-3xl">
          <SectionLabel number="06" label="Process" className="mb-6" />
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="How We Work" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg text-text-muted"
          >
            A simple, transparent process from idea to launch.
          </motion.p>
        </div>

        {/* Desktop horizontal timeline */}
        <div ref={ref} className="relative hidden md:block">
          {/* Connecting line */}
          <div className="absolute top-[38px] left-0 right-0 h-px bg-border">
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-full origin-left bg-gradient-to-r from-accent to-accent-bright"
            />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Node */}
                <div className="relative mb-8 flex h-[76px] items-start">
                  <div className="relative flex h-[76px] w-[76px] items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-border-bright bg-bg transition-all duration-500 group-hover:border-accent/50" />
                    <div className="absolute inset-0 rounded-full bg-accent/0 transition-all duration-500 group-hover:bg-accent/5" />
                    <span className="relative z-10 font-mono text-sm text-text-muted transition-colors duration-500 group-hover:text-accent">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-medium tracking-tight text-text">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative md:hidden">
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-border">
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: 'top' }}
              className="h-full w-full bg-gradient-to-b from-accent to-accent-bright"
            />
          </div>

          <div className="space-y-10">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="relative flex gap-5 pl-0"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-bright bg-bg">
                  <span className="font-mono text-xs text-accent">{step.number}</span>
                </div>
                <div className="pt-1">
                  <h3 className="mb-1.5 text-base font-medium tracking-tight text-text">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}