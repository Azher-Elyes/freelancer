import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onLeave = () => { mx.set(0); my.set(0); };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [mx, my, reduced]);

  return (
    <div
      ref={ref}
      className="relative aspect-square w-full max-w-[560px] mx-auto"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full"
      >
        {/* Central panel — dashboard */}
        <FloatPanel
          className="absolute top-[12%] left-[8%] w-[70%]"
          delay={0}
          depth={60}
        >
          <div className="glass rounded-2xl border border-border-bright/60 p-5 shadow-2xl shadow-black/50">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
                  Dashboard
                </span>
              </div>
              <span className="font-mono text-[10px] text-text-dim">LIVE</span>
            </div>
            {/* Animated chart */}
            <div className="flex h-24 items-end gap-1.5">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent/30 to-accent"
                />
              ))}
            </div>
            <div className="mt-4 flex justify-between font-mono text-[10px] text-text-dim">
              <span>+248%</span>
              <span>growth</span>
            </div>
          </div>
        </FloatPanel>

        {/* Code fragment */}
        <FloatPanel
          className="absolute top-[6%] right-[4%] w-[42%]"
          delay={0.3}
          depth={90}
        >
          <div className="glass rounded-xl border border-border-bright/60 p-4 font-mono text-[10px] leading-relaxed shadow-xl shadow-black/40">
            <div className="mb-2 flex gap-1">
              <span className="h-2 w-2 rounded-full bg-red-500/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
              <span className="h-2 w-2 rounded-full bg-green-500/60" />
            </div>
            <p className="text-text-muted"><span className="text-accent">const</span> build <span className="text-blue">=</span> <span className="text-accent-bright">async</span> () <span className="text-blue">{'=>'}</span> {'{'}</p>
            <p className="pl-3 text-text-dim">await <span className="text-accent-bright">create</span>();</p>
            <p className="pl-3 text-text-dim">return <span className="text-accent">result</span>;</p>
            <p className="text-text-muted">{'}'}</p>
          </div>
        </FloatPanel>

        {/* AI orb */}
        <FloatPanel
          className="absolute bottom-[14%] left-[2%] w-[38%]"
          delay={0.5}
          depth={120}
        >
          <div className="glass rounded-xl border border-border-bright/60 p-4 shadow-xl shadow-black/40">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-accent/50"
                />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent to-blue opacity-60 blur-sm" />
                <div className="absolute inset-2 rounded-full bg-accent/80" />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-text-muted uppercase">AI</p>
                <p className="text-xs text-text">Processing</p>
              </div>
            </div>
          </div>
        </FloatPanel>

        {/* Mobile interface */}
        <FloatPanel
          className="absolute right-[6%] bottom-[6%] w-[30%]"
          delay={0.7}
          depth={80}
        >
          <div className="glass rounded-2xl border border-border-bright/60 p-3 shadow-xl shadow-black/40">
            <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-border-bright" />
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-accent/40" />
              <div className="h-1.5 w-3/4 rounded-full bg-border-bright" />
              <div className="h-1.5 w-1/2 rounded-full bg-border-bright" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + i * 0.08 }}
                  className="aspect-square rounded-md bg-surface border border-border"
                />
              ))}
            </div>
          </div>
        </FloatPanel>

        {/* Abstract geometry */}
        <FloatPanel
          className="absolute top-[42%] right-[-4%] w-[18%]"
          delay={0.9}
          depth={140}
        >
          <motion.div
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="aspect-square rounded-lg border border-accent/40 bg-accent/5"
          />
        </FloatPanel>

        {/* Glow behind */}
        <div className="absolute inset-0 -z-10 rounded-full bg-accent/10 blur-[100px]" />
      </motion.div>
    </div>
  );
}

function FloatPanel({
  children,
  className,
  delay = 0,
  depth = 60,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  depth?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 1 + delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transform: `translateZ(${depth}px)` }}
      className={className}
    >
      <motion.div
        animate={reduced ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6 + delay * 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}