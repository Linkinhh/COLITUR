import styles from './ServicioMediosdePago.module.css';
import { BarraNavegacion, Footer, FondoPaginas, ContenedorConTitulo } from '../../components';
import imagen from '../../assets/MediosPago.png';
import imagenDark from '../../assets/MediosPagoDark.png';
import darkStyles from './ServicioMediosdePagoDark.module.css';
import { useTheme } from '../../context/ThemeContext';

const ServicioMediosdePago = () => {

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <div className={`${combinedStyles.container} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <BarraNavegacion />
            <FondoPaginas>
                <ContenedorConTitulo titulo="Medios de Pago">
                    <p className={`${combinedStyles.description} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        El Colegio de Licenciados en Turismo de Ancash pone todas las facilidades a los Agremiados para que puedan pagar sus cuotas ordinarias.
                    </p>
                    <div className={`${combinedStyles.fotoMediosPago} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        <img 
                            src={isDarkMode ? imagenDark : imagen} 
                            alt="Imagen ilustrativa de medios de pago disponibles" 
                        />
                        <p className={`${combinedStyles.note} ${isDarkMode ? combinedStyles.darkMode : ''}`}>*Comisión de acuerdo a la propia Entidad Bancaria</p>
                    </div>
                </ContenedorConTitulo>
            </FondoPaginas>
            <Footer />
        </div>
    );
};

export default ServicioMediosdePago;
