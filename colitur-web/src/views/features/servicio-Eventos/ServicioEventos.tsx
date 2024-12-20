import { BarraNavegacion, ContenedorConTitulo, CuadroEventos, FondoPaginas, Footer } from '../../components';
import styles from './ServicioEventos.module.css';
import noticia1 from '../../assets/Noticia_1.svg';
import noticia2 from '../../assets/Noticia_2.svg';
import noticia3 from '../../assets/Noticia_3.svg';

const eventos = 
[
    {
        imagen: noticia1,
        ruta:"/",
        altEvento: "Tips para realizar investigaciones bibliométricas en turismo"
    },

    {
        imagen: noticia2,
        ruta:"/",
        altEvento: "Ceremonia de Colegiatura 2024-II"
    },

    {
        imagen: noticia3,
        ruta:"/",
        altEvento: "Pronunciamiento de la Junta de Decanos de los Colegios"
    },
]

function ServicioEventos () {
    return (
        <section className={styles.content}>
            <BarraNavegacion></BarraNavegacion>
            <FondoPaginas>
                <ContenedorConTitulo titulo='Eventos Académicos'>
                    <div className={styles.contendorEventos}>
                        {eventos.map((data, index) => 
                            <CuadroEventos
                                key={index}
                                imagen={data.imagen}
                                ruta={data.ruta}
                                altEvento={data.altEvento}
                            ></CuadroEventos>
                        )}
                    </div>
                </ContenedorConTitulo>
            </FondoPaginas>
            <Footer></Footer>
        </section>
    )
}

export default ServicioEventos;