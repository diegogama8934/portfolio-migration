import { BrowserRouter } from "react-router";
import { TanstackProvider } from "./TanstackProvider";
import { AntDesignProvider } from "./AntDesignProvider";

export function GlobalProviders({ children }: { children: React.ReactNode }) {
  return (
    <TanstackProvider>
      <AntDesignProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </AntDesignProvider>
    </TanstackProvider>
  )
}