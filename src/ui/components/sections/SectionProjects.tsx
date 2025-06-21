import { Link } from "react-router";
import { ProjectResumeCard } from "../atoms/ProjectResumeCard";
import { projectsResume } from "../../../constants";

export function SectionProjects() {
  return (
    <section className="relative flex flex-col gap-16 py-20">
      <div className="relative z-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="section-title">Proyectos</h2>
          <span className="text-3xl animate-bounce inline-block">🚀</span>
        </div>

        <Link
          className="group section-btn-link"
          to="/projects"
        >
          <span className="text-blue-700 font-bold lg:text-lg text-base group-hover:text-blue-800 transition-colors">
            Ver más
          </span>
          <div className="section-btn-link-icon group-hover:scale-110">
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