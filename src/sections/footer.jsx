import { Instagram } from "../assets/instagram";
import { Facebook } from "../assets/facebook";
import { WhatsApp } from "../assets/whatsapp";
export default function Footer() {
  return (
    <footer className="flex w-full flex-col bg-neutral-800 px-12 pt-12 text-amber-50">
      <div className="mx-auto flex items-center gap-24">
        <div className="flex flex-col items-center">
          <div>
            <h4 className="font-title text-xl font-bold uppercase">
              Siga nas redes sociais
            </h4>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <Instagram width="3rem" height="3rem" />
              </li>
              <li>
                <Facebook width="3rem" height="3rem" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Agende uma avaliação:</p>
          <div className="mt-2 flex items-center gap-1">
            <WhatsApp width="2rem" height={"2rem"} />
            <p>+55 11 99999-9999</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12">
        <span>© Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
