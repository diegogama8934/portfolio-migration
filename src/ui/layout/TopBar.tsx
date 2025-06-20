import { porfolioSections } from "../../constants";
import { ActiveLink } from "./ActiveLink";
import { BurgerMenu } from "./BurgerMenu";




export function TopBar() {


  return (
    <nav className="w-full lg:flex lg:justify-center sticky top-0 bg-white border-b border-gray-100 z-50">

      {porfolioSections.map((section, index) => (
        <ActiveLink
          key={index}
          href={section.href}
          pageName={section.pageName}
        />
      ))}

      <div className="w-full lg:hidden flex justify-between items-center px-4 bg-white shadow py-2">
        <img
          src="/yo.jpeg"
          alt="Mi fotografía"
          className="w-10 h-10 lg:mt-0 rounded-full object-cover"
        />

        <BurgerMenu />
      </div>


    </nav>
  );
}