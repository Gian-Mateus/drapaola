export default function Header() {
  return (
    <header className="flex bg-amber-800 text-white items-center font-title px-4">
      <div className="p-4 min-w-[50%] ml-4">
        <h1 className="text-3xl font-bold italic">PR</h1>
        <h2 className="italic">Dra. Paola Rossigalli</h2>
      </div>
      <nav className="mr-6 w-full">
        <ul className="flex gap-5 justify-end">
          <li className="hover:scale-125 transition-all ease-linear hover:font-bold">
            <a href="/">Home</a>
          </li>
          <li className="hover:scale-125 transition-all ease-linear hover:font-bold">
            <a href="/">Sobre</a>
          </li>
          <li className="hover:scale-125 transition-all ease-linear hover:font-bold">
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
