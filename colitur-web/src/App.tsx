import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { useState } from 'react';
import './App.css';
import {PaginaColegiatura, PaginaInicio, PaginaNormativa, IniciarSesion, Administrador, PaginaNosotros, ServicioHabilitados} from './features/index';

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

  // añadir rutas de servicios
  return (
    <Router>
      <Fuentes></Fuentes>
      <Routes>
        <Route path="/" element={<PaginaInicio></PaginaInicio>}></Route>
        <Route path="/Nosotros" element={<PaginaNosotros></PaginaNosotros>}></Route>
        <Route path="/Normativa" element={<PaginaNormativa></PaginaNormativa>}></Route>
        <Route path="/Colegiatura" element={<PaginaColegiatura></PaginaColegiatura>}></Route>
        <Route path='/IniciarSesion' element={<IniciarSesion></IniciarSesion>}></Route>
        <Route path='/IniciarSesion/Administrador' element={<Administrador></Administrador>}></Route>
        <Route path='/ServicioHabilitados' element={<ServicioHabilitados></ServicioHabilitados>}></Route>
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </Router>
  )
}

export default App
