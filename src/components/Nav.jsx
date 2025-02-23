import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Nav = ({ props, children, isOpen }) => {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 1000); // Tempo da animação inicial
    return () => clearTimeout(timer);
  }, []);

  const initialAnimation = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const sidebarAnimation = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.nav
          variants={hasEntered ? sidebarAnimation : initialAnimation}
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
