import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Main() {
  return (
    <main className="bg-blue-950 text-white flex justify-center flex-col items-center">
      <div className="border-b-2 border-[#2c2c3f] w-full items-center flex justify-center bg-[#0a0a1a] bg-gradient-to-br from-[#151549] via-[#121224] to-[#0f0f1a]">
        <article className="max-w-300 w-full px-10 py-30 gap-3 flex flex-col">
          <h1 className="w-1/2 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-white">
            Desenvolvedor Full-Stack
          </h1>
          <p className="w-1/4">
            Eu sou Micael Farias, apaixonado por tecnologia, com o sonho de um
            dia me tornar um grande desenvolvedor.
          </p>
          <nav className="flex row-auto gap-1 ">
            <a
              href="https://github.com/micaelfariasdev"
              target="_blank"
              id="git"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/micaelfariasdev/"
              target="_blank"
              id="linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/micael.rsf"
              target="_blank"
              id="insta"
            >
              <FaInstagram />
            </a>
          </nav>
        </article>
      </div>
      <div className="border-b-2 border-[#2c2c3f]  w-full flex justify-center bg-[#0a0a1a] bg-gradient-to-tl from-[#151549] via-[#121224] to-[#0f0f1a]">
        <section className="text-white py-20 px-4 max-w-300 w-full">
          <h2 className="text-left text-4xl font-bold mb-16 bg-gradient-to-r from-blue-300 via-violet-400 to-white text-transparent bg-clip-text">
            Meus Serviços
          </h2>

          <div className="relative max-w-300 mx-auto flex flex-col gap-24 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:bg-[#2c2c3f]">
            <div className="relative flex justify-start">
              <div className="relative w-full max-w-3/5  bg-[#151526] p-6 rounded-2xl border border-[#2c2c3f] z-10 ">
                <h3 className="text-xl font-semibold mb-2">
                  Django Web Development
                </h3>
                <p className="text-gray-400">
                  <strong>
                    Crio backends poderosos e seguros com Django e Python.
                  </strong>
                  <br />
                  De APIs REST a sistemas completos com autenticação e admin
                  customizado.
                </p>
              </div>
            </div>

            <div className="relative flex justify-end">
              <div className="relative w-full max-w-3/5 bg-[#151526] p-6 rounded-2xl border border-[#2c2c3f] z-10 ">
                <h3 className="text-xl font-semibold mb-2">
                  Frontend com React
                </h3>
                <p className="text-gray-400">
                  <strong>
                    Interfaces modernas, responsivas e fluidas com React.
                  </strong>
                  <br />
                  Transformo qualquer design em experiências dinâmicas e
                  performáticas.
                </p>
              </div>
            </div>

            <div className="relative flex justify-start">
              <div className="relative w-full max-w-3/5 bg-[#151526] p-6 rounded-2xl border border-[#2c2c3f] z-10 ">
                <h3 className="text-xl font-semibold mb-2">
                  Aplicações Fullstack
                </h3>
                <p className="text-gray-400">
                  <strong>Django no backend + React no frontend.</strong>
                  <br />
                  Aplicações completas e integradas para negócios reais.
                </p>
              </div>
            </div>

            <div className="relative flex justify-end">
              <div className="relative w-full max-w-3/5 bg-[#151526] p-6 rounded-2xl border border-[#2c2c3f] z-10 ">
                <h3 className="text-xl font-semibold mb-2">
                  HTML e CSS Responsivo
                </h3>
                <p className="text-gray-400">
                  <strong>Domino HTML5 semântico e CSS moderno.</strong>
                  <br />
                  Layouts acessíveis e bonitos com Grid, Flexbox e mobile-first.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="shadow-xl/50 w-full items-center flex justify-center bg-gray-800 bg-gradient-to-r from-[#0f0f1a] via-[#121224] to-[#0f0f1a]
"
      >
        <article className="w-300 px-10 py-30 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-white">
            Sobre Mim
          </h1>
          <div class="img"></div>
          <p id="sobre1" className="text-justify">
            Minha jornada acadêmica começou em 2017, quando conquistei uma bolsa
            integral pelo PROUNI para cursar Engenharia Civil. Durante esse
            período, desenvolvi habilidades analíticas, pensamento lógico e
            disciplina para solucionar problemas complexos. No entanto, ao longo
            do tempo, percebi que minha verdadeira paixão sempre esteve na área
            de tecnologia. Fascinado pelo mundo da programação, tomei a decisão
            de redirecionar minha carreira e, há dois anos, tenho me dedicado
            intensamente ao estudo de Programação e Desenvolvimento Web por meio
            de cursos online e projetos práticos. Durante essa jornada, aprendi
            HTML, CSS, JavaScript e Python, além de explorar frameworks modernos
            como Django e React. Aprofundei meus conhecimentos em banco de
            dados, versionamento com Git/GitHub e boas práticas de
            desenvolvimento. Como parte do meu aprendizado, desenvolvi esta
            página do zero, aplicando os conceitos adquiridos e buscando sempre
            aprimorar minhas habilidades. Tenho um grande desejo de continuar
            evoluindo e explorando novas tecnologias. Meu objetivo é me tornar
            um desenvolvedor altamente qualificado, sempre aberto a novos
            desafios e oportunidades de aprendizado. 🚀
          </p>
        </article>
      </div>

      <div className="text-center w-full py-20 flex row-auto gap-10 justify-center bg-[#0a0a1a] bg-[radial-gradient(circle_at_60%_40%,rgba(120,87,255,0.2)_0%,rgba(0,210,255,0.15)_35%,rgba(255,0,255,0.05)_100%)]">
        <div>
          <div className=" bg-gray-900 w-full justify-self-center rounded-t-xl text-4xl font">
            <h1>Cursos</h1>
          </div>
          <aside
            className="bg-white not-last:border-amber-50 border-2 px-5 pb-5 text-2xl rounded-b-xl min-w-100"
            id="cursos"
          >
            <ul className="text-blue-950">
              <li>Python - Udemy</li>
              <li>Python - CursoEmVideo</li>
              <li>HTML5 - CursoEmVideo</li>
              <li>CSS3 - CursoEmVideo</li>
            </ul>
          </aside>
        </div>
        <div>
          <div className=" bg-gray-900 w-full justify-self-center rounded-t-xl text-4xl font">
            <h1>Habilidades</h1>
          </div>
          <aside
            className="bg-white not-last:border-amber-50 border-2 px-5 pb-5 text-2xl rounded-b-xl min-w-100"
            id="cursos"
          >
            <ul className="text-blue-950">
              <li>Python - Básico</li>
              <li>HTML5 - Básico</li>
              <li>CSS3 - Básico</li>
              <li>Excel - Avançado</li>
              <li>AutoCAD - Avançado</li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Main;
