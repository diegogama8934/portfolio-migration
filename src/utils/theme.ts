import type { Theme } from "../interfaces";

const THEME_KEY = 'theme';

export function getStoredTheme(): Theme | null {
  return localStorage.getItem(THEME_KEY) as Theme | null;
}

export function setStoredTheme(theme: Theme): void {
  localStorage.setItem(THEME_KEY, theme);
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getInitialTheme(): Theme {
  return getStoredTheme() || getSystemTheme();
}

export function applyTheme(theme: Theme): void {
  document.documentElement.style.backgroundColor = theme === 'dark' ? '#0a0a0a' : 'white';
  document.documentElement.setAttribute('data-theme', theme);
  if (theme == "dark") document.querySelector("html")?.classList.add("dark");
  if (theme == "light") document.querySelector("html")?.classList.remove("dark");
}