import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <header className="border-b-10 border-t-10 border-white/20 backdrop-blur-sm bg-black/40 text-white text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest drop-shadow px-5 pt-5 font-sans">
        Casa Fácil
      </h1>
      <h3 className="pb-5 font-medium drop-shadow">Automação Residencial</h3>
      <nav className="flex flex-wrap justify-center gap-2 px-4 pb-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `mx-auto mb-2 rounded-lg border border-neutral-700/40 bg-white/80 px-6 py-2 text-[18px] text-neutral-500 shadow-sm transition hover:underline ${isActive ? 'bg-amber-300/70 text-neutral-800' : ''}`}
        >
          Sobre nós
        </NavLink>
        <NavLink
          to="/origem"
          className={({ isActive }) => `mx-auto mb-2 rounded-lg border border-neutral-700/40 bg-white/80 px-6 py-2 text-[18px] text-neutral-500 shadow-sm transition hover:underline ${isActive ? 'bg-amber-300/70 text-neutral-800' : ''}`}
        >
          Origem
        </NavLink>
        <a
          className="mx-auto mb-2 rounded-lg border border-neutral-700/40 bg-white/80 px-6 py-2 text-[18px] text-neutral-500 shadow-sm transition hover:underline"
          href="https://www.instagram.com/casafacil_st/"
          target="_blank"
          rel="noreferrer"
        >
          Contato
        </a>
      </nav>
    </header>
  )
}