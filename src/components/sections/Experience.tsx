import { portfolioData } from '../../data/portfolio';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';

export default function Experience() {
  return (
    <Section id="trajetoria">
      <SectionTitle subtitle="Minha formação e os primeiros passos da minha carreira">
        Trajetória
      </SectionTitle>
      <div className="relative">
        {/* Linha vertical da timeline */}
        <div className="absolute left-4 top-0 h-full w-px bg-border-subtle md:left-1/2 md:-translate-x-px" />

        <div className="space-y-8">
          {portfolioData.experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row"
              >
                {/* Ponto na timeline */}
                <div className="absolute left-4 z-10 mt-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-bg-primary md:left-1/2" />

                {/* Conteúdo */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}
                >
                  <div
                    className={`rounded-xl border border-border-subtle bg-bg-surface p-5 transition-all duration-300 hover:border-border-hover ${
                      isLeft ? '' : 'md:ml-auto'
                    }`}
                  >
                    <span className="text-xs font-medium tracking-wider text-accent uppercase">
                      {exp.period}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-text-primary">
                      {exp.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-text-tertiary">
                      {exp.context}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Lado vazio para alinhamento */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>

        {/* Link para LinkedIn */}
        <div className="mt-10 text-center">
          <a
            href="https://www.linkedin.com/in/sidney-emanuel-107793352/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-accent"
          >
            Ver formação completa no LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}