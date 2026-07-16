import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border-subtle bg-bg-surface p-6 transition-all duration-300',
        hover && 'hover:border-border-hover hover:bg-bg-elevated/50',
        className
      )}
    >
      {children}
    </div>
  );
}