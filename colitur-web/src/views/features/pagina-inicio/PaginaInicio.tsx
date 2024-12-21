import { BarraNavegacion, Footer, TituloLogoColitur, FondoPaginas, ContenedorConTitulo, CuadroServicio, CuadroNoticia } from "../../components";
import styles from "../pagina-inicio/PaginaInicio.module.css";
import consultarHabilitados from "../../assets/Consultar_Habilitados.svg";
import eventosAcademicos from "../../assets/Eventos_Academicos.svg";
import realizarConvenios from "../../assets/Realizar_Convenios.svg";
import bibliotecaVirtual from "../../assets/Biblioteca_Virtual.svg";
import pagoVirtual from "../../assets/Pago_Virtual.svg";
import noticia1 from "../../assets/Noticia_1.svg";
import noticia2 from "../../assets/Noticia_2.svg";
import noticia3 from "../../assets/Noticia_3.svg";
import convenio1 from "../../assets/Sernanp.svg";
import convenio2 from "../../assets/PromPeru.svg";
import convenio3 from "../../assets/MinPeru.svg";
import convenio4 from "../../assets/Dicetur.svg";
import fondo from "../../assets/Inicio.svg";

const datos =
    [
        {
            imagen: consultarHabilitados,
            titulo: "Consultar Habilitados",
            descripcion: "En este apartado es posible buscar a los licenciados habilitados actualmente en el colegio",
            // añadir ruta
            ruta: "./ServicioHabilitados"
        },
        {
            imagen: eventosAcademicos,
            titulo: "Eventos Académicos",
            descripcion: "Informate aquí sobre los eventos académicos organizados por COLITUR",
            // añadir ruta
            ruta: "/ServicioEventos"
        },
        {
            imagen: realizarConvenios,
            titulo: "Realizar Convenios",
            descripcion: "Si tu negocio o la entidad de la que formas parte está interesada en realizar un convenio, entérate de los requisitos aquí.",
            // añadir ruta
            ruta: "/ServicioConvenios"
        },
        {
            imagen: bibliotecaVirtual,
            titulo: "Biblioteca Virtual",
            descripcion: "Accede a nuestra nueva biblioteca virtual.",
            // añadir ruta
            ruta: "/ServicioBiblioteca"
        },
        {
            imagen: pagoVirtual,
            titulo: "Medios de Pago",
            descripcion: "Revisa que métodos de pago son válidos en COLITUR.",
            // añadir ruta
            ruta: "/ServicioMediosdePago"
        }
    ];

const datosNoticias =
    [
        {
            imagen: noticia1,
            fecha: "16 Sep.",
            alternativo: "Tips para realizar investigaciones bibliométricas en turismo"
        },
        {
            imagen: noticia2,
            fecha: "26 Oct.",
            alternativo: "Ceremonia de Colegiatura 2024-II"
        },
        {
            imagen: noticia3,
            fecha: "29 Ago.",
            alternativo: "Pronunciamiento de la Junta de Decanos de los Colegios"
        }
    ]

const convenios =
    [
        {
            imagen: convenio1,
            altConvenio: "SENARP Perú - Ministerio del Ambiente"
        },
        {
            imagen: convenio2,
            altConvenio: "Logo Prom Perú"
        },
        {
            imagen: convenio3,
            altConvenio: "Ministerio de Comercio Exterior y Turismo"
        },
        {
            imagen: convenio4,
            altConvenio: "Dirección Regional de Comercio Exterior y Turismo de Ancash"
        }
    ]

interface Props {
    imagen: string
    altConvenio: string
}

function ImagenConvenio({ imagen, altConvenio }: Props) {
    return (
        <img src={imagen} alt={altConvenio}></img>
    )
}
// Son 54px de espacio horizontal entre cosa y cosa

function PaginaInicio() {
    return (
        <>
            
            <div className={styles.content} >
                <BarraNavegacion></BarraNavegacion>
                <TituloLogoColitur titulo="Creado por Ley N° 24915 y actualizado por Ley N° 31172" imagen={fondo}></TituloLogoColitur>
                <FondoPaginas>
                    <ContenedorConTitulo titulo="Servicios" >
                        <div className={styles.contenedorServicios}>
                            {datos.map((data, index) => (
                                <CuadroServicio
                                    key={index}
                                    imagen={data.imagen}
                                    titulo={data.titulo}
                                    descripcion={data.descripcion}
                                    ruta={data.ruta}
                                ></CuadroServicio>
                            ))}
                        </div>
                    </ContenedorConTitulo>
                    <ContenedorConTitulo titulo="Últimas Noticias">
                        <div className={styles.contenedorNoticias}>
                            {datosNoticias.map((data, index) => (
                                <CuadroNoticia
                                    key={index}
                                    imagen={data.imagen}
                                    fecha={data.fecha}
                                    textoAlt={data.alternativo}
                                ></CuadroNoticia>
                            ))}
                        </div>
                    </ContenedorConTitulo>

                    <ContenedorConTitulo titulo="Convenios">
                        <div className={styles.contenedorConvenios}>
                            {convenios.map((data, index) => (
                                <ImagenConvenio
                                    key={index}
                                    imagen={data.imagen}
                                    altConvenio={data.altConvenio}
                                ></ImagenConvenio>
                            ))}
                        </div>

                    </ContenedorConTitulo>
                </FondoPaginas>
                <Footer></Footer>
            </div>
        </>
    )
}

export default PaginaInicio;