import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export function SectionProjects() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="relative z-10 flex flex-col gap-20"
    >
      <section className="relative flex flex-col gap-16">

        <motion.h2
          className="text-xl md:text-5xl font-semibold text-center text-gray-500 leading-relaxed mt-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("projects.title1")} <span className="gradient-text font-extrabold">{t("projects.title2")}</span>.
        </motion.h2>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center">
                <img
                  src="/proj-teach.jpg"
                  alt="Teach"
                  className="shadow-lg rounded-md"
                />
              </div>
              <h3 className="mt-10 text-3xl font-bold gradient-text">TEACH</h3>
              <p className="text-2xl mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
                {t("projects.teachDescription")}
              </p>
              <motion.button
                onClick={() => navigate("/project/teach")}
                className="text-gray-500 flex items-center gap-2 w-fit border border-gray-200 rounded-md px-4 py-2"
              >
                {t("projects.readProject")}
                <span className="material-symbols-outlined !text-base">arrow_outward</span>
              </motion.button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center">
                <img
                  src="/proj-we-plan.jpg"
                  alt="We plan"
                  className="shadow-lg rounded-md"
                />
              </div>
              <h3 className="mt-10 text-3xl font-bold gradient-text">We plan</h3>
              <p className="text-2xl mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
                {t("projects.wePlanDescription")}
              </p>
              <motion.button
                onClick={() => navigate("/project/weplan")}
                className="text-gray-500 flex items-center gap-2 w-fit border border-gray-200 rounded-md px-4 py-2"
              >
                {t("projects.readProject")}
                <span className="material-symbols-outlined !text-base">arrow_outward</span>
              </motion.button>
            </div>
          </div>


          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center">
                <img
                  src="/proj-bolsa-de-trabajo.jpg"
                  alt="Bolsa de trabajo UAQ"
                  className="shadow-lg rounded-md"
                />
              </div>
              <h3 className="mt-10 text-3xl font-bold gradient-text">Bolsa de trabajo UAQ</h3>
              <p className="text-2xl mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
                {t("projects.bolsaDescription")}
              </p>
              <motion.button
                onClick={() => navigate("/project/bolsa")}
                className="text-gray-500 flex items-center gap-2 w-fit border border-gray-200 rounded-md px-4 py-2"
              >
                {t("projects.readProject")}
                <span className="material-symbols-outlined !text-base">arrow_outward</span>
              </motion.button>
            </div>
          </div>
          
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center">
                <img
                  src="/proj-random-words.jpg"
                  alt="Random words"
                  className="shadow-lg rounded-md"
                />
              </div>
              <h3 className="mt-10 text-3xl font-bold gradient-text">Random words</h3>
              <p className="text-2xl mb-8 text-gray-500 leading-relaxed font-light max-w-2xl">
                {t("projects.randomWordsDescription")}
              </p>
              <motion.button
                onClick={() => navigate("/project/random-words")}
                className="text-gray-500 flex items-center gap-2 w-fit border border-gray-200 rounded-md px-4 py-2"
              >
                {t("projects.readProject")}
                <span className="material-symbols-outlined !text-base">arrow_outward</span>
              </motion.button>
            </div>
          </div>

        </div>
      </section >
    </div >
  );
}