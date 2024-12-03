//import { Link } from "react-router-dom"
import styles from './PaginaColegiatura.module.css';
import { BarraNavegacion, Footer, FondoPaginas, TituloLogoColitur, ContenedorConTitulo, BotonEstandar } from '../../components';
import imagen from '../../assets/Normativa.svg';
import darkStyles from './PaginaColegiaturaDark.module.css';
import { useTheme } from '../../context/ThemeContext';
// Si se requiere mayor información, puede llamar a los números: +51 955 848 898 / +51 969 963 466 / +51 961 663 231    

function PaginaColegiatura()
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <>
            <div className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                <BarraNavegacion></BarraNavegacion>
                <TituloLogoColitur titulo="COLEGIATURA" imagen={imagen}></TituloLogoColitur>
                <FondoPaginas>
                    <ContenedorConTitulo titulo="Requisitos para la Colegiatura">
                        <div className={`${combinedStyles.contenedorRequisitos} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <ul>
                                <li>Solicitud (FUT) con firma y huella.</li>
                                <li>01 Copia del DNI (ambas caras).</li>
                                <li>01 Copia del título profesional.</li>
                                <li>01 Reporte de inscripción de Grados y Títulos (Licenciatura) de SUNEDU.</li>
                                <li>CV documentado de estudios y experiencia en formato PDF.</li>
                                <li>DJ de compromiso del ejercicio ético de la profesión y participación activda dentro del COLITUR (Formato del COLITUR).</li>
                                <li>Recibo/váucher de S/ 700 soles (pago por derecho de colegiatura).</li>
                                <ul>
                                    <li>Cuenta: 751-7212119</li>
                                    <li>CCI: 009-421-207517212119-96 Banco SCOTIABANK</li>
                                    <li>PLIN: 969963466 (Lic. Laura Rodríguez Méndez)</li>
                                </ul>
                                <span style={{fontWeight:'bold'}}>Habilitación hasta el 31/12/2024</span>
                                <li>Fotografía digital en formato JPG o PNG con fondo blanco.</li>
                                <li>Tesis en formato PDF (si cuenta con ello).</li>
                            </ul>

                            <BotonEstandar titulo="Descargar Formatos"></BotonEstandar>

                        </div>
                    </ContenedorConTitulo>
                    <ContenedorConTitulo titulo="Nota">
                        <div className={`${combinedStyles.contenedorNota} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <p>Los documentos digitales serán presentados al siguiente correo: <span style={{textDecoration: 'underline'}}>coliturancashperu@gmail.com</span><br/>
                            Si se requiere mayor información, puede llamar a los números: +51 955 848 898 / +51 969 963 466 / +51 961 663 231</p>
                        </div>
                    </ContenedorConTitulo>
                </FondoPaginas>
                <Footer></Footer>
            </div>
        </>
    )
}

export default PaginaColegiatura