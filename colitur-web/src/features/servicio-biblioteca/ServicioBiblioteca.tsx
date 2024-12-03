import { BarraNavegacion, BotonEstandar, ContenedorConTitulo, CuadroLibros, FondoPaginas, Footer, InputTexto } from '../../components';
import styles from './ServicioBiblioteca.module.css';
import libro1 from '../../assets/libro1.png';
import darkStyles from '../servicio-biblioteca/ServicioBibliotecaDark.module.css';
import { useTheme } from '../../context/ThemeContext';

const libros = 
[
    {
        titulo: 'Politica económica del turismo',
        autor: 'Juan Ignacio Pulido Fernández',
        imagen: libro1,
        ruta: '/'
    }, 

    {
        titulo: 'Turismo Alternativo',
        autor: 'Franciso Manuel Zamorano Casal',
        imagen: libro1,
        ruta: '/'
    }, 

    {
        titulo: 'Sistemas informáticos aplicados al turismo',
        autor: 'Antonio Guevara Plaza',
        imagen: libro1,
        ruta: '/'
    }, 

    {
        titulo: 'Introdución a la Hisitoria Del Turismo',
        autor: ' Carolina Rodríguez López',
        imagen: libro1,
        ruta: '/'
    }, 

    {
        titulo: 'Psicosociología Del Turismo',
        autor: 'Jordi Montaner Montejano',
        imagen: libro1,
        ruta: '/'
    }, 

    {
        titulo: 'Ciudad educadora y turismo responsable',
        autor: 'Francisco Mochón',
        imagen: libro1,
        ruta: '/'
    }
]

function ServicioBiblioteca(){
    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <section className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <BarraNavegacion></BarraNavegacion>
            <FondoPaginas>
                <ContenedorConTitulo titulo='Biblioteca Virtual Colitur Ancash'>
                    <div className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        <p>Continuando con el proceso de actualización y modernización de nuestro Colegio Profesional, presentamos a todos los agremiados las versiones digitales de las Revistas Júridica del Colegio de Licenciados en Turismo de Ancash.</p>
                        <div className={`${combinedStyles.buscador} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <p>Buscar: </p>
                            <div className={`${combinedStyles.label} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                                <InputTexto
                                    placeHolder='Nombre de Libro o Autor'
                                    tipo='text'
                                    nombre='username'
                                    autoCompletado='off'
                                ></InputTexto>
                            </div>
                        </div>
                        <div className={`${combinedStyles.contenedorBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <BotonEstandar titulo='Buscar' estiloBoton={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`} estiloTexto={`${combinedStyles.txtBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}></BotonEstandar>
                        </div> 
                        <div className={`${combinedStyles.contenedorLibro} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            {libros.map((data, index) => (
                                <CuadroLibros
                                    key={index}
                                    titulo={data.titulo}
                                    autor={data.autor}
                                    imagen={data.imagen}
                                    ruta={data.ruta}
                                ></CuadroLibros>
                            ))}
                        </div>
                        <div className={`${combinedStyles.contenedorBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <BotonEstandar titulo='Ver Más' estiloBoton={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`} estiloTexto={`${combinedStyles.txtBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}></BotonEstandar>
                        </div> 
                    </div>
                </ContenedorConTitulo>
            </FondoPaginas>
            <Footer></Footer>
        </section>
    )
}

export default ServicioBiblioteca;