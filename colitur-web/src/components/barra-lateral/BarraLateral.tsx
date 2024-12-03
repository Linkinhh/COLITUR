import React, {useState } from 'react';
import styles from './BarraLateral.module.css';
import imagen from '../../assets/imagen_administrador.svg';
import darkStyles from './BarraLateralDark.module.css';
import { useTheme } from '../../context/ThemeContext';

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

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    const[activeSection, setActiveSection] = useState<string | null> (null);
    //const[isCollapsed, SetIsCollapsed] = useState(false);

    return(
        <div className={`${combinedStyles.contenedorPrincipal} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <aside className={`${combinedStyles.contenedorBarraLateral} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                <nav >
                    <img alt='Imagen de un Paisaje de Ancash' src={imagen} className={`${combinedStyles.imagen} ${isDarkMode ? combinedStyles.darkMode : ''}`}></img>
                    <span className={`${combinedStyles.administrador} ${isDarkMode ? combinedStyles.darkMode : ''}`}>Administrador</span>
                    {opciones.map((opcion)=> (
                        <button
                        key={opcion.id}
                        onClick={() => setActiveSection (activeSection === opcion.id ? opcion.id : opcion.id)}
                        className={`${combinedStyles.contenedorBoton} ${activeSection === opcion.id ? combinedStyles.contenedorBotonActivo : ''} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            {opcion.icono}
                            <span className={`${combinedStyles.titulo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{opcion.titulo}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            <div className={`${combinedStyles.contenedorContenido} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                {opciones.map((opcion) => activeSection === opcion.id && (
                    <>
                        <span className={`${combinedStyles.tituloSeccion} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{opcion.tituloSeccion}</span>
                        <div key = {opcion.id} className={`${combinedStyles.contenedorContenidoSecundario} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            {opcion.children}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default BarraLateral;