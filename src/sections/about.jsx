import { motion } from "motion/react";
import Header from "./header";

export default function About() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        duration: 1,
        ease: "easeIn",
        delayChildren: 1,
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
        <div className="mx-auto flex flex-col md:max-w-5xl md:flex-row items-center gap-3">
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
                Sou a Dra. Paola Rossigalli, dentista especializada em
                Harmonização Facial. Sempre encantada pela estética e pela
                capacidade que ela tem de transformar não só a aparência, mas
                também a autoestima das pessoas.
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
                Sou especialista em Harmonização Facial, e meu compromisso é
                oferecer um atendimento humanizado e acolhedor. Minha maior
                prioridade é entender suas necessidades e expectativas,
                proporcionando soluções personalizadas para realçar sua beleza
                natural com segurança e equilíbrio. Com uma abordagem cuidadosa
                e detalhista, busco garantir seu conforto e confiança em cada
                procedimento, tornando sua experiência única e transformadora.
              </motion.p>
            </motion.section>
            <motion.section>
              <motion.h2 className="font-title text-3xl font-bold">
                Formação
              </motion.h2>
              <motion.div>
                Meu compromisso com a excelência se reflete
                nos cursos e treinamentos práticos que realizei, garantindo
                atualização constante e domínio das técnicas mais avançadas.
                <motion.ul className="indent-4 list-disc list-inside">
                  <motion.li>Especialização em Harmonização Facial</motion.li>
                </motion.ul>
                <motion.ul className="indent-4 list-disc list-inside">
                  <motion.li>
                    Curso Intensivo Prático em Harmonização (Toxina Botulínica,
                    Preenchimento, Bioestimuladores)
                  </motion.li>
                </motion.ul>
                <motion.ul className="indent-4 list-disc list-inside">
                  <motion.li>Cursos de Imersão em Facetas e Resina</motion.li>
                </motion.ul>
                Com os anos de experiência, já tive a oportunidade de
                transformar a autoestima de diversos pacientes, sempre com
                atenção aos detalhes e utilizando materiais premium.
              </motion.div>
            </motion.section>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
