import { motion } from "motion/react";
import FooterSocial from "../components/FooterSocial";
import FooterLinks from "../components/FooterLinks";
import FooterNewsletter from "../components/FooterNewsletter";
import FooterAddress from "../components/FooterAddress";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col bg-amber-950 px-12 pt-12 pb-12 text-yellow-50 gap-8"
    >
      <FooterSocial />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto flex flex-col md:flex-row gap-8 justify-between w-full border-t border-yellow-50 pt-6"
      >
        <FooterLinks />
        <FooterNewsletter />
      </motion.div>
      <FooterAddress />
    </motion.footer>
  );
}