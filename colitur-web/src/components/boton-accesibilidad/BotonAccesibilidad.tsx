import { Contrast, PersonStanding, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './BotonAccesibilidad.module.css';

function BotonAccesibilidad () {

    return (
        <section className={styles.content}>
            <div className={styles.contenedor}>
                <PersonStanding className={styles.imagenAccesibilidad}></PersonStanding>
            </div>
            <div>
                <div className={styles.contenedorHover}>
                    <button className={styles.botonLupaMas}><ZoomIn className={styles.imagenLupaMas}></ZoomIn></button>
                    <button className={styles.botonDarkMode}><Contrast className={styles.imagenDarkMode}></Contrast></button>
                    <button className={styles.botonLupaMenos}><ZoomOut className={styles.imagenLupaMenos}></ZoomOut></button>
                </div>
            </div>
        </section>
    )
}

export default BotonAccesibilidad;