import styles from './CuadroServicio.module.css';
import { Link } from 'react-router-dom';
interface Props{
    imagen:  string;
    titulo: string;
    descripcion: string;
    ruta: string;
}

function CuadroServicio({imagen, titulo, descripcion, ruta}: Props)
{
    return(
        <section 
            className={styles.contenedor}
            style={{backgroundImage: `url(${imagen})`} as React.CSSProperties}>
            
            <span className={styles.titulo}>{titulo}</span>
            <div className={styles.efecto}>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <Link to={ruta} style={{textDecoration: 'none'}}>
                        <button className={styles.boton}>Ver Servicio</button>
                    </Link>
            </div>
        </section>
    )
}

export default CuadroServicio;