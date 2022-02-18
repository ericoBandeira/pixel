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
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as RoutesContextData);

export function AppProvider({ children }: AppProviderProps) {
    
  //Pixel
  const [pixelName, setPixelName] = useState('')
  const [square, setSquare] = useState(true)
  const [circle, setCircle] = useState(false)
  const [color, setColor] = useState('')


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
            setColor
        }}
    >
      {children}
    </AppContext.Provider>
  );
}