import SwipeCards from "../components/swipe-cards";

export default function Cases() {
  return (
    <section className="flex justify-center w-full bg-amber-200/80 overflow-hidden">
      <div className="my-24">
        <div className="flex flex-col gap-4 mx-24">
          <h1 className="text-4xl font-title font-bold">Casos e Depoimentos</h1>
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
