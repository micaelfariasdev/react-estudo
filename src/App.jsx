import DefaultProject from './components/parts/projects/DefaultProject.jsx'
import Main from './components/Main.jsx'
import Header from './components/Header.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  { path: "/", element: <Main />, },
  { path: "/projetos/:name", element: <DefaultProject />, },
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
