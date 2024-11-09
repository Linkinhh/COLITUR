import LogoColitur from "../logo-colitur/LogoColitur";
import styles from "../titulo-logo-colitur/TituloLogoColitur.module.css";

interface Props
{
    titulo: string;
}

function TituloLogoColitur({titulo}: Props)
{
    return(
        <section className={styles.contenedor}>
            <LogoColitur></LogoColitur>
            <span className={styles.titulo}>{titulo}</span>
        </section>
    );
}

export default TituloLogoColitur;