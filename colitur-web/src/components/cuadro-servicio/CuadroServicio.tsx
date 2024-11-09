import styles from './CuadroServicio.module.css';

interface Props{
    imagen:  string;
    titulo: string;
    descripcion: string;
}

function CuadroServicio({imagen, titulo, descripcion}: Props)
{
    return(
        <section 
            className={styles.contenedor}
            style={{backgroundImage: `url(${imagen})`} as React.CSSProperties}>
            
            <span className={styles.titulo}>{titulo}</span>
            <div className={styles.efecto}>
                <p className={styles.descripcion}>{descripcion}</p>
                <button className={styles.boton}>Ver Servicio</button>
            </div>

        </section>
    )
}

export default CuadroServicio;