import React, { createContext, useState, useContext, useEffect } from 'react';

// Definir el tipo para el contexto de tema
type ThemeContextType = {
    isDarkMode: boolean;
    toggleTheme: () => void;
};

// Crear el contexto con un valor por defecto
const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: false,
    toggleTheme: () => {},
});

// Componente proveedor del contexto
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Estado para el modo oscuro, inicializado con la preferencia del usuario
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        // Primero revisa si hay una preferencia guardada en localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme === 'dark';
        
        // Si no, usa la preferencia del sistema
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Efecto para guardar la preferencia en localStorage
    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    // Función para alternar entre modos
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personalizado para usar el contexto de tema
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
};