import {
  FaPython,
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaGit,
} from "react-icons/fa";
import { SiDjango, SiAutocad, SiTailwindcss  } from "react-icons/si";
import { PiMicrosoftExcelLogo,  } from "react-icons/pi";

function Tecnologias() {
  return (
    <div className="border-b-2 border-[#2c2c3f]  w-full flex justify-center bg-[#0a0a1a] bg-gradient-to-bl from-[#151549] via-[#121224] to-[#0f0f1a]">
      <article className="w-300 px-10 py-30 text-center">
        <h2 className="text-left text-4xl font-bold mb-16 bg-gradient-to-r from-blue-300 via-violet-400 to-white text-transparent bg-clip-text">
          Tecnologias
        </h2>
        <p className="text-4xl pb-5 ">
          Habilidades e ferramentas que domino e estudo.
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-8 md:w-3/6 justify-self-center">
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <FaPython />
          </div>
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <FaJs />
          </div>
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <FaHtml5 />
          </div>
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <FaCss3 />
          </div>
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <FaGit />
          </div>
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <SiDjango />
          </div>
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <FaReact />
          </div>
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <SiTailwindcss />
          </div>
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <PiMicrosoftExcelLogo />
          </div>
          <div className="text-6xl border-1 rounded-full p-3 hover:scale-120 transition-all">
            <SiAutocad />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Tecnologias;
