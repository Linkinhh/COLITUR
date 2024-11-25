import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import styles from "./InputTexto.module.css";

// # TODO
// Corregir lo de manage password
//npm install lucide-react
interface Props
{
    placeHolder: string,
    imagen ?: string,
    detalle ?: string,
    tipo ?: "text" | "password",
    nombre ?: "password" | "username",
    autoCompletado ?: "off" | "current-password" | "new-password" | "username"
}

// Se especifica imagen y detalle para obtener el desglosable

function InputTexto({placeHolder, imagen, detalle, tipo="text", nombre, autoCompletado = "off"}:Props)
{
    // mostrar almacena un booleano que indica el estado
    // setMostrar almacena otro booleano que define el estado.
    // useState(false) --> ambos empiezan con false
    const [mostrarPassword, setMostrarPassword] = useState(false)

    const cambiarEstado = () => {
        setMostrarPassword(!mostrarPassword);
    }

    return(
        <div className={styles.contenedor}>
            <input 
            className={styles.campoTexto} 
            placeholder={placeHolder}
            autoComplete={autoCompletado}
            name={nombre}
            type={tipo === "password" ? (mostrarPassword ? "text": "password") : "text"}></input>
            {tipo === "password" ? (
                <button
                onClick={cambiarEstado}
                className={styles.botonPassword}
                type="button"
                aria-label={mostrarPassword ? "Ocultar Contrasena" : "Mostrar Contraseña"}>
                    {mostrarPassword ? (
                        <EyeOff className={styles.iconoPassword}></EyeOff> 
                    ):(
                        <Eye className={styles.iconoPassword}></Eye>
                    )}
                </button>
            ):(
                <>
                    <img className={styles.icono} src={imagen}></img>
                    <div className={styles.ayuda}>{detalle}</div>
                </>
            )
            }

            
        </div>
    );
}

export default InputTexto;