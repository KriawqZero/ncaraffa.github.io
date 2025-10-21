import Container from '../components/Container'
import Block from '../components/Block'

export default function Home() {
  return (
    <Container>
      <picture>
        <img className="mx-auto mb-4 block w-[300px]" src="/imagens/26 de set. de 2025, 00_14_33.png" alt="" />
      </picture>
      <h1 className="mx-auto block w-[400px] rounded-lg bg-amber-300 text-center font-oswald text-xl font-bold">
        Bem vindo
      </h1>
      <Block>
        A <strong className="hover:text-lg cursor-pointer">Casa Fácil</strong> é uma startup inovadora que nasceu com o propósito de simplificar a forma como as pessoas encontram, organizam e transformam seus lares. Nosso foco está em oferecer soluções digitais práticas, acessíveis e intuitivas, unindo tecnologia e criatividade para tornar o processo de gestão e adaptação da casa mais ágil, moderno e funcional.
      </Block>
      <h1 className="mx-auto block w-[400px] rounded-lg bg-amber-300 text-center font-oswald text-xl font-bold">
        Desenvolvimento
      </h1>
      <Block>
        O projeto foi desenvolvido com dedicação e visão estratégica por <span className="rounded-lg bg-amber-400 px-1 text-white">Nicolas Caraffa</span>, responsável pelo desenvolvimento do site e pela estrutura digital que sustenta a plataforma. Com um olhar atento à experiência do usuário e às tendências tecnológicas, Nicolas garantiu que a <strong className="hover:text-lg cursor-pointer">Casa Fácil</strong> não fosse apenas mais um site, mas sim uma ferramenta eficiente e confiável para atender às necessidades dos clientes.
      </Block>
      <abbr title="2 horas da manhã"><img className="mx-auto mb-5 block w-[400px] rounded-2xl border-2 border-black shadow-[3px_3px_3px_rgba(255,216,143,1)] hover:scale-110 transition" src="/imagens/20250926_014559.jpg" alt="" /></abbr>
      <abbr title="lil bro fingindo que sabe algo"><img className="mx-auto mb-5 block w-[400px] rounded-2xl border-2 border-black shadow-[3px_3px_3px_rgba(255,216,143,1)] hover:scale-110 transition" src="/imagens/20250926_014823.jpg" alt="" /></abbr>
      <h1 className="mx-auto block w-[400px] rounded-lg bg-amber-300 text-center font-oswald text-xl font-bold">
        Nossa Equipe
      </h1>
      <Block>
        A equipe da <strong className="hover:text-lg cursor-pointer">Casa Fácil</strong> conta também com a participação de <span className="rounded-lg bg-amber-400 px-1 text-white">Nathally Vitória, Maria Eduarda,</span> <span className="rounded-lg bg-amber-400 px-1 text-white">Damaris e Bianca</span>, profissionais engajadas em oferecer inovação e qualidade em cada etapa do processo. Cada uma contribui com ideias, estratégias e perspectivas únicas, fortalecendo a identidade da startup e garantindo que nossas soluções estejam alinhadas com o que o mercado e a sociedade demandam.
      </Block>
      <img className="mx-auto mb-5 block w-[550px] rounded-lg border-2 border-black shadow" src="/imagens/Screenshot_1.png" alt="" />
      <h1 className="mx-auto block w-[400px] rounded-lg bg-amber-300 text-center font-oswald text-xl font-bold">
        Valores
      </h1>
      <Block>
        Com visão de futuro, valores e compromisso com a excelência, a <strong className="hover:text-lg cursor-pointer">Casa Fácil</strong> se posiciona como uma startup pronta para expandir seu alcance, consolidar sua presença no mercado e continuar inovando. Somos movidos pela missão de transformar desafios em soluções inteligentes, tornando a vida em casa cada vez mais simples, organizada e prazerosa.
      </Block>
    </Container>
  )
}