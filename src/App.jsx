import { motion } from "motion/react";
import About from "./sections/about";
import Harmonization from "./sections/harmonization";
import Cases from "./sections/cases";
import Footer from "./sections/footer";

const { scrollY, scrollProgress } = useScroll()
function App() {
  return (
    <motion.div>
      <main className="font-body">
        <About />
        <Harmonization />
        <Cases />
      </main>
      <Footer />
    </motion.div>
  );
}
export default App;
