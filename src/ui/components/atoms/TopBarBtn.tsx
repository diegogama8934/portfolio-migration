import { motion } from "motion/react";

interface TopBarBtnProps {
  children: React.ReactNode;
  href?: string;
}

export function TopBarBtn({ children, href }: TopBarBtnProps) {
  return (
    <motion.a
      className="px-4 py-[10px] rounded-md text-sm dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      whileHover={{ scale: 1.10, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.90, transition: { duration: 0.2 } }}
      href={href}
    >
      {children}
    </motion.a>
  )
}