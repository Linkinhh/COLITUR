import { BarraNavegacion, BotonEstandar, ContenedorConTitulo, FondoPaginas, FotoLicenciado, InputTexto, TituloLogoColitur } from '../../components';
import styles from './ServicioHabilitados.module.css';
import imagenPortada from '../../assets/ConsultarHabilitado.jpg';
import fotoColegiado from '../../assets/datos_personales_administrador.jpg';

const licenciados = 
[
    {
        imagen: fotoColegiado,
        nombre: 'APELLIDOS Y NOMBRES',
        numero: 'Numero de Colegiatura',
        estado: 'Habilitado/Inhabilitado',
        mostrarBoton: true,
    },

    {
        imagen: fotoColegiado,
        nombre: 'APELLIDOS Y NOMBRES',
        numero: 'Numero de Colegiatura',
        estado: 'Habilitado/Inhabilitado',
        mostrarBoton: true,
    },

    {
        imagen: fotoColegiado,
        nombre: 'APELLIDOS Y NOMBRES',
        numero: 'Numero de Colegiatura',
        estado: 'Habilitado/Inhabilitado',
        mostrarBoton: true,
    },

    {
        imagen: fotoColegiado,
        nombre: 'APELLIDOS Y NOMBRES',
        numero: 'Numero de Colegiatura',
        estado: 'Habilitado/Inhabilitado',
        mostrarBoton: true,
    },

    {
        imagen: fotoColegiado,
        nombre: 'APELLIDOS Y NOMBRES',
        numero: 'Numero de Colegiatura',
        estado: 'Habilitado/Inhabilitado',
        mostrarBoton: true,
    },

    {
        imagen: fotoColegiado,
        nombre: 'APELLIDOS Y NOMBRES',
        numero: 'Numero de Colegiatura',
        estado: 'Habilitado/Inhabilitado',
        mostrarBoton: true,
    },

    {
        imagen: fotoColegiado,
        nombre: 'APELLIDOS Y NOMBRES',
        numero: 'Numero de Colegiatura',
        estado: 'Habilitado/Inhabilitado',
        mostrarBoton: true,
    },

    {
        imagen: fotoColegiado,
        nombre: 'APELLIDOS Y NOMBRES',
        numero: 'Numero de Colegiatura',
        estado: 'Habilitado/Inhabilitado',
        mostrarBoton: true,
    },

    {
        imagen: fotoColegiado,
        nombre: 'APELLIDOS Y NOMBRES',
        numero: 'Numero de Colegiatura',
        estado: 'Habilitado/Inhabilitado',
        mostrarBoton: true,
    },
]


function ServicioHabilitados() {
    return (
        <section className={styles.content}>
            <BarraNavegacion></BarraNavegacion>
            <TituloLogoColitur titulo={'CONSULTAR HABILITACIÓN'} imagen={imagenPortada}></TituloLogoColitur>
            <FondoPaginas>
                <ContenedorConTitulo titulo='Consultar Habilitación'>
                    <div className={styles.buscador}>
                        <p> Ingrese número de colegiatura o DNI </p>
                        <div className={styles.label}>
                            <InputTexto 
                                placeHolder='Número de colegiatura o DNI'
                                tipo='text'
                                nombre='username'
                                autoCompletado='off'
                            ></InputTexto>
                        </div>
                        <BotonEstandar titulo={'Consultar'} estiloBoton={styles.boton} estiloTexto={styles.textoBoton}></BotonEstandar>
                    </div>
                    <div className={styles.contenedorLicenciados}>
                        {licenciados.map((data, index) => (
                            <FotoLicenciado
                                key={index}
                                imagen={data.imagen}
                                nombre={data.nombre}
                                numero={data.numero}
                                estado={data.estado}
                                mostrarBoton={data.mostrarBoton}
                            ></FotoLicenciado>
                        ))}
                    </div>
                    <BotonEstandar titulo='Ver Más' estiloBoton={styles.boton} estiloTexto={styles.textoBoton}></BotonEstandar>
                </ContenedorConTitulo>
            </FondoPaginas>
        </section>
    )
}

export default ServicioHabilitados;