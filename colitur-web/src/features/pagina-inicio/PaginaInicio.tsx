import { BarraNavegacion, Footer, TituloLogoColitur, FondoPaginas, ContenedorConTitulo, CuadroServicio } from "../../components";
import styles from "../pagina-inicio/PaginaInicio.module.css";
import consultarHabilitados from "../../assets/Consultar_Habilitados.svg";
import eventosAcademicos from "../../assets/Eventos_Academicos.svg";
import realizarConvenios from "../../assets/Realizar_Convenios.svg";
import bibliotecaVirtual from "../../assets/Biblioteca_Virtual.svg";
import pagoVirtual from "../../assets/Pago_Virtual.svg";

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

                    </ContenedorConTitulo>

                    <ContenedorConTitulo titulo="Convenios">

                    </ContenedorConTitulo>
                </FondoPaginas>
                <Footer></Footer>
            </div>
        </>
    )
}

export default PaginaInicio;