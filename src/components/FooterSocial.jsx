import { motion } from "motion/react";
import { Instagram } from "../assets/instagram";
import { Facebook } from "../assets/facebook";
import { WhatsApp } from "../assets/whatsapp";

export default function FooterSocial() {
  return (
    <motion.div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
      <motion.div whileHover={{ scale: 1.03 }} className="flex flex-col items-center">
        <motion.h4 className="font-title text-xl font-bold uppercase">
          Siga nas redes sociais
        </motion.h4>
        <ul className="mt-4 flex gap-4">
          <motion.li whileHover={{ scale: 1.2 }}>
            <Instagram width="3rem" height="3rem" />
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Facebook width="3rem" height="3rem" />
          </motion.li>
        </ul>
      </motion.div>
      <motion.div className="flex flex-col items-center">
        <motion.p className="text-center">Agende uma avaliação:</motion.p>
        <motion.div whileHover={{ scale: 1.05 }} className="mt-2 flex items-center gap-1">
          <WhatsApp width="2rem" height="2rem" />
          <motion.p>+55 11 99999-9999</motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
