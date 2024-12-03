import styles from './IniciarSesion.module.css';
import { BarraNavegacion, TituloLogoColitur, Footer, FondoPaginas, InputTexto, BotonEstandar } from '../../components';
import iniciarSesion from "../../assets/Iniciar_Sesion.svg"; 
//import icono from "../../assets/Signo_Pregunta.svg";
import { Link } from 'react-router-dom';
import darkStyles from './IniciarSesionDark.module.css';
import { useTheme } from '../../context/ThemeContext';

function IniciarSesion()
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <div className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <BarraNavegacion></BarraNavegacion>
            <TituloLogoColitur titulo="INICIAR SESIÓN" imagen={iniciarSesion}></TituloLogoColitur>
            <FondoPaginas>
                <div className={`${combinedStyles.contenedorCampoTexto} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                    <span className={`${combinedStyles.tituloCampo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>Número de Colegiado o DNI</span>
                    <InputTexto 
                    placeHolder='Ingrese su Número de Colegiado o DNI' 
                    tipo="text"
                    nombre="username"
                    autoCompletado='off'></InputTexto>
                </div>
                <div className={`${combinedStyles.contenedorCampoTexto} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                    <span className={`${combinedStyles.tituloCampo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>Contraseña</span>
                    <InputTexto 
                    placeHolder='Ingresa tu Contraseña' 
                    tipo="password"
                    nombre="password"
                    autoCompletado="current-password"></InputTexto>
                </div>
                <div className={`${combinedStyles.contenedorBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
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