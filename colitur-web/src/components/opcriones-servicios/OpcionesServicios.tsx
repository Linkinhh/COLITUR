import styles from "./OpcionesServicios.module.css"
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import darkStyles from './OpcionesServiciosDark.module.css';
import { useTheme } from "../../context/ThemeContext";

interface Props {
    imagen: LucideIcon
    servicio: string
    ruta: string
}



function OpcioneesServicios ({imagen: Imagen, servicio, ruta}: Props){

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;


    return (
        <Link to={ruta} className={`${combinedStyles.enlace} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <Imagen aria-label="Icono representatito del servicio." className={`${combinedStyles.imagen} ${isDarkMode ? combinedStyles.darkMode : ''}`}></Imagen>
            <span className={`${combinedStyles.texto} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{servicio}</span>
        </div>
        </Link>
    )
}

export default OpcioneesServicios;