import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Home from './pages/Home'
import Portifolio from './pages/Portifolio'
import './App.css'

// ✅ Coloque isso para que AOS funcione com rotas
function AppWrapper() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
  duration: 600,
  once: false,
  mirror: true,
 
})
  }, [])

  // ✅ Toda vez que mudar de rota, força o AOS atualizar
  useEffect(() => {
    AOS.refreshHard()
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portifolio" element={<Portifolio />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  )
}
