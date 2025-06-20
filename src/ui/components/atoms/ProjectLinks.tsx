import { FigmaIcon } from "../../Icons/FigmaIcon";
import { GithubIcon } from "../../Icons/GithubIcon";
import { WebIcon } from "../../Icons/WebIcon";
import { Tooltip } from "./Tooltip";

export function ProjectLinks({ github, figma, page }: { github?: string, figma?: string, page?: string }) {

  const links = [
    {
      href: github,
      icon: GithubIcon(),
      tooltip: "Ver en Github"
    },
    {
      href: figma,
      icon: FigmaIcon(),
      tooltip: "Ver en Figma"
    },
    {
      href: page,
      icon: WebIcon(),
      tooltip: "Ver en la web"
    }
  ]


  return (
    <>
      {
        links.map(({ href, icon, tooltip }) => (
          href && (
            <Tooltip key={tooltip} text={tooltip}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 hover:from-blue-50/90 hover:to-purple-50/90 border border-white/40 hover:border-blue-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-zinc-600 hover:text-blue-600 backdrop-blur-sm"
              >
                <div className="transition-all duration-300 link-group-hover:scale-110 link-group-hover:rotate-3">
                  {icon}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 link-group-hover:from-blue-500/10 link-group-hover:to-purple-500/10 transition-all duration-300"></div>
              </a>
            </Tooltip>
          )
        ))
      }
    </>
  );
}