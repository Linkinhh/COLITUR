"use client";
import styles from '../barra-navegacion/BarraNavegacion.module.css';
// important to manipulate the DOM
// import { useEffect, useState } from 'react';
import BotonNavegacion from '../boton-navegacion/BotonNavegacion';
import BotonEstandarImagen from '../boton-estandar-imagen/BotonEstandarImagen';
import BotonImagen from '../boton-imagen/BotonImagen';

function BarraNavegacion()
{

    return (
        <>
        <section className={styles.container}>
            <BotonImagen></BotonImagen>
            <BotonNavegacion>Nosotros</BotonNavegacion>
            <BotonNavegacion>Servicios</BotonNavegacion>
            <BotonNavegacion>Colegiatura</BotonNavegacion>
            <BotonNavegacion>Normativa</BotonNavegacion>
            <BotonEstandarImagen>Iniciar Sesión</BotonEstandarImagen>
        </section>
        </>
    )
}

export default BarraNavegacion;