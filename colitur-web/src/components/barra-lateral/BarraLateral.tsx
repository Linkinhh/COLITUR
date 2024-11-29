import React, {useState } from 'react';
import styles from './BarraLateral.module.css';
import imagen from '../../assets/imagen_administrador.svg';

interface Secciones
{
    id: string,
    icono: React.ReactNode,
    titulo: string,
    tituloSeccion: String,
    children ?: React.ReactNode
}

interface BarraLateralProps
{
    opciones: Secciones[],
}

const BarraLateral: React.FC<BarraLateralProps> = ({opciones}) => {

    const[activeSection, setActiveSection] = useState<string | null> (null);
    //const[isCollapsed, SetIsCollapsed] = useState(false);

    return(
        <div className={styles.contenedorPrincipal}>
            <aside className={styles.contenedorBarraLateral}>
                <nav>
                    <img src={imagen} className={styles.imagen}></img>
                    <span className={styles.administrador}>Administrador</span>
                    {opciones.map((opcion)=> (
                        <button
                        key={opcion.id}
                        onClick={() => setActiveSection (activeSection === opcion.id ? opcion.id : opcion.id)}
                        className={`${styles.contenedorBoton} ${activeSection === opcion.id ? styles.contenedorBotonActivo : ''}`}>
                            {opcion.icono}
                            <span className={styles.titulo}>{opcion.titulo}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            <div className={styles.contenedorContenido}>
                {opciones.map((opcion) => activeSection === opcion.id && (
                    <>
                        <span className={styles.tituloSeccion}>{opcion.tituloSeccion}</span>
                        <div key = {opcion.id} className={styles.contenedorContenidoSecundario}>
                            {opcion.children}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default BarraLateral;