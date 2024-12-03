import imagen from "../../assets/COLITUR.svg";
import styles from "./LogoColitur.module.css";

function LogoColitur()
{
    return(
        <section className={styles.contenedor}>
            <img alt='Logo del Colegio de Licenciados en Turismo de Ancash y Fondo de un paisaje de Ancash' src={imagen} className={styles.imagen}></img>
            <span className={styles.colitur}>Colegio de Licenciados</span>
            <span className={styles.colitur}>en Turismo de Áncash</span>
        </section>
    )
}

export default LogoColitur;