import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-4 py-10 border-t border-gray-200 dark:border-zinc-700">
      <div className="flex flex-col gap-4 items-center xl:items-start mb-6 xl:mb-0">
        <span className="text-lg font-semibold dark:text-zinc-300">{t("footer.socialMedia")}</span>
        <a target="_blank" className="text-sm dark:text-zinc-300" href="https://www.linkedin.com/in/diego-martínez-garcía-3301902a8">LinkedIn</a>
        <a target="_blank" className="text-sm dark:text-zinc-300" href="https://github.com/diegogama8934">GitHub</a>
        <a target="_blank" className="text-sm dark:text-zinc-300" href="mailto:diegomartinezgarcia@gmail.com">Email</a>
      </div>
      <div className="flex flex-col gap-2 items-center xl:items-end">
        <p className="text-center text-zinc-500 text-sm dark:text-zinc-300">© 2025 {t("footer.madeBy")} Diego Martínez García.</p>
        <p className="text-center text-zinc-500 text-sm dark:text-zinc-300">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}