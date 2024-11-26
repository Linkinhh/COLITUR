"use client";
import styles from '../barra-navegacion/BarraNavegacion.module.css';
// important to manipulate the DOM
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BotonNavegacion from '../boton-navegacion/BotonNavegacion';
import BotonEstandarImagen from '../boton-estandar-imagen/BotonEstandarImagen';
import BotonImagen from '../boton-imagen/BotonImagen';

function BarraNavegacion()
{

    return (
        <>
        <section className={styles.container}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <BotonImagen></BotonImagen>
            </Link>

            <Link to="/Nosotros" style={{textDecoration: 'none'}}>
            <BotonNavegacion>Nosotros</BotonNavegacion>
            </Link>
            <BotonNavegacion>Servicios</BotonNavegacion>
            <Link to="/Colegiatura" style={{textDecoration: 'none'}}>
                <BotonNavegacion>Colegiatura</BotonNavegacion>
            </Link>
            <Link to="/Normativa" style={{textDecoration: 'none'}}>
                <BotonNavegacion>Normativa</BotonNavegacion>
            </Link>
            <Link to="/IniciarSesion" style={{textDecoration: 'none'}}>
                <BotonEstandarImagen>Iniciar Sesión</BotonEstandarImagen>
            </Link>
        </section>
        </>
    )
}

export default BarraNavegacion;