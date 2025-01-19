import { easeIn, motion } from "motion/react";
import Header from "./header";

export default function About() {
  const fade = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition:{
        // staggerChildren: 0.3,
        // when: "beforeChildren",
        duration: 1,
        ease: "easeIn"
      }
    },
  };

  return (
    <>
      <Header />
      <motion.section
        variants={fade}
        initial="hidden"
        animate="visible"
        className="rounded-b-3xl bg-amber-800 p-10 pb-48"
      >
        <div className="mx-auto flex flex-col md:max-w-5xl md:flex-row">
          <article className="h-fit max-h-[70vh] max-w-lg rounded-3xl bg-yellow-50 p-4 shadow-xl">
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
          </article>

          <div className="mb-10 flex min-w-72 flex-col gap-12 p-6 text-amber-100">
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
          </div>
        </div>
      </motion.section>
    </>
  );
}
