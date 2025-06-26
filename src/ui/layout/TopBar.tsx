import { motion } from "motion/react";
import { TopBarBtn } from "../components/atoms/TopBarBtn";
import { TopBarCta } from "../components/atoms/TopBarCta";

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
        className="flex gap-5"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <TopBarBtn href="#home">
          <a href="#home">Home</a>
        </TopBarBtn>
        <TopBarBtn href="#projects">
          <a href="#projects">Projects</a>
        </TopBarBtn>
        <TopBarBtn href="#technologies">
          <a href="#technologies">Technologies</a>
        </TopBarBtn>
        <TopBarBtn href="#contact">
          <a href="#contact">Contact</a>
        </TopBarBtn>
        <TopBarCta>
          <a href="/CV.pdf" download>Download CV</a>
        </TopBarCta>
      </motion.div>
    </nav>
  );
}