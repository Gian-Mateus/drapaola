import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MenuButtonSVG } from "../ui/menu-button";
import { Brand } from "../components/brand";
import { Navlinks } from "../components/navlinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    if (isMobile) setIsOpen((prev) => !prev);
  };

  const animations = {
    header: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 1,
          staggerChildren: 0.3,
        },
      },
    },
    logo: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    },
    navToggle: {
      hidden: {
        x: "100%",
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      },
    },
    navHover: {
      rest: { width: "0%" },
      hover: { width: "100%" },
    },
    navItem: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <motion.header
      variants={animations.header}
      initial="hidden"
      animate="visible"
      className="sticky top-0 left-0 right-0 flex items-center justify-between bg-amber-800 px-4 font-title text-yellow-50 lg:px-40"
    >
      <Brand animations={animations} isMobile={isMobile} />

      {isMobile && (
        <motion.button
          onClick={toggleMenu}
          className="z-50"
          whileTap={{ scale: 0.9 }}
        >
          <MenuButtonSVG isOpen={isOpen} />
        </motion.button>
      )}

      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.nav
            key="nav"
            variants={animations.navToggle}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={` ${
              isMobile
                ? "fixed right-0 top-0 h-screen w-2/3 bg-amber-900 pt-24"
                : "relative mr-6 w-auto"
            } z-20 overflow-hidden`}
          >
            <Navlinks animations={animations} />
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}