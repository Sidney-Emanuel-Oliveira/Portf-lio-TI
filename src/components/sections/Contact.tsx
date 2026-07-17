import { Mail, Globe, AtSign } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import SpotlightCard from '../effects/SpotlightCard';

const iconMap: Record<string, React.ReactNode> = {
  mail: <Mail size={18} />,
  linkedin: <Globe size={18} />,
  github: <AtSign size={18} />,
};

export default function Contact() {
  return (
    <Section id="contato">
      <SectionTitle subtitle="Estou disponível para oportunidades de estágio e posições júnior em desenvolvimento de software, Back-end, Full Stack, Inteligência Artificial e Big Data. Também tenho interesse em colaborar em projetos que contribuam para meu crescimento técnico e profissional.">
        Contato
      </SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">
        {portfolioData.contacts.map((contact) => (
          <SpotlightCard
            key={contact.label}
            className="rounded-xl border border-border-subtle bg-bg-surface p-6 transition-all duration-300 hover:border-border-hover"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {iconMap[contact.icon] || <AtSign size={18} />}
              </div>
              <h3 className="text-sm font-semibold text-text-primary">
                {contact.label}
              </h3>

              {contact.enabled ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="mt-2 text-sm text-text-tertiary">
                  {contact.value}
                </p>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}