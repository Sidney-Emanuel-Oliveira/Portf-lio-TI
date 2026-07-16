import { portfolioData } from '../../data/portfolio';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import SpotlightCard from '../effects/SpotlightCard';
import { GitBranch } from 'lucide-react';

export default function Projects() {
  return (
    <Section id="projetos">
      <SectionTitle subtitle="Projetos acadêmicos e pessoais que desenvolvi">
        Projetos
      </SectionTitle>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((project) => (
          <SpotlightCard
            key={project.title}
            className="group rounded-xl border border-border-subtle bg-bg-surface transition-all duration-300 hover:border-border-hover hover:bg-bg-elevated/50"
          >
            {/* Imagem placeholder */}
            <div className="aspect-video w-full overflow-hidden bg-bg-elevated">
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-70"
                loading="lazy"
              />
            </div>

            {/* Badge de destaque */}
            {project.featured && (
              <span className="absolute top-3 right-3 rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-semibold text-bg-primary uppercase tracking-wider">
                Destaque
              </span>
            )}

            {/* Conteúdo */}
            <div className="p-5">
              <h3 className="text-base font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-accent">{project.category}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2">
                {project.shortDescription}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outlined">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-text-tertiary transition-colors hover:text-text-primary"
                  >
                    <GitBranch size={14} />
                    Código
                  </a>
                )}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}