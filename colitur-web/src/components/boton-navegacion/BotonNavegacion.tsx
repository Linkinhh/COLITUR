import styles from '../boton-navegacion/BotonNavegacion.module.css';
import { ReactNode } from 'react';
import darkStyles from './BotonNavegacionDark.module.css';
import { useTheme } from '../../context/ThemeContext';

interface Props{
    children?:ReactNode
}

function BotonNavegacion( { children }: Props )
{
    
    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <button className={`${combinedStyles.botonNavegacion} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            {children}
        </button>
    )
}

export default BotonNavegacion;