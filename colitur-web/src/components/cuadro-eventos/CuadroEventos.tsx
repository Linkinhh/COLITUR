import styles from "./CuadroEventos.module.css";
import BotonEstandar from "../boton-estandar/BotonEstandar";
import darkStyles from './CuadroEventosDark.module.css';
import { useTheme } from "../../context/ThemeContext";

interface Props{
    imagen: string
    ruta?: string
    altEvento: string
}

function CuadroEventos ({imagen, ruta, altEvento}: Props) {

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <img src={imagen} className={`${combinedStyles.imagen} ${isDarkMode ? combinedStyles.darkMode : ''}`} alt={altEvento} />
            <a href={ruta} style={{textDecoration: 'none'}}>
                <BotonEstandar titulo="Ver más" estiloBoton={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`} estiloTexto={`${combinedStyles.txtBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}></BotonEstandar>
            </a>
        </div>
    )
}

export default CuadroEventos;