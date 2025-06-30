import { useTranslation } from "react-i18next"
import type { Project } from "../../../interfaces/project";

export function ProjectCard({ image, title, id, enResume, esResume }: Project) {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt="Teach"
          className="shadow-lg rounded-md"
        />
      </div>
      <h3 className="mt-10 text-xl sm:text-3xl font-bold gradient-text">{title}</h3>
      <p className="text-lg sm:text-2xl mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
        {i18n.language == "en" ? enResume : esResume}
      </p>
      <p className="text-base sm:text-lg mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
        {t("projects.descriptionInDev")}
      </p>
      {/*<motion.button
                onClick={() => navigate("/project/teach")}
                className="text-gray-500 flex items-center gap-2 w-fit border border-gray-200 rounded-md px-4 py-2"
              >
                {t("projects.readProject")}
                <span className="material-symbols-outlined !text-base">arrow_outward</span>
              </motion.button>*/}
    </div>
  )
}