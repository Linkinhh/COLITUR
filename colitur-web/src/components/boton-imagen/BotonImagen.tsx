import imagen from "../../assets/COLITUR.svg";
import styles from "../boton-imagen/BotonImagen.module.css";

function BotonImagen()
{
    return(
        <button className={styles.boton}>
            <img src={imagen} className={styles.imagen}></img>
        </button>
    )
}

export default BotonImagen;