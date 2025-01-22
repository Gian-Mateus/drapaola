import { motion } from "motion/react";
import Header from "./header";

export default function About() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        duration: 1,
        ease: "easeIn",
        staggerChildren: 0.2,
        delayChildren: 1,
        when: "beforeChildren",
      },
    },
  };

  const containerCard = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const containerText = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Header />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="rounded-b-3xl bg-amber-800 p-10 pb-48"
      >
        <div className="mx-auto flex flex-col md:max-w-5xl md:flex-row">
          <motion.article
            variants={containerCard}
            className="h-fit max-h-[70vh] max-w-lg rounded-3xl bg-yellow-50 p-4 shadow-xl"
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                eaque similique dolor et voluptatibus dicta perspiciatis quis
                fugit est libero voluptatem quidem saepe voluptate, asperiores
                nesciunt sed animi illo doloremque?
              </p>
            </div>
          </motion.article>

          <motion.div
            variants={containerText}
            className="mb-10 flex min-w-72 flex-col gap-12 p-6 text-amber-100"
          >
            <motion.section>
              <motion.h2 className="font-title text-3xl font-bold">
                Quem sou eu?
              </motion.h2>
              <motion.p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                possimus, veniam consequatur quam qui odit deserunt saepe natus
                optio ut eligendi voluptatem, sapiente distinctio asperiores
                assumenda eum nostrum eos doloribus.
              </motion.p>
            </motion.section>
            <motion.section>
              <motion.h2 className="font-title text-3xl font-bold">Formação</motion.h2>
              <motion.p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                possimus, veniam consequatur quam qui odit deserunt saepe natus
                optio ut eligendi voluptatem, sapiente distinctio asperiores
                assumenda eum nostrum eos doloribus.
              </motion.p>
            </motion.section>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
