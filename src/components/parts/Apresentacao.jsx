import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Apresentacao(){
    return (
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
    )
}

export default Apresentacao