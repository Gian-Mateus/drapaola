import React from "react";
import { AnimatePresence, motion } from "motion/react";

export const Nav = ({ props, children, isOpen }) => {
  const navVariants = {
    initial: {
      opacity: 0,
      x: "100%"
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.nav
          variants={navVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-0 right-0 z-20 h-screen md:h-auto overflow-hidden bg-amber-900 pt-24 px-24 md:static md:bg-transparent md:pt-0"
          {...props}
        >
          {children}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};