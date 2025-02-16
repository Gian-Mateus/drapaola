import { motion } from "motion/react";
import { useState } from "react";
import { MenuButtonSVG } from "../ui/menu-button";
import { Brand } from "./Brand";
import { Navlinks } from "./Navlinks";
import { Nav } from "./Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
      <Brand variants={animations.logo} />

      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        className="z-50"
        whileTap={{ scale: 0.9 }}
      >
        <MenuButtonSVG isOpen={isOpen} />
      </motion.button>

      <Nav variants={animations.navToggle}>
        <Navlinks variants={animations.navHover} />
      </Nav>
    </motion.header>
  );
}