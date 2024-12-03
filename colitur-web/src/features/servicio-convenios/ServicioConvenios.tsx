import { BarraNavegacion, BotonEstandar, ContenedorConTitulo, FondoPaginas, Footer } from '../../components';
import styles from './ServicioConvenios.module.css';
import darkStyles from '../servicio-convenios/ServicioConveniosDark.module.css';
import { useTheme } from '../../context/ThemeContext';

function ServicioConvenios () {
    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <section className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <BarraNavegacion></BarraNavegacion>
            <FondoPaginas>
                <ContenedorConTitulo titulo='Requisitos para un Convenio Académico'>
                    <ol className={`${combinedStyles.listas} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        <li>Carta de presentación de institución, indicando datos de la empresa y con qué otras instituciones tienen convenio, en formato PDF.</li>
                        <li>Propuesta de convenio.</li>
                        <li>Ficha RUC de la institución, emitida por SUNAT, en formato PDF.</li>
                        <li>Certificado de vigencia de poder del Gerente (donde se observer la denominación, libro, asiento, cargo, facultades, entre otros), emitida por Registros Públicos en formato PDF.</li>
                        <li>El Consejo Directivo acuerda fijar el monto de S/. 200.00 soles por convenio institucional. Sea nuevo o renovación (adjuntar voucher).</li>
                        <li>Logo de la institución en formato PNG.</li>
                        <li>DNI o Ficha RENIEC del gerente, en formato PDF o imagen (que se note claramente).</li>
                    </ol>
                    <div className={`${combinedStyles.contenedorBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        <BotonEstandar titulo='Accerder al Formulario' estiloBoton={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`} estiloTexto={`${combinedStyles.txtBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}></BotonEstandar>
                    </div>
                </ContenedorConTitulo>
                <ContenedorConTitulo titulo=' Requisitos para un Convenio Institucional con Empresas'>
                    <ol className={`${combinedStyles.listas} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        <li>Carta de presentación de la institución, indicando datos de la empresa, en formato PDF.</li>
                        <li>Propuesta de convenio, en formato PDF y en físico.</li>
                        <li>Ficha RUC de la institución, emitida por SUNAT, en formato PDF.</li>
                        <li>Certificado de vigencia de poder del Gerente (donde se observe la denominación, libro, asiento, cargo, facultades, entre otros), emitida por Registros Públicos, en formato PDF. De ser persona natural con negocio deberá presentar su licencia de funcionamiento emitida por la Municipalidad Provincial de su localidad.</li>
                        <li>Logo de la institución en formato PNG.</li>
                        <li>DNI o Ficha RENIEC del gerente, en formato PDF o imagen.</li>
                    </ol>
                    <div className={`${combinedStyles.contenedorBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        <BotonEstandar titulo='Accerder al Formulario' estiloBoton={styles.boton} estiloTexto={styles.txtBoton}></BotonEstandar>
                    </div>
                </ContenedorConTitulo>
            </FondoPaginas>
            <Footer></Footer>
        </section>
    )
}

export default ServicioConvenios;