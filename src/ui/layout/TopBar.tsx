import { motion } from "motion/react";
import { TopBarBtn } from "../components/atoms/TopBarBtn";
import { TopBarCta } from "../components/atoms/TopBarCta";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeContext } from "../providers/ThemeProvider";

export function TopBar() {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useContext(themeContext);
  return (
    <nav
      className="flex justify-between items-center px-10 py-4 border-b sticky top-0 left-0 right-0 z-50 backdrop-blur-sm dark:bg-neutral-800/20 dark:border-neutral-800 bg-white/75 border-gray-200 transition-colors duration-300"
    >
      <motion.img
        src="/icon.svg"
        alt="logo"
        className="w-8 h-8"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="flex gap-5 items-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <TopBarBtn href="#home">{t("topBar.home")}</TopBarBtn>
        <TopBarBtn href="#aboutMe">{t("topBar.aboutMe")}</TopBarBtn>
        <TopBarBtn href="#projects">{t("topBar.projects")}</TopBarBtn>
        <TopBarBtn href="#softSkills">{t("topBar.softSkills")}</TopBarBtn>
        <TopBarBtn href="#recommendations">{t("topBar.contact")}</TopBarBtn>

        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: t("topBar.light"),
                icon: <span className="material-symbols-outlined !text-base">light_mode</span>,
                onClick: () => {
                  toggleTheme("light");
                }
              },
              {
                key: "2",
                label: t("topBar.dark"),
                icon: <span className="material-symbols-outlined !text-base">dark_mode</span>,
                onClick: () => {
                  toggleTheme("dark");
                }
              },
              {
                key: "3",
                label: t("topBar.system"),
                icon: <span className="material-symbols-outlined !text-base">auto_mode</span>,
                onClick: () => {
                  toggleTheme("system");
                }
              },
            ]
          }}
          trigger={["click"]}
        >
          <Button
            className="flex items-center gap-2"
            type="text"
            icon={<span className="material-symbols-outlined transition-colors duration-300 !text-base dark:text-white">contrast</span>}
          >
            <span className="dark:text-white">{t("topBar.system")}</span>
          </Button>
        </Dropdown>

        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: t("topBar.english"),
                icon: <span>🇺🇸</span>,
                onClick: () => {
                  i18n.changeLanguage("en");
                }
              },
              {
                key: "2",
                label: t("topBar.spanish"),
                icon: <span>🇲🇽</span>,
                onClick: () => {
                  i18n.changeLanguage("es");
                }
              }
            ]
          }}
          trigger={["click"]}
        >
          <Button
            className="flex items-center gap-2"
            type="text"
            icon={
              <span
                className={`material-symbols-outlined transition-colors duration-300 !text-base dark:text-white`}
              >
                language
              </span>
            }
          >
            <span className="dark:text-white transition-colors duration-300">{i18n.language === "es" ? t("topBar.spanish") : t("topBar.english")}</span>
          </Button>
        </Dropdown>

        <TopBarCta>
          <a href="/CV_EN.pdf" className="px-4 py-[10px] inline-block dark:text-black text-white" download>{t("topBar.downloadCV")}</a>
        </TopBarCta>
      </motion.div>
    </nav >
  );
}