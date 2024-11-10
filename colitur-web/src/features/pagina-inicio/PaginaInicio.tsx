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

const datos=
[
    {
        imagen : consultarHabilitados,
        titulo : "Consultar Habilitados",
        descripcion : "Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
    },
    {
        imagen : eventosAcademicos,
        titulo : "Eventos Académicos",
        descripcion : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        imagen : realizarConvenios,
        titulo : "Realizar Convenios",
        descripcion : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        imagen : bibliotecaVirtual,
        titulo : "Biblioteca Virtual",
        descripcion : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        imagen : pagoVirtual,
        titulo : "Medios de Pago",
        descripcion : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
];

const datosNoticias=
[
    {
        imagen: noticia1,
        fecha: "16 Sep."
    },
    {
        imagen: noticia2,
        fecha: "26 Oct."
    },
    {
        imagen: noticia3,
        fecha: "29 Ago."
    }
]

const convenios=
[
    {
        imagen: convenio1
    },
    {
        imagen: convenio2
    },
    {
        imagen: convenio3
    },
    {
        imagen: convenio4
    }
]

interface Props
{
    imagen: string
}

function ImagenConvenio({imagen}: Props)
{
    return(
        <img src={imagen}></img>
    )
}
// Son 54px de espacio horizontal entre cosa y cosa

function PaginaInicio()
{
    
    return(
        <>
            <div className={styles.content}>
                <BarraNavegacion></BarraNavegacion>
                <TituloLogoColitur titulo="Creado por Ley N° 24915 y actualizado por Ley N° 31172"></TituloLogoColitur>
                <FondoPaginas>
                    <ContenedorConTitulo titulo="Servicios">
                        <div className={styles.contenedorServicios}>
                            {datos.map((data, index) => (
                                    <CuadroServicio
                                    key={index}
                                    imagen = {data.imagen}
                                    titulo = {data.titulo}
                                    descripcion = {data.descripcion}
                                    ></CuadroServicio>
                            ))}
                        </div>
                    </ContenedorConTitulo>
                    <ContenedorConTitulo titulo="Últimas Noticias">
                        <div className={styles.contenedorNoticias}>
                            {datosNoticias.map((data, index) => (
                                    <CuadroNoticia
                                    key={index}
                                    imagen = {data.imagen}
                                    fecha = {data.fecha}
                                    ></CuadroNoticia>
                            ))}
                        </div>
                    </ContenedorConTitulo>

                    <ContenedorConTitulo titulo="Convenios">
                        <div className={styles.contenedorConvenios}>
                            {convenios.map((data, index) => (
                                        <ImagenConvenio
                                        key={index}
                                        imagen = {data.imagen}
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