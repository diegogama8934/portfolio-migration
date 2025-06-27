import { motion } from "motion/react";
import { TopBarBtn } from "../components/atoms/TopBarBtn";
import { TopBarCta } from "../components/atoms/TopBarCta";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { themeContext } from "../providers/ThemeProvider";

export function TopBar() {
  const { t, i18n } = useTranslation();
  const { toggleTheme, theme: themeState } = useContext(themeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="flex justify-between items-center px-4 lg:px-10 py-4 border-b sticky top-0 left-0 right-0 z-50 backdrop-blur-sm dark:bg-neutral-800/20 dark:border-neutral-800 bg-white/75 border-gray-200 transition-colors duration-300"
      >
        <motion.img
          src="/icon.svg"
          alt="logo"
          className="w-8 h-8"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Desktop Navigation */}
        <motion.div
          className="hidden lg:flex gap-5 items-center"
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
                  },
                  className: themeState === "light" ? "bg-gray-200 dark:bg-zinc-700" : "",
                },
                {
                  key: "2",
                  label: t("topBar.dark"),
                  icon: <span className="material-symbols-outlined !text-base">dark_mode</span>,
                  onClick: () => {
                    toggleTheme("dark");
                  },
                  className: themeState === "dark" ? "bg-gray-200 dark:bg-zinc-700" : "",
                },
                {
                  key: "3",
                  label: t("topBar.system"),
                  icon: <span className="material-symbols-outlined !text-base">auto_mode</span>,
                  onClick: () => {
                    toggleTheme("system");
                  },
                  className: themeState === "system" ? "bg-gray-200 dark:bg-zinc-700" : "",
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
            <a href={`/CV_${i18n.language === "es" ? "ES" : "EN"}.pdf`} className="px-4 py-[10px] inline-block dark:text-black text-white" download>{t("topBar.downloadCV")}</a>
          </TopBarCta>
        </motion.div>

        {/* Mobile Controls */}
        <motion.div
          className="lg:hidden flex items-center gap-2"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Theme Dropdown for Mobile */}
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: t("topBar.light"),
                  icon: <span className="material-symbols-outlined !text-base">light_mode</span>,
                  onClick: () => {
                    toggleTheme("light");
                  },
                  className: themeState === "light" ? "bg-gray-200 dark:bg-zinc-700" : "",
                },
                {
                  key: "2",
                  label: t("topBar.dark"),
                  icon: <span className="material-symbols-outlined !text-base">dark_mode</span>,
                  onClick: () => {
                    toggleTheme("dark");
                  },
                  className: themeState === "dark" ? "bg-gray-200 dark:bg-zinc-700" : "",
                },
                {
                  key: "3",
                  label: t("topBar.system"),
                  icon: <span className="material-symbols-outlined !text-base">auto_mode</span>,
                  onClick: () => {
                    toggleTheme("system");
                  },
                  className: themeState === "system" ? "bg-gray-200 dark:bg-zinc-700" : "",
                },
              ]
            }}
            trigger={["click"]}
          >
            <Button
              className="flex items-center justify-center w-10 h-10"
              type="text"
              icon={<span className="material-symbols-outlined transition-colors duration-300 !text-base dark:text-white">contrast</span>}
            />
          </Dropdown>

          {/* Language Dropdown for Mobile */}
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
              className="flex items-center justify-center w-10 h-10"
              type="text"
              icon={
                <span className="material-symbols-outlined transition-colors duration-300 !text-base dark:text-white">
                  language
                </span>
              }
            />
          </Dropdown>

          {/* Burger Menu Button */}
          <Button
            className="flex items-center justify-center w-10 h-10"
            type="text"
            onClick={toggleMobileMenu}
            icon={
              <span className="material-symbols-outlined transition-colors duration-300 !text-base dark:text-white">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            }
          />
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}

      <motion.div
        className="fixed inset-0 z-40 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: isMobileMenuOpen ? "0" : "100%" }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeMobileMenu} />
        <motion.div
          className="absolute top-0 right-0 h-full w-64 bg-white dark:bg-neutral-900 shadow-xl pt-16"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-6 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold dark:text-white">{t("topBar.navigation")}</h2>
              <Button
                type="text"
                onClick={closeMobileMenu}
                icon={<span className="material-symbols-outlined">close</span>}
              />
            </div>

            <a
              href="#home"
              className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              onClick={closeMobileMenu}
            >
              {t("topBar.home")}
            </a>
            <a
              href="#aboutMe"
              className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              onClick={closeMobileMenu}
            >
              {t("topBar.aboutMe")}
            </a>
            <a
              href="#projects"
              className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              onClick={closeMobileMenu}
            >
              {t("topBar.projects")}
            </a>
            <a
              href="#softSkills"
              className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              onClick={closeMobileMenu}
            >
              {t("topBar.softSkills")}
            </a>
            <a
              href="#recommendations"
              className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              onClick={closeMobileMenu}
            >
              {t("topBar.contact")}
            </a>

            <div className="pt-4 border-t border-gray-200 dark:border-neutral-700">
              <TopBarCta>
                <a
                  href={`/CV_${i18n.language === "es" ? "ES" : "EN"}.pdf`}
                  className="w-full px-4 py-3 inline-block dark:text-black text-white text-center rounded-lg"
                  download
                  onClick={closeMobileMenu}
                >
                  {t("topBar.downloadCV")}
                </a>
              </TopBarCta>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}