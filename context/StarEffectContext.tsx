import React, { createContext, useContext, useState } from "react";

interface StarEffectContextType {
    isStarEffectEnabled: boolean;
    toggleStarEffect: () => void;
}

const StarEffectContext = createContext<StarEffectContextType | undefined>(
    undefined
);

export const StarEffectProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isStarEffectEnabled, setIsStarEffectEnabled] = useState(true);

    const toggleStarEffect = () => {
        setIsStarEffectEnabled((prev) => !prev);
    };

    return (
        <StarEffectContext.Provider
            value={{ isStarEffectEnabled, toggleStarEffect }}
        >
            {children}
        </StarEffectContext.Provider>
    );
};

export const useStarEffect = () => {
    const context = useContext(StarEffectContext);
    if (context === undefined) {
        throw new Error(
            "useStarEffect must be used within a StarEffectProvider"
        );
    }
    return context;
};
