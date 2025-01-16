import Header from "./sections/header"
import About from "./sections/about"
import Harmonization from "./sections/harmonization"
import Cases from "./sections/cases";
import Footer from "./sections/footer";
function App() {
  return (
    <>
      <Header />
      <main className="font-body">
        <About />
        <Harmonization />
        <Cases />
      </main>
      <Footer />
    </>
  );
}
export default App
