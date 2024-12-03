import { useTheme } from '../../context/ThemeContext';
import styles from './BotonEstandarAlternativo.module.css';
import darkStyles from './BotonEstandarAlternativoDark.module.css';

interface Props{
    titulo: string;
}

function BotonEstandar({titulo}: Props)
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <button 
            className={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <span className={`${combinedStyles.spanBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                {titulo}
            </span>
        </button>
    )
}

export default BotonEstandar;