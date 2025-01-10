export default function Cases() {
  const dataCards = {
    title: "Botox",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex, maiores nihil expedita magni quaerat aliquid voluptatum explicabo a consequatur repellendus praesentium laudantium nam, molestiae nesciunt cumque aperiam nemo dolorum?",
    imgPath: "...",
  };

  const e = [];
  for (let i = 0; i < 10; i++) {
    e.push(
      <div
        className="mt-6 shadow-md rounded-md overflow-hidden max-w-sm"
        key={i}
      >
        <div className="w-full h-48 bg-zinc-300"></div>
        <div className="mt-3 border-t-2 border-amber-700 py-2 mx-2">
          <h3 className="text-xl font-bold font-title">{dataCards.title}</h3>
          <p>{dataCards.content}</p>
        </div>
      </div>
    );
  }

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
        <div className="grid grid-flow-col gap-6 overflow-x-scroll auto-cols-max w-screen md:max-w-screen-md p-10 scroll-smooth touch-pan-x cursor-grab">
          {/* Cards */}
          {e}
        </div>
      </div>
    </section>
  );
}
