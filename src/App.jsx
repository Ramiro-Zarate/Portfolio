import './App.css'
import { BrowserRouter } from 'react-router'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
      </BrowserRouter>
    </>
  )
}

export default App
