import { motion } from "motion/react";
import { useState } from "react";
import { MenuButtonSVG } from "../ui/menu-button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <motion.header
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        delay: 1
      }}
      className="relative flex items-center justify-between bg-amber-800 px-4 font-title text-yellow-50 lg:px-40"
    >
      <div className="ml-4 min-w-[50%] p-4">
        <h1 className="text-3xl font-bold italic">PR</h1>
        <h2 className="italic">Dra. Paola Rossigalli</h2>
      </div>

      <button
        onClick={toggleMenu}
        className="absolute right-6 top-3 z-20 sm:hidden"
      >
        <MenuButtonSVG isOpen={isOpen} />
      </button>

      <nav
        className={`fixed right-0 top-0 h-screen overflow-hidden bg-amber-900/95 transition-all duration-300 ease-in-out sm:h-auto sm:bg-transparent ${isOpen ? "w-2/3" : "w-0 sm:w-auto"} pt-24 sm:relative sm:mr-6 sm:pt-0`}
      >
        <ul className="mx-auto px-4 text-center font-title sm:flex sm:gap-12">
          {["Home", "Sobre", "Contato"].map((item, index) => (
            <li
              key={index}
              className="relative mb-6 transition-[color] duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] after:absolute after:-bottom-0.5 after:left-2/4 after:h-0.5 after:w-[0%] after:bg-yellow-50 after:transition-[width,left] after:duration-[400ms] after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:content-[''] hover:after:left-[0%] hover:after:w-full focus:after:left-[0%] focus:after:w-full"
            >
              <a href="/" className="text-2xl sm:text-lg">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
