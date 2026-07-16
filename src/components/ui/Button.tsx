import { cn } from '../../utils/cn';

type Variant = 'primary' | 'outlined' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-lg';

  const variants: Record<Variant, string> = {
    primary: 'bg-accent text-bg-primary hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98]',
    outlined: 'border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 active:scale-[0.98]',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated active:scale-[0.98]',
  };

  const sizes: Record<Size, string> = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
  };

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}