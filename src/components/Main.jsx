import Apresentacao from "./parts/Apresentacao";
import Header from "./Header";
import Tecnologias from "./parts/Tecnologias";
import Servicos from "./parts/Servicos";
import {Projetos} from "./parts/Projetos";

function Main() {
  return (
    <>
      <Header />

    <main className="bg-blue-950 text-white flex justify-center flex-col items-center mt-25 w-full scroll-x-none">
      <Apresentacao />
      <Servicos />
      <Tecnologias />
      <Projetos />
    </main>
    </>
  );
}

export default Main;
