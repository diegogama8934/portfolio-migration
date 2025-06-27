import { theme as antdTheme } from "antd";
import { ConfigProvider } from "antd";
import { useContext } from "react";
import { themeContext } from "./ThemeProvider";

export function AntDesignProvider({ children }: { children: React.ReactNode }) {
  const { effectiveTheme } = useContext(themeContext);
  
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#000000" },
        algorithm: effectiveTheme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}