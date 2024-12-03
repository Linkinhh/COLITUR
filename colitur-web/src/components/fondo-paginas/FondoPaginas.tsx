import { ReactNode } from 'react';
import styles from './FondoPaginas.module.css';
import darkStyles from './FondoPaginasDark.module.css';
import { useTheme } from '../../context/ThemeContext';

interface Props{
    children: ReactNode;
}

function FondoPaginas({children}: Props)
{

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;

    return(
        <section className={`${combinedStyles.contenedor} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{children}</section>
    )
}

export default FondoPaginas;