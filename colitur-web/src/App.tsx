//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import { useState } from 'react';
import './App.css';
import PaginaInicio from './features/pagina-inicio/PaginaInicio';

/*
function Rutas()
{
  return(
    <Link to="/"
    ></Link>
  )
}
*/

function Fuentes()
{
  return(
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </>
  )
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Fuentes></Fuentes> 
      <PaginaInicio></PaginaInicio>
    </>
  )
}

export default App
