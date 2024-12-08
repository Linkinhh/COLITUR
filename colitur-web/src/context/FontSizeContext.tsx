import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface FontSizeContextType {
    baseFontSize: number;
    titleFontSize: number;
    medioFontSize: number;
    increaseFontSize: () => void;
    decreaseFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [baseFontSize, setBaseFontSize] = useState<number>(18); 
    const [medioFontSize, setMedioFontSize] = useState<number>(22);
    const [titleFontSize, setTitleFontSize] = useState<number>(26);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size-base', `${baseFontSize}px`);
        document.documentElement.style.setProperty('--font-size-medio', `${medioFontSize}px`);
        document.documentElement.style.setProperty('--font-size-title', `${titleFontSize}px`);
    }, [baseFontSize, medioFontSize, titleFontSize]);

    const increaseFontSize = () => {
        if (baseFontSize < 24) {
        setBaseFontSize(prev => prev + 2);
        setMedioFontSize(prev => prev + 2);
        setTitleFontSize(prev => prev + 2);
        }
    };

    const decreaseFontSize = () => {
        if (baseFontSize > 14) {
        setBaseFontSize(prev => prev - 2);
        setMedioFontSize(prev => prev - 2);
        setTitleFontSize(prev => prev - 2);
        }
    };

    return (
        <FontSizeContext.Provider value={{ 
        baseFontSize,
        medioFontSize, 
        titleFontSize, 
        increaseFontSize, 
        decreaseFontSize 
        }}>
        {children}
        </FontSizeContext.Provider>
    );
};

export const useFontSize = () => {
    const context = useContext(FontSizeContext);
    if (context === undefined) {
        throw new Error('useFontSize must be used within a FontSizeProvider');
    }
    return context;
};