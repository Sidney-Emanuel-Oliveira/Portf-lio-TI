import { useEffect, useRef } from 'react';

// Paleta de cores para transição gradual — todas combinam com o tema escuro
const colorStops = [
  { pos: 0, top: '#0a0a0f', mid: '#0d0d1a', bottom: '#0a0a0f' },
  { pos: 0.2, top: '#0a0a14', mid: '#0f0f24', bottom: '#0d0d1a' },
  { pos: 0.4, top: '#0b0b18', mid: '#12122e', bottom: '#0f0f24' },
  { pos: 0.6, top: '#0d0d1a', mid: '#111128', bottom: '#0a0a18' },
  { pos: 0.8, top: '#0a0a18', mid: '#0e0e22', bottom: '#0d0d20' },
  { pos: 1, top: '#0a0a14', mid: '#0c0c20', bottom: '#0a0a0f' },
];

function lerpColor(c1: string, c2: string, t: number): string {
  const r1 = parseInt(c1.slice(1, 3), 16);
  const g1 = parseInt(c1.slice(3, 5), 16);
  const b1 = parseInt(c1.slice(5, 7), 16);
  const r2 = parseInt(c2.slice(1, 3), 16);
  const g2 = parseInt(c2.slice(3, 5), 16);
  const b2 = parseInt(c2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function getColorAtProgress(progress: number) {
  const clamped = Math.max(0, Math.min(1, progress));
  for (let i = 0; i < colorStops.length - 1; i++) {
    const a = colorStops[i];
    const b = colorStops[i + 1];
    if (clamped >= a.pos && clamped <= b.pos) {
      const t = (clamped - a.pos) / (b.pos - a.pos);
      return {
        top: lerpColor(a.top, b.top, t),
        mid: lerpColor(a.mid, b.mid, t),
        bottom: lerpColor(a.bottom, b.bottom, t),
      };
    }
  }
  return colorStops[colorStops.length - 1];
}

export function useScrollParallax() {
  const rafId = useRef<number>(0);
  const bodyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    bodyRef.current = document.body;

    const orb = document.getElementById('tech-orb');
    const orbSecondary = document.getElementById('tech-orb-secondary');
    const dots = document.getElementById('tech-dots');
    const gradient = document.getElementById('tech-scroll-gradient');

    const animate = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = scrollY / maxScroll;

      // Transição de cor do body — suave e gradual
      const colors = getColorAtProgress(progress);
      if (bodyRef.current) {
        bodyRef.current.style.background = `
          linear-gradient(
            180deg,
            ${colors.top} 0%,
            ${colors.mid} 50%,
            ${colors.bottom} 100%
          )
        `;
      }

      // Orbe principal — se move lentamente
      if (orb) {
        const moveY = progress * 120;
        const moveX = progress * 50;
        const scale = 1 + progress * 0.15;
        orb.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${scale})`;
      }

      // Orbe secundária — contramovimento
      if (orbSecondary) {
        const moveY = -progress * 80;
        const moveX = -progress * 30;
        const scale = 1 + (1 - progress) * 0.1;
        orbSecondary.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${scale})`;
      }

      // Dots — movimento sutil
      if (dots) {
        const moveY = progress * 50;
        const opacity = 0.6 + progress * 0.4;
        dots.style.transform = `translate3d(0, ${moveY}px, 0)`;
        dots.style.opacity = String(opacity);
      }

      // Gradiente decorativo
      if (gradient) {
        const opacity = 0.3 + progress * 0.7;
        gradient.style.opacity = String(opacity);
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);
}