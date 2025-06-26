import { motion } from "motion/react";

interface TopBarCtaProps {
  children: React.ReactNode;
}

export function TopBarCta({ children }: TopBarCtaProps) {
  return (
    <motion.button className="px-4 py-[10px] rounded-md text-sm bg-gradient-to-r from-neutral-950 to-neutral-900 text-white"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      whileHover={{ scale: 1.10, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.90, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.button>
  )
}