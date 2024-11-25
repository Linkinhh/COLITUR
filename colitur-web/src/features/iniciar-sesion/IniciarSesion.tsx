import styles from './IniciarSesion.module.css';
import { BarraNavegacion, TituloLogoColitur, Footer, FondoPaginas, InputTexto, BotonEstandar } from '../../components';
import iniciarSesion from "../../assets/Iniciar_Sesion.svg"; 
//import icono from "../../assets/Signo_Pregunta.svg";
import { Link } from 'react-router-dom';

function IniciarSesion()
{
    return(
        <div className={styles.content}>
            <BarraNavegacion></BarraNavegacion>
            <TituloLogoColitur titulo="INICIAR SESIÓN" imagen={iniciarSesion}></TituloLogoColitur>
            <FondoPaginas>
                <div className={styles.contenedorCampoTexto}>
                    <span className={styles.tituloCampo}>Número de Colegiado o DNI</span>
                    <InputTexto 
                    placeHolder='Ingrese su Número de Colegiado o DNI' 
                    tipo="text"
                    nombre="username"
                    autoCompletado='off'></InputTexto>
                </div>
                <div className={styles.contenedorCampoTexto}>
                    <span className={styles.tituloCampo}>Contraseña</span>
                    <InputTexto 
                    placeHolder='Ingresa tu Contraseña' 
                    tipo="password"
                    nombre="password"
                    autoCompletado="current-password"></InputTexto>
                </div>
                <div className={styles.contenedorBoton}>
                    <Link to="/IniciarSesion/Administrador" style={{textDecoration: 'none'}} className={styles.contenedorBoton}>
                        <BotonEstandar titulo="Iniciar Sesión"></BotonEstandar>
                    </Link>
                </div>
            </FondoPaginas>
            <Footer></Footer>
        </div>
    )
}

export default IniciarSesion;