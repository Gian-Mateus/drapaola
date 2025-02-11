import { motion } from "motion/react";

export default function FooterLinks() {
  const links = ["Home", "Serviços", "Sobre", "Contato"];

  return (
    <motion.ul className="flex flex-col gap-2 text-center md:text-left">
      {links.map((link, index) => (
        <motion.li
          key={index}
          className="cursor-pointer"
          whileHover={{ color: "#FCD34D" }}
        >
          {link}
        </motion.li>
      ))}
    </motion.ul>
  );
}
