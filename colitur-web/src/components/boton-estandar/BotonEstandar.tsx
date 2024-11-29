import styles from './BotonEstandar.module.css';

interface Props{
    titulo: string;
    estiloBoton?: string;
    estiloTexto?: string;
}

function BotonEstandar({titulo, estiloBoton, estiloTexto}: Props)
{
    return(
        <button 
            className={`${styles.boton} ${estiloBoton || ""}`}>
            <span className={`${styles.spanBoton} ${estiloTexto || ""}`}>
                {titulo}
            </span>
        </button>
    )
}

export default BotonEstandar;