import { SectionAboutMe } from "../components/sections/SectionAboutMe";
import { SectionContact } from "../components/sections/SectionContact";
import { SectionHero } from "../components/sections/SectionHero";
import { SectionProjects } from "../components/sections/SectionProjects";
import { SectionTechnologies } from "../components/sections/SectionTechnologies";


export function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-bl from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-tr from-blue-400/3 to-purple-400/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-20 px-4 lg:px-40 py-8">
        <SectionHero />
        <SectionAboutMe />
        <SectionProjects />
        <SectionTechnologies />
        <SectionContact />
      </div>

      {/* Bottom decorative gradient */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
    </div>
  );
}