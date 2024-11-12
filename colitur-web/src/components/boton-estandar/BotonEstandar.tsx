import styles from './BotonEstandar.module.css';

interface Props{
    titulo: string;
}

function BotonEstandar({titulo}: Props)
{
    return(
        <button 
            className={styles.boton}>
            <span className={styles.spanBoton}>
                {titulo}
            </span>
        </button>
    )
}

export default BotonEstandar;