"use client";
import styles from '../barra-navegacion/BarraNavegacion.module.css';
import { Link } from 'react-router-dom';
import BotonNavegacion from '../boton-navegacion/BotonNavegacion';
import BotonEstandarImagen from '../boton-estandar-imagen/BotonEstandarImagen';
import BotonImagen from '../boton-imagen/BotonImagen';
import {CircleUserRound} from 'lucide-react';
import { CircleDollarSign, Handshake, LibraryBig, ScrollText, Search, Menu, X} from 'lucide-react';
import OpcioneesServicios from '../opcriones-servicios/OpcionesServicios';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import darkStyles from './BarraNavegacionDark.module.css';
import BotonAccesibilidad from '../boton-accesibilidad/BotonAccesibilidad';

const servicios = [
    {
        imagen: Search,
        servicio: "Consultar Habilitados",
        ruta: "/ServicioHabilitados"
    },
    {
        imagen: ScrollText,
        servicio: "Eventos Academicos",
        ruta: "/ServicioEventos"
    },
    {
        imagen: Handshake,
        servicio: "Realizar Convenios",
        ruta: "/ServicioConvenios"
    },
    {
        imagen: LibraryBig,
        servicio: "Biblioteca Virtual",
        ruta: "/ServicioBiblioteca"
    },
    {
        imagen: CircleDollarSign,
        servicio: "Medios de Pago",
        ruta: "/ServicioHabilitados"
    },
]

function BarraNavegacion()
{
    const [mostrarOpciones, setMostrarOpciones] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () =>{
        setMenuAbierto(!menuAbierto);
    }

/*
<button 
className={styles.botonHamburguesa}
onClick={toggleMenu}
aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}>
{menuAbierto ? <X size={32} /> : <Menu size={32} />}
</button>
*/        const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <>
        <section className={`${combinedStyles.container} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <div className={`${combinedStyles.accesibilidad} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                <BotonAccesibilidad></BotonAccesibilidad>
            </div>
            <div className={styles.contenedorHamburguesa}>
                {/* Botón de menú hamburguesa */}
                <div className={styles.logoMenuHamburguesa}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <BotonImagen></BotonImagen>
                    </Link>
                </div>
                <button 
                className={styles.botonHamburguesa}
                onClick={toggleMenu}
                aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}>
                {menuAbierto ? <X size={48} /> : <Menu size={48} />}
                </button>
                {menuAbierto && (
                    <div className={styles.desplegableHamburguesa}>
                    
                    <Link to="/Nosotros" style={{textDecoration: 'none'}}>
                    <BotonNavegacion>Nosotros</BotonNavegacion>
                    </Link>

                    <div 
                        className={styles.contendorServicios} 
                        onMouseEnter={() => setMostrarOpciones(true)} 
                        onMouseLeave={() => setMostrarOpciones(false)}
                    >
                        <BotonNavegacion>Servicios</BotonNavegacion>
                        {mostrarOpciones && (
                            <div className={styles.servicioDesplegable}>
                                {servicios.map((data, index) => (
                                    <OpcioneesServicios
                                        key={index}
                                        imagen={data.imagen}
                                        servicio={data.servicio}
                                        ruta={data.ruta}
                                    ></OpcioneesServicios>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/Colegiatura" style={{textDecoration: 'none'}}>
                        <BotonNavegacion>Colegiatura</BotonNavegacion>
                    </Link>
                    <Link to="/Normativa" style={{textDecoration: 'none'}}>
                        <BotonNavegacion>Normativa</BotonNavegacion>
                    </Link>
                    <Link to="/IniciarSesion" style={{textDecoration: 'none'}}>
                        <BotonNavegacion>Iniciar Sesión</BotonNavegacion>
                    </Link>
                    </div>

                )}
            </div>
            <div className={`${combinedStyles.fijo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <BotonImagen></BotonImagen>
                </Link>

                <Link to="/Nosotros" style={{textDecoration: 'none'}}>
                <BotonNavegacion>Nosotros</BotonNavegacion>
                </Link>

                <div 
                    className={`${combinedStyles.contendorServicios} ${isDarkMode ? combinedStyles.darkMode : ''}`} 
                    onMouseEnter={() => setMostrarOpciones(true)} 
                    onMouseLeave={() => setMostrarOpciones(false)}
                >
                    <BotonNavegacion>Servicios</BotonNavegacion>
                    {mostrarOpciones && (
                        <div className={`${combinedStyles.servicioDesplegable} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            {servicios.map((data, index) => (
                                <OpcioneesServicios
                                    key={index}
                                    imagen={data.imagen}
                                    servicio={data.servicio}
                                    ruta={data.ruta}
                                ></OpcioneesServicios>
                            ))}
                        </div>
                    )}
                </div>

                <Link to="/Colegiatura" style={{textDecoration: 'none'}}>
                    <BotonNavegacion>Colegiatura</BotonNavegacion>
                </Link>
                <Link to="/Normativa" style={{textDecoration: 'none'}}>
                    <BotonNavegacion>Normativa</BotonNavegacion>
                </Link>
                <Link to="/IniciarSesion" style={{textDecoration: 'none'}}>
                    <BotonEstandarImagen nombre='Iniciar Sesion' conSombra = {true} children={<CircleUserRound size={48} strokeWidth={0.5}/>}></BotonEstandarImagen>
                </Link>
            </div>
            <div className={styles.fondoBarra}>
                {/* Es un contendor que indica el tamano de la barra de navegacion */}
            </div>

        </section>
        </>
    )
}

export default BarraNavegacion;