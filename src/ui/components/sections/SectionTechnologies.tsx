import { technologiesPool } from "../../../constants";
import { useTranslation } from "react-i18next";

export function SectionTechnologies() {
  const { t } = useTranslation();
  const technologies = technologiesPool.map(({ image, imgClassName }, i) => ({
    name: t(`technologies.t${i + 1}`),
    image,
    description: t(`technologies.t${i + 1}Description`),
    imageClassName: imgClassName
  }));

  return (
    <div
      id="technologies"
      className="relative z-10 flex flex-col gap-20"
    >
      <section className="relative flex flex-col gap-16 py-20 items-center">

        <h2 className="section-title mt-20">
          {t("technologies.title1")} <span className="gradient-text font-extrabold">{t("technologies.title2")}</span>
        </h2>

        <span className="material-symbols-outlined !text-[100px] !text-gray-300">construction</span>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4">
          {technologies.map(({ name, image, description, imageClassName }) => (
            <div key={name} className={`flex w-[320px] h-28 rounded-xl bg-white p-4 border border-gray-200 gap-4 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300`}>
              <img src={image} alt={name} className={`object-contain aspect-square rounded-md ${imageClassName}`} />
              <div className="flex flex-col gap-2">
                <span className="w-full text-sm font-bold text-gray-500 dark:text-zinc-300">{name}</span>
                <p className="flex flex-col gap-2 text-gray-500 text-sm line-clamp-2 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section >
    </div >
  );
}