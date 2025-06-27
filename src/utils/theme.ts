import type { Theme } from "../interfaces";

const THEME_KEY = 'theme';

export function getStoredTheme(): Theme | null {
  return localStorage.getItem(THEME_KEY) as Theme | null;
}

export function setStoredTheme(theme: Theme): void {
  localStorage.setItem(THEME_KEY, theme);
}

export function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getInitialTheme(): Theme {
  return getStoredTheme() || 'system';
}

export function getEffectiveTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
}

export function applyTheme(theme: Theme): void {
  const effectiveTheme = getEffectiveTheme(theme);
  document.documentElement.style.backgroundColor = effectiveTheme === 'dark' ? '#0a0a0a' : 'white';
  document.documentElement.setAttribute('data-theme', effectiveTheme);
  if (effectiveTheme === "dark") document.querySelector("html")?.classList.add("dark");
  if (effectiveTheme === "light") document.querySelector("html")?.classList.remove("dark");
}