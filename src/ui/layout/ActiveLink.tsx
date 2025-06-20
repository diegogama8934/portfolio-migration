import type { ActiveLink } from "../../interfaces";
import { NavLink } from "react-router";
import clsx from "clsx";

export function ActiveLink({ href, pageName }: ActiveLink) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => clsx(
        "group relative hidden lg:flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-zinc-700 transition-all duration-300 hover:scale-105",
        isActive 
          ? "bg-gradient-to-r from-blue-50/90 to-purple-50/90 border border-blue-200/60 text-blue-700 shadow-lg shadow-blue-100/50" 
          : "hover:bg-gradient-to-r hover:from-zinc-50/80 hover:to-zinc-50/60 hover:border hover:border-zinc-200/40 hover:text-zinc-800 hover:shadow-md hover:shadow-zinc-100/30"
      )}
    >
      {({ isActive }) => (
        <>
          <span className="relative z-10">{pageName}</span>
          {isActive && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          )}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
        </>
      )}
    </NavLink>
  );
}