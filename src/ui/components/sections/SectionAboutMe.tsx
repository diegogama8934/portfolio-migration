import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function SectionAboutMe() {
  const { t } = useTranslation();
  return (
    <div
      id="aboutMe"
      className="relative z-10 flex flex-col gap-20"
    >
      <section className="relative flex flex-col items-center gap-10">
        <motion.h2 className="section-title mt-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("aboutMe.title1")} <span className="gradient-text font-extrabold">{t("aboutMe.title2")}</span> {t("aboutMe.title3")}
        </motion.h2>

        <motion.p className="section-description"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          {t("aboutMe.description")}
        </motion.p>

        <div className="flex gap-4 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            src="/yo.jpeg"
            alt="About me"
            className="w-[150px] h-[150px] object-cover rounded-full shadow-lg"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            src="/yo2.jpeg"
            alt="About me"
            className="w-[150px] h-[150px] object-cover rounded-full shadow-lg"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            src="/yo3.JPG"
            alt="About me"
            className="w-[150px] h-[150px] object-cover rounded-full shadow-lg"
          />
        </div>

        <div className="prose prose-lg text-zinc-600 flex-1 pt-10 px-16">
          <motion.p
            className="mb-4 leading-loose dark:text-zinc-400"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("aboutMe.p1")}
          </motion.p>

          <motion.p
            className="mb-4 leading-loose dark:text-zinc-400"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("aboutMe.p2")}
          </motion.p>

          <motion.p
            className="mb-4 leading-loose dark:text-zinc-400"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("aboutMe.p3")}
          </motion.p>

          <motion.p
            className="mb-4 leading-loose dark:text-zinc-400"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("aboutMe.p4")}
          </motion.p>

          <motion.p
            className="mb-4 leading-loose dark:text-zinc-400"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("aboutMe.p5")}
          </motion.p>
        </div>
      </section>
    </div>
  )
}