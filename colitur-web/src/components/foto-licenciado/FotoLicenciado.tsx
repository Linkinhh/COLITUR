import styles from '../foto-licenciado/FotoLicenciado.module.css';

//La variable mostrar Boton, sirve para cambiar el componente para usarlo en la pagina de NOSOTROS FALSO (FALSE)
//Si es VERDADERO (TRUE) entonce sirve para el servicio de Consulta de Habilitados
interface Props{
    imagen: string;
    nombre?: string;
    cargo?: string;
    numero?: string;
    estado?: string;
    mostrarBoton?: boolean; 
}

function FotoLicenciado({imagen, nombre, cargo, numero, estado, mostrarBoton}: Props){
    
    const contenedorClase = mostrarBoton ? styles.contenedorConBoton : styles.contenedorSinBoton;
    const datosClase = mostrarBoton ? styles.datosConBoton : styles.datosSinBoton;
    
    return(
        <section className={`${styles.contenedor} ${contenedorClase}`}>
            
            <img className={styles.foto} src={imagen} alt="Imagen del Licenciado"/>
            
            <div className={`${styles.datos} ${datosClase}`}>
                <span className={styles.nombre}>{nombre}</span>
                {!mostrarBoton && <span className={styles.texto}>{cargo}</span>}
                {mostrarBoton && <span className={styles.texto}>{numero}</span>}
                {mostrarBoton && <span className={styles.texto}>{estado}</span>}
            </div>
            
            {mostrarBoton && (
                <button className={styles.boton}>
                    <span className={styles.txtBoton}>Ver detalles</span>
                </button>
            )}
        </section>
    )
}

export default FotoLicenciado;