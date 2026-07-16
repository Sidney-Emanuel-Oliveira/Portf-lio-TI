import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outlined';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-bg-elevated text-text-secondary border border-border-subtle',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    outlined: 'bg-transparent text-text-secondary border border-border-subtle',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-200',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}