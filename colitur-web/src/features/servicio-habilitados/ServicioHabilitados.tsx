import { BarraNavegacion, BotonEstandar, ContenedorConTitulo, FondoPaginas, FotoLicenciado, InputTexto, OpcioneesServicios, TituloLogoColitur } from '../../components';
import styles from './ServicioHabilitados.module.css';
import imagenPortada from '../../assets/ConsultarHabilitado.jpg';
import fotoColegiado from '../../assets/datos_personales_administrador.png';
import darkStyles from '../servicio-habilitados/ServicioHabilitadosDark.module.css';
import { useTheme } from '../../context/ThemeContext';

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
    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <section className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <BarraNavegacion></BarraNavegacion>
            <TituloLogoColitur titulo={'CONSULTAR HABILITACIÓN'} imagen={imagenPortada}></TituloLogoColitur>
            <FondoPaginas>
                <ContenedorConTitulo titulo='Consultar Habilitación'>
                    <div className={`${combinedStyles.buscador} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        <p> Ingrese número de colegiatura o DNI </p>
                        <div className={`${combinedStyles.label} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                            <InputTexto 
                                placeHolder='Número de colegiatura o DNI'
                                tipo='text'
                                nombre='username'
                                autoCompletado='off'
                            ></InputTexto>
                        </div>
                        <BotonEstandar titulo={'Consultar'} estiloBoton={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`} estiloTexto={`${combinedStyles.textoBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}></BotonEstandar>
                    </div>
                    <div className={`${combinedStyles.contenedorLicenciados} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
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
                    <BotonEstandar titulo='Ver Más' estiloBoton={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`} estiloTexto={`${combinedStyles.textoBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}></BotonEstandar>
                </ContenedorConTitulo>                
            </FondoPaginas>
        </section>
    )
}

export default ServicioHabilitados;