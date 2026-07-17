import { portfolioData } from '../../data/portfolio';
import Button from '../ui/Button';
import { ExternalLink } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center pt-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 md:flex-row md:px-8">
        {/* Texto — lado esquerdo */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          {/* Tag decorativa */}
          <span className="mb-6 rounded-full border border-accent/20 bg-accent/[0.03] px-4 py-1.5 text-xs font-medium tracking-wider text-accent uppercase">
            {portfolioData.heroTag}
          </span>

          {/* Título principal */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Olá, eu sou{' '}
            <span className="bg-gradient-to-r from-accent to-accent-alt bg-clip-text text-transparent">
              Sidney
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-4 text-lg font-medium text-text-primary md:text-xl">
            {portfolioData.specialty}
          </p>

          {/* Descrição */}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
            {portfolioData.heroDescription}
          </p>

          {/* Status */}
          <span className="mt-6 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            {portfolioData.status}
          </span>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleScroll('#projetos')}
            >
              Ver projetos
            </Button>
            <Button
              variant="outlined"
              size="lg"
              onClick={() => window.open('https://github.com/Sidney-Emanuel-Oliveira', '_blank', 'noopener,noreferrer')}
            >
              <ExternalLink size={18} />
              Ver GitHub
            </Button>
          </div>
        </div>

        {/* Foto — lado direito */}
        <div className="flex shrink-0 items-center justify-center md:w-80 lg:w-96">
          <div className="relative">
            {/* Glow decorativo atrás da foto */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 via-accent-alt/10 to-transparent opacity-60 blur-2xl" />

            {/* Moldura com gradiente */}
            <div className="relative rounded-2xl bg-gradient-to-br from-accent/30 via-accent-alt/20 to-transparent p-1">
              <div className="overflow-hidden rounded-xl bg-bg-primary">
                <img
                  src={portfolioData.photo}
                  alt={portfolioData.photoAlt}
                  className="h-72 w-72 object-cover md:h-80 md:w-80 lg:h-96 lg:w-96"
                  loading="eager"
                  width={384}
                  height={384}
                />
              </div>
            </div>

            {/* Detalhe decorativo canto */}
            <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full border border-accent/20 bg-accent/5 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}