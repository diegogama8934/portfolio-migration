import { motion } from "motion/react";

interface HeroCtaProps {
  children: React.ReactNode;
}

export function HeroCta({ children }: HeroCtaProps) {
  return (
    <motion.div className="px-8 py-3 bg-gradient-to-r from-neutral-800 to-neutral-700 text-white rounded-lg hover:from-neutral-900 hover:to-neutral-800 transition-colors font-medium dark:from-white dark:to-white/80 dark:hover:from-white/90 dark:hover:to-white/70 sm:mt-0 mt-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: 1.35 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}