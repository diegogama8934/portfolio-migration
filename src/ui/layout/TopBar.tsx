import { motion } from "motion/react";
import { TopBarBtn } from "../components/atoms/TopBarBtn";
import { TopBarCta } from "../components/atoms/TopBarCta";
import { Button, Dropdown } from "antd";

export function TopBar() {

  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b border-gray-200 sticky top-0 left-0 right-0 z-50 bg-white">
      <motion.img
        src="/DG.svg"
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
        <TopBarBtn href="#home">Home</TopBarBtn>
        <TopBarBtn href="#projects">Projects</TopBarBtn>
        <TopBarBtn href="#technologies">Technologies</TopBarBtn>
        <TopBarBtn href="#contact">Contact</TopBarBtn>

        <Dropdown
          menu={{
            items: [
              {
                key: "1", label: "Light", icon: <span className="material-symbols-outlined !text-base">light_mode</span>
              },
              {
                key: "2", label: "Dark", icon: <span className="material-symbols-outlined !text-base">dark_mode</span>
              },
              {
                key: "3", label: "System", icon: <span className="material-symbols-outlined !text-base">auto_mode</span>
              },
            ]
          }}
          trigger={["click"]}
        >
          <Button className="flex items-center gap-2" type="text" icon={<span className="material-symbols-outlined !text-base">contrast</span>}>
            <span>Auto</span>
          </Button>
        </Dropdown>

        <Dropdown
          menu={{
            items: [
              {
                key: "1", label: "English", icon: <span>🇺🇸</span>
              },
              {
                key: "2", label: "Español", icon: <span>🇲🇽</span>
              }
            ]
          }}
          trigger={["click"]}
        >
          <Button className="flex items-center gap-2" type="text" icon={<span className="material-symbols-outlined !text-base">language</span>}>
            <span>ES</span>
          </Button>
        </Dropdown>

        <TopBarCta>
          <a href="/CV.pdf" download>Download CV</a>
        </TopBarCta>
      </motion.div>
    </nav >
  );
}