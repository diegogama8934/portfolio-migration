import { SectionAboutMe } from "../components/sections/SectionAboutMe";
import { SectionOpinions } from "../components/sections/SectionOpinions";

export function AboutMe() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-bl from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-tr from-blue-400/3 to-purple-400/3 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <SectionAboutMe />

      <SectionOpinions />
      
      {/* Bottom decorative gradient */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
    </div>
  );
}