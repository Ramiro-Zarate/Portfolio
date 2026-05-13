import './App.css'
import { BrowserRouter } from 'react-router'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  )
}

export default App
