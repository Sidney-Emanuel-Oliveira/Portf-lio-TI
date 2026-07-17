import { portfolioData, navLinks } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent to-accent-alt text-xs font-bold text-white">
              {portfolioData.monogram}
            </span>
            <span className="text-sm font-medium text-text-secondary">
              {portfolioData.fullName}
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-text-tertiary transition-colors hover:text-text-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-text-tertiary">
            &copy; {currentYear} — {portfolioData.fullName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}