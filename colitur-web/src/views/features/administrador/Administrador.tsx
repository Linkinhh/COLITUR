import styles from "./Administrador.module.css";
import { BarraLateral, BarraNavegacion, FondoPaginas, Footer, TabWidget, InputTexto, BotonEstandarImagen, BotonEstandar, BotonEstandarAlternativo, Tabla } from "../../components";
//import Tab from "../../components/tab-widget/TabWidget";
import { CircleUser, LockKeyhole, UserPlus, CreditCard, Newspaper, BookText, LogOut, Upload, BookPlus, BookCheck, BookX, Search, BookImage } from "lucide-react";
import imagen from "../../assets/datos_personales_administrador.png";
import pdf from "../../assets/PDF.png";
import { Link } from "react-router-dom";
import darkStyles from './AdministradorDark.module.css';
import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../../models/Licenciado";

interface CampoTextoProps {
    nombre: string;
    place: string;
    detalle?: string;
    tipo?: "text" | "password";
    valor?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

function CampoTexto({ nombre, place, detalle, tipo = "text", valor, onChange, disabled = false }: CampoTextoProps) {

    const { isDarkMode } = useTheme();
    const combinedStyles = isDarkMode
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <div className={styles.contenedorNombreCampo}>
            <span className={`${combinedStyles.nombreCampo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{nombre}</span>
            <InputTexto placeHolder={place} detalle={detalle} tipo={tipo} mostrarAyuda={true} value={valor} onChange={onChange} disabled={disabled}></InputTexto>
        </div>
    );
}

const formularioDatosPersonales = [
    {
        nombre: "Fecha de Incorporación",
        place: "dd/mm/yyyy",
        detalle: "Ingrese la fecha en la que fue expedido su certificado.",
        tipo: "text",
        fieldName: "fechaIncorporacion"  // Añadido
    },
    {
        nombre: "N° de Colegiado",
        place: "",
        detalle: "Número de colegiado que fue generado al expedir su certificado.",
        tipo: "text",
        fieldName: "numeroColegiado"  // Añadido
    },
    {
        nombre: "N° de DNI",
        place: "Ingrese su N° de DNI",
        detalle: "Número de su Documento de Identificación Nacional.",
        tipo: "text",
        fieldName: "dni"  // Añadido
    },
    {
        nombre: "Apellido Paterno",
        place: "Ingrese su apellido paterno",
        detalle: "Apellido heredado de su padre, registrado en su DNI.",
        tipo: "text",
        fieldName: "apellidoPaterno"  // Añadido
    },
    {
        nombre: "Apellido Materno",
        place: "Ingrese su apellido materno",
        detalle: "Apellido heredado de su madre, registrado en su DNI.",
        tipo: "text",
        fieldName: "apellidoMaterno"  // Añadido
    },
    {
        nombre: "Nombres",
        place: "Ingrese sus nombres completos",
        detalle: "Rellene este campo con sus nombres completos como está registrado en su DNI.",
        tipo: "text",
        fieldName: "nombres"  // Añadido
    },
    {
        nombre: "Estado de Colegiado",
        place: "",
        detalle: "Este es su estado dentro de los registros del colegio. En caso salga 'Habilitado' se entienda que ha pagado su membresía; caso contrario, saldrá 'Deshabilitado'.",
        tipo: "text",
        fieldName: "estadoColegiado"  // Añadido
    },
    {
        nombre: "Celular",
        place: "Ingrese su número celular",
        detalle: "Ingrese su número de celular. En caso este no sea nacional, añada el prefijo necesario.",
        tipo: "text",
        fieldName: "celular"  // Añadido
    },
    {
        nombre: "Correo electrónico",
        place: "Ingrese su correo electrónico",
        detalle: "Rellene este campo con su correo electrónico personal con el que registró el formulario para solicitar la expedición de su certificado.",
        tipo: "text",
        fieldName: "email"  // Añadido
    }
];


function FormularioDatosPersonales() {
    const [userData, setUserData] = useState<UserData>({
        fechaIncorporacion: '',
        numeroColegiado: '',
        dni: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        nombres: '',
        estadoColegiado: '',
        celular: '',
        email: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [cancelUpdate, setCancelUpdate] = useState(false);


    // Cargar datos del usuario
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/get_datos_usuario', {
                    method: 'GET',
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData({
                        fechaIncorporacion: data.fecha_incorporacion,
                        numeroColegiado: data.numero_colegiado,
                        dni: data.dni,
                        apellidoPaterno: data.apl_paterno,
                        apellidoMaterno: data.apl_materno,
                        nombres: data.nombre,
                        estadoColegiado: data.estado_colegiado,
                        celular: data.telefono,
                        email: data.correo
                    });
                } else {
                    setError('Error al cargar datos');
                }
            } catch (err) {
                setError('Error de conexión');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
        setCancelUpdate(false);
    }, [cancelUpdate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        // Verificar si el campo es editable
        const nonEditableFields = ['numeroColegiado', 'estadoColegiado', 'fechaIncorporacion'];
        if (nonEditableFields.includes(field)) {
            return;
        }

        setUserData({
            ...userData,
            [field]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/actualizar_datos_usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Datos actualizados correctamente');
            } else {
                setError('Error al actualizar datos');
            }
        } catch (err) {
            setError('Error de conexión');
        }
    };


    return (

        <div className={styles.contenedorPrincipalFormulario}>
            <img className={styles.imagen} src={imagen} alt="Imagen de un Licenciado"></img>
            <BotonEstandarImagen
                nombre="Cargar Imagen"
                conSombra={false}
                children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioDatosPersonales.map((data, index) => (
                    <CampoTexto
                        key={index}
                        nombre={data.nombre}
                        place={data.place}
                        detalle={data.detalle}
                        // valor={userData[data.fieldName as keyof UserData]} // añadir fieldName a tu array de campos
                        valor={userData[data.fieldName as keyof UserData]} // añadir fieldName a tu array de campos
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, data.fieldName)}
                        disabled={['N° de Colegiado', 'Estado de Colegiado', 'Fecha de Incorporación', 'N° de DNI'].includes(data.nombre)}
                    ></CampoTexto>
                ))}
            </div>
            <div className={styles.botones}>
                <BotonEstandar
                    titulo="Actualizar"
                    onClick={handleSubmit}></BotonEstandar>
                <BotonEstandarAlternativo
                    titulo="Cancelar" onClick={() => setCancelUpdate(true)} ></BotonEstandarAlternativo>
            </div>
        </div>
    );
}

const formularioRegistrarColegiado = [
    {
        nombre: "Fecha de Incorporación",
        place: "dd/mm/yyyy",
        detalle: "Ingrese la fecha en la que fue expedido su certificado.",
        tipo: "text",
        fieldName: "fechaIncorporacion"
    },
    {
        nombre: "N° de Colegiado",
        place: "",
        detalle: "Número de colegiado que fue generado al expedir su certificado.",
        tipo: "text",
        fieldName: "numeroColegiado"

    },
    {
        nombre: "N° de DNI",
        place: "Ingrese su N° de DNI",
        detalle: "Número de su Documento de Identificación Nacional.",
        tipo: "text",
        fieldName: "dni"

    },
    {
        nombre: "Apellido Paterno",
        place: "Ingrese su apellido paterno",
        detalle: "Apellido heredado de su padre, registrado en su DNI.",
        tipo: "text",
        fieldName: "apellidoPaterno"


    },
    {
        nombre: "Apellido Materno",
        place: "Ingrese su apellido materno",
        detalle: "Apellido heredado de su madre, registrado en su DNI.",
        tipo: "text",
        fieldName: "apellidoMaterno"
    },
    {
        nombre: "Nombres",
        place: "Ingrese sus nombres completos",
        detalle: "Rellene este campo con sus nombres completos como está registrado en su DNI.",
        tipo: "text",
        fieldName: "nombres"
    },
    {
        nombre: "Estado de Colegiado",
        place: "",
        detalle: "Este es su estado dentro de los registros del colegio. En caso salga 'Habilitado' se entienda que ha pagado su membresía; caso contrario, saldrá 'Deshabilitado'.",
        tipo: "text",
        fieldName: "estadoColegiado"
    },
    {
        nombre: "Celular",
        place: "Ingrese su número celular",
        detalle: "Ingrese su número de celular. En caso este no sea nacional, añada el prefijo necesario.",
        tipo: "text",
        fieldName: "celular"
    },
    {
        nombre: "Correo electrónico",
        place: "Ingrese su correo electrónico",
        detalle: "Rellene este campo con su correo electrónico personal con el que registró el formulario para solicitar la expedición de su certificado.",
        tipo: "text",
        fieldName: "email"
    },
    {
        nombre: "Contraseña",
        place: "Debe tener al menos 8 digitos y un número",
        detalle: "La contraseña debe tener al menos 8 caracteres y un número para ser aceptada.",
        tipo: "password",
        fieldName: "contraseña"
    },
    {
        nombre: "Confirmar Contraseña",
        place: "Debe tener al menos 8 digitos y un número",
        detalle: "La contraseña que digite aquí debe ser igual a la anterior para que se actualice su información.",
        tipo: "password",
        fieldName: "confirmarContraseña"
    }

]
function FormularioRegistrarColegiado() {

    // fetch post para mandar la información
    const [formData, setFormData] = useState({
        fechaIncorporacion: '',
        numeroColegiado: '',
        dni: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        nombres: '',
        estadoColegiado: '',
        celular: '',
        email: '',
        contraseña: '',
        confirmarContraseña: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSubmit = async () => {
        if (formData.contraseña !== formData.confirmarContraseña) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/registrar_colegiado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Colegiado registrado correctamente');
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Error al registrar el colegiado');
            }
        } catch (error) {
            console.error('Error al registrar el colegiado:', error);
            alert('Error de conexión');
        }
    };


    return (
        <div className={styles.contenedorPrincipalFormulario}>
            <img className={styles.imagen} src={imagen} alt="Imagen de un Licenciado"></img>
            <BotonEstandarImagen nombre="Cargar Imagen" conSombra={false} children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioRegistrarColegiado.map((data, index) => (
                    <CampoTexto
                        key={index}
                        nombre={data.nombre}
                        place={data.place}
                        detalle={data.detalle}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, data.fieldName)}
                    ></CampoTexto>
                ))}
            </div>
            <div className={styles.botones}>
                <BotonEstandar onClick={handleSubmit} titulo="Registrar"></BotonEstandar>
                <BotonEstandarAlternativo titulo="Cancelar"></BotonEstandarAlternativo>
            </div>
        </div>
    );
}

function FormularioCambiarContraseña() {

    // usestate para los valores de cada campo
    const [passwordActual, setPasswordActual] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cancelar, setCancelar] = useState(false);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        if (field === 'passwordActual') {
            setPasswordActual(e.target.value);
        } else if (field === 'newPassword') {
            setNewPassword(e.target.value);
        } else if (field === 'confirmPassword') {
            setConfirmPassword(e.target.value);
        }
    };

    const handleSubmitPassword = async () => {
        if (newPassword !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        // Aquí realizar la lógica para cambiar la contraseña
        try {
            const response = await fetch('http://127.0.0.1:5000/cambiar_clave', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ passwordActual, newPassword })
            });

            if (response.ok) {
                alert('Contraseña actualizada correctamente');
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Error al actualizar la contraseña');
            }
        } catch (error) {
            console.error('Error al actualizar la contraseña:', error);
            alert('Error de conexión');
        }
    };

    const handleCancelar = () => {
        setPasswordActual("");
        setNewPassword("");
        setConfirmPassword("");
    }

    useEffect(() => {
    }, [cancelar]);


    return (

        <div className={styles.contenedorPrincipalFormulario}>
            <div className={styles.contenedorFormulario}>
                <CampoTexto
                    nombre="Contraseña Actual"
                    place="Digite la contraseña actual"
                    tipo="password"
                    valor={passwordActual}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e, 'passwordActual')}></CampoTexto>
                <CampoTexto
                    nombre="Nueva Contraseña"
                    place="Debe tener al menos 8 digitos con un número"
                    tipo="password"
                    valor={newPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e, 'newPassword')}
                ></CampoTexto>
                <CampoTexto
                    nombre="Reingresar contraseña"
                    place="Debe coincidir con la contraseña anterior"
                    tipo="password"
                    valor={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e, 'confirmPassword')}
                ></CampoTexto>
            </div>
            <div className={styles.botones}>
                <BotonEstandar onClick={() => { handleSubmitPassword() }} titulo="Actualizar"></BotonEstandar>
                <BotonEstandarAlternativo titulo="Cancelar" onClick={handleCancelar}
                ></BotonEstandarAlternativo>
            </div>
        </div>

    );
}

const formularioSubirPublicaciones = [
    {
        nombre: "Título de la Publicación",
        place: "Ingrese un título adecuado para su publicación",
        detalle: "El título puede tener una longitud máxima de 255 caracteres",
        tipo: "text"
    },
    {
        nombre: "Número de Publicación",
        place: "PUB - 35",
        detalle: "Número autogenerado para identificar la publicación.",
        tipo: "text"
    },
    {
        nombre: "Descripción",
        place: "Ingrese una descripción adecuada para su publicación",
        detalle: "La descripción puede tener una longitud mucho más extensa que la del título",
        tipo: "text"
    },
    {
        nombre: "Autor de la Publicación",
        place: "Ingrese el nombre del autor de la publicación",
        detalle: "Tiene que digitar nombres completos del autor de la publicación.",
        tipo: "text"
    },
    {
        nombre: "Fecha",
        place: "dd/mm/yyyy",
        detalle: "Digite la fecha en que se realizó la publicación.",
        tipo: "text"
    },
    {
        nombre: "Enlace",
        place: "Ingrese un enlace adecuado",
        detalle: "Los enlaces pueden ser para acceder a documentos informativos o invitaciones a eventos online.",
        tipo: "text"
    },
    {
        nombre: "Estado",
        place: "En progreso",
        detalle: "Aquí aparecerá el estado de su publicación.",
        tipo: "text"
    }
]

function FormularioSubirPublicaciones() {

    const { isDarkMode } = useTheme();
    const combinedStyles = isDarkMode
        ? { ...styles, ...darkStyles }
        : styles;

    return (

        <div className={styles.contenedorPrincipalFormulario}>
            <BookImage className={`${combinedStyles.iconoLibro} ${isDarkMode ? combinedStyles.darkMode : ''}`} aria-label="Icono de una Publicacion"></BookImage>
            <BotonEstandarImagen nombre="Cargar Imagen" conSombra={false} children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioSubirPublicaciones.map((data, index) => (
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
        nombre: "I.S.B.N",
        place: "XXX-XX-XXX-XXXX-X",
        detalle: "Ingrese el I.S.B.N del libro. Dicho número se encuentra en las primeras páginas de la mayoría de libros.",
        tipo: "text"
    },
    {
        nombre: "Título del Libro",
        place: "Ingrese el título del libro",
        detalle: "El título del libro como máximo puede tener 255 caracteres",
        tipo: "text"
    },
    {
        nombre: "Descripción",
        place: "Ingrese una descripción adecuada para su publicación",
        detalle: "La descripción puede tener una longitud mucho más extensa que la del título",
        tipo: "text"
    },
    {
        nombre: "Autor(es)",
        place: "Autor 1, Autor 2, ...",
        detalle: "En este campo tiene que ingresar los nombres completos de los autores separados por comas, por ejemplo: César Vallejo, Ciro Alegría.",
        tipo: "text"
    },
    {
        nombre: "Fecha Publicación",
        place: "dd/mm/yyyy",
        detalle: "Digite la fecha en que el libro fue publicado.",
        tipo: "text"
    },
    {
        nombre: "Descripción",
        place: "Ingrese una descripción adecuada para el libro",
        detalle: "La descripción del libro tiene que ser adecuada y representativa."
    },
    {
        nombre: "Número de Edición",
        place: "Ingrese el número de edición",
        detalle: "En este campo tan solo ingrese un número.",
        tipo: "text"
    },
    {
        nombre: "Número de Páginas",
        place: "Ingrese el número de páginas del libro",
        detalle: "En este campo tan solo ingrese un número."
    },
    {
        nombre: "Enlace del Libro",
        place: "Ingrese el enlace para acceder al libro",
        detalle: "En el campo debe ir un enlace válido por el cual se pueda acceder a la versión virtual del libro o a una tienda virtual donde se pueda adquirir este",
        tipo: "text"
    },
    {
        nombre: "Editorial",
        place: "Nombre de la editorial",
        detalle: "Se puede encontrar esta información en las primeras paǵinas del libro",
        tipo: "text"
    }
]

function FormularioRegistrarLibro() {
    return (

        <div className={styles.contenedorPrincipalFormulario}>
            <img src={pdf} alt="Logo de un archivo PDF"></img>
            <BotonEstandarImagen nombre="Cargar PDF" conSombra={false} children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioRegistrarLibro.map((data, index) => (
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
        nombre: "I.S.B.N",
        place: "XXX-XX-XXX-XXXX-X",
        detalle: "Ingrese el I.S.B.N del libro. Dicho número se encuentra en las primeras páginas de la mayoría de libros.",
        tipo: "text"
    },
    {
        nombre: "Título del Libro",
        place: "Ingrese el título del libro",
        detalle: "El título del libro como máximo puede tener 255 caracteres",
        tipo: "text"
    },
    {
        nombre: "Descripción",
        place: "Ingrese una descripción adecuada para su publicación",
        detalle: "La descripción puede tener una longitud mucho más extensa que la del título",
        tipo: "text"
    },
    {
        nombre: "Autor(es)",
        place: "Autor 1, Autor 2, ...",
        detalle: "En este campo tiene que ingresar los nombres completos de los autores separados por comas, por ejemplo: César Vallejo, Ciro Alegría.",
        tipo: "text"
    },
    {
        nombre: "Fecha Publicación",
        place: "dd/mm/yyyy",
        detalle: "Digite la fecha en que el libro fue publicado.",
        tipo: "text"
    },
    {
        nombre: "Descripción",
        place: "Ingrese una descripción adecuada para el libro",
        detalle: "La descripción del libro tiene que ser adecuada y representativa."
    },
    {
        nombre: "Número de Edición",
        place: "Ingrese el número de edición",
        detalle: "En este campo tan solo ingrese un número.",
        tipo: "text"
    },
    {
        nombre: "Número de Páginas",
        place: "Ingrese el número de páginas del libro",
        detalle: "En este campo tan solo ingrese un número."
    },
    {
        nombre: "Enlace del Libro",
        place: "Ingrese el enlace para acceder al libro",
        detalle: "En el campo debe ir un enlace válido por el cual se pueda acceder a la versión virtual del libro o a una tienda virtual donde se pueda adquirir este",
        tipo: "text"
    },
    {
        nombre: "Editorial",
        place: "Nombre de la editorial",
        detalle: "Se puede encontrar esta información en las primeras paǵinas del libro",
        tipo: "text"
    }
]

function FormularioActualizarLibro() {

    const { isDarkMode } = useTheme();
    const combinedStyles = isDarkMode
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <div className={styles.contenedorPrincipalFormulario}>
            <div className={styles.contenedorBuscarLibro}>
                <span className={`${combinedStyles.nombreCampo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>Buscar Libro: </span>
                <InputTexto
                    placeHolder="Buscar libro"
                ></InputTexto>
                <Search className={styles.borrar} cursor={"pointer"} size={40} />
            </div>
            <img src={pdf} alt="Logo de un archivo PDF"></img>
            <BotonEstandarImagen nombre="Cargar PDF" conSombra={false} children={<Upload size={24} color="#FFFFFF" />}></BotonEstandarImagen>
            <div className={styles.contenedorFormulario}>
                {formularioActualizarLibro.map((data, index) => (
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

function FormularioEliminarLibro() {

    const { isDarkMode } = useTheme();
    const combinedStyles = isDarkMode
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <div className={styles.contenedorPrincipalFormulario}>
            <div className={styles.contenedorBuscarLibro}>
                <span className={`${combinedStyles.nombreCampo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>Buscar Libro: </span>
                <InputTexto
                    placeHolder="Buscar libro"
                ></InputTexto>
                <Search cursor={"pointer"} size={40} />
            </div>
            <BookImage className={`${combinedStyles.iconoLibro} ${isDarkMode ? combinedStyles.darkMode : ''}`}></BookImage>
            <div className={styles.contenedorFormulario}>
                {formularioActualizarLibro.map((data, index) => (
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

function CerrarSesion() {
    // Usar la api con /cerrar_sesion

    const handleLogout = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/cerrar_sesion', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                localStorage.removeItem('token');
                window.location.href = '/'; // Redirigir a la página de inicio de sesión
            } else {
                alert('Error al cerrar sesión');
            }
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            alert('Error de conexión');
        }
    };


    const { isDarkMode } = useTheme();
    const combinedStyles = isDarkMode
        ? { ...styles, ...darkStyles }
        : styles;

    return (
        <div className={styles.cerrarSesion}>
            <span className={`${combinedStyles.pregunta} ${isDarkMode ? combinedStyles.darkMode : ''}`}>¿Estás seguro que deseas cerrar sesión?</span>
            <div className={styles.botones}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <BotonEstandar onClick={handleLogout} titulo="Cerrar Sesión"></BotonEstandar>
                </Link>
            </div>
        </div>
    );
}

const tabsDatosPersonales = [
    { id: '1', icono: <CircleUser />, titulo: 'Datos Personales', contenido: <FormularioDatosPersonales /> },
    { id: '2', icono: <LockKeyhole />, titulo: 'Cambiar Contraseña', contenido: <FormularioCambiarContraseña /> },
];

const tabsGerenciarBiblioteca = [
    { id: '1', icono: <BookPlus />, titulo: 'Registrar Libro', contenido: <FormularioRegistrarLibro /> },
    { id: '2', icono: <BookCheck />, titulo: 'Actualizar Libro', contenido: <FormularioActualizarLibro /> },
    { id: '3', icono: <BookX />, titulo: 'Eliminar Libro', contenido: <FormularioEliminarLibro /> },
];

const opciones = [
    { id: '1', icono: <CircleUser />, titulo: 'Datos Personales', tituloSeccion: 'Ficha de Datos Personales', children: <TabWidget tabs={tabsDatosPersonales} isVisible={true}></TabWidget> },
    { id: '2', icono: <UserPlus />, titulo: 'Registrar Colegiado', tituloSeccion: 'Registrar Nuevo Colegiado', children: <FormularioRegistrarColegiado /> },
    { id: '3', icono: <CreditCard />, titulo: 'Validación de Pagos', tituloSeccion: 'Pagos Pendientes de Validacion', children: <Tabla></Tabla> },
    { id: '4', icono: <Newspaper />, titulo: 'Subir Publicaciones', tituloSeccion: 'Subir Publicaciones', children: <FormularioSubirPublicaciones /> },
    { id: '5', icono: <BookText />, titulo: 'Gerenciar Biblioteca', tituloSeccion: 'Gerenciamiento de Biblioteca Virtual', children: <TabWidget tabs={tabsGerenciarBiblioteca} isVisible={true}></TabWidget> },
    { id: '6', icono: <LogOut />, titulo: 'Cerrar Sesión', tituloSeccion: 'Cerrar Sesión', children: <CerrarSesion /> }
]

function Administrador() {
    return (
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