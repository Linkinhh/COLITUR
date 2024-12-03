import { Contrast, PersonStanding, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './BotonAccesibilidad.module.css';
import darkStyles from './BotonAccesibilidadDark.module.css';
import { useTheme } from '../../context/ThemeContext';

function BotonAccesibilidad () {

    const {toggleTheme} = useTheme();

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;


    return (
        <section className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                <PersonStanding aria-label='Persona abierta de brazos y piernas.' className={`${combinedStyles.imagenAccesibilidad} ${isDarkMode ? combinedStyles.darkMode : ''}`}></PersonStanding>
            </div>
            <div>
                <div className={`${combinedStyles.contenedorHover} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                    <button className={`${combinedStyles.botonLupaMas} ${isDarkMode ? combinedStyles.darkMode : ''}`}><ZoomIn aria-label='Lupa con un simbolo de + dentro' className={`${combinedStyles.imagenLupaMas} ${isDarkMode ? combinedStyles.darkMode : ''}`}></ZoomIn></button>
                    <button 
                        className={`${combinedStyles.botonDarkMode} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                        onClick={toggleTheme}
                    ><Contrast aria-label='Circulo con la mitad pintada.' className={`${combinedStyles.imagenDarkMode} ${isDarkMode ? combinedStyles.darkMode : ''}`}></Contrast></button>
                    <button className={`${combinedStyles.botonLupaMenos} ${isDarkMode ? combinedStyles.darkMode : ''}`}><ZoomOut aria-label='Lupa con un simbolo de - dentro' className={`${combinedStyles.imagenLupaMenos} ${isDarkMode ? combinedStyles.darkMode : ''}`}></ZoomOut></button>
                </div>
            </div>
        </section>
    )
}

export default BotonAccesibilidad;