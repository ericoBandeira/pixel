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
    setVisibilidade: React.Dispatch<React.SetStateAction<number>>;
    setCorrespondencia: React.Dispatch<React.SetStateAction<number>>;
    setControle: React.Dispatch<React.SetStateAction<number>>;
    setConsistencia: React.Dispatch<React.SetStateAction<number>>;
    setReconhecimento: React.Dispatch<React.SetStateAction<number>>;
    setEficiencia: React.Dispatch<React.SetStateAction<number>>;
    setMinimalismo: React.Dispatch<React.SetStateAction<number>>;
    setPrevencao: React.Dispatch<React.SetStateAction<number>>;
    desvPadrao: number;
    mediaTeam: number;
    teamHappiness: number;
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
  
  const [visibilidade, setVisibilidade ]= useState(3);
  const [correspondencia, setCorrespondencia ]= useState(3);
  const [controle, setControle] = useState(3);
  const [consistencia, setConsistencia] = useState(3);
  const [reconhecimento, setReconhecimento] = useState(3);
  const [eficiencia, setEficiencia] = useState(3);
  const [minimalismo, setMinimalismo] = useState(3);
  const [prevencao, setPrevencao] = useState(3);

  const desvPadrao = 1
  const mediaTeam = 3
  const teamHappiness = (mediaTeam * 0.5) + (desvPadrao * 0.5)

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
            setFirstAccess,
            setVisibilidade,
            setCorrespondencia,
            setControle,
            setConsistencia,
            setReconhecimento,
            setEficiencia,
            setMinimalismo,
            setPrevencao,
            desvPadrao,
            mediaTeam,
            teamHappiness
        }}
    >
      {children}
    </AppContext.Provider>
  );
}