import { motion } from "motion/react";
import { Card } from "../components/Card";
import { TextAbout } from "../components/Text-about";

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
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="rounded-b-3xl bg-amber-800 p-10 pb-48"
      >
        <motion.div className="mx-auto flex flex-col md:max-w-5xl md:flex-row items-center gap-3">
          <Card animation={containerCard}/>
          <TextAbout animation={containerText}/>
        </motion.div>
      </motion.section>
    </>
  );
}