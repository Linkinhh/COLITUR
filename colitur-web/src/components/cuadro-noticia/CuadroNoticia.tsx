import { useTheme } from '../../context/ThemeContext';
import styles from './CuadroNoticia.module.css';
import darkStyles from './CuadroNoticiaDark.module.css';

interface Props {
    imagen: string;
    fecha: string;
    textoAlt: string;
}

function CuadroNoticia({ imagen, fecha, textoAlt }: Props) {
    const { isDarkMode } = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles } 
        : styles;

    return (
        <section 
            className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`} 
            tabIndex={0} 
        >
            <div 
                className={`${combinedStyles.contenedorImagen} ${isDarkMode ? combinedStyles.darkMode : ''}`}
            >
                {/* Imagen posicionada en el fondo */}
                <img 
                    src={imagen} 
                    alt={textoAlt}
                    className={combinedStyles.imagen} 
                />
                {/* Fecha visible encima de la imagen */}
                <div 
                    className={`${combinedStyles.contenedorFecha} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                >
                    {fecha}
                </div>
            </div>
            {/* Separador visible */}
            <div 
                className={`${combinedStyles.separador} ${isDarkMode ? combinedStyles.darkMode : ''}`}  
                aria-hidden="true"
            ></div>
        </section>
    );
}

export default CuadroNoticia;


