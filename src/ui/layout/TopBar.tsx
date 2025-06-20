import { porfolioSections } from "../../constants";
import { ActiveLink } from "./ActiveLink";
import { BurgerMenu } from "./BurgerMenu";




export function TopBar() {


  return (
    <nav className="w-full lg:flex lg:justify-center sticky top-0 bg-white border-b border-gray-200">

      {porfolioSections.map((section, index) => (
        <ActiveLink
          key={index}
          href={section.href}
          pageName={section.pageName}
        />
      ))}

      <div className="w-full lg:hidden flex justify-between items-center px-4 bg-white shadow py-2">
        <img
          src="/yo.png"
          alt="Mi fotografía"
          width={700}
          height={800}
          className="w-10 h-10 lg:mt-0"
        />

        <BurgerMenu />
      </div>


    </nav>
  );
}