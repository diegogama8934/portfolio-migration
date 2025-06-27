import type { ActiveLink, OpinionCardProps, Project, TechnologyItem } from "../interfaces";

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

export const technologiesPool: TechnologyItem[] = [
  {
    name: "React",
    image: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256",
    imgClassName: "scale-90 bg-white p-2 rounded-full",
    background: "bg-blue-400",
    level: 90,
    description: "Front-end library for building user interfaces."
  },
  {
    name: "TypeScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    imgClassName: "scale-90 bg-white p-2 rounded-full",
    background: "bg-blue-600",
    level: 85,
    description: "JavaScript with types."
  },
  {
    name: "Next.js",
    image: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    imgClassName: "",
    background: "bg-gray-500",
    level: 80,
    description: "React framework for building server-side rendered applications."
  },
  {
    name: "Node.js",
    image: "https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273749.png",
    imgClassName: "scale-90 bg-white p-2 rounded-full",
    background: "bg-green-600",
    level: 75,
    description: "JavaScript runtime for building server-side applications."
  },
  {
    name: "Tailwind CSS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    imgClassName: "scale-90 bg-white p-2 rounded-full",
    background: "bg-cyan-500",
    level: 90,
    description: "CSS framework for building responsive user interfaces."
  },
  {
    name: "Figma",
    image: "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Design tool for creating user interfaces."
  },
  {
    name: "HTML",
    image: "https://w7.pngwing.com/pngs/410/100/png-transparent-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-text-thumbnail.png",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Markup language for creating web pages."
  },
  {
    name: "CSS",
    image: "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Style sheet language for creating web pages."
  },
  {
    name: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Programming language for creating web pages."
  },
  {
    name: "Express.js",
    image: "https://images.seeklogo.com/logo-png/33/1/express-js-logo-png_seeklogo-339850.png",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Node.js framework for building server-side applications."
  },
  {
    name: "AWS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Cloud platform for building scalable applications."
  },
  {
    name: "GIT",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdd25hyNQOMs4Xx1Cv_A_oaT0zagfSWlXMBA&s",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Version control system for tracking changes in code."
  },
  {
    name: "Nest",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/NestJS-logo-wordmark.svg",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Node.js framework for building server-side applications."
  },
  {
    name: "Single SPA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wv3NcbrGEvDXUGTLi0CCg8rEeB-mVFgNVA&s",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Microfrontend framework for building scalable applications."
  },
  {
    name: "Jira",
    image: "https://www.vivantio.com/wp-content/uploads/2024-vivantio-integrations-cover-jira.png",
    imgClassName: "",
    background: "bg-purple-600",
    level: 70,
    description: "Project management tool for tracking changes in code."
  },
];

export const opinions: OpinionCardProps[] = [
  {
    id: "opinion-1",
    name: "María González",
    image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    email: "maria.gonzalez@company.com",
    description: "Diego demostró ser un desarrollador muy profesional y dedicado. Su atención al detalle y capacidad para resolver problemas complejos fueron fundamentales para el éxito de nuestros proyectos.",
    place: "TechCorp Solutions"
  },
  {
    id: "opinion-2",
    name: "Carlos Rodríguez",
    image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    email: "carlos.rodriguez@startup.com",
    description: "Trabajar con Diego fue una experiencia excelente. Su conocimiento técnico y habilidad para comunicarse efectivamente hicieron que la colaboración fuera muy productiva.",
    place: "StartupX"
  },

  {
    id: "opinion-3",
    name: "Ana Martínez",
    image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    email: "ana.martinez@tech.edu",
    description: "Diego tiene una capacidad extraordinaria para transmitir conocimientos técnicos complejos de manera clara y concisa. Su pasión por la enseñanza y el desarrollo web es inspiradora.",
    place: "Tech Academy"
  }
];

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Teach",
    topic: "Educación en remoto",
    image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    technologies: ["React", "Next", "Tailwind"],
    tags: ["Web", "Mobile", "Desktop"],
    description: "Educación en remoto",
    github: "https://github.com/juan-pablo-garcia/teach-opal",
    page: "https://teach-opal.vercel.app/home/subjects",
    figma: "https://www.figma.com/design/1234567890/Teach-Opal?node-id=0-1"
  },
]