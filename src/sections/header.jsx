import { useState } from "react";
import { MenuButtonSVG } from "../ui/menu-button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="flex bg-amber-800 text-yellow-50 items-center justify-between font-title px-4 lg:px-40 relative">
      <div className="p-4 min-w-[50%] ml-4">
        <h1 className="text-3xl font-bold italic">PR</h1>
        <h2 className="italic">Dra. Paola Rossigalli</h2>
      </div>

      <button
        onClick={toggleMenu}
        className="sm:hidden z-20 absolute top-3 right-6"
      >
        <MenuButtonSVG isOpen={isOpen} />
      </button>

      <nav
        className={`fixed top-0 right-0 h-screen sm:h-auto overflow-hidden transition-all duration-300 ease-in-out bg-amber-900/95 sm:bg-transparent ${isOpen ? "w-2/3" : "w-0 sm:w-auto"} sm:relative sm:mr-6 pt-24 sm:pt-0`}
      >
        <ul className="px-4 text-center mx-auto font-title sm:flex sm:gap-12">
          {["Home", "Sobre", "Contato"].map((item, index) => (
            <li key={index} className="relative ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] transition-[color] after:content-[''] after:absolute after:w-[0%] after:h-0.5 after:bg-yellow-50 after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] after:transition-[width,left] after:left-2/4 after:-bottom-0.5 focus:after:w-full focus:after:left-[0%] hover:after:w-full hover:after:left-[0%] mb-6">
              <a href="/" className="text-2xl sm:text-lg">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
