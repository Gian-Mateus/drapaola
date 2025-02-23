import { motion } from "framer-motion";
import Wave from "../assets/wave";
import SwipeCards from "../components/Swipe-cards";

export default function Cases() {
  return (
    <motion.section
      className="relative z-30 mt-44 flex w-full justify-center bg-yellow-200"
    >
      <motion.div className="absolute -top-20 right-0 left-0 z-50 w-full overflow-hidden fill-yellow-200">
        <Wave height="10rem" width="100%" />
      </motion.div>

      <motion.div className="my-24 w-full">
        <motion.div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <motion.h1 className="font-title text-4xl font-bold">
            Casos e Depoimentos
          </motion.h1>
          <motion.p>
            Alguns casos de antes e depois, demonstrando o quanto a harmonização
            faz diferença na autoestima das pessoas.
          </motion.p>
        </motion.div>
        <SwipeCards />
      </motion.div>
    </motion.section>
  );
}
