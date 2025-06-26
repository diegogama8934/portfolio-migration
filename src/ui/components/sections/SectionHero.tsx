import { motion } from "motion/react";
import { HeroCta } from "../atoms/HeroCta";
import { HeroBtn } from "../atoms/HeroBtn";

export function SectionHero() {
  return (
    <div
      className="flex flex-col items-center justify-center pb-40 pt-10"
    >
      <motion.h2 className="text-xl md:text-5xl font-semibold text-center mb-6 text-gray-500 leading-relaxed"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
      >
        I <span className="gradient-text font-extrabold">build technology</span> that enables people and organizations to <span className="gradient-text font-bold">move forward</span>.
      </motion.h2>

      <motion.p className="text-2xl text-center mb-8 text-gray-500 leading-relaxed font-light max-w-2xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
      >
        Built with context, where the human, the system, and the future are considered in every decision is what I believe in.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
        className="flex flex-col gap-8 items-center justify-center w-[550px]"
      >

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <HeroBtn className="sm:flex-1">
            <a href="#" className="text-gray-500">Download CV</a>
          </HeroBtn>
          <HeroBtn className="sm:flex-1">
            <a href="#" className="text-gray-500">LinkedIn</a>
          </HeroBtn>
          <HeroBtn className="sm:flex-1">
            <a href="#" className="text-gray-500">Github</a>
          </HeroBtn>
        </div>

        <HeroCta>
          <a href="#contact" className="flex items-center gap-2">
            <span>Read more</span>
            <span className="material-symbols-outlined !text-lg">arrow_downward</span>
          </a>
        </HeroCta>
      </motion.div>
    </div>
  );
} 