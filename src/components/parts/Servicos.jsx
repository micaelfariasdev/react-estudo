
function Servicos(){
    return (
      <div className="border-b-2 border-[#2c2c3f]  w-full flex justify-center bg-[#0a0a1a] bg-gradient-to-tl from-[#151549] via-[#121224] to-[#0f0f1a]">
      <section className="text-white py-20 px-4 max-w-300 w-full">
        <h2 className="text-left text-4xl font-bold mb-16 bg-gradient-to-r from-blue-300 via-violet-400 to-white text-transparent bg-clip-text">
          Meus Serviços
        </h2>

        <div className="relative max-w-300 mx-auto flex flex-col gap-24 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:bg-[#2c2c3f]">
          <div className="relative flex justify-start">
            <div className="relative w-full max-w-3/5  bg-[#151526] p-6 rounded-2xl border border-[#2c2c3f] z-10 hover:scale-120 transition-all ">
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
            <div className="relative w-full max-w-3/5 bg-[#151526] p-6 rounded-2xl border border-[#2c2c3f] z-10 hover:scale-120 transition-all ">
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
            <div className="relative w-full max-w-3/5 bg-[#151526] p-6 rounded-2xl border border-[#2c2c3f] z-10 hover:scale-120 transition-all ">
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
            <div className="relative w-full max-w-3/5 bg-[#151526] p-6 rounded-2xl border border-[#2c2c3f] z-10 hover:scale-120 transition-all ">
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
    )
}

export default Servicos