import { useRef } from 'react';
import { useInView } from 'motion/react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">{children}</div>
    </section>
  );
}