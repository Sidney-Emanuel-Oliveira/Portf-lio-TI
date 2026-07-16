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
        {/* Placeholder foto */}
        <div className="flex items-center justify-center md:col-span-2">
          <div className="flex h-64 w-64 items-center justify-center rounded-2xl border border-border-subtle bg-bg-surface md:h-72 md:w-72">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-bg-elevated">
                <span className="text-2xl font-bold text-text-tertiary">
                  {portfolioData.name.charAt(0)}
                </span>
              </div>
              <p className="text-xs text-text-tertiary">Sua foto</p>
            </div>
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