import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Origem from './views/Origem'

export default function App() {
  return (
    <div className="min-h-screen bg-[url('/imagens/1595602729894.jpg')] bg-cover bg-fixed bg-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/origem" element={<Origem />} />
      </Routes>
      <Footer />
    </div>
  )
}


