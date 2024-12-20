import { useTheme } from '../../context/ThemeContext';
import styles from './BotonEstandarAlternativo.module.css';
import darkStyles from './BotonEstandarAlternativoDark.module.css';

interface Props{
    titulo: string;
    onClick?: () => void;
}

function BotonEstandar({titulo,onClick}: Props)
{
    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <button onClick={onClick} 
            className={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <span className={`${combinedStyles.spanBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                {titulo}
            </span>
        </button>
    )
}

export default BotonEstandar;