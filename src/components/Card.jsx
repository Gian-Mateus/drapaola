import { motion } from "motion/react";

export const Card = ({ props, animation }) => {
    return (
        <motion.article
            variants={animation}
            className="h-fit max-h-[70vh] max-w-lg rounded-3xl bg-yellow-50 p-4 shadow-xl"
            {...props}
          >
            <img
              className="rounded-3xl object-cover"
              src="/assets/paola-interprete.jpg"
              alt="Dra. Paola Rossigalli"
            />
            <div>
              <h3 className="mt-2 text-xl font-bold italic text-amber-950">
                Dra. Paola Rossigalli
              </h3>
              <p className="text-amber-900">
                Sou a Dra. Paola Rossigalli, dentista especializada em
                Harmonização Facial. Sempre encantada pela estética e pela
                capacidade que ela tem de transformar não só a aparência, mas
                também a autoestima das pessoas.
              </p>
            </div>
          </motion.article>
    )
}