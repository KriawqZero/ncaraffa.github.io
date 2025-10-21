import Container from '../components/Container'

export default function Origem() {
  return (
    <Container>
      <h1 className="mx-auto block w-[400px] rounded-lg bg-blue-300 text-center font-oswald text-xl font-bold">
        Nossa Origem
      </h1>
      <p className="mx-auto my-5 block w-[450px] rounded-xl border-2 border-black bg-white p-5 text-justify font-[Montserrat] shadow-[5px_5px_black]">
        Surgimos em uma simples aula de matemática, na escola do SESI de Corumbá-MS. Mas atualmente, com o sucesso de nossa página e a alta taxa de pessoas nos contactando todos os dias, é nosso dever manter o comprometimento com nossos clientes.
      </p>
      <h1 className="mx-auto block w-[400px] rounded-lg bg-blue-300 text-center font-oswald text-xl font-bold">
        Origem do nome
      </h1>
      <p className="mx-auto my-5 block w-[450px] rounded-xl border-2 border-black bg-white p-5 text-justify font-[Montserrat] shadow-[5px_5px_black]">
        O nome veio da membro <span className="rounded-lg bg-blue-600 px-1 text-white">Nathally Vitória</span>, que sugeriu <strong className="hover:text-lg cursor-pointer">"Casa Fácil"</strong> após uma breve discussão com o resto da equipe. O nome representa a praticidade da nossa startup, que possui fácil acessibilidade e meios de contato.
      </p>
      <h1 className="mx-auto block w-[400px] rounded-lg bg-blue-300 text-center font-oswald text-xl font-bold">
        Azul e branco
      </h1>
      <p className="mx-auto my-5 block w-[450px] rounded-xl border-2 border-black bg-white p-5 text-justify font-[Montserrat] shadow-[5px_5px_black]">
        As cores <span className="rounded-lg bg-blue-600 px-1 text-white">azul</span> e <span className="rounded-lg bg-amber-400 px-1 text-white">branco</span> foram cautelosamente selecionadas para nosso site devido ao sentimento que a junção delas causa no leitor, passando uma sensação de profissionalismo e confiabilidade. O azul e branco pode ser visto em muitas marcas de sucesso como Dell, PayPal, Intel, Meta, entre outras. E logicamente, honrando as cores do lugar que deu início à tudo, nossa Escola SESI!
      </p>
      <img className="mx-auto mb-5 block w-[450px] rounded-2xl border-2 border-black shadow-[3px_3px_3px_rgba(255,216,143,1)] hover:scale-110 transition" src="/imagens/Captura de tela 2025-09-26 231552.png" alt="" />
    </Container>
  )
}