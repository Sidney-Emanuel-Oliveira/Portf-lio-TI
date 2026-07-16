# Portfólio TI — Sidney Oliveira

Portfólio pessoal de Sidney Emanuel Barbosa de Oliveira, estudante de Engenharia de Software e Big Data e Inteligência Artificial. O projeto apresenta minha formação, tecnologias, projetos acadêmicos e objetivos profissionais na área de desenvolvimento de software.

## Principais características

- Layout moderno e responsivo, adaptado para desktop, tablet e mobile
- Tema escuro com paleta de cores ciano e violeta
- Animações e microinterações discretas (fade-in no scroll, spotlight nos cards)
- Cursor personalizado no desktop com detecção de elementos interativos
- Seções: apresentação, sobre mim, tecnologias, projetos, trajetória e contato
- Acessibilidade: suporte a `prefers-reduced-motion`, navegação por teclado, foco visível
- Fundo tecnológico com grid, gradientes e parallax suave conforme o scroll

## Tecnologias utilizadas

- **React 19** — biblioteca para interfaces
- **TypeScript 6** — tipagem estática
- **Vite 8** — bundler e servidor de desenvolvimento
- **Tailwind CSS 4** — estilização utility-first
- **Motion** — animações declarativas
- **Lucide React** — ícones consistentes e leves

## Como executar localmente

```bash
# Clonar o repositório
git clone https://github.com/Sidney-Emanuel-Oliveira/Portf-lio-TI.git

# Entrar na pasta
cd Portf-lio-TI

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O Vite vai exibir o endereço local (geralmente `http://localhost:5173/`).

## Build de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Estrutura resumida

```
src/
├── components/
│   ├── layout/        # Header, Footer, Section
│   ├── ui/            # Button, Badge, Card, SectionTitle
│   ├── sections/      # Hero, About, Skills, Projects, Experience, Contact
│   ├── cursor/        # CustomCursor
│   └── effects/       # SpotlightCard
├── data/              # Dados centralizados do portfólio
├── hooks/             # Hooks personalizados (scroll, mouse, parallax)
├── types/             # Interfaces TypeScript
└── utils/             # Funções utilitárias
```

## Projetos em destaque

- **PDV Posto de Combustível** — sistema Java Full Stack com Spring Boot, PostgreSQL e Java Swing
- **Sistema de Gestão de Frotas** — aplicação desktop em Java para controle de frotas
- **ClaraIdeia Landing Page** — landing page institucional com estrutura web moderna

## Contato

- **GitHub:** https://github.com/Sidney-Emanuel-Oliveira
- **LinkedIn:** https://www.linkedin.com/in/sidney-emanuel-107793352/
- **E-mail:** sidneyemanuel01@gmail.com

## Autor

Sidney Emanuel Barbosa de Oliveira

---

Este portfólio continuará sendo atualizado conforme novos projetos e experiências forem adicionados.