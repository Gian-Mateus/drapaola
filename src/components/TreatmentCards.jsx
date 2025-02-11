
import { motion } from "motion/react";
import { Botox } from "../assets/botox";
import { Chin } from "../assets/chin";
import { Filler } from "../assets/filler";
import { MouthFill } from "../assets/mouth";
import { Bioestimulator } from "../assets/bioestimulator";

const treatments = [
  {
    Component: MouthFill,
    title: "Preenchimento Labial",
    description:
      "O preenchimento labial aumenta o volume e melhora a simetrias, proporcionando lábios bonitos e harmoniosos.",
  },
  {
    Component: Botox,
    title: "Botox",
    description:
      "A toxina botulínica ajuda a atenuar linhas de expressão e rugas mais profundas.",
  },
  {
    Component: Chin,
    title: "Lipo de Papada",
    description:
      "A lipoaspiração de papada é um procedimento estético que elimina a gordura acumulada na região abaixo do queixo, resultando em um contorno facial mais definido e equilibrado.",
  },
  {
    Component: Filler,
    title: "Preenchimento com Ácido Hialurônico",
    description:
      "O preenchimento com ácido hialurônico é um dos tratamentos estéticos mais populares para suavizar rugas, restaurar volume e melhorar a aparência da pele de forma harmoniosa e rejuvenescida.",
  },
  {
    Component: Bioestimulator,
    title: "Bioestimulador",
    description:
      "Os bioestimuladores de colágeno estimulam a produção de colágeno, melhorando a textura e firmeza da pele.",
  },
];

export default function TreatmentCards() {
  return (
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
          <div>
            <motion.h3 className="font-title font-bold text-2xl">
              {title}
            </motion.h3>
            <motion.p className="text-amber-900">{description}</motion.p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
