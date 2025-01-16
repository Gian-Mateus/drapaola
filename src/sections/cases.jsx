import Wave from "../assets/wave";
import SwipeCards from "../components/swipe-cards";

export default function Cases() {
  return (
    <section className="relative flex w-full justify-center overflow-hidden bg-amber-200/80">
      <div className="absolute -top-2 left-0 z-50">
        <Wave height="159" width="100%" className="" />
      </div>
      <div className="my-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <h1 className="font-title text-4xl font-bold">Casos e Depoimentos</h1>
          <p>
            Alguns casos de antes e depois, demonstrando o quanto a harmonização
            faz diferença na autoestima das pessoas.
          </p>
        </div>
        <div className=" ">
          {/* Cards */}
          <SwipeCards />
        </div>
      </div>
    </section>
  );
}
