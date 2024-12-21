import { useState, useEffect } from 'react';
import { BarraNavegacion, BotonEstandar, ContenedorConTitulo, FondoPaginas, FotoLicenciado, InputTexto, TituloLogoColitur } from '../../components';
import styles from './ServicioHabilitados.module.css';
import imagenPortada from '../../assets/ConsultarHabilitado.jpg';
import fotoColegiado from '../../assets/datos_personales_administrador.png';
import darkStyles from '../servicio-habilitados/ServicioHabilitadosDark.module.css';
import { useTheme } from '../../context/ThemeContext';
// tipo para licenciados
interface Licenciado {
    imagen?: string;
    nombre: string;
    numero: string;
    estado: string;
    mostrarBoton?: boolean;
}


function ServicioHabilitados() {
    const { isDarkMode } = useTheme();
    const combinedStyles = isDarkMode
        ? { ...styles, ...darkStyles }
        : styles;

    const [licenciados, setLicenciados] = useState<Licenciado[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [buscar, setBuscar] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('http://127.0.0.1:5000/get_habilitados'); // Reemplaza con la URL de tu API
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setLicenciados(data);
            } catch (err) {
                setError(err);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente



    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        const handleSearch = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://127.0.0.1:5000/buscar_habilitados?search=${searchTerm}`); // Ajusta la URL según tu API
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setLicenciados(data);
            } catch (err) {
                setError(err);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        }
        handleSearch();
        setBuscar(false);
    }, [searchTerm, buscar]);


    return (
        <section className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <BarraNavegacion />
            <TituloLogoColitur titulo={'CONSULTAR HABILITACIÓN'} imagen={imagenPortada} />
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
                                // value={searchTerm}
                                onChange={handleInputChange}
                            />
                        </div>
                        <BotonEstandar
                            titulo={'Consultar'}
                            estiloBoton={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                            estiloTexto={`${combinedStyles.textoBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}
                            onClick={()=>setBuscar(true)} // Llama a la función de búsqueda
                        />
                    </div>
                    <div className={`${combinedStyles.contenedorLicenciados} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        {licenciados.map((data, index) => (
                            <FotoLicenciado
                                key={index}
                                imagen={data.imagen || fotoColegiado} // Usa una imagen por defecto si no hay en los datos
                                nombre={data.nombre}
                                numero={data.numero}
                                estado={data.estado}
                                mostrarBoton={data.mostrarBoton || true}
                            />
                        ))}
                    </div>
                    <BotonEstandar titulo='Ver Más' estiloBoton={`${combinedStyles.boton} ${isDarkMode ? combinedStyles.darkMode : ''}`} estiloTexto={`${combinedStyles.textoBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`} />
                </ContenedorConTitulo>
            </FondoPaginas>
        </section>
    );
}

export default ServicioHabilitados;