import { useRef } from 'react';
import { cn } from '../../utils/cn';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export default function SpotlightCard({
  children,
  className,
  as: Tag = 'div',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    cardRef.current?.style.setProperty('--spotlight-x', `${localX}px`);
    cardRef.current?.style.setProperty('--spotlight-y', `${localY}px`);
    cardRef.current?.style.setProperty('--spotlight-opacity', '1');
  };

  const handleMouseLeave = () => {
    cardRef.current?.style.setProperty('--spotlight-opacity', '0');
  };

  return (
    <Tag
      ref={cardRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--spotlight-x': '50%',
        '--spotlight-y': '50%',
        '--spotlight-opacity': '0',
      } as React.CSSProperties}
    >
      {/* Camada de spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(400px circle at var(--spotlight-x) var(--spotlight-y), rgba(0, 212, 255, 0.08), transparent 60%)',
          opacity: 'var(--spotlight-opacity)',
        }}
      />
      {children}
    </Tag>
  );
}