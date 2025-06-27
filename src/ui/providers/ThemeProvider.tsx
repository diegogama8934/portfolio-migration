/* eslint-disable react-refresh/only-export-components */
import type { Theme } from "../../interfaces";
import { createContext, useEffect, useState } from "react";
import { applyTheme, getInitialTheme, setStoredTheme, getEffectiveTheme } from "../../utils/theme";

export interface themeContextInterface {
  toggleTheme: (theme: Theme) => void;
  theme: Theme;
  effectiveTheme: 'light' | 'dark';
}

export const themeContext: React.Context<themeContextInterface> = createContext<themeContextInterface>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleTheme: (_theme: Theme) => { },
  theme: "light",
  effectiveTheme: "light"
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>(getEffectiveTheme(theme));

  useEffect(() => {
    applyTheme(theme);
    setEffectiveTheme(getEffectiveTheme(theme));
  }, [theme]);

  // Listen for system theme changes when theme is set to 'system'
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = () => {
      const newEffectiveTheme = getEffectiveTheme(theme);
      setEffectiveTheme(newEffectiveTheme);
      applyTheme(theme);
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  function toggleTheme(theme: Theme) {
    setTheme(theme);
    setStoredTheme(theme);
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme, effectiveTheme }}>
      {children}
    </themeContext.Provider>
  );
}