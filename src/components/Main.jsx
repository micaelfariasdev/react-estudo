import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Main() {
  return (
    <main className="bg-blue-950 text-white flex justify-center flex-col items-center">
      <article className="w-300 shadow px-10 py-30 ">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-white">
          Olá, Mundo!
        </h1>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-white">
          meu nome é Micael Farias
        </h2>
        <p>Estudante com um sonho de se tornar um Desenvolvedor.</p>
        <nav className="flex row-auto gap-1 ">
          <a href="https://github.com/micaelfariasdev" target="_blank" id="git">
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
      <div>
        <article className="w-300 px-10 py-30 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-white">
            Sobre Mim
          </h1>
          <div class="img"></div>
          <p id="sobre1" className="text-justify">
            Minha jornada acadêmica começou em 2017, quando conquistei uma bolsa
            integral pelo PROUNI para cursar Engenharia Civil.
          
            Durante esse período, desenvolvi habilidades analíticas, pensamento
            lógico e disciplina para solucionar problemas complexos.
          
            No entanto, ao longo do tempo, percebi que minha verdadeira paixão
            sempre esteve na área de tecnologia. Fascinado pelo mundo da
            programação, tomei a decisão de redirecionar minha carreira e, há
            dois anos, tenho me dedicado intensamente ao estudo de Programação e
            Desenvolvimento Web por meio de cursos online e projetos práticos.
          
            Durante essa jornada, aprendi HTML, CSS, JavaScript e Python, além
            de explorar frameworks modernos como Django e React. Aprofundei meus
            conhecimentos em banco de dados, versionamento com Git/GitHub e boas
            práticas de desenvolvimento. Como parte do meu aprendizado,
            desenvolvi esta página do zero, aplicando os conceitos adquiridos e
            buscando sempre aprimorar minhas habilidades.
          
            Tenho um grande desejo de continuar evoluindo e explorando novas
            tecnologias. Meu objetivo é me tornar um desenvolvedor altamente
            qualificado, sempre aberto a novos desafios e oportunidades de
            aprendizado. 🚀
          </p>
        </article>
      </div>
      <div className="w-30 text-center flex row-auto gap-10 justify-center">
        <div>
          <div className=" bg-gray-600 w-full justify-self-center rounded-t-xl text-4xl font">
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
          <div className=" bg-gray-600 w-full justify-self-center rounded-t-xl text-4xl font">
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
