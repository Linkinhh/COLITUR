//import { Link } from "react-router-dom"
import styles from './PaginaNormativa.module.css';
import { BarraNavegacion, Footer } from '../../components';

function PaginaNormativa()
{
    return(
        <>
            <div className={styles.content}>
                <BarraNavegacion></BarraNavegacion>
                <Footer></Footer>
            </div>
        </>
    )
}

export default PaginaNormativa