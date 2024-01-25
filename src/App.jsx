import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contacto from './components/Contacto'

function App() {

  return (
    <>
      <Routes>
        <Route 
        path='/'
        element={<Home/>}/>
        <Route
        path='contacto'
        element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App
