import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import project from './projects.json'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { FaGithub } from "react-icons/fa";
import * as SI from "react-icons/si"

const getIconComponent = (name, size = 24) => {
    const formatted = "Si" + name.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/(^\w)/, c => c.toUpperCase())
    const Icon = SI[formatted]
    return Icon ? <Icon size={size} /> : <span>{name}</span>
}


export default function DefaultProject() {
    const [returnsPath, setReturnsPath] = useState([])
    const [data, setData] = useState([])
    const { name } = useParams()

    useEffect(() => {
        setData(project[0][name])
    }, [name])

    useEffect(() => {
        if (window.location.pathname) {
            setReturnsPath(String(window.location.pathname).split('/'))
        }
    }, [])
    
    return (
        <div
            className={"border-b-2 border-[#2c2c3f] h-fit  w-full mt-25 " +
                "bg-[#0a0a1a] bg-gradient-to-tl from-[#151549] via-[#121224] to-[#0f0f1a] " +
                "flex justify-center text-white"}>
            <div
                id='projetos'
                className="h-fit w-full grid grid-cols-[4fr_1fr] grid-rows-[max-content_max-content-auto] gap-4 max-w-300">
                <div className="w-full h-fit text-sm text-white/60 col-span-2 pt-3">
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
                <div className="w-full h-full row-span-3 col-start-2 flex flex-col gap-2">
                    <div className='w-full h-fit p-4 flex flex-col gap-1 rounded-2xl bg-white/20'>
                        <h2 className='text-2xl font-bold'>Sobre</h2>
                        <p className=''>Nome: {data.nome}</p>
                        <p className=''>Status: {data.status}</p>
                        <span>
                            <span className='inline'>Site: </span>
                            <a href={data.site} className='inline text-[.8rem]'>{data.site}</a>
                        </span>
                    </div>
                    <div className='w-full h-fit p-4 flex flex-col gap-1 rounded-2xl bg-white/20'>
                        <h2 className='text-2xl font-bold'>Tecnologias</h2>
                        <div className='flex gap-3'>
                            {Array.isArray(data.tecnologia) && data.tecnologia.map((item, index) => (
                                <span key={index} title={item}>
                                    {getIconComponent(item)}
                                </span>
                            ))
                            }
                        </div>
                    </div>
                    <div className='w-full h-fit p-4 flex flex-col gap-1 rounded-2xl bg-white/20'>
                        <h2 className='text-2xl font-bold'>Respositorios</h2>
                        {Array.isArray(data.repositorios) && data.repositorios.map((item, index) => (
                            <a href={item} className=''>
                                <p className='flex flex-row items-center gap-0.5 pl-4'><FaGithub /> {item.replace('https://github.com/micaelfariasdev', '')}</p>
                            </a>
                        ))}

                    </div>
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
                                data-lg-size="1900-1900"
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
        </div>
    )
}
