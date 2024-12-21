import { useState } from "react";
import styles from "./TabWidget.module.css";
import { useTheme } from "../../context/ThemeContext";
import darkStyles from '../tab-widget/TabWidgetDark.module.css';

interface Tab
{
    id: string,
    icono: React.ReactNode,
    titulo: string,
    contenido: React.ReactNode
};

interface TabWidgetProps {
    tabs: Tab[];
    isVisible: boolean;
};

// Se define una función
// React.FC es una plantilla de un componente funcional de react
const TabWidget: React.FC<TabWidgetProps> = ({ tabs, isVisible }) => {
    // se selecciona el id de la primera tab en caso exista esta (?.id)
    const[activeTab, setActiveTab] = useState(tabs[0]?.id)

    if(!isVisible) return null;

    const {isDarkMode} = useTheme();
    const combinedStyles = isDarkMode 
        ? { ...styles, ...darkStyles }
        : styles;
    
    return(
        <div className={`${combinedStyles.contenedorPrincipal} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
            <div className={`${combinedStyles.contenedorTitulo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                {tabs.map((tab) => (
                    <button
                    key={tab.id}
                    onClick={()=>setActiveTab(tab.id)}
                    className={`${combinedStyles.contenedorPestana} ${activeTab === tab.id ? combinedStyles.contenedorPestanaActiva : ''} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                        {tab.icono}
                        <span className={`${combinedStyles.titulo} ${isDarkMode ? combinedStyles.darkMode : ''}`}>{tab.titulo}</span>
                    </button>
                ))}
            </div>
            <div className={`${combinedStyles.contenedorContenido} ${isDarkMode ? combinedStyles.darkMode : ''}`}>
                {tabs.find((tab)=> tab.id === activeTab)?.contenido}
            </div>
        </div>
    );
}

export default TabWidget;