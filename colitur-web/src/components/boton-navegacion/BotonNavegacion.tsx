import styles from '../boton-navegacion/BotonNavegacion.module.css';
import { ReactNode } from 'react';

interface Props{
    children?:ReactNode
}

function BotonNavegacion( { children }: Props )
{
    return(
        <button className={styles.botonNavegacion}>
            {children}
        </button>
    )
}

export default BotonNavegacion;