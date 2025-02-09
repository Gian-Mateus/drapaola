import { motion } from "motion/react";
import About from "./sections/about";
import Harmonization from "./sections/harmonization";
import Cases from "./sections/cases";
import Footer from "./sections/footer";
import Header from "./sections/header";

// const { scrollY, scrollProgress } = useScroll()
function App() {
  return (
    <motion.div>
      <main className="font-body relative z-10">
        <Header />
        <About />
        <Harmonization />
        <Cases />
      </main>
      <Footer />
    </motion.div>
  );
}
export default App;
