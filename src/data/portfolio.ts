import type { PortfolioData } from '../types/portfolio';

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Contato', href: '#contato' },
] as const;

export const portfolioData: PortfolioData = {
  config: {
    showAbout: true,
    showSkills: true,
    showProjects: true,
    showServices: false,
    showExperience: true,
  },

  name: 'Sidney Oliveira',
  fullName: 'Sidney Emanuel Barbosa de Oliveira',
  monogram: 'S',
  headerName: 'Sidney Oliveira',
  specialty: 'Desenvolvedor de Software em Formação',
  heroTag: 'PORTFÓLIO • DESENVOLVIMENTO, IA E DADOS',
  heroDescription:
    'Construo aplicações com Java, Spring Boot, React e bancos de dados, enquanto aprofundo meus estudos em Inteligência Artificial e Big Data. Busco minha primeira oportunidade para contribuir em projetos reais e continuar evoluindo profissionalmente.',
  status: 'Disponível para estágio e oportunidades júnior',
  photo: '/retrato-portfolio.png',
  photoAlt: 'Retrato profissional de Sidney Emanuel Barbosa de Oliveira',

  about: {
    title: 'Sobre Mim',
    subtitle: 'Conheça um pouco sobre minha formação e meus objetivos',
    presentation:
      'Sou estudante do 4º período de Engenharia de Software e do 2º período de Big Data e Inteligência Artificial.\n\nDurante minha formação, venho desenvolvendo projetos envolvendo desenvolvimento de software, bancos de dados, aplicações web, APIs e programação orientada a objetos.\n\nTenho maior afinidade com desenvolvimento Back-end utilizando Java e Spring Boot. Também estudo tecnologias Front-end para compreender o ciclo completo de desenvolvimento de aplicações.\n\nParalelamente, aprofundo meus estudos em Inteligência Artificial, processamento de dados, Python, CUDA, RAPIDS e modelos de linguagem.\n\nBusco oportunidades em desenvolvimento de software, Back-end, Full Stack, Inteligência Artificial e Big Data, nas quais eu possa aplicar meus conhecimentos, colaborar com equipes e continuar evoluindo.',
    details: [
      { label: 'FORMAÇÃO', value: 'Engenharia de Software — 4º período\nBig Data e IA — 2º período' },
      { label: 'FOCO PRINCIPAL', value: 'Java, Spring Boot, APIs REST e bancos de dados' },
      { label: 'ÁREAS DE INTERESSE', value: 'Back-end, Full Stack, Inteligência Artificial e Big Data' },
      { label: 'LOCALIZAÇÃO', value: 'Goiânia — Goiás, Brasil' },
      { label: 'DISPONIBILIDADE', value: 'Estágio e oportunidades júnior' },
    ],
  },

  skills: [
    {
      title: 'Principais Tecnologias',
      highlight: 'Principais',
      skills: [
        { name: 'Java', level: 'Intermediário' },
        { name: 'Spring Boot' },
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'APIs REST' },
        { name: 'Maven' },
        { name: 'Programação Orientada a Objetos' },
      ],
    },
    {
      title: 'Desenvolvimento Web e Tecnologias Complementares',
      highlight: 'Complementares',
      skills: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'React' },
        { name: 'TailwindCSS' },
        { name: 'Vite' },
      ],
    },
    {
      title: 'Ferramentas e Ambiente',
      highlight: 'Ferramentas',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'IntelliJ IDEA' },
        { name: 'HeidiSQL', description: 'Ferramenta para gerenciamento e consulta de bancos de dados.' },
        { name: 'Docker', level: 'Em aprendizado' },
      ],
    },
    {
      title: 'Fundamentos',
      highlight: 'Fundamentos',
      skills: [
        { name: 'Banco de Dados' },
        { name: 'Estruturas de Dados' },
        { name: 'MVC' },
        { name: 'Git Flow' },
        { name: 'Engenharia de Software' },
      ],
    },
    {
      title: 'Inteligência Artificial e Dados',
      highlight: 'Em aprendizado',
      skills: [
        { name: 'Python', level: 'Básico' },
        { name: 'Inteligência Artificial' },
        { name: 'Big Data' },
        { name: 'Processamento de Dados' },
        { name: 'CUDA' },
        { name: 'RAPIDS' },
        { name: 'LLMs' },
        { name: 'IA Generativa' },
        { name: 'Prompt Engineering' },
      ],
    },
  ],

  projects: [
    {
      id: 'pdv-posto-combustivel',
      title: 'PDV Posto de Combustível',
      category: 'Aplicação Java com Back-end e interface desktop',
      shortDescription:
        'Sistema para gerenciamento de postos de combustíveis, com recursos relacionados a abastecimentos, estoque, funcionários, clientes, produtos, preços, custos e administração.',
      fullDescription:
        'Projeto acadêmico de um sistema de ponto de venda e gerenciamento para postos de combustível. A aplicação possui uma interface gráfica desenvolvida em Java Swing que se comunica com uma API REST criada com Spring Boot, utilizando PostgreSQL para persistência dos dados.',
      participation:
        'Projeto desenvolvido individualmente por Sidney Emanuel Barbosa de Oliveira, abrangendo a organização do back-end, integração com banco de dados, interface gráfica e comunicação entre as partes da aplicação.',
      features: [
        'Login e cadastro de usuários',
        'Gerenciamento de sessão',
        'Registro de acessos',
        'Cadastro de pessoas físicas e jurídicas',
        'Validação de CPF e CNPJ',
        'Cadastro e gerenciamento de produtos',
        'Controle de preços',
        'Registro de custos operacionais',
        'Controle de estoque',
        'Cadastro de contatos',
        'CRUD das principais entidades',
        'API REST',
        'Documentação da API com Swagger/OpenAPI',
        'Validações e tratamento de exceções',
      ],
      technologies: [
        'Java 17',
        'Spring Boot',
        'Spring Web',
        'Spring Data JPA',
        'Hibernate',
        'PostgreSQL',
        'Java Swing',
        'Swagger/OpenAPI',
        'Maven',
        'Jackson',
        'API REST',
      ],
      concepts: [
        'Programação orientada a objetos',
        'MVC',
        'DTO',
        'Repository Pattern',
        'Service Layer',
        'Injeção de dependência',
        'Integração front-end e back-end',
      ],
      learnings:
        'Construção de uma aplicação Java dividida entre interface e API, integração com PostgreSQL, organização em camadas, criação de operações CRUD e aplicação de boas práticas de programação orientada a objetos.',
      status: 'Concluído',
      image: '/pdv-comb.jpeg',
      alt: 'Interface do sistema PDV para posto de combustível',
      tags: ['Java', 'Spring Boot', 'Swing', 'PostgreSQL', 'MVC'],
      featured: true,
      links: {
        github: 'https://github.com/Sidney-Emanuel-Oliveira/pdv-posto-combustivel',
      },
    },
    {
      id: 'sistema-gestao-frotas',
      title: 'Sistema de Gestão de Frotas',
      category: 'Aplicação desktop em Java',
      shortDescription:
        'Sistema desktop para gerenciamento de frotas, veículos, abastecimentos, manutenções, despesas e informações operacionais.',
      fullDescription:
        'Sistema desktop desenvolvido em Java e Java Swing para auxiliar no cadastro, controle e gerenciamento de veículos e suas movimentações. A aplicação também gera relatórios para análise de custos, consumo de combustível e desempenho da frota.',
      participation:
        'Atuei como principal responsável pelo desenvolvimento e pela implementação da maior parte das funcionalidades do projeto.',
      features: [
        'Cadastro de veículos',
        'Cadastro de tipos de despesas',
        'Registro de abastecimentos',
        'Registro de manutenções',
        'Registro de multas',
        'Controle de movimentações',
        'Relatórios de despesas por veículo',
        'Cálculo de consumo médio',
        'Cálculo de custo por quilômetro',
        'Relatórios matriciais',
        'Exportação para CSV',
        'Persistência em arquivos de texto',
        'Sincronização opcional com MySQL',
        'Temas claro e escuro',
      ],
      technologies: [
        'Java 17',
        'Java Swing',
        'Maven',
        'MySQL',
        'JDBC',
        'Arquivos de texto',
        'CSV',
        'Programação orientada a objetos',
      ],
      concepts: [
        'Programação orientada a objetos',
        'Arquitetura em camadas',
        'Persistência de dados',
        'Estruturas de dados',
      ],
      learnings:
        'Desenvolvimento de interfaces com Java Swing, organização de uma aplicação em camadas, persistência de dados, integração com MySQL, estruturas de dados e criação de relatórios.',
      status: 'Concluído',
      image: '/gestao-frotas.png',
      alt: 'Interface do Sistema de Gestão de Frotas desenvolvido em Java',
      tags: ['Java', 'Swing', 'MySQL', 'Maven'],
      featured: true,
      links: {
        github: 'https://github.com/Sidney-Emanuel-Oliveira/SistemaDeFrotas-PI',
      },
    },
    {
      id: 'claraideia-landing-page',
      title: 'ClaraIdeia Landing Page',
      category: 'Aplicação Web',
      shortDescription:
        'Landing page institucional moderna desenvolvida para a startup ClaraIdeia, com apresentação de serviços e estrutura preparada para gerenciamento de conteúdo.',
      fullDescription:
        'Projeto de uma landing page institucional para a startup ClaraIdeia, criada para apresentar a empresa, seus conteúdos e sua proposta de forma moderna, organizada e profissional. O projeto também possui uma estrutura de gerenciamento de conteúdo, permitindo separar a apresentação pública da organização interna dos dados exibidos.',
      participation:
        'Projeto desenvolvido individualmente por Sidney Emanuel Barbosa de Oliveira, incluindo estruturação da aplicação, desenvolvimento da interface e organização das funcionalidades.',
      features: [
        'Landing page institucional',
        'Apresentação da startup',
        'Layout responsivo',
        'Organização entre front-end e back-end',
        'Gerenciamento de conteúdo',
        'Estrutura moderna de aplicação web',
      ],
      technologies: [
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Desenvolvimento web',
        'Front-end',
        'Back-end',
        'Sistema de gerenciamento de conteúdo',
      ],
      concepts: [
        'Arquitetura de aplicação web',
        'Separação front-end e back-end',
        'Layout responsivo',
        'Gerenciamento de conteúdo',
      ],
      learnings:
        'Estruturação de uma aplicação web, criação de interfaces institucionais, organização entre front-end e back-end e desenvolvimento de uma solução voltada a uma necessidade real.',
      status: 'Concluído',
      image: '/landing-page.jpeg',
      alt: 'Landing page institucional da startup ClaraIdeia',
      tags: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS'],
      featured: false,
      links: {
        github: 'https://github.com/Sidney-Emanuel-Oliveira/Landing-Page',
      },
    },
  ],

  services: [],

  experiences: [
    {
      period: '2025',
      title: 'Início da formação em Engenharia de Software',
      context: '1º módulo',
      description:
        'Início dos estudos em programação, algoritmos, lógica computacional, arquitetura de computadores e fundamentos de engenharia de software.',
    },
    {
      period: '2025–2026',
      title: 'Desenvolvimento de fundamentos e projetos',
      context: '2º e 3º módulos',
      description:
        'Evolução em programação, banco de dados, estruturas de dados, engenharia de requisitos, redes e desenvolvimento de aplicações. Durante a formação, desenvolvi projetos como o PDV Posto de Combustível, o Sistema de Gestão de Frotas e a ClaraIdeia Landing Page.',
    },
    {
      period: 'Atualmente',
      title: 'Engenharia de Software e Big Data & IA',
      context: '4º período — formação em andamento',
      description:
        'Cursando o 4º período de Engenharia de Software e o 2º período de Big Data e Inteligência Artificial, aprofundando conhecimentos em desenvolvimento, dados e IA.',
    },
    {
      period: 'Próximo passo',
      title: 'Primeira oportunidade profissional',
      context: 'Em busca de estágio ou posição júnior',
      description:
        'Busco uma oportunidade de estágio ou posição júnior para aplicar meus conhecimentos, colaborar em projetos reais e continuar evoluindo profissionalmente.',
    },
  ],

  contacts: [
    {
      label: 'E-mail',
      icon: 'mail',
      value: 'sidneyemanuel01@gmail.com',
      href: 'mailto:sidneyemanuel01@gmail.com',
      enabled: true,
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      value: 'linkedin.com/in/sidney-emanuel-107793352',
      href: 'https://www.linkedin.com/in/sidney-emanuel-107793352/',
      enabled: true,
    },
    {
      label: 'GitHub',
      icon: 'github',
      value: 'github.com/Sidney-Emanuel-Oliveira',
      href: 'https://github.com/Sidney-Emanuel-Oliveira',
      enabled: true,
    },
  ],

  footerMessage:
    'Desenvolvido com React, TypeScript e dedicação aos detalhes.',

  seo: {
    title: 'Sidney Oliveira | Desenvolvedor de Software',
    description:
      'Portfólio de Sidney Emanuel Barbosa de Oliveira, estudante de Engenharia de Software e Big Data & Inteligência Artificial, com projetos em Java, Spring Boot, React, bancos de dados e desenvolvimento de software.',
    keywords:
      'Sidney Oliveira, desenvolvedor Java, Spring Boot, Engenharia de Software, Big Data, Inteligência Artificial, PostgreSQL, MySQL, desenvolvimento back-end, portfólio de programação, estudante de tecnologia',
    author: 'Sidney Emanuel Barbosa de Oliveira',
    lang: 'pt-BR',
  },
};