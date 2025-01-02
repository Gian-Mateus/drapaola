import { Botox } from "../assets/botox";
import { Chin } from "../assets/chin";
import { Filler } from "../assets/filler";
import { MouthFill } from "../assets/mouth";
import { Bioestimulator } from "../assets/bioestimulator";
export default function Harmonization() {
  return (
    <section className="w-full flex">
      <div className="mx-12 rounded-[40px] bg-yellow-50 shadow-md p-6 -mt-16 w-full text-amber-950">
        <div className="flex flex-col md:flex-row w-full justify-around p-6 md:p-12 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/assets/botox.jpg"
              alt="Botox"
              className="rounded-t-full rounded-bl-full w-48 object-cover self-end"
            />
            <img
              src="/assets/botox-ap.jpg"
              alt="Aplicação de botox"
              className="rounded-t-full rounded-br-full w-48 object-cover self-end"
            />
            <img
              src="/assets/botox-ap-2.jpg"
              alt="Aplicação de botox"
              className="rounded-b-full rounded-tl-full w-48 object-cover self-start"
            />
            <img
              src="/assets/filler-lips.jpg"
              alt="Preenchimento labial"
              className="rounded-b-full rounded-tr-full w-48 object-cover self-start"
            />
          </div>

          {/* Text */}
          <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left">
            <h1 className="font-title text-3xl md:text-4xl font-bold ">
              Harmonização Facial, você se sentindo melhor consigo mesma.
            </h1>
            <p className="text-amber-900 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor dolore magna aliqua inventore veritatis et quasi.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="grid grid-cols-[auto_1fr] grid-rows-1 items-center gap-x-3">
                <MouthFill
                  height="4rem"
                  width="4rem"
                  className="row-span-2  fill-amber-950 justify-self-center"
                />
                <div>
                  <h3 className="font-bold font-title ">
                    Preenchimento Labial
                  </h3>
                  <p className="text-amber-900 ">
                    Lorem ipsum dolor sit amet enim consectetur.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                <Botox
                  height="4rem"
                  width="4rem"
                  className="row-span-2  fill-amber-950 justify-self-center"
                />
                <div>
                  <h3 className="font-bold font-title ">Botox</h3>
                  <p className="text-amber-900 ">
                    Lorem ipsum dolor sit amet enim consectetur.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] grid-rows-1 items-center gap-x-3">
                <Chin
                  height="4rem"
                  width="4rem"
                  className="row-span-2  fill-amber-950 justify-self-center"
                />
                <div>
                  <h3 className="font-bold font-title ">Lipo de Papada</h3>
                  <p className="text-amber-900 ">
                    Lorem ipsum dolor sit amet enim consectetur.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] grid-rows-1 items-center gap-x-3">
                <Filler
                  height="4rem"
                  width="4rem"
                  className="row-span-2  fill-amber-950 justify-self-center"
                />
                <div>
                  <h3 className="font-bold font-title">
                    Preenchimento com Ácido Hialurônico
                  </h3>
                  <p className="text-amber-900 ">
                    Lorem ipsum dolor sit amet enim consectetur.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] grid-rows-1 items-center gap-x-3">
                <Bioestimulator
                  height="4rem"
                  width="4rem"
                  className="row-span-2 fill-amber-950 justify-self-center"
                />
                <div>
                  <h3 className="font-bold ">Bioestimulador</h3>
                  <p className="text-amber-900">
                    Lorem ipsum dolor sit amet enim consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
