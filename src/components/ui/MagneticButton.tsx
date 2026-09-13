import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  strength?: number;
}

export function MagneticButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const handleMove = (e: MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-bright border border-accent/40',
    secondary: 'bg-transparent text-text border border-border-bright hover:border-accent/60 hover:bg-accent/5',
    ghost: 'bg-transparent text-text-muted hover:text-text border border-transparent',
  };

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.6 }}
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-tight',
        'transition-colors duration-300 will-change-transform',
        variants[variant],
        className
      )}
    >
      {children}
    </Comp>
  );
}