import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Header from "./sections/header";
import About from "./sections/about";
import Harmonization from "./sections/harmonization";
import Cases from "./sections/cases";
import Footer from "./sections/footer";

export default function App() {
  const containerRef = useRef(null);
  
return (
  <>
    <Header />
    <main className="font-body" ref={containerRef}>
      <About />
      <Harmonization />
      <Cases />
    </main>
    <Footer />
    </>
);
};