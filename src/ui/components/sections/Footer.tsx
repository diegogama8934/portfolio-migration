import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 flex items-center justify-between gap-4 py-10 border-t border-gray-200">
      <div className="flex flex-col gap-4">
        <span className="text-lg font-semibold">{t("footer.socialMedia")}</span>
        <a target="_blank" className="text-sm" href="https://www.linkedin.com/in/diego-martínez-garcía-3301902a8">LinkedIn</a>
        <a target="_blank" className="text-sm" href="https://github.com/diegogama8934">GitHub</a>
        <a target="_blank" className="text-sm" href="mailto:diegomartinezgarcia@gmail.com">Email</a>
      </div>
      <p className="text-center text-zinc-500 text-sm">© 2025 {t("footer.madeBy")} Diego Martínez García. {t("footer.rights")}</p>
    </footer>
  );
}