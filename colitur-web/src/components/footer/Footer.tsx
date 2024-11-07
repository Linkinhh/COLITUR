import LogoColitur from "../logo-colitur/LogoColitur";
import styles from "./Footer.module.css";
import imagen1 from "../../assets/Icono Lugar.svg";
import imagen2 from "../../assets/Icono Telefono.svg";
import imagen3 from "../../assets/Icono Mensaje.svg";
import facebook from "../../assets/Facebook.svg";
import whatsapp from "../../assets/Whatsapp.svg";
import youtube from "../../assets/Youtube.svg";
import instagram from "../../assets/Instagram.svg";

interface Props
{
    imagenUrl: string;
    texto: string;
}

function IconoTexto({imagenUrl, texto}: Props)
{
    return(
        <section className={styles.iconoTexto}>
            <img src={imagenUrl} className={styles.imagenIconoTexto}></img>
            <span>{texto}</span>
        </section>
    )
}

function Footer()
{
    return(
        <>
            <section className={styles.contenedorGrande}>
                <LogoColitur></LogoColitur>
                <div className={styles.segundaParte}>
                    <p className={styles.titulo}>Contactos</p>
                    <div className={styles.subrayado}>
                        <IconoTexto 
                        imagenUrl={imagen1} 
                        texto="Huaraz - Áncash, Perú"
                        ></IconoTexto>
                    </div>
                    <div className={styles.subrayado}>
                        <IconoTexto 
                        imagenUrl={imagen2} 
                        texto="+51 995268672 // 955848898 // 970652631 "
                        ></IconoTexto>
                    </div>
                    <IconoTexto 
                    imagenUrl={imagen3} 
                    texto="coliturancashperu@gmail.com"
                    ></IconoTexto>
                </div>
                <div className={styles.ajuste}>
                    <p className={styles.titulo}>Redes Sociales</p>
                    <div className={styles.terceraParte}>
                        <img src={facebook} className={styles.imagenTerceraParte}></img>
                        <img src={instagram} className={styles.imagenTerceraParte}></img>
                        <img src={whatsapp} className={styles.imagenTerceraParte}></img>
                        <img src={youtube} className={styles.imagenTerceraParte}></img>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Footer;