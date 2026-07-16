import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, portfolioData } from '../../data/portfolio';
import { useScrollSection } from '../../hooks/useScrollSection';
import { cn } from '../../utils/cn';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.slice(1));
  const activeSection = useScrollSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-bg-primary/80 shadow-[0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        {/* Logo / Monograma */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#inicio');
          }}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-alt text-sm font-bold text-white">
            {portfolioData.monogram}
          </span>
          <span className="hidden sm:inline">{portfolioData.headerName}</span>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'text-text-primary'
                    : 'text-text-tertiary hover:text-text-secondary'
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Botão Contato + Menu Mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contato');
            }}
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-bg-primary transition-all duration-200 hover:bg-accent/90 md:inline-block"
          >
            Contato
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:text-text-primary md:hidden"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-bg-primary/95 backdrop-blur-xl transition-all duration-300 md:hidden',
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      >
        <nav className="flex flex-col items-center gap-2 px-6 pt-12">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  'w-full rounded-lg px-4 py-3 text-center text-lg font-medium transition-colors',
                  isActive
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-secondary hover:bg-bg-elevated hover:text-text-primary'
                )}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contato');
            }}
            className="mt-4 w-full rounded-lg bg-accent px-4 py-3 text-center text-lg font-medium text-bg-primary transition-colors hover:bg-accent/90"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}