import { ReactNode } from 'react';
import styles from './ContenedorConTitulo.module.css';

interface Props
{
    titulo: string;
    children?: ReactNode;
}

function Titulo ({titulo}: Props)
{
    return(
        <div className={styles.cuadroTitulo}>
            <span className={styles.titulo}>{titulo}</span>
        </div>
    )
}

function ContenedorConTitulo ({titulo, children}: Props)
{
    return(
        <section className={styles.contenedor}>
            <Titulo titulo = {titulo}></Titulo>
            {children}
        </section>
    )
}

export default ContenedorConTitulo;