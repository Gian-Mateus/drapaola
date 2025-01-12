import Header from "./sections/header"
import About from "./sections/about"
import Harmonization from "./sections/harmonization"
// import Cases from "./sections/cases"
import SwipeCards from "./components/swipe-cards"
function App() {
  return (
    <>
      <Header />
      <main className="font-body">
        <About />
        <Harmonization />
        <SwipeCards />
      </main>
    </>
  );
}
export default App
