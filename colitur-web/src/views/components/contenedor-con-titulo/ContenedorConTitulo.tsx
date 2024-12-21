import { ReactNode } from 'react';
import styles from './ContenedorConTitulo.module.css';
import darkStyles from './ContenedorConTituloDark.module.css';
import { useTheme } from '../../context/ThemeContext';

interface Props
{
    titulo: string;
    children?: ReactNode;
}

function Titulo ({titulo}: Props)
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <div className={`${combinedStyles.cuadroTitulo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <span className={`${combinedStyles.titulo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{titulo}</span>
        </div>
    )
}

function ContenedorConTitulo ({titulo, children}: Props)
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <section className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <Titulo titulo = {titulo}></Titulo>
            {children}
        </section>
    )
}

export default ContenedorConTitulo;