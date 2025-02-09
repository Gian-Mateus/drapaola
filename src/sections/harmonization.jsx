import { Botox } from "../assets/botox";
import { Chin } from "../assets/chin";
import { Filler } from "../assets/filler";
import { MouthFill } from "../assets/mouth";
import { Bioestimulator } from "../assets/bioestimulator";
import { motion } from "motion/react";

export default function Harmonization({props}) {

  const treatments = [
    {
      Component: MouthFill,
      title: "Preenchimento Labial",
      description: "O preenchimento labial aumenta o volume e melhora a simetrias, proporcionando lábios bonitos e harmoniosos.",
    },
    {
      Component: Botox,
      title: "Botox",
      description: "A toxina botulínica ajuda a atenuar linhas de expressão e rugas mais profundas",
    },
    {
      Component: Chin,
      title: "Lipo de Papada",
      description: "A lipoaspiração de papada é um procedimento estético que elimina a gordura acumulada na região abaixo do queixo, resultando em um contorno facial mais definido e equilibrado.",
    },
    {
      Component: Filler,
      title: "Preenchimento com Ácido Hialurônico",
      description: "O preenchimento com ácido hialurônico é um dos tratamentos estéticos mais populares para suavizar rugas, restaurar volume e melhorar a aparência da pele de forma harmoniosa e rejuvenescida.",
    },
    {
      Component: Bioestimulator,
      title: "Bioestimulador",
      description: "Os bioestimuladores de colágeno estimulam a produção de colágeno, melhorando a textura e firmeza da pele.",
    },
  ];
  
  return (
    <motion.section className="flex w-full"
      {...props}
    >
      <motion.div className="mx-12 -mt-16 mb-6 w-full rounded-[40px] bg-yellow-50 p-6 text-amber-950 shadow-md">
        <motion.div className="flex w-full flex-col items-center justify-around p-6 md:p-12 lg:flex-row">
          <motion.div className="mb-6 grid grid-cols-2 gap-2 max-w-md">
            {[
              "/assets/botox.jpg",
              "/assets/botox-ap.jpg",
              "/assets/botox-ap-2.jpg",
              "/assets/filler-lips.jpg",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index}`}
                className={` ${
                  index === 0
                    ? "rounded-t-full rounded-bl-full"
                    : index === 1
                      ? "rounded-t-full rounded-br-full"
                      : index === 2
                        ? "rounded-b-full rounded-tl-full"
                        : "rounded-b-full rounded-tr-full"
                } object-cover ${index < 2 ? "self-end" : "self-start"}`}
              />
            ))}
          </motion.div>

          <motion.div className="mt-6 text-center md:ml-12 md:mt-0 md:text-left">
            <motion.h1 className="font-title text-3xl font-bold md:text-4xl">
              Harmonização Facial, você se sentindo melhor consigo mesma.
            </motion.h1>
            <motion.p className="mt-4 text-amber-900">
              Procedimentos que podem ser realizados com a Harmonização facial para melhorar a sua autoestima e bem-estar.
            </motion.p>

            <motion.div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {treatments.map(({ Component, title, description }, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-[auto_1fr] items-center gap-x-3"
                >
                  <Component
                    height="4rem"
                    width="4rem"
                    className="row-span-2 justify-self-center fill-amber-950"
                  />
                  <motion.div>
                    <motion.h3 className="font-title font-bold text-2xl">{title}</motion.h3>
                    <motion.p className="text-amber-900">{description}</motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
