import { useState } from "react";
import { porfolioSections } from "../../constants";
import { ActiveLink } from "./ActiveLink";

export function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-12 h-12 rounded-lg flex justify-center items-center hover:bg-white/20 transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-zinc-800">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}

      <div className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeMobileMenu}
        ></div>

        {/* Menu Content */}
        <div className="absolute top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-out">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <h2 className="text-lg font-semibold text-zinc-800">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="w-10 h-10 rounded-lg flex justify-center items-center hover:bg-white/20 transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-zinc-800">close</span>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 p-6">
              <nav className="space-y-4">
                {porfolioSections.map((section, index) => (
                  <a
                    key={index}
                    href={section.href}
                    onClick={closeMobileMenu}
                    className="block w-full p-4 rounded-lg text-zinc-800 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-purple-400/10 transition-all duration-200 hover:scale-105"
                  >
                    <span className="text-lg font-medium">{section.pageName}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/20">
              <div className="flex items-center gap-3">
                <img
                  src="/yo.jpeg"
                  alt="Mi fotografía"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/40"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-zinc-800">Diego Martínez</span>
                  <span className="text-xs text-zinc-500">Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}