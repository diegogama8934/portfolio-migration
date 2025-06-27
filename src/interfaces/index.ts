export interface ActiveLink {
  href: string
  pageName: string
}

export interface ProjectResume {
  name: string
  objective: string
  description: string
  github?: string
  figma?: string
  page?: string
}

export interface Project {
  id: string
  name: string
  topic: string
  description: string
  image: string
  github?: string
  page?: string
  figma?: string
  technologies: string[]
  tags: string[]
}

export interface TechnologyItem {
  name: string
  image: string
  imgClassName: string
  background: string
  level: number
  description: string;
}

export interface ProjectLink {
  href?: string;
  icon: React.ReactNode;
  tooltip: string;
}

export interface OpinionCardProps {
  id?: string
  name: string
  image: string
  email: string
  description: string
  place: string
}

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}