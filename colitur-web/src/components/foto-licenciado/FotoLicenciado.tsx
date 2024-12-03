import { useTheme } from '../../context/ThemeContext';
import styles from '../foto-licenciado/FotoLicenciado.module.css';
import darkStyles from './FotoLicenciadoDark.module.css';

//La variable mostrar Boton, sirve para cambiar el componente para usarlo en la pagina de NOSOTROS FALSO (FALSE)
//Si es VERDADERO (TRUE) entonce sirve para el servicio de Consulta de Habilitados
interface Props{
    imagen: string;
    nombre: string;
    cargo?: string;
    numero?: string;
    estado?: string;
    mostrarBoton: boolean; 
}

function FotoLicenciado({imagen, nombre, cargo, numero, estado, mostrarBoton}: Props){

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;
    
    const contenedorClase = mostrarBoton ? combinedStyles.contenedorConBoton : combinedStyles.contenedorSinBoton;
    const datosClase = mostrarBoton ? combinedStyles.datosConBoton : combinedStyles.datosSinBoton;

    return(
        <section className={`${combinedStyles.contenedor} ${contenedorClase} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            
            <img className={`${combinedStyles.foto} ${isDarkMode ? combinedStyles.darkMode : ''}`} src={imagen} alt="Imagen del Licenciado"/>
            
            <div className={`${combinedStyles.datos} ${datosClase} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                <span className={`${combinedStyles.nombre} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{nombre}</span>
                {!mostrarBoton && <span className={`${combinedStyles.texto} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{cargo}</span>}
                {mostrarBoton && <span className={`${combinedStyles.texto} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{numero}</span>}
                {mostrarBoton && <span className={`${combinedStyles.texto} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{estado}</span>}
            </div>
            
            {mostrarBoton && (
                <button className={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                    <span className={`${combinedStyles.txtBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>Ver detalles</span>
                </button>
            )}
        </section>
    )
}

export default FotoLicenciado;