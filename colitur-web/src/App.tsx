import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
//import { useState } from 'react';
import './App.css';
import {PaginaColegiatura, PaginaInicio, PaginaNormativa, IniciarSesion, Administrador, PaginaNosotros, ServicioHabilitados, ServicioEventos, ServicioBiblioteca, ServicioConvenios, ServicioMediosdePago} from './features/index';
import { ThemeProvider } from './context/ThemeContext';

// CORREGIR ESTILOS DE NORMATIVA

function Fuentes()
{
  return(
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  //const [count, setCount] = useState(0)

  // añadir rutas de servicios
  return (
    <ThemeProvider>
      <Router>
        <Fuentes></Fuentes>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<PaginaInicio></PaginaInicio>}></Route>
          <Route path="/Nosotros" element={<PaginaNosotros></PaginaNosotros>}></Route>
          <Route path="/Normativa" element={<PaginaNormativa></PaginaNormativa>}></Route>
          <Route path="/Colegiatura" element={<PaginaColegiatura></PaginaColegiatura>}></Route>
          <Route path='/IniciarSesion' element={<IniciarSesion></IniciarSesion>}></Route>
          <Route path='/IniciarSesion/Administrador' element={<Administrador></Administrador>}></Route>
          <Route path='/ServicioHabilitados' element={<ServicioHabilitados></ServicioHabilitados>}></Route>
          <Route path='/ServicioEventos' element={<ServicioEventos></ServicioEventos>}></Route>
          <Route path='/ServicioBiblioteca' element={<ServicioBiblioteca></ServicioBiblioteca>}></Route>
          <Route path='/ServicioConvenios' element={<ServicioConvenios></ServicioConvenios>}></Route>
          <Route path='/ServicioMediosdePago' element={<ServicioMediosdePago></ServicioMediosdePago>}></Route>
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
    
  )
}

export default App
