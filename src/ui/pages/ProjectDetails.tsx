import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

export function ProjectDetails() {
  const { t } = useTranslation();
  const { id } = useParams();

  console.log(id);

  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h1 className="section-title">TEACH</h1>
      
      <p className="section-description">
        {t("projects.teachDescription")}
      </p>
      
      <article className="flex gap-20 w-full mt-10">
        <aside className="w-64">
          <h2 className="section-description">Menu</h2>
          <ul className="list-none pl-8 mt-8 flex flex-col gap-4">
            <li className="w-full">
              <a href="#problem" className="text-gray-400 w-full block hover:text-gray-600 text-lg">Problem</a>
            </li>
            <li className="w-full">
              <a href="#solution" className="text-gray-400 w-full block hover:text-gray-600 text-lg">Solution</a>
            </li>
          </ul>
        </aside>
        <main className="flex-1">
          <h2 className="section-description !text-left" id="description">Problem</h2>
        </main>
      
      </article>
    
    </div>
  )
}