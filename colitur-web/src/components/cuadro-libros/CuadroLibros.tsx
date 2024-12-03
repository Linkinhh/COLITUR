import styles from './CuadroLibros.module.css';

interface Props{
    ruta: string
    titulo: string
    autor: string
    imagen: string
}

function CuadroLibros({titulo, autor, imagen, ruta}: Props) {
    return(
        <a href={ruta} style={{textDecoration: 'none'}}>
            <div className={styles.contenedor}>
                <div className={styles.informacionLibro}>
                    <p>{titulo}</p>
                    <em>{autor}</em>
                </div>
                <img className={styles.imagen} src={imagen} alt="Portada del Libro" />
            </div>
        </a>
    )
}

export default CuadroLibros;