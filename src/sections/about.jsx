export default function about() {
  return (
    <section className="bg-amber-800 pb-48 p-10 rounded-b-3xl">
      <div className="md:max-w-5xl mx-auto flex md:flex-row">
        {/* Card */}
        <div className="p-4 shadow-xl bg-yellow-50 max-h-[70vh] h-fit rounded-3xl max-w-lg">
          <div>
            <img
              className="object-cover rounded-3xl"
              src="/assets/paola-interprete.jpg"
              alt="Dra. Paola Rossigalli"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-950 mt-2 italic">
              Dra. Paola Rossigalli
            </h3>
            <article className="text-amber-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              eaque similique dolor et voluptatibus dicta perspiciatis quis
              fugit est libero voluptatem quidem saepe voluptate, asperiores
              nesciunt sed animi illo doloremque?
            </article>
          </div>
        </div>

        {/* Infos */}
        <div className="p-6 text-amber-100 flex flex-col gap-12 mb-10">
          <div>
            <div>
              <h2 className="text-3xl font-bold font-title">
                Quem sou eu?
              </h2>
            </div>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              possimus, veniam consequatur quam qui odit deserunt saepe natus
              optio ut eligendi voluptatem, sapiente distinctio asperiores
              assumenda eum nostrum eos doloribus.
            </article>
          </div>
          <div>
            <div>
              <h2 className="text-3xl font-bold font-title">
                Formação
              </h2>
            </div>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              possimus, veniam consequatur quam qui odit deserunt saepe natus
              optio ut eligendi voluptatem, sapiente distinctio asperiores
              assumenda eum nostrum eos doloribus.
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
