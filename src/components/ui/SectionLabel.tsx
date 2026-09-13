import { cn } from '@/lib/utils';

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3 text-xs font-mono tracking-widest text-text-muted uppercase', className)}>
      {number && <span className="text-accent">{number}</span>}
      <span className="h-px w-8 bg-border-bright" />
      <span>{label}</span>
    </div>
  );
}