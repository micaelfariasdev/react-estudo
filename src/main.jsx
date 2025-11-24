import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import App from './App.jsx'

function Root() {
  return (
    <Routes>
      <Route path="/" element={<App />} errorElement={<NotFound />} />
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
)
