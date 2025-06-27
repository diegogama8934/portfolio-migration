import { motion } from "motion/react";
import { HeroCta } from "../atoms/HeroCta";
import { HeroBtn } from "../atoms/HeroBtn";
import { useTranslation } from "react-i18next";

export function SectionHero() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col items-center justify-center pb-20 pt-10"
    >
      <motion.h2 className="text-xl md:text-5xl font-semibold text-center mb-6 text-gray-500 leading-relaxed"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
      >
        {t("hero.title1")} <span className="gradient-text font-extrabold">{t("hero.title2")}</span> {t("hero.title3")} <span className="gradient-text font-bold">{t("hero.title4")}</span>.
      </motion.h2>

      <motion.p className="text-2xl text-center mb-8 text-gray-500 leading-relaxed font-light max-w-2xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
      >
        {t("hero.description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
        className="flex flex-col gap-8 items-center justify-center w-[550px]"
      >

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <HeroBtn className="sm:flex-1">
            <a href="/CV_EN.pdf" download className="text-gray-500">{t("hero.cvAction")}</a>
          </HeroBtn>
          <HeroBtn className="sm:flex-1">
            <a target="_blank" href="https://www.linkedin.com/in/diego-martínez-garcía-3301902a8" className="text-gray-500">LinkedIn</a>
          </HeroBtn>
          <HeroBtn className="sm:flex-1">
            <a target="_blank" href="https://github.com/diegogama8934" className="text-gray-500">Github</a>
          </HeroBtn>
        </div>

        <HeroCta>
          <button
            onClick={() => { document.getElementById('aboutMe')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex items-center gap-2"
          >
            <span>{t("hero.cta")}</span>
            <span className="material-symbols-outlined !text-lg">arrow_downward</span>
          </button>
        </HeroCta>
      </motion.div>
    </div>
  );
} 