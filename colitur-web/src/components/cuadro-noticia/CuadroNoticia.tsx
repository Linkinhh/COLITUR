import { useTheme } from '../../context/ThemeContext';
import styles from './CuadroNoticia.module.css';
import darkStyles from './CuadroNoticiaDark.module.css';

interface Props {
    imagen: string;
    fecha: string;
}

function CuadroNoticia({ imagen, fecha }: Props) {
    const { isDarkMode } = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles } 
        : styles;

    return (
        <section 
            className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`} 
            tabIndex={0} 
            aria-label={`Noticia del ${fecha}`}
        >
            <div 
                className={`${combinedStyles.contenedorImagen} ${isDarkMode ? combinedStyles.darkMode : ''}`} 
                style={{ backgroundImage: `url(${imagen})` }} aria-label={`Imagen de la noticia del ${fecha}`}
            >
                <div 
                    className={`${combinedStyles.contenedorFecha} ${isDarkMode ? combinedStyles.darkMode : ''}`}aria-label={`Fecha de la noticia: ${fecha}`}
                >
                    {fecha}
                </div>
            </div>
            <div 
                className={`${combinedStyles.separador} ${isDarkMode ? combinedStyles.darkMode : ''}`}  
                aria-hidden="true"
            ></div>
        </section>
    );
}

export default CuadroNoticia;
