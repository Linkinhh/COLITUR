import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface FontSizeContextType {
    miniFontSize: number;
    baseFontSize: number;
    titleFontSize: number;
    medioFontSize: number;
    increaseFontSize: () => void;
    decreaseFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [miniFontSize, setMiniFontSize] = useState<number>(13); 
    const [baseFontSize, setBaseFontSize] = useState<number>(16); 
    const [medioFontSize, setMedioFontSize] = useState<number>(20);
    const [titleFontSize, setTitleFontSize] = useState<number>(24);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size-mini', `${miniFontSize}px`);
        document.documentElement.style.setProperty('--font-size-base', `${baseFontSize}px`);
        document.documentElement.style.setProperty('--font-size-medio', `${medioFontSize}px`);
        document.documentElement.style.setProperty('--font-size-title', `${titleFontSize}px`);
    }, [miniFontSize, baseFontSize, medioFontSize, titleFontSize]);

    const increaseFontSize = () => {
        if (baseFontSize < 22) {
        setMiniFontSize(prev => prev + 2);
        setBaseFontSize(prev => prev + 2);
        setMedioFontSize(prev => prev + 2);
        setTitleFontSize(prev => prev + 2);
        }
    };

    const decreaseFontSize = () => {
        if (baseFontSize > 12) {
        setMiniFontSize(prev => prev - 2);
        setBaseFontSize(prev => prev - 2);
        setMedioFontSize(prev => prev - 2);
        setTitleFontSize(prev => prev - 2);
        }
    };

    return (
        <FontSizeContext.Provider value={{
        miniFontSize, 
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