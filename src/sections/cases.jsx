import Wave from "../assets/wave";
import SwipeCards from "../components/swipe-cards";
import { motion } from "motion/react";

export default function Cases({props}) {
  return (
    <motion.section className="relative flex w-full justify-center bg-amber-200/80 mt-44"
      {...props}
    >
      <motion.div className="absolute -top-44 left-0 z-50 w-full overflow-hidden">
        <Wave height="273.86" width="100%" />
      </motion.div>
      <motion.div className="my-24 w-full">
        <motion.div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <motion.h1 className="font-title text-4xl font-bold">Casos e Depoimentos</motion.h1>
          <motion.p>
            Alguns casos de antes e depois, demonstrando o quanto a harmonização
            faz diferença na autoestima das pessoas.
          </motion.p>
        </motion.div>
          {/* Cards */}
          <SwipeCards />
      </motion.div>
    </motion.section>
  );
}
