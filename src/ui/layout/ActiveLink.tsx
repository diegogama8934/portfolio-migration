import type { ActiveLink } from "../../interfaces";
import { NavLink } from "react-router";
import clsx from "clsx";

export function ActiveLink({ href, pageName }: ActiveLink) {

  return (
    <NavLink
      to={href}
      className={({ isActive }) => clsx(
        "hidden lg:block md:py-8 md:hover:bg-zinc-200 md:w-40 md:text-center",
        isActive && "md:bg-zinc-100 md:border-b-2 md:border-blue-400"
      )}
    >
      {pageName}
    </NavLink>
  );
}