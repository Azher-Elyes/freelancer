import { motion } from 'framer-motion';
import { MapPin, Circle, ArrowRight } from 'lucide-react'; // Added ArrowRight
import { ABOUT, SITE } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';

export function AboutSection() {
  return (
    <section id="about" className="relative py-2 md:py-10">
      <div className="container-main">
        <div className="grid gap-2 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          
          {/* Content (Left Side) */}
          <div>
            <SectionLabel number="07" label="About" className="mb-6" />
            
            <h2 className="mb-8 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
              <AnimatedText text="Behind the Work" />
            </h2>

            {/* Bio paragraphs */}
            {ABOUT.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className="mb-2 max-w-lg text-base leading-relaxed text-text-muted md:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* ✅ Seamless Portfolio Link */}
            {ABOUT.portfolioLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-10 max-w-lg"
              >
                <p className="text-base leading-relaxed text-text-muted md:text-lg">
                  {ABOUT.portfolioLink.text}{' '}
                  <a
                    href={ABOUT.portfolioLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    {ABOUT.portfolioLink.label}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </p>
              </motion.div>
            )}

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-2 md:mt-6"
            >
              <p className="mb-2 font-mono text-[10px] tracking-widest text-text-dim uppercase md:mb-2">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] text-text-muted md:text-xs">
                {ABOUT.tools.map((t, i) => (
                  <span key={t} className="flex items-center gap-3">
                    {i > 0 && <span className="text-border-bright">/</span>}
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Location / Availability Combined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6 text-[13px] text-text-muted md:mt-10 md:gap-4 md:pt-8 md:text-sm"
            >
              <div className="flex items-center gap-2">
                <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                {SITE.availability}
              </div>
              <span className="h-3 w-px bg-border-bright" />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                {SITE.location}
              </div>
              
            </motion.div>
          </div>

          {/* Portrait (Right Side) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-last w-full lg:h-full"
          >
            {/* ✅ aspect-[4/5] for mobile, h-full for desktop */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface/40 lg:aspect-auto lg:h-full">
              <div className="pointer-events-none absolute -inset-8 -z-10 bg-accent/10 blur-[80px]" />
              <img
                src={`${import.meta.env.BASE_URL}portrait.jpg`}
                alt="Mohamed Elyes Azher — Digital Solutions Engineer"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}