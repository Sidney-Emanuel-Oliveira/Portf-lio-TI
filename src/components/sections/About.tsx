import { portfolioData } from '../../data/portfolio';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  const { about } = portfolioData;

  return (
    <Section id="sobre">
      <SectionTitle subtitle={about.subtitle}>
        {about.title}
      </SectionTitle>
      <div className="grid gap-10 md:grid-cols-5">
        {/* Foto real */}
        <div className="flex items-center justify-center md:col-span-2">
          <div className="relative">
            {/* Glow decorativo atrás da foto */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 via-accent-alt/10 to-transparent opacity-60 blur-2xl" />

            {/* Moldura com gradiente */}
            <div className="relative rounded-2xl bg-gradient-to-br from-accent/30 via-accent-alt/20 to-transparent p-1">
              <div className="overflow-hidden rounded-xl bg-bg-primary">
                <img
                  src={portfolioData.photo}
                  alt={portfolioData.photoAlt}
                  className="h-64 w-64 object-cover md:h-72 md:w-72"
                />
              </div>
            </div>

            {/* Detalhe decorativo canto */}
            <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full border border-accent/20 bg-accent/5 blur-sm" />
          </div>
        </div>

        {/* Informações */}
        <div className="md:col-span-3">
          <div className="space-y-4 leading-relaxed text-text-secondary">
            {about.presentation.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {about.details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-lg border border-border-subtle bg-bg-surface/50 px-4 py-3"
              >
                <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
                  {detail.label}
                </span>
                <p className="mt-1 text-sm font-medium text-text-primary">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}