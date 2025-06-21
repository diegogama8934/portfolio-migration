import type { ActiveLink, ProjectResume, TechnologyItem } from "../interfaces";

export const porfolioSections: ActiveLink[] = [
  {
    href: "/",
    pageName: "Home"
  },
  {
    href: "/aboutMe",
    pageName: "About Me"
  },
  {
    href: "/projects",
    pageName: "Projects"
  }
  //TODO: Add contact and testimonials
];

export const projectsResume: ProjectResume[] = [
  {
    name: "Teach",
    objective: "Educación en remoto",
    description: "Imparte, cursa y administra materiales escolares.",
    github: "https://github.com/juan-pablo-garcia/teach-opal",
    figma: "https://www.figma.com/design/1234567890/Teach-Opal?node-id=0-1",
    page: "https://teach-opal.vercel.app/home/subjects"
  },
  {
    name: "Bolsa de trabajo UAQ",
    objective: "Fuente de trabajo",
    description: "Un buen lugar para encontrar trabajo o colaboradores.",
    github: "https://github.com/juan-pablo-garcia/teach-opal",
    figma: "https://www.figma.com/design/1234567890/Teach-Opal?node-id=0-1",
    page: "https://teach-opal.vercel.app/home/subjects"
  },
  {
    name: "Tech Nova",
    objective: "Administración de proyectos",
    description: "Integrantes, tareas, fechas, problemas... gestiónalo todo.",
    github: "https://github.com/juan-pablo-garcia/teach-opal",
    figma: "https://www.figma.com/design/1234567890/Teach-Opal?node-id=0-1",
    page: "https://teach-opal.vercel.app/home/subjects"
  }
]

export const technologiesPool: TechnologyItem[] = [
  {
    name: "Figma",
    image: "https://forosdeia.com/directorio-ia/figma.843/cover-image",
    level: 9,
    knowledge: [
      "Buenas prácticas",
      "Variantes",
      "Componentes",
      "Prototipos"
    ]
  },
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    level: 8,
    knowledge: [
      "React router",
      "Microfrontends",
      "Tailwind"
    ]
  },
  {
    name: "Next",
    image: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    level: 4,
    knowledge: [
      "SSR",
      "SSG",
      "API Routes"
    ]
  },
]