import type { ProjectResume } from "../../../interfaces";
import { ProjectLinks } from "./ProjectLinks";

export function ProjectResumeCard({ name, description, objective, github, figma, page }: ProjectResume) {

  return (
    <article className="card-group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-white/40">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 card-group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        <header className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent card-group-hover:from-blue-800 card-group-hover:to-purple-700 transition-all duration-300">
              {name}
            </h3>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60 card-group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-50 border border-zinc-200/50">
            <span className="text-sm font-medium text-zinc-600">{objective}</span>
          </div>
        </header>

        <div className="mb-8">
          <p className="text-zinc-600 leading-relaxed text-base font-medium">
            {description}
          </p>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200/50">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Enlaces</span>
          </div>
          
          <div className="flex items-center gap-3">
            <ProjectLinks github={github} figma={figma} page={page} />
          </div>
        </footer>
      </div>
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-bl-2xl"></div>
    </article>
  );
}