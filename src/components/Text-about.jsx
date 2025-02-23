import { motion } from "motion/react";

export const TextAbout = () => {
  const containerText = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 1,
      },
    },
  };
  return (
    <motion.div
      variants={containerText}
      initial="hidden"
      animate="visible"
      className="mb-10 flex min-w-72 flex-col gap-12 p-6 font-light text-amber-100"
    >
      <motion.section>
        <motion.h2 className="font-title text-3xl font-bold">
          Quem sou eu?
        </motion.h2>
        <motion.p>
          Sou especialista em Harmonização Facial, e meu compromisso é oferecer
          um atendimento humanizado e acolhedor. Minha maior prioridade é
          entender suas necessidades e expectativas, proporcionando soluções
          personalizadas para realçar sua beleza natural com segurança e
          equilíbrio. Com uma abordagem cuidadosa e detalhista, busco garantir
          seu conforto e confiança em cada procedimento, tornando sua
          experiência única e transformadora.
        </motion.p>
      </motion.section>
      <motion.section>
        <motion.h2 className="font-title text-3xl font-bold">
          Formação
        </motion.h2>
        <motion.div>
          Meu compromisso com a excelência se reflete nos cursos e treinamentos
          práticos que realizei, garantindo atualização constante e domínio das
          técnicas mais avançadas.
          <motion.ul>
            <motion.li className="list-inside list-disc indent-4 font-bold italic">
              Especialização em Harmonização Facial
            </motion.li>
            <motion.li className="list-inside list-disc indent-4 font-bold italic">
              Curso Intensivo Prático em Harmonização (Toxina Botulínica,
              Preenchimento, Bioestimuladores)
            </motion.li>
            <motion.li className="list-inside list-disc indent-4 font-bold italic">
              Cursos de Imersão em Facetas e Resina
            </motion.li>
          </motion.ul>
          Com os anos de experiência, já tive a oportunidade de transformar a
          autoestima de diversos pacientes, sempre com atenção aos detalhes e
          utilizando materiais premium.
        </motion.div>
      </motion.section>
    </motion.div>
  );
};
