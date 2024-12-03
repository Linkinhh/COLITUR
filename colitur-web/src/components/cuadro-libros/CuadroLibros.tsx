import { useTheme } from '../../context/ThemeContext';
import styles from './CuadroLibros.module.css';
import darkStyles from './CuadroLibrosDark.module.css';

interface Props{
    ruta: string
    titulo: string
    autor: string
    imagen: string
}

function CuadroLibros({titulo, autor, imagen, ruta}: Props) {

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;


    return(
        <a href={ruta} style={{textDecoration: 'none'}}>
            <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                <div className={`${combinedStyles.informacionLibro} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                    <p>{titulo}</p>
                    <em>{autor}</em>
                </div>
                <img className={`${combinedStyles.imagen} ${isDarkMode ? combinedStyles.darkMode : ''}`} src={imagen} alt="Portada del Libro" />
            </div>
        </a>
    )
}

export default CuadroLibros;