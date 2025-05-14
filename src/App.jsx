import DefaultProject from './components/parts/projects/DefaultProject.jsx'
import Main from './components/Main.jsx'
import {ProjetosMain} from './components/parts/Projetos.jsx'
import Header from './components/Header.jsx'
import NotFound from './components/NotFound.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  { path: "/", element: <Main />, errorElement: <NotFound /> },
  { path: "/projetos/", element: <ProjetosMain />, errorElement:<NotFound /> },
  { path: "/projetos/:name", element: <DefaultProject />, errorElement:<NotFound /> },
]);




function App() {

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
