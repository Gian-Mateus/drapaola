import { useRef } from "react";
import Header from "./components/Header";
import About from "./sections/About";
import Harmonization from "./sections/Harmonization";
import Cases from "./sections/Cases";
import Footer from "./sections/Footer";

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