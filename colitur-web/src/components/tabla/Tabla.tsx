import { useState, useMemo } from 'react';
import styles from "./Tabla.module.css";

// Estructuras de objetos
interface PagosValidacion {
    numeroPago: number,
    numeroColegiado: number,
    fecha: Date,
    estado: string,
    accion: string, 
}

// Estructuras de objetos
// Estas especifican elementos primordiales que deben tener los objetos para cumplir con una suerte de "contrato" para ser instanciados
interface SortConfig {
    // Sirve para acceder a atributos dentro de una interface
    // Para este caso en específico va a permitir filtrar
    key: keyof PagosValidacion | null;
    direction: 'ascending' | 'descending';
}

// Memo() memoriza estados derivados del componente actual para evitar cálculos innecesarios

/*
- data: Contiene los datos que se muestran en la tabla. Aquí se inicializa con datos de ejemplo.
- sortConfig: Configuración de ordenamiento (columna y dirección).
- filterText: Texto para filtrar las filas de la tabla.
- currentPage: Número de la página actual.
- itemsPerPage: Cantidad de filas mostradas por página (3 en este caso).
*/

// UseState permite almacenar datos que pueden ir variando a lo largo del tiempo, lo que implica una re-renderización del componente. Da dinamismo.
// 

const Tabla = () => {
    // Datos de ejemplo
    const [data] = useState<PagosValidacion[]>([
        {numeroPago: 1, numeroColegiado: 1, fecha: new Date('2025-12-25'), estado: 'Validado', accion: 'Detalles'},
        {numeroPago: 2, numeroColegiado: 2, fecha: new Date('2025-12-24'), estado: 'Pendiente', accion: 'Detalles'},
        {numeroPago: 3, numeroColegiado: 3, fecha: new Date('2025-12-23'), estado: 'Rechazado', accion: 'Detalles'},
        {numeroPago: 4, numeroColegiado: 4, fecha: new Date('2025-12-22'), estado: 'Validado', accion: 'Detalles'},
        {numeroPago: 5, numeroColegiado: 5, fecha: new Date('2025-12-21'), estado: 'Pendiente', accion: 'Detalles'},
        {numeroPago: 6, numeroColegiado: 6, fecha: new Date('2025-12-20'), estado: 'Rechazado', accion: 'Detalles'},
        {numeroPago: 7, numeroColegiado: 7, fecha: new Date('2025-12-19'), estado: 'Rechazado', accion: 'Detalles'},
        {numeroPago: 8, numeroColegiado: 8, fecha: new Date('2025-12-18'), estado: 'Validado', accion: 'Detalles'},
        {numeroPago: 9, numeroColegiado: 9, fecha: new Date('2025-12-17'), estado: 'Validado', accion: 'Detalles'},
        {numeroPago: 10, numeroColegiado: 10, fecha: new Date('2025-12-16'), estado: 'Pendiente', accion: 'Detalles'},
        {numeroPago: 11, numeroColegiado: 11, fecha: new Date('2025-12-15'), estado: 'Validado', accion: 'Detalles'},
        {numeroPago: 12, numeroColegiado: 12, fecha: new Date('2025-12-14'), estado: 'Validado', accion: 'Detalles'},
        {numeroPago: 13, numeroColegiado: 13, fecha: new Date('2025-12-13'), estado: 'Validado', accion: 'Detalles'},
        {numeroPago: 14, numeroColegiado: 14, fecha: new Date('2025-12-12'), estado: 'Pendiente', accion: 'Detalles'},
        {numeroPago: 15, numeroColegiado: 15, fecha: new Date('2025-12-11'), estado: 'Rechazado', accion: 'Detalles'},
    ]);

    // Estados para ordenamiento y filtrado
    // Ambos son inicializados con la interfaz sortConfig
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'numeroPago', direction: 'ascending' });
    
    // Controla que filtrado está que se usa. Se inicializa en nada por el momento
    const [filterText, setFilterText] = useState('');

    // Controla la página actual
    const [currentPage, setCurrentPage] = useState(1);

    // Controla cuantas filas se muestra
    const itemsPerPage = 10;
    
    // Función de ordenamiento
    const sortedData = useMemo(() => {
        // Crea una copia del array original
        let sortableData = [...data];
        //console.log("SORTABLE DATA",sortableData);
        if (sortConfig.key && sortConfig.key in sortableData[0]) {
            // sort recibe una función
            sortableData.sort((a, b) => {
                // TYPE CASTING
                const key = sortConfig.key as keyof PagosValidacion;
                if (a[key] < b[key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[key] > b[key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [data, sortConfig]);
    
    const filteredData = useMemo(() => {
        return sortedData.filter(item =>
            item.numeroPago.toString().includes(filterText)
        );
    }, [sortedData, filterText]);
    
    // Paginación
    const paginatedData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * itemsPerPage;
        const lastPageIndex = firstPageIndex + itemsPerPage;
        return filteredData.slice(firstPageIndex, lastPageIndex);
    }, [filteredData, currentPage]);
    
    // Cambiar ordenamiento
    const handleSort = (key: keyof PagosValidacion) => {
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            setSortConfig({ key, direction: "descending" });
        } else {
            setSortConfig({ key, direction: 'ascending' });
        }
    }

    return (
        <div className={styles.tablaContenedor}>
            {/* Añadir para que tan solo busque por número*/}
            <input
                type="text"
                placeholder="Buscar por Número de Voucher de Pago"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className={styles.filtroInput}
            />

            {/* Tabla */}
            <table className={styles.tablaPrincipal}>
                <thead>
                    <tr className={styles.tablaEncabezado}>
                        {['N° Pago', 'N° Colegiado', 'Fecha', 'Estado', 'Acción'].map((header, index) => (
                            <th
                                key={header}
                                onClick={() => handleSort(Object.keys(data[0])[index] as keyof PagosValidacion)}
                                className={styles.tablaColumna}
                            >
                                <div className={styles.encabezadoConIcono}>
                                    {header}
                                    <span className={styles.iconoOrdenamiento}>
                                        {sortConfig.key === Object.keys(data[0])[index] &&
                                            (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {paginatedData.map((item, index) => (
                    <tr key={index} className={styles.tablaFila}>
                        {(Object.entries(item) as [keyof PagosValidacion, any][]).map(([key, value]) => {
                            // Verifica si la columna es "estado" y aplica un color condicional
                            const isEstado = key === 'estado';
                            let estadoClase = '';

                            if (isEstado) {
                                estadoClase = value === 'Validado' 
                                    ? styles.estadoValidado 
                                    : value === 'Pendiente' 
                                    ? styles.estadoPendiente 
                                    : styles.estadoRechazado;
                            }

                            return (
                                <td
                                    key={key}
                                    className={`${styles.textoFila} ${isEstado ? estadoClase : ''}`}
                                >
                                    {value instanceof Date 
                                        ? value.toLocaleDateString() 
                                        : value.toString()}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
            </table>
    
            {/* Controles de Paginación */}
            <div className={styles.controlesPaginacion}>
                <button
                    onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                    disabled={currentPage === 1}
                    className={styles.botonAnterior}
                >
                    Anterior
                </button>
                <span className={styles.textoPagina}>
                    Página {currentPage} de {Math.ceil(filteredData.length / itemsPerPage)}
                </span>
                <button
                    onClick={() => setCurrentPage(page => 
                        page < Math.ceil(filteredData.length / itemsPerPage) 
                        ? page + 1 
                        : page
                    )}
                    disabled={currentPage >= Math.ceil(filteredData.length / itemsPerPage)}
                    className={styles.botonSiguiente}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Tabla;