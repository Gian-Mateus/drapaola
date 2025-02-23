import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MenuButtonSVG } from "../ui/menu-button";
import { Brand } from "./Brand";
import { Navlinks } from "./Navlinks";
import { Nav } from "./Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

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
  };

  return (
    <motion.header
      variants={animations.header}
      initial="hidden"
      animate="visible"
      className="font-title sticky top-0 right-0 left-0 z-100 flex items-center justify-between bg-amber-800 px-4 text-yellow-50 lg:px-40"
    >
      <Brand variants={animations.logo} />

      <motion.button
        onClick={toggleSidebar}
        className="z-100 md:hidden"
        whileTap={{ scale: 0.9 }}
      >
        <MenuButtonSVG isOpen={isOpen} />
      </motion.button>

      <Nav isOpen={isOpen}>
        <Navlinks />
      </Nav>
    </motion.header>
  );
}
