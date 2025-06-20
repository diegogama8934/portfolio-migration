import { porfolioSections } from "../../constants";
import { ActiveLink } from "./ActiveLink";
import { BurgerMenu } from "./BurgerMenu";

export function TopBar() {
  return (
    <nav className="w-full lg:flex lg:justify-center sticky top-0 z-50">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-2xl"></div>
      <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-bl from-purple-400/5 to-blue-400/5 rounded-full blur-2xl"></div>
      
      {/* Desktop Navigation */}
      <div className="relative z-10 hidden lg:flex items-center justify-center gap-8 py-6 px-8">
        {porfolioSections.map((section, index) => (
          <ActiveLink
            key={index}
            href={section.href}
            pageName={section.pageName}
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="relative z-10 w-full lg:hidden flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/yo.jpeg"
              alt="Mi fotografía"
              className="relative w-12 h-12 rounded-full object-cover border-2 border-white/40 shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-zinc-800">Diego Martínez</span>
            <span className="text-xs text-zinc-500">Frontend Developer</span>
          </div>
        </div>

        <BurgerMenu />
      </div>
    </nav>
  );
}