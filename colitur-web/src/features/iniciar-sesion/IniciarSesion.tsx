import styles from './IniciarSesion.module.css';
import { BarraNavegacion, TituloLogoColitur, Footer, FondoPaginas, InputTexto, BotonEstandar } from '../../components';
import iniciarSesion from "../../assets/Iniciar_Sesion.svg"; 
//import icono from "../../assets/Signo_Pregunta.svg";
import { useNavigate } from 'react-router-dom';
import darkStyles from './IniciarSesionDark.module.css';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';



function IniciarSesion()
{
    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
    ? { ...styles, ...darkStyles }
    : styles;

    // Definición de la data a recibir
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Para redirigir a otra ruta de la página
    const navigate = useNavigate();
    

    // Almacena con ...formData lo que se ingresó antes y actualiza
    // los nuevos valores con [e.target.name]
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            
            if (data.success) {
                navigate('/IniciarSesion/Administrador');
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al iniciar sesión');
        }
    };

    return(
        <div className={`${combinedStyles.content} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <BarraNavegacion></BarraNavegacion>
            <TituloLogoColitur titulo="INICIAR SESIÓN" imagen={iniciarSesion}></TituloLogoColitur>
            <FondoPaginas>
                <form className={styles.contenedorGeneral} onSubmit={handleSubmit}>

                <div className={`${combinedStyles.contenedorCampoTexto} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                    <span className={`${combinedStyles.tituloCampo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>Número de Colegiado o DNI</span>
                    <InputTexto 
                    placeHolder='Ingrese su Número de Colegiado o DNI' 
                    tipo="text"
                    nombre="username"
                    autoCompletado='off'
                    value={formData.username}
                    onChange={handleInputChange}></InputTexto>
                </div>
                <div className={`${combinedStyles.contenedorCampoTexto} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                    <span className={`${combinedStyles.tituloCampo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>Contraseña</span>
                    <InputTexto 
                    placeHolder='Ingresa tu Contraseña' 
                    tipo="password"
                    nombre="password"
                    autoCompletado="current-password"
                    value={formData.password}
                    onChange={handleInputChange}></InputTexto>
                </div>
                <div className={`${combinedStyles.contenedorBoton} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                    <div className={styles.contenedorBoton}>
                        <BotonEstandar titulo="Iniciar Sesión" tipo="submit"></BotonEstandar>
                    </div>
                </div>
                </form>
            </FondoPaginas>
            <Footer></Footer>
        </div>
    )
}

export default IniciarSesion;