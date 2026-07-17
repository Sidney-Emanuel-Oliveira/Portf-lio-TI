import { portfolioData } from '../../data/portfolio';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import SpotlightCard from '../effects/SpotlightCard';

export default function Skills() {
  return (
    <Section id="tecnologias">
      <SectionTitle subtitle="Tecnologias, ferramentas e conceitos que utilizo e estudo">
        Tecnologias
      </SectionTitle>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.skills.map((category) => (
          <SpotlightCard
            key={category.title}
            className="rounded-xl border border-border-subtle bg-bg-surface p-6 transition-all duration-300 hover:border-border-hover"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold tracking-wider text-accent uppercase">
                {category.title}
              </h3>
              {category.highlight && (
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
                  {category.highlight}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2.5">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-sm text-text-primary">{skill.name}</span>
                  {skill.level && (
                    <span className="text-xs text-text-tertiary">{skill.level}</span>
                  )}
                </div>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}