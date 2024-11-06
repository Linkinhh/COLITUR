import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import PaginaInicio from './features/pagina-inicio/PaginaInicio';

function Rutas()
{
  return(
    <Link to="/"
    ></Link>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginaInicio></PaginaInicio>
    </>
  )
}

export default App
