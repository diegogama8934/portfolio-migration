import { motion } from "motion/react";
import { Empty } from "antd";
import { HeroBtn } from "../atoms/HeroBtn";
import { useTranslation } from "react-i18next";
import { FormCreateReference } from "../common/FormCreateReference";

export function SectionContact() {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative z-10 flex flex-col items-center">

      <section className="relative flex flex-col items-center gap-16 py-20 w-full">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title mt-20"
        >
          {t("contact.title1")} <span className="gradient-text font-extrabold">{t("contact.title2")}</span>
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <HeroBtn className="sm:flex-1 w-full">
            <a href={`/CV_${i18n.language === "es" ? "ES" : "EN"}.pdf`} download className="text-gray-500 dark:text-zinc-300">{t("hero.cvAction")}</a>
          </HeroBtn>
          <HeroBtn className="sm:flex-1 w-full">
            <a target="_blank" href="https://www.linkedin.com/in/diego-martínez-garcía-3301902a8" className="text-gray-500 dark:text-zinc-300">LinkedIn</a>
          </HeroBtn>
          <HeroBtn className="sm:flex-1 w-full">
            <a target="_blank" href="https://github.com/diegogama8934" className="text-gray-500 dark:text-zinc-300">Github</a>
          </HeroBtn>
        </div>

        <motion.p className="section-description"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          {t("contact.description")}
        </motion.p>

        <FormCreateReference
          target="myProfile"
        />

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 w-full">
          <div className="col-span-2 w-full">
            <Empty description={t("contact.emptyReferences")}/>
          </div>

          {/*<div className="xl:col-span-2 col-span-1 w-full flex justify-center">
            <Pagination
              simple
              defaultCurrent={1}
              total={0}
              pageSize={6}
              disabled
            />
          </div>*/}
        </div>

      </section>
    </div>
  );
}