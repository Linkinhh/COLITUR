import { useTheme } from '../../context/ThemeContext';
import styles from './CuadroNoticia.module.css';
import darkStyles from './CuadroNoticiaDark.module.css';

interface Props
{
    imagen: string;
    fecha: string;
}

function CuadroNoticia({imagen, fecha}: Props)
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <section className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <div 
            className={`${combinedStyles.contenedorImagen} ${isDarkMode ? combinedStyles.darkMode : ''}`}
            style={{backgroundImage: `url(${imagen})`}}>
                <div className={`${combinedStyles.contenedorFecha} ${isDarkMode ? combinedStyles.darkMode : ''}`} aria-label="Imagen de fondo de una noticia">{fecha}</div>
            </div>
            <div className={`${combinedStyles.separador} ${isDarkMode ? combinedStyles.darkMode : ''}`}></div>
        </section>
    )
}

export default CuadroNoticia;