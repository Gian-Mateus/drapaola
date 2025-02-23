import { motion } from "motion/react";
import ImageGrid from "../components/ImageGrid";
import TreatmentCards from "../components/TreatmentCards";

export default function Harmonization({ props }) {
  const images = [
    "/assets/botox.jpg",
    "/assets/botox-ap.jpg",
    "/assets/botox-ap-2.jpg",
    "/assets/filler-lips.jpg",
  ];

  return (
    <motion.section
      className="relative z-20 flex w-full"
      {...props}
    >
      <motion.div className="mx-12 -mt-16 mb-6 w-full rounded-[40px] bg-yellow-50 p-6 text-amber-950 shadow-md">
        <motion.div className="flex w-full flex-col items-center justify-around p-6 md:p-12 lg:flex-row">
          <ImageGrid images={images} />

          <motion.div className="mt-6 text-center md:mt-0 md:ml-12 md:text-left">
            <motion.h1 className="font-title text-3xl font-bold md:text-4xl">
              Harmonização Facial, você se sentindo melhor consigo mesma.
            </motion.h1>
            <motion.p className="mt-4 text-amber-900">
              Procedimentos que podem ser realizados com a Harmonização facial
              para melhorar a sua autoestima e bem-estar.
            </motion.p>

            <TreatmentCards />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
