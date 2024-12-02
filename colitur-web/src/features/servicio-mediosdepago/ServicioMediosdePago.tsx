import styles from './ServicioMediosdePago.module.css';
import { BarraNavegacion, Footer, FondoPaginas, ContenedorConTitulo } from '../../components';
import imagen from '../../assets/MediosPago.png';

const ServicioMediosdePago = () => {
    return (
        <div className={styles.container}>
            <BarraNavegacion />
            <FondoPaginas>
                <ContenedorConTitulo titulo="Medios de Pago">
                    <p className={styles.description}>
                        El Colegio de Licenciados en Turismo de Ancash pone todas las facilidades a los Agremiados para que puedan pagar sus cuotas ordinarias.
                    </p>
                    <div className={styles.fotoMediosPago}>
                        <img 
                            src={imagen} 
                            alt="Imagen ilustrativa de medios de pago disponibles" 
                        />
                        <p className={styles.note}>*Comisión de acuerdo a la propia Entidad Bancaria</p>
                    </div>
                </ContenedorConTitulo>
            </FondoPaginas>
            <Footer />
        </div>
    );
};

export default ServicioMediosdePago;
