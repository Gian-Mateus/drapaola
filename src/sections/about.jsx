import { motion } from "motion/react";
import Header from "./header";

export default function About() {
  const container = {
    hiddenContainer: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      borderRadius: 25,
     // transformPerspective: 2500
    },
    visibleContainer: {
      opacity: 1,
      y: 0,
      scale: 1,
      borderRadius: 0,
      transition:{
        staggerChildren: 0.2,
        // when: "beforeChildren",
        duration: 1,
        ease: "easeIn"
      }
    },
    hiddenCard:{
      opacity: 0,
      x: -300
    },
    visibleCard:{
      opacity: 1,
      x: 0,
      transition:{
         duration: 1,
         ease: "easeInOut"
      }
    },
    hiddenText:{
      opacity: 0,
      y: -100
    },
    visibleText:{
      opacity: 1,
      y: 0
    }
  };

  return (
    <>
      <Header />
      <motion.section
        variants={container}
        initial="hiddenContainer"
        animate="visibleContainer"
        className="rounded-b-3xl bg-amber-800 p-10 pb-48"
      >
        <div className="mx-auto flex flex-col md:max-w-5xl md:flex-row">
          <motion.article
            variants={container}
            initial="hiddenCard"
            animate="visibleCard"
          className="h-fit max-h-[70vh] max-w-lg rounded-3xl bg-yellow-50 p-4 shadow-xl">
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
          variants={container}
          initial="hiddenText"
          animate="visibleText"
          className="mb-10 flex min-w-72 flex-col gap-12 p-6 text-amber-100">
            <section>
              <h2 className="font-title text-3xl font-bold">Quem sou eu?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                possimus, veniam consequatur quam qui odit deserunt saepe natus
                optio ut eligendi voluptatem, sapiente distinctio asperiores
                assumenda eum nostrum eos doloribus.
              </p>
            </section>
            <section>
              <h2 className="font-title text-3xl font-bold">Formação</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                possimus, veniam consequatur quam qui odit deserunt saepe natus
                optio ut eligendi voluptatem, sapiente distinctio asperiores
                assumenda eum nostrum eos doloribus.
              </p>
            </section>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
