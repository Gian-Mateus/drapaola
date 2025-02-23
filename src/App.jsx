import Header from "./components/Header";
import About from "./sections/About";
import Harmonization from "./sections/Harmonization";
import Cases from "./sections/Cases";
import Footer from "./sections/Footer";
import { motion } from "motion/react";

export default function App() {

  return (
    <>
      <Header />
      <main className="font-body min-h-full relative">
        <motion.div className="z-10 sticky top-[8vh] left-0 right-0">
          <About />
        </motion.div>
        <motion.div
          className="z-20 sticky top-[8vh] left-0 right-0"
        >
          <Harmonization />
        </motion.div>

        <motion.div
          className="z-30 sticky top-[8vh] left-0 right-0"
        >
          <Cases />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}