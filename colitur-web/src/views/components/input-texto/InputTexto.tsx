import { useState } from "react";
import { Eye, EyeOff, CircleHelp } from "lucide-react";
import styles from "./InputTexto.module.css";

interface Props {
    placeHolder: string;
    detalle?: string;
    tipo?: "text" | "password";
    nombre?: "password" | "username";
    autoCompletado?: "off" | "current-password" | "new-password" | "username";
    mostrarAyuda?: boolean;
    value?:string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Nueva opción para mostrar el ícono de ayuda
    disabled?: boolean;
}

function InputTexto({
    placeHolder,
    detalle,
    tipo = "text",
    nombre,
    autoCompletado = "off",
    mostrarAyuda = false,
    value,
    onChange,
    disabled=false
}: Props) {
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const cambiarEstado = () => {
        setMostrarPassword(!mostrarPassword);
    };

    return (
        <div className={styles.contenedor}>
            <input
                className={styles.campoTexto}
                placeholder={placeHolder}
                autoComplete={autoCompletado}
                name={nombre}
                value={value}
                onChange={onChange}
                disabled={disabled}
                type={tipo === "password" ? (mostrarPassword ? "text" : "password") : "text"}
            />
            {tipo === "password" ? (
                <button
                    onClick={cambiarEstado}
                    className={styles.botonPassword}
                    type="button"
                    aria-label={mostrarPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
                >
                    {mostrarPassword ? (
                        <EyeOff className={styles.iconoPassword} />
                    ) : (
                        <Eye className={styles.iconoPassword} />
                    )}
                </button>
            ) : mostrarAyuda && detalle ? (
                <div>
                    <CircleHelp className={styles.icono}/>
                    <div className={styles.ayuda}>{detalle}</div>
                </div>
            ) : null}
        </div>
    );
}

export default InputTexto;
