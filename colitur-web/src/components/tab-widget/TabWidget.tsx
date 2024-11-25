import { useState } from "react";
import styles from "./TabWidget.module.css";

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
    
    return(
        <div className={styles.contenedorPrincipal}>
            <div className={styles.contenedorTitulo}>
                {tabs.map((tab) => (
                    <button
                    key={tab.id} 
                    onClick={()=>setActiveTab(tab.id)}
                    className={`${styles.contenedorPestana} ${activeTab === tab.id ? styles.contenedorPestanaActiva : ''}`}>
                        {tab.icono}
                        <span className={styles.titulo}>{tab.titulo}</span>
                    </button>
                ))}
            </div>
            <div className={styles.contenedorContenido}>
                {tabs.find((tab)=> tab.id === activeTab)?.contenido}
            </div>
        </div>
    );
}

export default TabWidget;