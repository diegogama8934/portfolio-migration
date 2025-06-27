import { motion } from "motion/react";
import { useState } from "react";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export function DropdownMenu({ trigger, children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="z-10 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {
        isOpen && (
          <motion.div
            className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )
      }

      {isOpen && (
        <motion.div
          className="absolute top-full right-0 mt-2 w-40 z-20 rounded-lg bg-white border border-gray-200 shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-1">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function DropdownMenuItem({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <div
      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
