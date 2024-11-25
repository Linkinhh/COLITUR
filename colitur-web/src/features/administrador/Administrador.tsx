import styles from "./Administrador.module.css";
import { BarraNavegacion, FondoPaginas, Footer, TabWidget } from "../../components";
//import Tab from "../../components/tab-widget/TabWidget";
import {CircleUser, LockKeyhole} from "lucide-react";

const tabs = [
    { id: '1', icono: <CircleUser />, titulo: 'Datos Personales', contenido: <div>Welcome to the home page!</div> },
    { id: '2', icono: <LockKeyhole />, titulo: 'Cambiar Contraseña', contenido: <div>Your profile details</div> },
];

function Administrador()
{
    return(
        <>
            <div className={styles.content}>
                <BarraNavegacion></BarraNavegacion>
                <FondoPaginas>
                    <TabWidget 
                    tabs={tabs}
                    isVisible = {true}
                    ></TabWidget>
                </FondoPaginas>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Administrador;