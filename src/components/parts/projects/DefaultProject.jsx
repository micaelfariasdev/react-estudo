import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import project from './projects.json'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'


export default function DefaultProject() {
    const [returnsPath, setReturnsPath] = useState([])
    const [data, setData] = useState([])
    const { name } = useParams()
    const [fotoslider, setFotoSlider] = useState()

    useEffect(() => {
        setData(project[name])
        setFotoSlider(project[name].foto[0])
    }, [name])

    useEffect(() => {
        if (window.location.pathname) {
            setReturnsPath(String(window.location.pathname).split('/'))
        }
    }, [])
    console.log(data.foto)
    return (
        <div
            id='projetos'
            className={"border-b-2 border-[#2c2c3f] h-fit  w-full " +
                "bg-[#0a0a1a] bg-gradient-to-tl from-[#151549] via-[#121224] to-[#0f0f1a] " +
                "flex justify-center text-white"}>
            <div
                id='projetos'
                className="h-fit w-full grid grid-cols-[4fr_1fr] gap-4 max-w-300">
                <div className="w-full h-fit grid grid-rows-[max-content_max-content_minmax(auto,_auto)] gap-4 p-3">
                    <div className="w-full h-fit text-sm text-white/60">
                        {returnsPath.map((path, i) => {
                            if (i == 0) {
                                return <a key={i + 1} href={`/${path}`}>HOME</a>
                            } else if (path === returnsPath.at(-1)) {
                                return <strong key={i + 1}> / {String(path).toUpperCase()}</strong>

                            } else {
                                return <a key={i + 1} href={`/${path}`}> / {String(path).toUpperCase()}</a>
                            }
                        })}
                        <hr />
                    </div>
                    <div className="w-full h-fit flex flex-col gap-3">
                        <h1 className='text-6xl font-bold'>{data.nome}</h1>
                        <p className='text-justify'>{data.sobre}</p>
                        <hr />
                    </div>
                    <div className="aspect-square w-full grid grid-rows-[auto_1fr] gap-4 p-3">
                        <div className='w-full'>
                            {Array.isArray(data.foto) &&
                                <img src={data.foto[0]} />}
                        </div>
                        <LightGallery
                            plugins={[lgZoom, lgThumbnail]}
                            speed={500}
                            elementClassNames={'gallery flex flex-rows flex-nowrap w-full h-fit gap-3 overflow-x-auto'}
                        >
                            {Array.isArray(data.foto) && data.foto.map((item, index) => (
                                <a
                                    key={index}
                                    className={'gallery__item bg-blue-300'}
                                    data-lg-size="1920-1080"
                                    data-src={item}
                                >
                                    <div className="w-50 h-50 relative">
                                        <img
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src={item}
                                            alt={`Foto ${index + 1}`}
                                            id={`fid${index}`}
                                        />
                                    </div>
                                </a>

                            ))}
                        </LightGallery>
                    </div>
                </div>
                <div className="bg-red-500 w-full h-full"></div>
            </div>
        </div>
    )
}
