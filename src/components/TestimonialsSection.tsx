import { TESTIMONIALS } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  // Hide section entirely if no real testimonials provided
  if (TESTIMONIALS.length === 0) {
    return (
      <section id="testimonials" className="relative py-28 md:py-40">
        <div className="container-main">
          <div className="mb-16 max-w-3xl">
            <SectionLabel number="09" label="Testimonials" className="mb-6" />
            <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
              <AnimatedText text="What Clients Say" />
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex min-h-[240px] items-center justify-center rounded-3xl border border-dashed border-border-bright bg-surface/20 p-10"
          >
            <div className="text-center">
              <Quote className="mx-auto mb-4 h-8 w-8 text-text-dim" />
              <p className="mb-2 font-mono text-xs tracking-widest text-text-dim uppercase">
                Testimonials coming soon
              </p>
              <p className="max-w-md text-sm text-text-muted">
                Real client feedback will appear here once available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // When real testimonials exist:
  return (
    <section id="testimonials" className="relative py-28 md:py-40">
      <div className="container-main">
        <div className="mb-16 max-w-3xl">
          <SectionLabel number="09" label="Testimonials" className="mb-6" />
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="What Clients Say" />
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-surface/30 p-8"
            >
              <Quote className="mb-6 h-6 w-6 text-accent" />
              <p className="mb-6 text-base leading-relaxed text-text">"{t.quote}"</p>
              <footer>
                <p className="text-sm font-medium text-text">{t.author}</p>
                <p className="text-xs text-text-muted">
                  {t.role}{t.company ? ` · ${t.company}` : ''}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}