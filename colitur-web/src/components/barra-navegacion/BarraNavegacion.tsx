"use client";
import styles from '../barra-navegacion/BarraNavegacion.module.css';
import { Link } from 'react-router-dom';
import BotonNavegacion from '../boton-navegacion/BotonNavegacion';
import BotonEstandarImagen from '../boton-estandar-imagen/BotonEstandarImagen';
import BotonImagen from '../boton-imagen/BotonImagen';
import {CircleUserRound} from 'lucide-react';
import { CircleDollarSign, Handshake, LibraryBig, ScrollText, Search} from 'lucide-react';
import OpcioneesServicios from '../opcriones-servicios/OpcionesServicios';
import { useState } from 'react';

const servicios = [
    {
        imagen: Search,
        servicio: "Consultar Habilitados",
        ruta: "/ServicioHabilitados"
    },
    {
        imagen: ScrollText,
        servicio: "Eventos Academicos",
        ruta: "/"
    },
    {
        imagen: Handshake,
        servicio: "Realizar Convenios",
        ruta: "/ServicioHabilitados"
    },
    {
        imagen: LibraryBig,
        servicio: "Biblioteca Virtual",
        ruta: "/ServicioHabilitados"
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

    return (
        <>
        <section className={styles.container}>
            
            <div className={styles.fijo}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <BotonImagen></BotonImagen>
                </Link>

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