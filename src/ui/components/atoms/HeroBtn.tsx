import { motion } from "motion/react";

interface HeroBtnProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroBtn({ children, className }: HeroBtnProps) {
  
  return (
    <motion.button className={"px-8 py-3 bg-gradient-to-r rounded-lg font-medium border border-dashed border-gray-400 hover:border-gray-500 " + className}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}