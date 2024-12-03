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
        <button className={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <img src={imagen} className={`${combinedStyles.imagen} ${isDarkMode ? combinedStyles.darkMode : ''}`}></img>
        </button>
    )
}

export default BotonImagen;