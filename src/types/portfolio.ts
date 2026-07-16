export interface PortfolioConfig {
  showAbout: boolean;
  showSkills: boolean;
  showProjects: boolean;
  showServices: boolean;
  showExperience: boolean;
}

export interface SocialLink {
  label: string;
  icon: string;
  value: string;
  href: string;
  enabled: boolean;
}

export interface Skill {
  name: string;
  level?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  participation: string;
  features: string[];
  technologies: string[];
  concepts: string[];
  learnings: string;
  status: string;
  image: string;
  alt: string;
  tags: string[];
  featured: boolean;
  links: {
    github?: string;
    demo?: string;
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  period: string;
  title: string;
  context: string;
  description: string;
}

export interface PortfolioData {
  config: PortfolioConfig;
  name: string;
  fullName: string;
  monogram: string;
  headerName: string;
  specialty: string;
  heroTag: string;
  heroDescription: string;
  status: string;
  opportunityTypes: string;
  photo: string;
  photoAlt: string;
  about: {
    title: string;
    subtitle: string;
    presentation: string;
    details: { label: string; value: string }[];
  };
  skills: SkillCategory[];
  projects: Project[];
  services: Service[];
  experiences: Experience[];
  contacts: SocialLink[];
  footerMessage: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    author: string;
    lang: string;
  };
}