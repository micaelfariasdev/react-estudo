import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import OddsOverlay from './components/overlays/odd.jsx'
import DefaultProject from './components/parts/projects/DefaultProject.jsx'
import { ProjetosMain } from './components/parts/Projetos.jsx'
import NotFound from './components/NotFound.jsx'
import Main from './components/Main.jsx'

function Root() {
  const location = useLocation()
  if (location.pathname !== '/odd') import('./index.css')
  return (
    <Routes>
      <Route path="/" element={<Main />} errorElement={<NotFound />} />
      <Route path="/odd" element={<OddsOverlay />} />
      <Route path="/projetos/" element={<ProjetosMain />} errorElement={<NotFound />} />
      <Route path="/projetos/:name" element={<DefaultProject />} errorElement={<NotFound />} />
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
)
