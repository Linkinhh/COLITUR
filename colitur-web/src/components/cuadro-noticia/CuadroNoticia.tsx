import styles from './CuadroNoticia.module.css';

interface Props
{
    imagen: string;
    fecha: string;
}

function CuadroNoticia({imagen, fecha}: Props)
{
    return(
        <section className={styles.contenedor}>
            <div 
            className={styles.contenedorImagen}
            style={{backgroundImage: `url(${imagen})`}}>
                <div className={styles.contenedorFecha}>{fecha}</div>
            </div>
            <div className={styles.separador}></div>
        </section>
    )
}

export default CuadroNoticia;