import LogoColitur from "../logo-colitur/LogoColitur";
import styles from "../titulo-logo-colitur/TituloLogoColitur.module.css";

interface Props
{
    imagen: string;
    titulo: string; 
}

function TituloLogoColitur({titulo, imagen}: Props)
{
    return(
        <section aria-label="Imagen Representativa de la Pagina que se Visualiza" style={{"--imagen-fondo": `url(${imagen})`} as React.CSSProperties} className={styles.contenedor}>
            <LogoColitur></LogoColitur>
            <span className={styles.titulo}>{titulo}</span>
        </section>
    );
}

export default TituloLogoColitur;