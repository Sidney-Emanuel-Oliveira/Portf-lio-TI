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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {about.details.map((detail) => (
          <div
            key={detail.label}
            className="rounded-xl border border-border-subtle bg-bg-surface p-6 transition-all duration-300 hover:border-border-hover"
          >
            <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
              {detail.label}
            </span>
            <p className="mt-2 text-sm font-medium text-text-primary whitespace-pre-line">
              {detail.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border-subtle bg-bg-surface/50 p-8 backdrop-blur-sm">
        <div className="max-w-3xl space-y-4 text-text-secondary">
          {about.presentation.split('\n\n').map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}