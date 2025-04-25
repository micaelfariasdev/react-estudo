import Apresentacao from "./parts/Apresentacao";
import Tecnologias from "./parts/Tecnologias";
import Servicos from "./parts/Servicos";
import Sobre from "./parts/Sobre";
import Projetos from "./parts/Projetos";

function Main() {
  return (
    <main className="bg-blue-950 text-white flex justify-center flex-col items-center">
      <Apresentacao />
      <Servicos />
      {/* <Sobre /> */}
      <Tecnologias />
      <Projetos />
    </main>
  );
}

export default Main;
