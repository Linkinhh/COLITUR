import styles from './PaginaNosotros.module.css';
import { BarraNavegacion, FondoPaginas, Footer, TituloLogoColitur, ContenedorConTitulo, FotoLicenciado} from '../../components';
import portada from '../../assets/Nosotros.jpg';
import licenciado from '../../assets/datos_personales_administrador.png';
import darkStyles from './PaginaNosotrosDark.module.css';
import { useTheme } from '../../context/ThemeContext';

const licenciados = 
[
    {
        imagen: licenciado,
        nombre: 'Lic. Jhonatan Castillo Haro',
        cargo: 'Decano',
        mostrarBoton: false,
    },

    {
        imagen: licenciado,
        nombre: 'Lic. Dora Camino Loli',
        cargo: 'Vice - Decana',
        mostrarBoton: false,
    },

    {
        imagen: licenciado,
        nombre: 'Lic. Aurora Alegre Muñoz',
        cargo: 'Secretaria',
        mostrarBoton: false,
    },

    {
        imagen: licenciado,
        nombre: 'Lic. Laura Rodríguez Mendez',
        cargo: 'Directora de Economía',
        mostrarBoton: false,
    },

    {
        imagen: licenciado,
        nombre: 'Lic. Clodoaldo Figueroa Blas',
        cargo: 'Director de Asistencia Social',
        mostrarBoton: false,
    },

    {
        imagen: licenciado,
        nombre: 'Lic. Edgar Milla Echevarría',
        cargo: 'Director de prensa y relaciones públicas',
        mostrarBoton: false,
    },

    {
        imagen: licenciado,
        nombre: 'Lic. Yessenia Camones Trejo',
        cargo: 'Directora de ciencia y cultura',
        mostrarBoton: false,
    },

    {
        imagen: licenciado,
        nombre: 'Lic. César García Rosales',
        cargo: 'Primer Vocal',
        mostrarBoton: false,
    },

    {
        imagen: licenciado,
        nombre: 'Lic. Susan Gómez Tamara',
        cargo: 'Segundo Vocal',
        mostrarBoton: false,
    },
]

function PaginaNosotros ()
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <>
            <div className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                <div className={`${combinedStyles.barraNavegacion} ${isDarkMode ? combinedStyles.darkMode : ''}`}><BarraNavegacion></BarraNavegacion></div>
                <TituloLogoColitur titulo={"NOSOTROS"} imagen={portada}></TituloLogoColitur>
                <FondoPaginas>
                    <ContenedorConTitulo titulo={'Historia'}>
                        <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <span>En 1988, gracias al trabajo de un grupo de profesionales de turismo  de Lima y Cusco se logra la promulgación de la Ley 24915 que crea el  Colegio de Licenciados en Turismo del Perú el cual estaba conformado por los Consejos Regionales de Turismo de los diferentes departamentos del  país.</span>
                            <br />
                            <span>En el año 1990 se dicta el Decreto Supremo Nº 012-90-ICTI-TUR con los estatutos de la Ley 24915</span>
                            <br />
                            <span>Alrededor del año 1994 se crea el Consejo Regional Lima siendo el Lic. Jorge Velasquez Silva elegido como el primer decano de nuestro Consejo Regional Lima.</span>
                            <br />
                            <span>En el año 2009 se logra la inscripción del Consejo Regional Lima antes la Superintendencia de Registros Públicos – SUNARP siendo la Lic. Elizabeth Tello la decana en se momento</span>
                            <br />
                            <span>Es preciso indicar que el Consejo Regional Lima fue el “único” Consejo regional del país inscrito en la partida electrónica 11079152 SUNARP, la misma partida que el Colegio de Licenciados del Perú (de acuerdo a la ley 24915 vigente en ese momento)</span>
                            <br />
                            <span>La Lic. Elizabeth Tello León fue decana por dos periodos consecutivos y seguidamente la Lic. Bertha Gladys Miranda asume el cargo desde el año de 2013.</span>
                            <br />
                            <span>Debido a algunos problemas administrativos el Colegio de Licenciados en Turismo del Perú tuvo muchas complicaciones de legitimidad que afectaron directamente a todos los Consejos Regionales existentes incluido nuestro Consejo Regional Lima.</span>
                            <br />
                            <span>En abril del 2021 se dictó la Ley 31172 que brinda autonomía a cada Colegio de Licenciados en las regiones del país, actualmente aparte del Colegio de Licenciados de Lima existen 8 colegios más: Ancash, Puno, La Libertad, Ica, Lambayeque, Arequipa y San Martín.</span>
                            <br />
                            <span>Desde abril del 2021, el Consejo Directivo liderado por el Lic. Oscar Gamarra Domínguez inició labores reorganizando a la institución hacia el camino de la modernidad y la digitalización.</span>
                        </div>
                    </ContenedorConTitulo>
                    <ContenedorConTitulo titulo={'Visión'}>
                        <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <span>En el 2025 el Colegio de Licenciados en Turismo de Lima Metropolitana es una organización reconocida por su liderazgo a nivel nacional que contribuye al fortalecimiento de la actividad turística regional y  nacional, en defensa del ejercicio profesional y de los derechos de sus  colegiados.</span>
                        </div>
                    </ContenedorConTitulo>
                    <ContenedorConTitulo titulo={'Misión'}>
                        <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <span>Somos una organización autónoma de derecho público interno,  representante de los licenciados en turismo de Lima y promovemos el  desarrollo del turismo sostenible generando alianzas estratégicas con  instituciones públicas y privadas para mejorar las capacidades de  nuestros colegiados y contribuir al desarrollo del turismo como  actividad fundamental en el desarrollo de nuestro país.</span>
                        </div>
                    </ContenedorConTitulo>
                    <ContenedorConTitulo titulo={'Consejo Directivo (2024-2025)'}>
                        <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <ul>
                                <li><strong>Decano:</strong> Lic. Tmo. Jhonatan Castillo Haro</li>
                                <li><strong>Vice-Decana:</strong> Lic. Tmo. Dora Camino Loli</li>
                                <li><strong>Secretaria:</strong> Lic. Tmo. Aurora Alegre Muñoz</li>
                                <li><strong>Directora de Economía:</strong> Lic. Tmo. Laura Rodríguez Mendez</li>
                                <li><strong>Director de Asistencia Social:</strong> Lic. Tmo. Clodoaldo Figueroa Blas</li>
                                <li><strong>Director de Prensa y Relaciones Públicas:</strong> Lic. Tmo. Edgar Milla Echevarría</li>
                                <li><strong>Directora de Ciencia y Cultura:</strong> Lic. Tmo. Yessenia Camones Trejo</li>
                                <li><strong>Primer Vocal:</strong> Lic. Tmo. César García Rosales</li>
                                <li><strong>Segundo Vocal:</strong> Lic. Tmo. Susan Gómez Tamara</li>
                            </ul>
                        </div>
                    </ContenedorConTitulo>
                    <div className={`${combinedStyles.contenedorLicenciados} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        {licenciados.map((data, index) =>(
                            <FotoLicenciado
                                key={index}
                                imagen={data.imagen}
                                nombre={data.nombre}
                                cargo={data.cargo}
                                mostrarBoton={data.mostrarBoton}
                            ></FotoLicenciado>
                        ))}
                    </div>
                </FondoPaginas>
                <Footer></Footer>
            </div>
        </>
    )

}

export default PaginaNosotros;



