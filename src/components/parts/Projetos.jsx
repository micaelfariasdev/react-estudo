import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import project from './projects/projects.json'

function Projetos() {
  const [data, setData] = useState([])

  useEffect(() => {
    if (Array.isArray(project) && project.length > 0) {
      const projetos = Object.values(project[0])
      setData(projetos)
      console.log(projetos)
    }
  }, [])
  
  return (
    <div className="border-b-2 border-[#2c2c3f] w-full flex justify-center bg-[#0a0a1a] bg-gradient-to-tl from-[#151549] via-[#121224] to-[#0f0f1a]">
      <section className="text-white py-20 px-4 max-w-300 w-full">
        <h2 className="text-left text-4xl font-bold mb-16 bg-gradient-to-r from-blue-300 via-violet-400 to-white text-transparent bg-clip-text">
          Projetos
        </h2>

        <div className="relative max-w-300 mx-auto grid grid-cols-3 gap-24">
          {typeof(data) === 'object' &&
            data.map((item, index) => 
              <div className="w-full flex flex-row justify-end items-center" key={index}>
                <div className="w-3/4 h-50 bg-white rounded-3xl relative flex flex-row justify-end items-center">
                  <div
                    className="w-40 h-40 bg-amber-400 rounded-3xl relative overflow-hidden z-30 left-[-70%] shadow-[#0a0a1a] shadow-[5px_0px_50px_1px]"
                  >
                    <Swiper
                      spaceBetween={0}
                      loop={true}
                      speed={600}
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                      }}
                      className="h-full"
                    >
                      <SwiperSlide>
                        <img
                          src="/img/projects/vetor/1.png"
                          className="object-cover h-full object-left"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/img/projects/vetor/2.png"
                          className="object-cover h-full object-left"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/img/projects/vetor/3.png"
                          className="object-cover h-full object-left"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            )}
        </div>
      </section>
    </div>
  )
}

export default Projetos
