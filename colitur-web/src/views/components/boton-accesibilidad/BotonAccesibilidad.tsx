import { useState } from 'react';
import { Contrast, PersonStanding, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './BotonAccesibilidad.module.css';
import darkStyles from './BotonAccesibilidadDark.module.css';
import { useTheme } from '../../context/ThemeContext';
import { useFontSize } from '../../context/FontSizeContext';

function BotonAccesibilidad() {
    const { toggleTheme, isDarkMode } = useTheme();
    const { increaseFontSize, decreaseFontSize } = useFontSize();
    const [isFocused, setIsFocused] = useState(false);

    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <section 
            className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''} ${
                isFocused ? combinedStyles.focusHover : ''
            }`}
        >
            <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                <PersonStanding aria-label='Persona abierta de brazos y piernas.' 
                    className={`${combinedStyles.imagenAccesibilidad} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                />
            </div>
            <div>
                <div 
                    className={`${combinedStyles.contenedorHover} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                >
                    <button
                        className={`${combinedStyles.botonLupaMas} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                        onClick={increaseFontSize}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    >
                        <ZoomIn aria-label='Lupa con un simbolo de + dentro' 
                            className={`${combinedStyles.imagenLupaMas} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                        />
                    </button>
                    <button
                        className={`${combinedStyles.botonDarkMode} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                        onClick={toggleTheme}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    >
                        <Contrast aria-label='Circulo con la mitad pintada.' 
                            className={`${combinedStyles.imagenDarkMode} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                        />
                    </button>
                    <button
                        className={`${combinedStyles.botonLupaMenos} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                        onClick={decreaseFontSize}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    >
                        <ZoomOut aria-label='Lupa con un simbolo de - dentro' 
                            className={`${combinedStyles.imagenLupaMenos} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BotonAccesibilidad;
