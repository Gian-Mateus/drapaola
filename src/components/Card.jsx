import { motion } from "framer-motion";

export const Card = () => {
  const containerCard = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 2,
        type: "tween",
        ease: "linear",
/*         staggerChildren: 0.3, 
        when: "beforeChildren", */
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 2,
        ease: "linear",
      },
    },
  };

  return (
    <motion.article
      variants={containerCard}
      initial="hidden"
      animate="visible"
      className="h-fit max-h-[70vh] max-w-lg rounded-3xl bg-yellow-50 p-4 shadow-xl"
    >
      <motion.img
       /*  variants={item} */
        className="rounded-3xl object-cover"
        src="/assets/paola-interprete.jpg"
        alt="Dra. Paola Rossigalli"
      />

      <motion.div /* variants={item} */>
        <motion.h3 className="mt-2 text-xl font-bold text-amber-950 italic">
          Dra. Paola Rossigalli
        </motion.h3>

        <motion.p className="text-amber-900">
          Sou a Dra. Paola Rossigalli, dentista especializada em Harmonização
          Facial. Sempre encantada pela estética e pela capacidade que ela tem
          de transformar não só a aparência, mas também a autoestima das
          pessoas.
        </motion.p>
      </motion.div>
    </motion.article>
  );
};
