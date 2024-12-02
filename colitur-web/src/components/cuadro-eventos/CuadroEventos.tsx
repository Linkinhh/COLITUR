import styles from "./CuadroEventos.module.css";
import BotonEstandar from "../boton-estandar/BotonEstandar";

interface Props{
    imagen: string
    ruta?: string
}

function CuadroEventos ({imagen, ruta}: Props) {
    return (
        <div className={styles.contenedor}>
            <img src={imagen} className={styles.imagen} alt="Imagen de una Noticia" />
            <a href={ruta} style={{textDecoration: 'none'}}>
                <BotonEstandar titulo="Ver más" estiloBoton={styles.boton} estiloTexto={styles.txtBoton}></BotonEstandar>
            </a>
        </div>
    )
}

export default CuadroEventos;