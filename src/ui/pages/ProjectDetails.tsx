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
          <ul className="list-none pl-8 mt-8 flex flex-col gap-4">
            <li className="w-full">
              <a href="#problem" className="text-gray-400 w-full block hover:text-gray-600 text">General resume</a>
            </li>
            <li className="w-full">
              <a href="#solution" className="text-gray-400 w-full block hover:text-gray-600 text">Context and problem</a>
            </li>
            <li className="w-full">
              <a href="#role" className="text-gray-400 w-full block hover:text-gray-600 text">Role and contribution</a>
            </li>
            <li className="w-full">
              <a href="#process" className="text-gray-400 w-full block hover:text-gray-600 text">Development process</a>
            </li>
            <li className="w-full">
              <a href="#results" className="text-gray-400 w-full block hover:text-gray-600 text">Results and learnings</a>
            </li>
            <li className="w-full">
              <a href="#results" className="text-gray-400 w-full block hover:text-gray-600 text">Links and resources</a>
            </li>
            <li className="w-full">
              <a href="#results" className="text-gray-400 w-full block hover:text-gray-600 text">Testimonials and comments</a>
            </li>
          </ul>
        </aside>
        <main className="flex flex-col gap-4 flex-1">
          <h2 className="section-description !text-left !font-medium" id="description">General resume</h2>
          <p className="section-paragraph !text-left">
            {t("projects.teachGeneralResume")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachGeneralResume")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachGeneralResume")}
          </p>

          <h2 className="section-description !text-left !font-medium" id="problem">Context and problem</h2>
          <p className="section-paragraph !text-left">
            {t("projects.teachContextAndProblem")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachContextAndProblem2")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachContextAndProblem3")}
          </p>

          <h2 className="section-description !text-left !font-medium" id="role">Role and contribution</h2>
          <p className="section-paragraph !text-left">
            {t("projects.teachRoleAndContribution")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachRoleAndContribution2")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachRoleAndContribution3")}
          </p>

          <h2 className="section-description !text-left !font-medium" id="process">Development process</h2>
          <p className="section-paragraph !text-left">
            {t("projects.teachDevelopmentProcess")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachDevelopmentProcess2")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachDevelopmentProcess3")}
          </p>

          <h2 className="section-description !text-left !font-medium" id="results">Results and learnings</h2>
          <p className="section-paragraph !text-left">
            {t("projects.teachResultsAndLearnings")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachResultsAndLearnings2")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachResultsAndLearnings3")}
          </p>


          <h2 className="section-description !text-left !font-medium" id="links">Links and resources</h2>
          <p className="section-paragraph !text-left">
            {t("projects.teachLinksAndResources")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachLinksAndResources2")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachLinksAndResources3")}
          </p>


          <h2 className="section-description !text-left !font-medium" id="testimonials">Testimonials and comments</h2>
          <p className="section-paragraph !text-left">
            {t("projects.teachTestimonialsAndComments")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachTestimonialsAndComments2")}
          </p>
          <p className="section-paragraph !text-left">
            {t("projects.teachTestimonialsAndComments3")}
          </p>

        </main>

      </article>

    </div>
  )
}