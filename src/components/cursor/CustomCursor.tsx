'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  // Detecta se o dispositivo suporta pointer:fine e hover:hover
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    setIsFinePointer(finePointer);
  }, []);

  // Rastreia posição do mouse
  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Ponto central segue instantaneamente
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFinePointer]);

  // Animação suave do círculo externo com requestAnimationFrame
  useEffect(() => {
    if (!isFinePointer) return;

    const animate = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;

      // Fator de suavidade (0.15 = acompanha rapidamente sem delay perceptível)
      ringPos.current.x += dx * 0.15;
      ringPos.current.y += dy * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [isFinePointer]);

  // Detecta hover em elementos interativos
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive =
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.tagName === 'SELECT' ||
      target.closest('[data-cursor-hover]') !== null ||
      target.closest('button') !== null ||
      target.closest('a') !== null;

    setIsHovering(isInteractive);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, [isFinePointer, handleMouseOver]);

  if (!isFinePointer || reducedMotion) return null;

  return (
    <>
      {/* Ponto central — segue instantaneamente */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999]"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-all duration-200 ${
            isHovering ? 'h-3 w-3' : 'h-1.5 w-1.5'
          }`}
        />
      </div>

      {/* Círculo externo — segue com suavidade via rAF */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998]"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ${
            isHovering
              ? 'h-10 w-10 border-accent/60'
              : 'h-7 w-7 border-accent/30'
          }`}
        />
      </div>
    </>
  );
}