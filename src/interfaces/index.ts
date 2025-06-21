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

export interface TechnologyItem {
  name: string
  level: number
  image: string
  knowledge: string[]
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