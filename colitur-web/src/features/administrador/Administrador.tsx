import styles from "./Administrador.module.css";
import { BarraLateral, BarraNavegacion, FondoPaginas, Footer, TabWidget, InputTexto, BotonEstandarImagen, BotonEstandar, BotonEstandarAlternativo, Tabla } from "../../components";
//import Tab from "../../components/tab-widget/TabWidget";
import {CircleUser, LockKeyhole, UserPlus, CreditCard, Newspaper, BookText, LogOut, Upload, BookPlus, BookCheck, BookX, Search} from "lucide-react";
import imagen from "../../assets/datos_personales_administrador.jpg";
import imagen2 from "../../assets/subir_publicaciones_administrador.jpg";
import pdf from "../../assets/PDF.png";
import { Link } from "react-router-dom";
interface CampoTextoProps
{
    nombre: string;
    place: string;
    detalle?: string;
    tipo?: "text" | "password"
}

function CampoTexto({nombre, place, detalle, tipo="text"}: CampoTextoProps)
{
    return(
        <div className={styles.contenedorNombreCampo}>
            <span className={styles.nombreCampo}>{nombre}</span>
            <InputTexto placeHolder={place} detalle={detalle} tipo={tipo} mostrarAyuda={true}></InputTexto>
        </div>
    );
}

const formularioDatosPersonales = [
    {
        nombre:"Fecha de Incorporación", 
        place:"dd/mm/yyyy", 
        detalle:"Ingrese la fecha en la que fue expedido su certificado.",
        tipo:"text" 
    },
    {
        nombre:"N° de Colegiado", 
        place:"",
        detalle:"Número de colegiado que fue generado al expedir su certificado.",
        tipo:"text"
    },
    {
        nombre:"N° de DNI",
        place:"Ingrese su N° de DNI",
        detalle:"Número de su Documento de Identificación Nacional.",
        tipo:"text"
    },
    {
        nombre:"Apellido Paterno", 
        place:"Ingrese su apellido paterno", 
        detalle:"Apellido heredado de su padre, registrado en su DNI.",
        tipo:"text"
    },
    {
        nombre:"Apellido Materno", 
        place:"Ingrese su apellido materno", 
        detalle:"Apellido heredado de su madre, registrado en su DNI.",
        tipo:"text"
    },
    {
        nombre:"Nombres",
        place:"Ingrese sus nombres completos",
        detalle:"Rellene este campo con sus nombres completos como está registrado en su DNI.",
        tipo:"text"
    },
    {
        nombre:"Estado de Colegiado", 
        place:"", 
        detalle:"Este es su estado dentro de los registros del colegio. En caso salga 'Habilitado' se entienda que ha pagado su membresía; caso contrario, saldrá 'Deshabilitado'.",
        tipo:"text"
    },
    {
        nombre:"Celular", 
        place:"Ingrese su número celular", 
        detalle:"Ingrese su número de celular. En caso este no sea nacional, añada el prefijo necesario.",
        tipo:"text"
    },
    {
        nombre:"Correo electrónico", 
        place:"Ingrese su correo electrónico", 
        detalle:"Rellene este campo con su correo electrónico personal con el que registró el formulario para solicitar la expedición de su certificado.",
        tipo:"text"
    }
]
function FormularioDatosPersonales ()
{
    return(
        
        <div className={styles.contenedorPrincipalFormulario}>
            <img src={imagen}></img>
            <BotonEstandarImagen nombre="Cargar Imagen" conSombra={false} children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioDatosPersonales.map((data, index)=>(
                    <CampoTexto
                        key={index}
                        nombre={data.nombre}
                        place={data.place}
                        detalle={data.detalle} 
                    ></CampoTexto>
                ))}
            </div>
            <div className={styles.botones}>
                <BotonEstandar titulo="Actualizar"></BotonEstandar>
                <BotonEstandarAlternativo titulo="Cancelar"></BotonEstandarAlternativo>
            </div>
        </div>
    );
}

const formularioRegistrarColegiado = [
    {
        nombre:"Fecha de Incorporación", 
        place:"dd/mm/yyyy", 
        detalle:"Ingrese la fecha en la que fue expedido su certificado.",
        tipo:"text" 
    },
    {
        nombre:"N° de Colegiado", 
        place:"",
        detalle:"Número de colegiado que fue generado al expedir su certificado.",
        tipo:"text"
    },
    {
        nombre:"N° de DNI",
        place:"Ingrese su N° de DNI",
        detalle:"Número de su Documento de Identificación Nacional.",
        tipo:"text"
    },
    {
        nombre:"Apellido Paterno", 
        place:"Ingrese su apellido paterno", 
        detalle:"Apellido heredado de su padre, registrado en su DNI.",
        tipo:"text"
    },
    {
        nombre:"Apellido Materno", 
        place:"Ingrese su apellido materno", 
        detalle:"Apellido heredado de su madre, registrado en su DNI.",
        tipo:"text"
    },
    {
        nombre:"Nombres",
        place:"Ingrese sus nombres completos",
        detalle:"Rellene este campo con sus nombres completos como está registrado en su DNI.",
        tipo:"text"
    },
    {
        nombre:"Estado de Colegiado", 
        place:"", 
        detalle:"Este es su estado dentro de los registros del colegio. En caso salga 'Habilitado' se entienda que ha pagado su membresía; caso contrario, saldrá 'Deshabilitado'.",
        tipo:"text"
    },
    {
        nombre:"Celular", 
        place:"Ingrese su número celular", 
        detalle:"Ingrese su número de celular. En caso este no sea nacional, añada el prefijo necesario.",
        tipo:"text"
    },
    {
        nombre:"Correo electrónico", 
        place:"Ingrese su correo electrónico", 
        detalle:"Rellene este campo con su correo electrónico personal con el que registró el formulario para solicitar la expedición de su certificado.",
        tipo:"text"
    },
    {
        nombre: "Contraseña",
        place: "Debe tener al menos 8 digitos y un número",
        detalle: "La contraseña debe tener al menos 8 caracteres y un número para ser aceptada.",
        tipo: "password"
    },
    {
        nombre: "Confirmar Contraseña",
        place: "Debe tener al menos 8 digitos y un número",
        detalle: "La contraseña que digite aquí debe ser igual a la anterior para que se actualice su información.",
        tipo: "password"
    }

]
function FormularioRegistrarColegiado ()
{
    return(
        
        <div className={styles.contenedorPrincipalFormulario}>
            <img src={imagen}></img>
            <BotonEstandarImagen nombre="Cargar Imagen" conSombra={false} children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioRegistrarColegiado.map((data, index)=>(
                    <CampoTexto
                        key={index}
                        nombre={data.nombre}
                        place={data.place}
                        detalle={data.detalle} 
                    ></CampoTexto>
                ))}
            </div>
            <div className={styles.botones}>
                <BotonEstandar titulo="Registrar"></BotonEstandar>
                <BotonEstandarAlternativo titulo="Cancelar"></BotonEstandarAlternativo>
            </div>
        </div>
    );
}

function FormularioCambiarContraseña()
{
    return(
        
        <div className={styles.contenedorPrincipalFormulario}>
            <div className={styles.contenedorFormulario}>
                <CampoTexto
                nombre="Contraseña Actual"
                place="Debe coincidir con la contraseña que declaró al crear su cuenta"
                tipo="password"></CampoTexto>
                <CampoTexto
                nombre="Nueva Contraseña"
                place="Debe tener al menos 8 digitos con un número"
                tipo="password"></CampoTexto>
                <CampoTexto
                nombre="Reingresar contraseña"
                place="Debe coincidir con la contraseña que acaba de digitar"
                tipo="password"></CampoTexto>
            </div>
            <div className={styles.botones}>
                <BotonEstandar titulo="Actualizar"></BotonEstandar>
                <BotonEstandarAlternativo titulo="Cancelar"></BotonEstandarAlternativo>
            </div>
        </div>

    );
}

const formularioSubirPublicaciones = [
    {
        nombre:"Título de la Publicación", 
        place:"Ingrese un título adecuado para su publicación", 
        detalle:"El título puede tener una longitud máxima de 255 caracteres",
        tipo:"text" 
    },
    {
        nombre:"Número de Publicación", 
        place:"PUB - 35",
        detalle:"Número autogenerado para identificar la publicación.",
        tipo:"text"
    },
    {
        nombre:"Descripción",
        place:"Ingrese una descripción adecuada para su publicación",
        detalle:"La descripción puede tener una longitud mucho más extensa que la del título",
        tipo:"text"
    },
    {
        nombre:"Autor de la Publicación", 
        place:"Ingrese el nombre del autor de la publicación", 
        detalle:"Tiene que digitar nombres completos del autor de la publicación.",
        tipo:"text"
    },
    {
        nombre:"Fecha", 
        place:"dd/mm/yyyy", 
        detalle:"Digite la fecha en que se realizó la publicación.",
        tipo:"text"
    },
    {
        nombre:"Enlace",
        place:"Ingrese un enlace adecuado",
        detalle:"Los enlaces pueden ser para acceder a documentos informativos o invitaciones a eventos online.",
        tipo:"text"
    },
    {
        nombre:"Estado", 
        place:"En progreso", 
        detalle:"Aquí aparecerá el estado de su publicación.",
        tipo:"text"
    }
]

function FormularioSubirPublicaciones ()
{
    return(
        
        <div className={styles.contenedorPrincipalFormulario}>
            <img src={imagen2}></img>
            <BotonEstandarImagen nombre="Cargar Imagen" conSombra={false} children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioSubirPublicaciones.map((data, index)=>(
                    <CampoTexto
                        key={index}
                        nombre={data.nombre}
                        place={data.place}
                        detalle={data.detalle} 
                    ></CampoTexto>
                ))}
            </div>
            <div className={styles.botones}>
                <BotonEstandar titulo="Publicar"></BotonEstandar>
                <BotonEstandarAlternativo titulo="Cancelar"></BotonEstandarAlternativo>
            </div>
        </div>
    );
}

const formularioRegistrarLibro = [
    {
        nombre:"I.S.B.N", 
        place:"XXX-XX-XXX-XXXX-X", 
        detalle:"Ingrese el I.S.B.N del libro. Dicho número se encuentra en las primeras páginas de la mayoría de libros.",
        tipo:"text" 
    },
    {
        nombre:"Título del Libro", 
        place:"Ingrese el título del libro",
        detalle:"El título del libro como máximo puede tener 255 caracteres",
        tipo:"text"
    },
    {
        nombre:"Descripción",
        place:"Ingrese una descripción adecuada para su publicación",
        detalle:"La descripción puede tener una longitud mucho más extensa que la del título",
        tipo:"text"
    },
    {
        nombre:"Autor(es)", 
        place:"Autor 1, Autor 2, ...", 
        detalle:"En este campo tiene que ingresar los nombres completos de los autores separados por comas, por ejemplo: César Vallejo, Ciro Alegría.",
        tipo:"text"
    },
    {
        nombre:"Fecha Publicación", 
        place:"dd/mm/yyyy", 
        detalle:"Digite la fecha en que el libro fue publicado.",
        tipo:"text"
    },
    {
        nombre: "Descripción",
        place: "Ingrese una descripción adecuada para el libro",
        detalle: "La descripción del libro tiene que ser adecuada y representativa."
    },
    {
        nombre:"Número de Edición",
        place:"Ingrese el número de edición",
        detalle:"En este campo tan solo ingrese un número.",
        tipo:"text"
    },
    {
        nombre: "Número de Páginas",
        place: "Ingrese el número de páginas del libro",
        detalle: "En este campo tan solo ingrese un número."
    },
    {
        nombre:"Enlace del Libro", 
        place:"Ingrese el enlace para acceder al libro", 
        detalle:"En el campo debe ir un enlace válido por el cual se pueda acceder a la versión virtual del libro o a una tienda virtual donde se pueda adquirir este",
        tipo:"text"
    },
    {
        nombre:"Editorial", 
        place:"Nombre de la editorial", 
        detalle:"Se puede encontrar esta información en las primeras paǵinas del libro",
        tipo:"text"
    }
]

function FormularioRegistrarLibro()
{
    return(
        
        <div className={styles.contenedorPrincipalFormulario}>
            <img src={pdf}></img>
            <BotonEstandarImagen nombre="Cargar PDF" conSombra={false} children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioRegistrarLibro.map((data, index)=>(
                    <CampoTexto
                        key={index}
                        nombre={data.nombre}
                        place={data.place}
                        detalle={data.detalle} 
                    ></CampoTexto>
                ))}
            </div>
            <div className={styles.botones}>
                <BotonEstandar titulo="Registrar"></BotonEstandar>
                <BotonEstandarAlternativo titulo="Cancelar"></BotonEstandarAlternativo>
            </div>
        </div>
    );
}

const formularioActualizarLibro = [
    {
        nombre:"I.S.B.N", 
        place:"XXX-XX-XXX-XXXX-X", 
        detalle:"Ingrese el I.S.B.N del libro. Dicho número se encuentra en las primeras páginas de la mayoría de libros.",
        tipo:"text" 
    },
    {
        nombre:"Título del Libro", 
        place:"Ingrese el título del libro",
        detalle:"El título del libro como máximo puede tener 255 caracteres",
        tipo:"text"
    },
    {
        nombre:"Descripción",
        place:"Ingrese una descripción adecuada para su publicación",
        detalle:"La descripción puede tener una longitud mucho más extensa que la del título",
        tipo:"text"
    },
    {
        nombre:"Autor(es)", 
        place:"Autor 1, Autor 2, ...", 
        detalle:"En este campo tiene que ingresar los nombres completos de los autores separados por comas, por ejemplo: César Vallejo, Ciro Alegría.",
        tipo:"text"
    },
    {
        nombre:"Fecha Publicación", 
        place:"dd/mm/yyyy", 
        detalle:"Digite la fecha en que el libro fue publicado.",
        tipo:"text"
    },
    {
        nombre: "Descripción",
        place: "Ingrese una descripción adecuada para el libro",
        detalle: "La descripción del libro tiene que ser adecuada y representativa."
    },
    {
        nombre:"Número de Edición",
        place:"Ingrese el número de edición",
        detalle:"En este campo tan solo ingrese un número.",
        tipo:"text"
    },
    {
        nombre: "Número de Páginas",
        place: "Ingrese el número de páginas del libro",
        detalle: "En este campo tan solo ingrese un número."
    },
    {
        nombre:"Enlace del Libro", 
        place:"Ingrese el enlace para acceder al libro", 
        detalle:"En el campo debe ir un enlace válido por el cual se pueda acceder a la versión virtual del libro o a una tienda virtual donde se pueda adquirir este",
        tipo:"text"
    },
    {
        nombre:"Editorial", 
        place:"Nombre de la editorial", 
        detalle:"Se puede encontrar esta información en las primeras paǵinas del libro",
        tipo:"text"
    }
]

function FormularioActualizarLibro()
{
    return(
        <div className={styles.contenedorPrincipalFormulario}>
            <div className={styles.contenedorBuscarLibro}>
                <span className={styles.nombreCampo}>Buscar Libro: </span>
                <InputTexto
                placeHolder="Buscar libro"
                ></InputTexto>
                <Search cursor={"pointer"} size={40}/>
            </div>
            <img src={pdf}></img>
            <BotonEstandarImagen nombre="Cargar PDF" conSombra={false} children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioActualizarLibro.map((data, index)=>(
                    <CampoTexto
                        key={index}
                        nombre={data.nombre}
                        place={data.place}
                        detalle={data.detalle} 
                    ></CampoTexto>
                ))}
            </div>
            <div className={styles.botones}>
                <BotonEstandar titulo="Actualizar"></BotonEstandar>
                <BotonEstandarAlternativo titulo="Cancelar"></BotonEstandarAlternativo>
            </div>
        </div>
    );
}

function FormularioEliminarLibro()
{
    return(
        <div className={styles.contenedorPrincipalFormulario}>
            <div className={styles.contenedorBuscarLibro}>
                <span className={styles.nombreCampo}>Buscar Libro: </span>
                <InputTexto
                placeHolder="Buscar libro"
                ></InputTexto>
                <Search cursor={"pointer"} size={40}/>
            </div>
            <img src={imagen2}></img>
            <div className={styles.contenedorFormulario}>
                {formularioActualizarLibro.map((data, index)=>(
                    <CampoTexto
                        key={index}
                        nombre={data.nombre}
                        place={data.place}
                        detalle={data.detalle} 
                    ></CampoTexto>
                ))}
            </div>
            <div className={styles.botones}>
                <BotonEstandar titulo="Eliminar"></BotonEstandar>
                <BotonEstandarAlternativo titulo="Cancelar"></BotonEstandarAlternativo>
            </div>
        </div>
    );
}

function CerrarSesion()
{
    return(
        <div className={styles.cerrarSesion}>
            <span className={styles.pregunta}>¿Estás seguro que deseas cerrar sesión?</span>
            <div className={styles.botones}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <BotonEstandar titulo="Cerrar Sesión"></BotonEstandar>
                </Link>
            </div>
        </div>
    );
}

const tabsDatosPersonales = [
    { id: '1', icono: <CircleUser />, titulo: 'Datos Personales', contenido:  <FormularioDatosPersonales />},
    { id: '2', icono: <LockKeyhole />, titulo: 'Cambiar Contraseña', contenido: <FormularioCambiarContraseña /> },
];

const tabsGerenciarBiblioteca = [
    {id: '1', icono: <BookPlus />, titulo: 'Registrar Libro', contenido: <FormularioRegistrarLibro/>},
    {id: '2', icono: <BookCheck />, titulo: 'Actualizar Libro', contenido: <FormularioActualizarLibro/>},
    {id: '3', icono: <BookX />, titulo: 'Eliminar Libro', contenido: <FormularioEliminarLibro/>},
];

const opciones = [
    { id: '1', icono: <CircleUser />, titulo: 'Datos Personales', tituloSeccion: 'Ficha de Datos Personales', children: <TabWidget tabs={tabsDatosPersonales} isVisible = {true}></TabWidget>},
    { id: '2', icono: <UserPlus />, titulo: 'Registrar Colegiado', tituloSeccion: 'Registrar Nuevo Colegiado', children: <FormularioRegistrarColegiado/>},
    { id: '3', icono: <CreditCard />, titulo: 'Validación de Pagos', tituloSeccion: 'Pagos Pendientes de Validacion',children: <Tabla></Tabla>},
    { id: '4', icono: <Newspaper />, titulo: 'Subir Publicaciones', tituloSeccion: 'Subir Publicaciones', children: <FormularioSubirPublicaciones />},
    { id: '5', icono: <BookText />, titulo: 'Gerenciar Biblioteca', tituloSeccion: 'Gerenciamiento de Biblioteca Virtual', children: <TabWidget tabs={tabsGerenciarBiblioteca} isVisible = {true}></TabWidget>},
    { id: '6', icono: <LogOut />, titulo: 'Cerrar Sesión', tituloSeccion: 'Cerrar Sesión', children: <CerrarSesion/>}
]

function Administrador()
{
    return(
        <>
            <div className={styles.content}>
                <BarraNavegacion></BarraNavegacion>
                <FondoPaginas>
                    <BarraLateral opciones={opciones}></BarraLateral>
                </FondoPaginas>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Administrador;