"use client";
import styles from '../barra-navegacion/BarraNavegacion.module.css';
// important to manipulate the DOM
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BotonNavegacion from '../boton-navegacion/BotonNavegacion';
import BotonEstandarImagen from '../boton-estandar-imagen/BotonEstandarImagen';
import BotonImagen from '../boton-imagen/BotonImagen';
import {CircleUserRound} from 'lucide-react';

function BarraNavegacion()
{

    return (
        <>
        <section className={styles.container}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <BotonImagen></BotonImagen>
            </Link>
            <BotonNavegacion>Nosotros</BotonNavegacion>
            <BotonNavegacion>Servicios</BotonNavegacion>
            <Link to="/Colegiatura" style={{textDecoration: 'none'}}>
                <BotonNavegacion>Colegiatura</BotonNavegacion>
            </Link>
            <Link to="/Normativa" style={{textDecoration: 'none'}}>
                <BotonNavegacion>Normativa</BotonNavegacion>
            </Link>
            <Link to="/IniciarSesion" style={{textDecoration: 'none'}}>
                <BotonEstandarImagen nombre='Iniciar Sesion' conSombra = {true} children={<CircleUserRound size={48} strokeWidth={0.5}/>}></BotonEstandarImagen>
            </Link>
        </section>
        </>
    )
}

export default BarraNavegacion;