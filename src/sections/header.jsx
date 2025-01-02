export default function Header() {
  return (
    <header className="flex bg-amber-800 text-yellow-50 items-center font-title px-4 lg:px-40">
      <div className="p-4 min-w-[50%] ml-4">
        <h1 className="text-3xl font-bold italic">PR</h1>
        <h2 className="italic">Dra. Paola Rossigalli</h2>
      </div>
      <nav className="mr-6 w-full">
        <ul className="flex gap-5 justify-end">
          <li className="relative ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] transition-[color] after:content-[''] after:absolute after:w-[0%] after:h-0.5 after:bg-yellow-50 after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] after:transition-[width,left] after:left-2/4 after:-bottom-0.5 focus:after:w-full focus:after:left-[0%] hover:after:w-full hover:after:left-[0%]">
            <a href="/">Home</a>
          </li>
          <li className="relative ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] transition-[color] after:content-[''] after:absolute after:w-[0%] after:h-0.5 after:bg-yellow-50 after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] after:transition-[width,left] after:left-2/4 after:-bottom-0.5 focus:after:w-full focus:after:left-[0%] hover:after:w-full hover:after:left-[0%]">
            <a href="/">Sobre</a>
          </li>
          <li className="relative ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] transition-[color] after:content-[''] after:absolute after:w-[0%] after:h-0.5 after:bg-yellow-50 after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] after:transition-[width,left] after:left-2/4 after:-bottom-0.5 focus:after:w-full focus:after:left-[0%] hover:after:w-full hover:after:left-[0%]">
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
