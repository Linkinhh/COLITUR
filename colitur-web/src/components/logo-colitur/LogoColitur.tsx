import imagen from "../../assets/COLITUR.svg";
import styles from "./LogoColitur.module.css";

function LogoColitur()
{
    return(
        <section className={styles.contenedor}>
            <img src={imagen} className={styles.imagen}></img>
            <span className={styles.colitur}>Colegio de Licenciados</span>
            <span className={styles.colitur}>en Turismo de Áncash</span>
        </section>
    )
}

export default LogoColitur;