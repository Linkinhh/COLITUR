import { ReactNode } from 'react';
import styles from '../boton-estandar-imagen/BotonEstandarImagen.module.css';
import darkStyles from './BotonEstandarImagenDark.module.css';
import { useTheme } from '../../context/ThemeContext';

interface Props{
    nombre: string,
    children?:ReactNode,
    conSombra: boolean
}

function BotonEstandarImagen({nombre, children, conSombra}: Props)
{
    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    const sombra = conSombra ? {boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.6)'} : {};

    return(
        <button 
            className={`${combinedStyles.botonIniciarSesion} ${isDarkMode ? combinedStyles.darkMode : ''}`} style={sombra}>
            <span className={`${combinedStyles.spanIniciarSesion} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                {nombre}
            </span>
            <div className={`${combinedStyles.componenteHijo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                {children}
            </div>
        </button>
    )
}

export default BotonEstandarImagen