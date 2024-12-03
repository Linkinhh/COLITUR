import styles from './CuadroServicio.module.css';
import { Link } from 'react-router-dom';
import darkStyles from './CuadroServicioDark.module.css';
import { useTheme } from '../../context/ThemeContext';

interface Props{
    imagen:  string;
    titulo: string;
    descripcion: string;
    ruta: string;
}

function CuadroServicio({imagen, titulo, descripcion, ruta}: Props)
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <section 
            className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`} tabIndex={-1} 
            style={{backgroundImage: `url(${imagen})`} as React.CSSProperties}
            aria-label="Imagen representativa del servicio.">
            
            <span className={`${combinedStyles.titulo} ${isDarkMode ? combinedStyles.darkMode : ''}`} tabIndex={-1}>{titulo}</span>
            <div className={`${combinedStyles.efecto} ${isDarkMode ? combinedStyles.darkMode : ''}`} tabIndex={-1}>
                    <p className={`${combinedStyles.descripcion} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{descripcion}</p>
                    <Link to={ruta} style={{textDecoration: 'none'}}>
                        <button className={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`} tabIndex={-1}>Ver Servicio</button>
                    </Link>
            </div>
        </section>
    )
}

export default CuadroServicio;