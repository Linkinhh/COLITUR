import { Contrast, PersonStanding, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './BotonAccesibilidad.module.css';
import { useTheme } from '../../context/ThemeContext';

function BotonAccesibilidad () {

    const {toggleTheme} = useTheme();

    return (
        <section className={styles.content}>
            <div className={styles.contenedor}>
                <PersonStanding className={styles.imagenAccesibilidad}></PersonStanding>
            </div>
            <div>
                <div className={styles.contenedorHover}>
                    <button className={styles.botonLupaMas}><ZoomIn className={styles.imagenLupaMas}></ZoomIn></button>
                    <button 
                        className={styles.botonDarkMode}
                        onClick={toggleTheme}
                    ><Contrast className={styles.imagenDarkMode}></Contrast></button>
                    <button className={styles.botonLupaMenos}><ZoomOut className={styles.imagenLupaMenos}></ZoomOut></button>
                </div>
            </div>
        </section>
    )
}

export default BotonAccesibilidad;