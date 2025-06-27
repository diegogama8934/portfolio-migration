import type { Theme } from "../../interfaces";
import { createContext, useEffect, useState } from "react";
import { applyTheme, getInitialTheme, setStoredTheme } from "../../utils/theme";

export interface themeContextInterface {
  toggleTheme: (theme: Theme) => void;
  theme: Theme;
}

export const themeContext: React.Context<themeContextInterface> = createContext<themeContextInterface>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleTheme: (theme: Theme) => { },
  theme: "light"
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme(theme: Theme) {
    setTheme(theme);
    setStoredTheme(theme);
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}