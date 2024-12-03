import { BarraNavegacion, BotonEstandar, ContenedorConTitulo, CuadroLibros, FondoPaginas, Footer, InputTexto } from '../../components';
import styles from './ServicioBiblioteca.module.css';
import libro1 from '../../assets/libro1.png';


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
    return(
        <section className={styles.content}>
            <BarraNavegacion></BarraNavegacion>
            <FondoPaginas>
                <ContenedorConTitulo titulo='Biblioteca Virtual Colitur Ancash'>
                    <div className={styles.contenedor}>
                        <p>Continuando con el proceso de actualización y modernización de nuestro Colegio Profesional, presentamos a todos los agremiados las versiones digitales de las Revistas Júridica del Colegio de Licenciados en Turismo de Ancash.</p>
                        <div className={styles.buscador}>
                            <p>Buscar: </p>
                            <div className={styles.label}>
                                <InputTexto
                                    placeHolder='Nombre de Libro o Autor'
                                    tipo='text'
                                    nombre='username'
                                    autoCompletado='off'
                                ></InputTexto>
                            </div>
                        </div>
                        <div className={styles.contenedorBoton}>
                            <BotonEstandar titulo='Buscar' estiloBoton={styles.boton} estiloTexto={styles.txtBoton}></BotonEstandar>
                        </div> 
                        <div className={styles.contenedorLibro}>
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
                        <div className={styles.contenedorBoton}>
                            <BotonEstandar titulo='Ver Más' estiloBoton={styles.boton} estiloTexto={styles.txtBoton}></BotonEstandar>
                        </div> 
                    </div>
                </ContenedorConTitulo>
            </FondoPaginas>
            <Footer></Footer>
        </section>
    )
}

export default ServicioBiblioteca;