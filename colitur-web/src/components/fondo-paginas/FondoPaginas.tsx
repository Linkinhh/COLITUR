import { ReactNode } from 'react';
import styles from './FondoPaginas.module.css';

interface Props{
    children: ReactNode;
}

function FondoPaginas({children}: Props)
{
    return(
        <section className={styles.contenedor}>{children}</section>
    )
}

export default FondoPaginas;