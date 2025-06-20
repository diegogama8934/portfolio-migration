import { Link } from "react-router";
import { ProjectResumeCard } from "../atoms/ProjectResumeCard";
import { projectsResume } from "../../../constants";

export function SectionProjects() {
  return (
    <section className="relative flex flex-col gap-16 py-20">
      <div className="relative z-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="lg:text-5xl text-3xl font-bold gradient-text bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 bg-clip-text text-transparent lg:leading-normal leading-tight">Proyectos</h2>
          <div className="relative">
            <span className="text-3xl animate-bounce inline-block">🚀</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg opacity-0 animate-pulse"></div>
          </div>
        </div>

        <Link
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-white/80 to-white/60 hover:from-blue-50/90 hover:to-purple-50/90 border border-white/40 hover:border-blue-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
          to="/projects"
        >
          <span className="text-blue-700 font-bold lg:text-lg text-base group-hover:text-blue-800 transition-colors">
            Ver más
          </span>
          <div className="w-8 h-8 rounded-full text-white flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined !text-xl">arrow_outward</span>
          </div>
        </Link>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsResume.map(project => (
          <ProjectResumeCard
            key={project.name}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}