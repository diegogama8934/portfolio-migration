import { Outlet } from "react-router";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";

export function GlobalLayout() {
  return (
    <div className="flex flex-col w-full lg:gap-12 gap-8">
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
}