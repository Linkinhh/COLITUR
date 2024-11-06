import { ReactNode } from 'react';
import styles from '../boton-estandar-imagen/BotonEstandarImagen.module.css';
import imagen from '../../assets/Login Blanco.svg'

interface Props{
    children?:ReactNode
}

function BotonEstandarImagen({children}: Props)
{
    return(
        <button 
            className={styles.botonIniciarSesion}>
            <span className={styles.spanIniciarSesion}>
                {children}
            </span>
            <img src={imagen} className={styles.imagenIniciarSesion}>
            </img>
        </button>
    )
}

export default BotonEstandarImagen