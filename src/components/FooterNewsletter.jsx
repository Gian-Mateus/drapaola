import { motion } from "motion/react";

export default function FooterNewsletter() {
  return (
    <motion.div className="flex flex-col gap-4">
      <motion.h4 className="font-title text-xl font-bold text-center md:text-left">
        Receba Nossas Novidades
      </motion.h4>
      <motion.form className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Seu email"
          className="rounded-full px-4 py-2 text-amber-950 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-yellow-50 px-4 py-2 font-bold text-amber-950 hover:opacity-90"
        >
          Inscrever
        </button>
      </motion.form>
    </motion.div>
  );
}
