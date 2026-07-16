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
  specialty: 'Estudante de Engenharia de Software e Big Data & IA',
  heroTag: 'PORTFÓLIO • TECNOLOGIA E DESENVOLVIMENTO',
  heroDescription:
    'Sou estudante de Engenharia de Software e Big Data e Inteligência Artificial, com foco em desenvolvimento back-end, aplicações Java, bancos de dados e desenvolvimento de software. Construo minha experiência por meio de projetos acadêmicos e pessoais e busco minha primeira oportunidade profissional na área de tecnologia.',
  status: 'Em busca da primeira oportunidade em tecnologia',
  opportunityTypes: 'Estágio, posição júnior e projetos iniciais de desenvolvimento',

  photo: '/retrato-portfolio.png',
  photoAlt: 'Retrato profissional de Sidney Emanuel Barbosa de Oliveira',

  about: {
    title: 'Sobre Mim',
    subtitle: 'Conheça um pouco sobre minha formação e meus objetivos',
    presentation:
      'Sou estudante do 4º período de Engenharia de Software e do 2º período de Big Data e Inteligência Artificial. Durante minha formação, venho desenvolvendo conhecimentos em programação, desenvolvimento de software, bancos de dados, estruturas de dados, tecnologias web e fundamentos relacionados a dados e inteligência artificial.\n\nTenho maior interesse em desenvolvimento back-end, principalmente utilizando Java e Spring Boot. Também estudo tecnologias front-end para compreender a construção de aplicações completas, além de utilizar bancos de dados como MySQL e PostgreSQL.\n\nEm Python, possuo conhecimentos básicos e venho explorando tecnologias relacionadas a processamento de dados, CUDA, RAPIDS e modelos de linguagem. Atualmente, procuro minha primeira oportunidade profissional para aplicar meus conhecimentos, colaborar com uma equipe e continuar evoluindo como desenvolvedor.',
    details: [
      { label: 'LOCALIZAÇÃO', value: 'Goiânia — Goiás, Brasil' },
      { label: 'DISPONIBILIDADE', value: 'Disponível para estágio e oportunidades júnior' },
      { label: 'OBJETIVO ATUAL', value: 'Primeira oportunidade profissional em tecnologia' },
    ],
  },

  skills: [
    {
      title: 'Back-end e Programação',
      skills: [
        {
          name: 'Java',
          level: 'Intermediário',
          description: 'Utilizado no desenvolvimento de aplicações desktop, programação orientada a objetos, interfaces Java Swing, APIs REST e projetos acadêmicos.',
        },
        {
          name: 'Spring Boot',
          level: 'Básico/Intermediário',
          description: 'Utilizado na construção de APIs REST, organização de camadas da aplicação e integração com bancos de dados.',
        },
        {
          name: 'Python',
          level: 'Básico',
          description: 'Utilizado em estudos de programação, processamento de dados e inteligência artificial.',
        },
        {
          name: 'Java Swing',
          level: 'Básico/Intermediário',
          description: 'Utilizado na criação das interfaces dos projetos Sistema de Gestão de Frotas e PDV Posto de Combustível.',
        },
      ],
    },
    {
      title: 'Front-end',
      skills: [
        {
          name: 'HTML',
          level: 'Básico/Intermediário',
          description: 'Utilizado para estruturar páginas e interfaces web.',
        },
        {
          name: 'CSS',
          level: 'Básico/Intermediário',
          description: 'Utilizado para estilização, layouts e responsividade.',
        },
        {
          name: 'JavaScript',
          level: 'Básico',
          description: 'Utilizado para adicionar comportamento e interatividade a aplicações web.',
        },
      ],
    },
    {
      title: 'Banco de Dados',
      skills: [
        {
          name: 'PostgreSQL',
          level: 'Básico/Intermediário',
          description: 'Utilizado na persistência de dados do projeto PDV Posto de Combustível.',
        },
        {
          name: 'MySQL',
          level: 'Básico/Intermediário',
          description: 'Utilizado na persistência e sincronização de dados do Sistema de Gestão de Frotas.',
        },
      ],
    },
    {
      title: 'Ferramentas',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Visual Studio Code' },
        { name: 'IntelliJ IDEA' },
        {
          name: 'HeidiSQL',
          description: 'Ferramenta utilizada para gerenciamento e consulta de bancos de dados.',
        },
        { name: 'Maven' },
        { name: 'Swagger/OpenAPI' },
      ],
    },
    {
      title: 'Outros Conhecimentos',
      skills: [
        { name: 'Programação orientada a objetos' },
        { name: 'Estruturas de dados' },
        { name: 'Lógica de programação' },
        { name: 'Desenvolvimento de APIs REST' },
        { name: 'Arquitetura em camadas' },
        { name: 'Padrão MVC' },
        { name: 'Persistência de dados' },
        { name: 'JPA e Hibernate' },
        { name: 'Modelagem de banco de dados' },
        { name: 'Desenvolvimento web' },
        { name: 'Fundamentos de inteligência artificial' },
        { name: 'CUDA — estudos iniciais' },
        { name: 'RAPIDS — estudos iniciais' },
        { name: 'Modelos de linguagem — estudos iniciais' },
      ],
    },
  ],

  projects: [
    {
      title: 'PDV Posto de Combustível',
      category: 'Aplicação Java Full Stack',
      shortDescription:
        'Sistema completo de gerenciamento para postos de combustível, com interface Java Swing, API REST em Spring Boot e persistência em PostgreSQL.',
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
      image: '/project-placeholder.svg',
      alt: 'Interface do sistema PDV para posto de combustível',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Java Swing'],
      featured: true,
      links: {
        github: 'https://github.com/Sidney-Emanuel-Oliveira/pdv-posto-combustivel',
      },
    },
    {
      title: 'Sistema de Gestão de Frotas',
      category: 'Aplicação Desktop em Java',
      shortDescription:
        'Aplicação Java para controle de veículos, despesas, abastecimentos, manutenções, multas, consumo e custos de uma frota.',
      fullDescription:
        'Sistema desktop desenvolvido em Java e Java Swing para auxiliar no cadastro, controle e gerenciamento de veículos e suas movimentações. A aplicação também gera relatórios para análise de custos, consumo de combustível e desempenho da frota.',
      participation:
        'O desenvolvimento foi realizado majoritariamente por Sidney Emanuel Barbosa de Oliveira. Houve uma colaboração pequena e pontual de um colega em parte do projeto, sem retirar meu papel principal na construção e organização do sistema.',
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
      image: '/project-placeholder.svg',
      alt: 'Interface do Sistema de Gestão de Frotas desenvolvido em Java',
      tags: ['Java', 'Java Swing', 'MySQL', 'Maven'],
      featured: true,
      links: {
        github: 'https://github.com/Sidney-Emanuel-Oliveira/SistemaDeFrotas-PI',
      },
    },
    {
      title: 'ClaraIdeia Landing Page',
      category: 'Aplicação Web',
      shortDescription:
        'Landing page institucional para uma startup de tecnologia, criada com uma estrutura moderna e recursos para gerenciamento de conteúdo.',
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
      image: '/project-placeholder.svg',
      alt: 'Landing page institucional da startup ClaraIdeia',
      tags: ['TypeScript', 'HTML', 'CSS', 'Web'],
      featured: false,
      links: {
        github: 'https://github.com/Sidney-Emanuel-Oliveira/Landing-Page',
      },
    },
  ],

  services: [],

  experiences: [
    {
      period: '17/02/2025 — 27/06/2025',
      title: 'Início da formação em Engenharia de Software',
      context: '1º módulo',
      description:
        'Início dos estudos em programação, algoritmos, lógica computacional, arquitetura de computadores e fundamentos de engenharia de software.',
    },
    {
      period: '17/10/2025 — 19/12/2025',
      title: 'Evolução nos fundamentos de computação',
      context: '2º módulo',
      description:
        'Continuidade da formação com estudos em sistemas operacionais, técnicas de programação, circuitos digitais, fundamentos matemáticos e processos de engenharia de software.',
    },
    {
      period: '26/01/2026 — 26/06/2026',
      title: 'Banco de dados e estruturas de software',
      context: '3º módulo',
      description:
        'Desenvolvimento de conhecimentos em banco de dados, estruturas de dados, engenharia de requisitos, redes de computadores e computação gráfica.',
    },
    {
      period: 'Atualmente',
      title: '4º período de Engenharia de Software',
      context: 'Formação em andamento',
      description:
        'Continuidade da graduação e desenvolvimento de novos conhecimentos em engenharia de software, programação e construção de aplicações.',
    },
    {
      period: 'Atualmente',
      title: 'Big Data e Inteligência Artificial',
      context: '2º período — formação em andamento',
      description:
        'Estudos relacionados a programação, dados, processamento de informações e fundamentos de inteligência artificial.',
    },
    {
      period: 'Durante a formação',
      title: 'Desenvolvimento de projetos práticos',
      context: 'Projetos acadêmicos e pessoais',
      description:
        'Construção dos projetos PDV Posto de Combustível, Sistema de Gestão de Frotas e ClaraIdeia Landing Page, aplicando conhecimentos de Java, Spring Boot, bancos de dados, desenvolvimento web e arquitetura de software.',
    },
    {
      period: 'Próximo passo',
      title: 'Primeira oportunidade profissional',
      context: 'Em busca de estágio ou posição júnior',
      description:
        'Busco uma oportunidade para aplicar meus conhecimentos, colaborar em projetos reais, aprender com profissionais da área e continuar evoluindo como desenvolvedor.',
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
    'Desenvolvido com dedicação, aprendizado e atenção aos detalhes.',

  seo: {
    title: 'Sidney Oliveira | Desenvolvedor Java em Formação',
    description:
      'Portfólio de Sidney Oliveira, estudante de Engenharia de Software e Big Data e IA, com projetos em Java, Spring Boot, bancos de dados e desenvolvimento web.',
    keywords:
      'Sidney Oliveira, desenvolvedor Java, Spring Boot, Engenharia de Software, Big Data, Inteligência Artificial, PostgreSQL, MySQL, desenvolvimento back-end, portfólio de programação, estudante de tecnologia',
    author: 'Sidney Emanuel Barbosa de Oliveira',
    lang: 'pt-BR',
  },
};