import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';

const BUILD_ITEMS = [
  { title: 'Business Automation', description: 'Replace repetitive manual work with intelligent workflows.' },
  { title: 'Business Dashboard', description: 'Turn complex data into clear decisions.' },
  { title: 'Web Application', description: 'Build a professional digital platform around your business.' },
  { title: 'Mobile Application', description: "Put your service directly into your customers' hands." },
  { title: 'Brand Identity', description: 'Create a visual identity people recognize.' },
  { title: 'UI/UX Experience', description: 'Turn complex products into simple experiences.' },
  { title: 'Marketing System', description: 'Build a digital presence designed to attract and convert.' },
  { title: 'CAD / Product Design', description: 'Transform technical concepts into precise digital designs.' },
];

export function BuildSection() {
  return (
    <section id="build" className="relative py-28 md:py-40">
      <div className="container-main">
        <div className="mb-16 max-w-3xl">
          <SectionLabel number="03" label="What I Can Build" className="mb-6" />
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
            <AnimatedText text="From Problem to Solution" />
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BUILD_ITEMS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 transition-all duration-500 hover:border-accent/30 hover:bg-surface/60"
            >
              {/* Animated preview */}
              <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-all duration-700 group-hover:bg-accent/15" />

              <div className="relative z-10">
                <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-lg border border-border-bright bg-bg/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>
                <h3 className="mb-2 text-base font-medium tracking-tight text-text">
                  {item.title}
                </h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}