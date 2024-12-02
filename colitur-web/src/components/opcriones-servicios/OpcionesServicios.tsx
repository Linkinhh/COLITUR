import styles from "./OpcionesServicios.module.css"
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface Props {
    imagen: LucideIcon
    servicio: string
    ruta: string
}



function OpcioneesServicios ({imagen: Imagen, servicio, ruta}: Props){
    return (
        <Link to={ruta} className={styles.enlace}>
            <div className={styles.contenedor}>
            <Imagen className={styles.imagen}></Imagen>
            <span className={styles.texto}>{servicio}</span>
        </div>
        </Link>
    )
}

export default OpcioneesServicios;