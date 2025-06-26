import { ConfigProvider } from "antd";

export function AntDesignProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#000000" }
      }}
    >
      {children}
    </ConfigProvider>
  );
}