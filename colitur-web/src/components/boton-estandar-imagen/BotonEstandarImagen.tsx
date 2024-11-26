import { ReactNode } from 'react';
import styles from '../boton-estandar-imagen/BotonEstandarImagen.module.css';

interface Props{
    nombre: string,
    children?:ReactNode,
    conSombra: boolean
}

function BotonEstandarImagen({nombre, children, conSombra}: Props)
{
    const sombra = conSombra ? {boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.6)'} : {};

    return(
        <button 
            className={styles.botonIniciarSesion} style={sombra}>
            <span className={styles.spanIniciarSesion}>
                {nombre}
            </span>
            <div className={styles.componenteHijo}>
                {children}
            </div>
        </button>
    )
}

export default BotonEstandarImagen