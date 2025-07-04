import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function SectionSoftSkills() {
  const { t } = useTranslation();

  return (
    <div
      id="softSkills"
      className="relative z-10 flex flex-col gap-20"
    >
      <section className="relative flex flex-col items-center gap-10">
        <motion.h2 className="section-title mt-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("softSkills.title1")} <span className="gradient-text font-extrabold">{t("softSkills.title2")}</span>
        </motion.h2>

        <motion.p className="section-description"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          {t("softSkills.description")}
        </motion.p>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 grid-cols-1 gap-x-4 xl:gap-y-12 gap-y-4 px-4 xl:px-0 justify-items-center">

          <div className="hidden xl:flex items-center justify-center">
            <motion.span
              className="material-symbols-outlined !text-[100px] !text-gray-300 dark:text-zinc-300"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              campaign
            </motion.span>
          </div>

          <motion.div className="flex flex-col w-full gap-2 bg-gray-100 p-8 rounded-lg col-span-2 md:col-span-3 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-500 dark:text-zinc-300">
              {t("softSkills.s1")}
            </h3>

            <p className="text-gray-500 leading-relaxed dark:text-zinc-300">
              {t("softSkills.s1Description")}
            </p>
          </motion.div>

          <div className="hidden xl:flex items-center justify-center">
            <motion.span
              className="material-symbols-outlined !text-[100px] !text-gray-300 dark:text-zinc-300"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              chat
            </motion.span>
          </div>

          <motion.div className="flex flex-col w-full gap-2 bg-gray-100 p-8 rounded-lg col-span-2 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-500 dark:text-zinc-300">
              {t("softSkills.s2")}
            </h3>

            <p className="text-gray-500 leading-relaxed dark:text-zinc-300">
              {t("softSkills.s2Description")}
            </p>
          </motion.div>

          <div className="hidden xl:flex items-center justify-center">
            <motion.span
              className="material-symbols-outlined !text-[100px] !text-gray-300 dark:text-zinc-300"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              person_play
            </motion.span>
          </div>

          <motion.div className="flex flex-col w-full gap-2 bg-gray-100 p-8 rounded-lg col-span-2 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-500 dark:text-zinc-300">
              {t("softSkills.s3")}
            </h3>

            <p className="text-gray-500 leading-relaxed dark:text-zinc-300">
              {t("softSkills.s3Description")}
            </p>
          </motion.div>

          <div className="hidden xl:flex items-center justify-center">
            <motion.span
              className="material-symbols-outlined !text-[100px] !text-gray-300 dark:text-zinc-300"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              handyman
            </motion.span>
          </div>

          <motion.div className="flex flex-col w-full gap-2 bg-gray-100 p-8 rounded-lg col-span-3 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-500 dark:text-zinc-300">
              {t("softSkills.s4")}
            </h3>

            <p className="text-gray-500 leading-relaxed dark:text-zinc-300">
              {t("softSkills.s4Description")}
            </p>
          </motion.div>

          <div className="hidden xl:flex items-center justify-center">
            <motion.span
              className="material-symbols-outlined !text-[100px] !text-gray-300 dark:text-zinc-300"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              work
            </motion.span>
          </div>

        </div>
      </section>
    </div>
  )
}