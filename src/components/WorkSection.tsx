import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/content';
import { SectionLabel } from './ui/SectionLabel';
import { AnimatedText } from './ui/AnimatedText';
import { cn } from '@/lib/utils';

export function WorkSection() {
  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="container-main">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel number="04" label="Selected Work" className="mb-6" />
            <h2 className="mb-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em]">
              <AnimatedText text="Selected Work" />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-lg text-text-muted"
            >
              A selection of projects, experiments and solutions.
            </motion.p>
          </div>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  const isLarge = project.size === 'large';
  const spans = isLarge ? 'md:col-span-7' : 'md:col-span-5';

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-border bg-surface/30 transition-all duration-500 hover:border-accent/30',
        spans,
        isLarge ? 'min-h-[420px]' : 'min-h-[340px]'
      )}
      data-cursor="hover"
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface to-bg">
        <img 
          src={`${import.meta.env.BASE_URL}work/${project.id}.png`}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-accent/0 transition-colors duration-700 group-hover:bg-accent/5" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="mb-3 flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase">
          <span className="text-accent">{project.category}</span>
          <span className="h-px w-6 bg-border-bright" />
          <span className="text-text-dim">{project.year}</span>
        </div>

        <h3 className={cn(
          'mb-3 font-medium tracking-tight text-text',
          isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
        )}>
          {project.title}
        </h3>

        <p className="mb-5 max-w-md text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        {/* Reveal on hover */}
        <div className="overflow-hidden">
          <motion.div
            initial={false}
            className="flex max-h-0 flex-col gap-3 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100"
          >
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border-bright px-3 py-1 font-mono text-[10px] tracking-wide text-text-dim"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="flex items-center gap-2 text-xs text-accent">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {project.result}
            </p>
          </motion.div>
        </div>

        <div className="mt-5 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-text-muted transition-colors duration-500 group-hover:text-accent">
          <span>View Project</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectVisual({ id }: { id: string }) {
  // Abstract, distinct visual per project — no stock images
  const variants: Record<string, JSX.Element> = {
    dashboard: (
      <div className="absolute inset-0 p-8">
        <div className="grid h-full grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="rounded-lg border border-border-bright/40 bg-surface/60 p-3"
            >
              <div className="mb-2 h-1 w-8 rounded-full bg-accent/40" />
              <div className="h-1 w-12 rounded-full bg-border-bright" />
            </motion.div>
          ))}
        </div>
      </div>
    ),
    ecommerce: (
      <div className="absolute inset-0 flex items-center justify-center gap-4 p-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="aspect-[3/4] w-24 rounded-xl border border-border-bright/40 bg-surface/60"
            style={{ transform: `translateY(${i === 1 ? -20 : 0}px)` }}
          />
        ))}
      </div>
    ),
    campaign: (
      <div className="absolute inset-0 p-8">
        <svg className="h-full w-full" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d="M0 160 Q 100 80, 200 120 T 400 40"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M0 180 Q 120 140, 220 150 T 400 90"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3 }}
          />
        </svg>
      </div>
    ),
    brand: (
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-40 w-40"
        >
          <div className="absolute inset-0 rounded-full border border-accent/40" />
          <div className="absolute inset-4 rounded-full border border-accent/30" />
          <div className="absolute inset-8 rounded-full border border-accent/20" />
          <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-gradient-to-br from-accent to-blue opacity-40 blur-md" />
          <div className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 border border-accent/40">
            <span className="font-mono text-xs text-accent">E</span>
          </div>
        </motion.div>
      </div>
    ),
  };

  return <div className="absolute inset-0">{variants[id] ?? null}</div>;
}