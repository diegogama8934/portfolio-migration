import { motion } from "motion/react";
import { Button, Input, Pagination } from "antd";
import { HeroBtn } from "../atoms/HeroBtn";
import { useTranslation } from "react-i18next";

export function SectionContact() {
  const { t } = useTranslation();

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
          <HeroBtn className="sm:flex-1">
            <a href="/CV_EN.pdf" download className="text-gray-500 dark:text-zinc-300">{t("hero.cvAction")}</a>
          </HeroBtn>
          <HeroBtn className="sm:flex-1">
            <a target="_blank" href="https://www.linkedin.com/in/diego-martínez-garcía-3301902a8" className="text-gray-500 dark:text-zinc-300">LinkedIn</a>
          </HeroBtn>
          <HeroBtn className="sm:flex-1">
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

        <form className="grid grid-cols-3 gap-4 border border-gray-200 rounded-md w-full p-8 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300">
          <span className="text-gray-500 font-bold dark:text-zinc-300">{t("contact.references")}</span>
          <p className="col-span-3 text-gray-500 text-sm dark:text-zinc-300">{t("contact.referencesDescription")}</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-500 text-sm dark:text-zinc-300">
              <span className="text-red-500">* </span>
              {t("contact.name")}
            </label>
            <Input id="name" placeholder={t("contact.name")} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="text-gray-500 text-sm dark:text-zinc-300">
              <span className="text-red-500">* </span>
              {t("contact.role")}
            </label>
            <Input id="role" placeholder={t("contact.role")} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="place" className="text-gray-500 text-sm dark:text-zinc-300">
              <span className="text-red-500">* </span>
              {t("contact.place")}
            </label>
            <Input id="place" placeholder={t("contact.placePlaceholder")} />
          </div>
          <div className="flex flex-col gap-2 col-span-3">
            <label htmlFor="message" className="text-gray-500 text-sm dark:text-zinc-300">
              <span className="text-red-500">* </span>
              {t("contact.message")}
            </label>
            <Input.TextArea id="message" placeholder={t("contact.message")} autoSize={{ minRows: 4, maxRows: 6 }} />
          </div>
          <div className="col-span-3 flex justify-end">
            <Button type="primary" htmlType="submit" className="w-fit">{t("contact.send")}</Button>
          </div>
        </form>

        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="flex flex-col gap-4 p-8 border border-gray-200 rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300">
            <div className="flex items-center gap-4">
              <img
                src="https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-esta-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg?semt=ais_items_boosted&w=740"
                alt="profile"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Juan Pablo Costas Rueda</h3>
                <p className="text-sm text-gray-500">Software Engineer | <span>Kronox & Kairos</span></p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-zinc-300">
              I'm looking for a new challenge. I'm open to new opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 border border-gray-200 rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300">
            <div className="flex items-center gap-4">
              <img
                src="https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
                alt="profile"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Ana María Velázquez Figueroa</h3>
                <p className="text-sm text-gray-500">Software Engineer | <span>Kronox & Kairos</span></p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-zinc-300">
              {t("contact.referencesDescription")}
            </p>
          </div>

          <div className="col-span-2 w-full flex justify-center">
            <Pagination
              simple
              defaultCurrent={1}
              total={0}
              pageSize={6}
              disabled
            />
          </div>
        </div>

      </section>
    </div>
  );
}