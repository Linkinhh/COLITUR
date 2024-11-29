/*
import { useState } from 'react';

const Tabla = () => {
    const [data, setData] = useState([
        { id: 1, nombre: 'Juan', edad: 28, ciudad: 'Madrid' },
        { id: 2, nombre: 'María', edad: 35, ciudad: 'Barcelona' },
        { id: 3, nombre: 'Carlos', edad: 42, ciudad: 'Valencia' },
        { id: 4, nombre: 'Laura', edad: 31, ciudad: 'Sevilla' }
    ]);

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const sortData = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
        }
        setSortConfig({ key, direction });

        const sortedData = [...data].sort((a, b) => {
        if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
        return 0;
        });

        setData(sortedData);
    };

    const filteredData = data.filter(item => 
        item.nombre.toLowerCase().includes(filter.toLowerCase()) ||
        item.ciudad.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="advanced-table-container">
        <input 
            type="text" 
            placeholder="Filtrar por nombre o ciudad"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-input"
        />
        <table className="advanced-table">
            <thead>
            <tr>
                <th onClick={() => sortData('id')}>ID</th>
                <th onClick={() => sortData('nombre')}>Nombre</th>
                <th onClick={() => sortData('edad')}>Edad</th>
                <th onClick={() => sortData('ciudad')}>Ciudad</th>
            </tr>
            </thead>
            <tbody>
            {filteredData.map(user => (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.edad}</td>
                <td>{user.ciudad}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <style jsx>{`
            .advanced-table-container {
            margin: 20px;
            }
            .filter-input {
            margin-bottom: 15px;
            padding: 8px;
            width: 100%;
            box-sizing: border-box;
            }
            .advanced-table {
            width: 100%;
            border-collapse: collapse;
            font-family: Arial, sans-serif;
            }
            .advanced-table th, .advanced-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            }
            .advanced-table th {
            background-color: #f2f2f2;
            color: #333;
            cursor: pointer;
            }
            .advanced-table th:hover {
            background-color: #e2e2e2;
            }
            .advanced-table tr:nth-child(even) {
            background-color: #f9f9f9;
            }
        `}</style>
        </div>
    );
};

export default Tabla;
*/