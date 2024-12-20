import { useTheme } from '../../context/ThemeContext';
import styles from './BotonEstandar.module.css';
import darkStyles from './BotonEstandarDark.module.css';

interface Props{
    titulo: string;
    estiloBoton?: string;
    estiloTexto?: string;
    tipo?: "submit" | "reset" | "button";
    onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function BotonEstandar({titulo, estiloBoton, estiloTexto, tipo}: Props)
{
    
    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <button 
            type={tipo}
            className={`${combinedStyles.boton} ${estiloBoton || ""} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <span className={`${combinedStyles.spanBoton} ${estiloTexto || ""} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                {titulo}
            </span>
        </button>
    )
}

export default BotonEstandar;