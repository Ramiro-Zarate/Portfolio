import './App.css'
import { BrowserRouter } from 'react-router'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Tecnologias } from './sections/Tecnologias'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Tecnologias />
      </BrowserRouter>
    </>
  )
}

export default App
