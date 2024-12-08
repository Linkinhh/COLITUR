import LogoColitur from "../logo-colitur/LogoColitur";
import styles from "./Footer.module.css";
import imagen1 from "../../assets/Icono Lugar.svg";
import imagen2 from "../../assets/Icono Telefono.svg";
import imagen3 from "../../assets/Icono Mensaje.svg";
import facebook from "../../assets/Facebook.svg";
import whatsapp from "../../assets/Whatsapp.svg";
import youtube from "../../assets/Youtube.svg";
import instagram from "../../assets/Instagram.svg";
import { Link } from 'react-router-dom';

interface Props
{
    imagenUrl: string;
    texto: string;
    textoUrl: string;
}

function IconoTexto({imagenUrl, texto, textoUrl}: Props)
{
    return(
        <section className={styles.iconoTexto}>
            <img alt='Logo del Colegio de Licenciados en Turismo de Ancash' src={imagenUrl} className={styles.imagenIconoTexto}></img>
            <a href={textoUrl} target="_blank" color="white"><span>{texto}</span></a>
        </section>
    )
}

function Footer()
{
    return(
        <>
            <section className={styles.contenedorGrande}>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
                <LogoColitur />
                <span className={styles.colitur}>COLEGIO DE LICENCIADOS</span>
                <span className={styles.colitur}>EN TURISMO DE ÁNCASH</span>
            </Link>
                
                <div className={styles.segundaParte}>
                    <p className={styles.titulo}>Contactos</p>
                    <div className={styles.subrayado}>
                        <IconoTexto 
                        imagenUrl={imagen1} 
                        texto="Huaraz - Áncash, Perú"
                        area-label='Icono de Ubicacion'
                        textoUrl="https://maps.app.goo.gl/XRFT5hYKzdDoEkA99"
                        ></IconoTexto>
                    </div>
                    <div className={styles.subrayado}>
                        <IconoTexto 
                        imagenUrl={imagen2} 
                        texto="+51 995268672 // 955848898 // 970652631 "
                        area-label='Icono de Telefono'
                        textoUrl="https://web.whatsapp.com/send?phone=51955848898"
                        ></IconoTexto>
                    </div>
                        <IconoTexto 
                        imagenUrl={imagen3} 
                        texto="coliturancashperu@gmail.com"
                        area-label='Icono de Mensaje'
                        textoUrl="mailto:secretaria@coliturancash.org.pe"
                        ></IconoTexto>
                </div>
                <div className={styles.ajuste}>
                    <p className={styles.titulo}>Redes Sociales</p>
                    <div className={styles.terceraParte}>
                        <a href="https://www.facebook.com/profile.php?id=100083410657271" target="_blank"><img alt='Icono de facebook' src={facebook} className={styles.imagenTerceraParte}></img></a>
                        <a href="https://www.instagram.com/coliturancashperu/" target="_blank"><img alt='Icono de instagram' src={instagram} className={styles.imagenTerceraParte}></img></a>
                        <a href="https://web.whatsapp.com/send?phone=51955848898" target="_blank"><img alt='Icono de whatsapp' src={whatsapp} className={styles.imagenTerceraParte}></img></a>
                        <a href="https://www.youtube.com/" target="_blank"><img alt='Icono de youtube' src={youtube} className={styles.imagenTerceraParte}></img></a>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Footer;