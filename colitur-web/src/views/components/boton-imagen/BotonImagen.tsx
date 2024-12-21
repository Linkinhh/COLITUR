import imagen from "../../assets/COLITUR.svg";
import { useTheme } from "../../context/ThemeContext";
import styles from "../boton-imagen/BotonImagen.module.css";
import darkStyles from './BotonImagenDark.module.css';

function BotonImagen()
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <button className={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`} tabIndex={-1}>
            <img alt='Logo del Colegio de Licenciados en Turismo de Ancash' src={imagen} className={`${combinedStyles.imagen} ${isDarkMode ? combinedStyles.darkMode : ''}`} tabIndex={-1}></img>
        </button>
    )
}

export default BotonImagen;