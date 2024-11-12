import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { useState } from 'react';
import './App.css';
import {PaginaColegiatura, PaginaInicio, PaginaNormativa} from './features/index';

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
    <Router>
      <Fuentes></Fuentes>
      <Routes>
        <Route path="/" element={<PaginaInicio></PaginaInicio>}></Route>
        <Route path="/Normativa" element={<PaginaNormativa></PaginaNormativa>}></Route>
        <Route path="/Colegiatura" element={<PaginaColegiatura></PaginaColegiatura>}></Route>
      </Routes>
    </Router>
  )
}

export default App
