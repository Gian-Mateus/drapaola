import { motion } from "framer-motion";
import { useState } from "react";
import { MenuButtonSVG } from "../ui/menu-button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const header = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 2,
        delay: 1,
        duration: 0.7,
        ease: "linear",
      },
    },
  };

  const nav = {
    hidden: {
      opacity: 0,
      x: 300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "linear",
        staggerChildren: 0.3,
        //when: "beforeChildren",
      },
    },
  };

  const logo = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "linear",
      },
    },
  };

  return (
    <motion.header
      variants={header}
      initial="hidden"
      animate="visible"
      className="relative flex items-center justify-between bg-amber-800 px-4 font-title text-yellow-50 lg:px-40"
    >
      <motion.div variants={logo} className="ml-4 min-w-[50%] p-4">
        <h1 className="text-3xl font-bold italic">PR</h1>
        <h2 className="italic">Dra. Paola Rossigalli</h2>
      </motion.div>

      <motion.button
        variants={nav}
        onClick={toggleMenu}
        className="absolute right-6 top-3 z-20 sm:hidden"
      >
        <MenuButtonSVG isOpen={isOpen} />
      </motion.button>

      <motion.nav
        variants={nav}
        className={`fixed right-0 top-0 h-screen overflow-hidden bg-amber-900/95 sm:h-auto sm:bg-transparent ${
          isOpen || window.innerWidth >= 640 ? "w-2/3" : "w-0"
        } pt-24 sm:relative sm:mr-6 sm:w-auto sm:pt-0 transition-[width] duration-300 ease-in-out`} 
      >
        <motion.ul variants={nav} className="mx-auto px-4 text-center font-title sm:flex sm:gap-12">
          {["Home", "Sobre", "Contato"].map((item, index) => (
            <motion.li
              key={index}
              className="relative mb-6"
              onHoverStart={(e) => e.stopPropagation()} // Opcional: evita conflitos de hover
              onHoverEnd={(e) => e.stopPropagation()} // Opcional: evita conflitos de hover
            >
              <motion.a
                href="/"
                className="relative block text-2xl sm:text-lg"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {item}
                <motion.div
                  className="absolute -bottom-0.5 left-1/2 h-1 rounded-full bg-yellow-50"
                  style={{ transform: "translateX(-50%)", width: "0%" }} // Começa centralizado
                  variants={{
                    rest: { width: "0%" }, // Contraído
                    hover: { width: "100%" }, // Expandido
                  }}
                  transition={{
                    duration: 0.3, // Duração da animação
                    ease: "easeInOut", // Curva suave
                  }}
                />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
}
