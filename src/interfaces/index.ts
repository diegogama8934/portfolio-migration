export interface ApiResponse<T> {
  statusCode: number
  message: string
  data: T
  success: boolean
}

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