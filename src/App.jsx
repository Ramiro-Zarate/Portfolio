import './App.css'
import { BrowserRouter } from 'react-router'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Tecnologias } from './sections/Tecnologias'
import { Proyectos } from './sections/Proyectos'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Tecnologias />
        <Proyectos />
      </BrowserRouter>
    </>
  )
}

export default App
