import { BrowserRouter } from "react-router";
import { TanstackProvider } from "./TanstackProvider";
import { AntDesignProvider } from "./AntDesignProvider";
import { ThemeProvider } from "./ThemeProvider";

export function GlobalProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TanstackProvider>
        <AntDesignProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </AntDesignProvider>
      </TanstackProvider>
    </ThemeProvider>
  )
}