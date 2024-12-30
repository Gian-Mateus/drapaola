export default function about() {
  return (
    <section className="bg-amber-800 min-h-screen flex p-10 rounded-b-3xl">
      {/* Card */}
      <div className="p-4 shadow-xl bg-yellow-50 max-h-[70vh] h-fit rounded-3xl max-w-lg">
        <div>
          <img
            className="object-cover rounded-3xl"
            src="https://img.freepik.com/fotos-gratis/dentista-feminina-com-ferramentas-de-odontologia-isolado_1303-13189.jpg?t=st=1735485394~exp=1735488994~hmac=27ecece484ee1d17a202f94c1d66c59305c5e5927db2f2a7ce0287618a6b9e97&w=740"
            alt=""
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-amber-950 mt-2 italic">
            Dra. Paola Rossigalli
          </h3>
          <article className="text-amber-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem eaque
            similique dolor et voluptatibus dicta perspiciatis quis fugit est
            libero voluptatem quidem saepe voluptate, asperiores nesciunt sed
            animi illo doloremque?
          </article>
        </div>
      </div>

      {/* Infos */}
      <div className="p-6 text-amber-100 flex flex-col gap-12">
        <div>
          <div>
            <h2 className="text-3xl font-bold font-title">
              Meus ovo bem grande
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
              Meus ovo bem grande
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
    </section>
  );
}
