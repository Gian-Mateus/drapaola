import { Card } from "../components/Card";
import { TextAbout } from "../components/Text-about";

export default function About() {

  return (
    <section
      className="rounded-b-3xl bg-amber-800 p-10 pb-48"
    >
      <div className="mx-auto flex flex-col items-center gap-3 md:max-w-5xl md:flex-row">
        <Card />
        <TextAbout />
      </div>
    </section>
  );
}
