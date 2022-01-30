import { createContext, useState, ReactNode } from "react";

interface RoutesContextData {
    pixelName: string;
    square: boolean;
    circle: boolean;
    color: string;
    setSquare: React.Dispatch<React.SetStateAction<boolean>>;
    setPixelName: React.Dispatch<React.SetStateAction<string>>;
    setCircle: React.Dispatch<React.SetStateAction<boolean>>;
    setColor: React.Dispatch<React.SetStateAction<string>>;
    visibilidade: number
    correspondencia: number
    controle: number
    reconhecimento: number
    consistencia: number
    eficiencia: number
    minimalismo: number
    prevencao: number,
    firstAccess: boolean
    setFirstAccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as RoutesContextData);

export function AppProvider({ children }: AppProviderProps) {
    
  const [pixelName, setPixelName] = useState('')
  const [square, setSquare] = useState(true)
  const [circle, setCircle] = useState(false)
  const [color, setColor] = useState('')
  const [firstAccess, setFirstAccess] = useState(true)
  
  const visibilidade = 5;
  const correspondencia = 3;
  const controle = 2;
  const consistencia = 4;
  const reconhecimento = 6;
  const eficiencia = 3;
  const minimalismo = 2;
  const prevencao = 1;

  return (
    <AppContext.Provider
        value={{
            pixelName,
            square,
            circle,
            color,
            setSquare,
            setPixelName,
            setCircle,
            setColor,
            visibilidade,
            correspondencia,
            controle,
            reconhecimento,
            consistencia,
            eficiencia,
            minimalismo,
            prevencao,
            firstAccess,
            setFirstAccess
        }}
    >
      {children}
    </AppContext.Provider>
  );
}