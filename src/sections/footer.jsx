import { Instagram } from "../assets/instagram";
import { Facebook } from "../assets/facebook";
import { WhatsApp } from "../assets/whatsapp";
export default function Footer() {
  return (
    <footer className="flex w-full bg-neutral-800 p-12 text-amber-50">
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
              <li></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Agende uma avaliação:</p>
          <div className="flex items-center gap-1 mt-2">
            <WhatsApp width="2rem" height={"2rem"} />
            <p>+55 11 99999-9999</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
