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
    ableVisibilidade: boolean
    ableCorrespondencia: boolean
    ableControle: boolean
    ableConsistencia: boolean
    ableReconhecimento: boolean
    ableEficiencia: boolean
    ableMinimalismo: boolean
    ablePrevencao: boolean
    setAbleVisibilidade: React.Dispatch<React.SetStateAction<boolean>>;
    setAbleCorrespondencia: React.Dispatch<React.SetStateAction<boolean>>;
    setAbleControle: React.Dispatch<React.SetStateAction<boolean>>;
    setAbleConsistencia: React.Dispatch<React.SetStateAction<boolean>>;
    setAbleReconhecimento: React.Dispatch<React.SetStateAction<boolean>>;
    setAbleEficiencia: React.Dispatch<React.SetStateAction<boolean>>;
    setAbleMinimalismo: React.Dispatch<React.SetStateAction<boolean>>;
    setAblePrevencao: React.Dispatch<React.SetStateAction<boolean>>;
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

  //Primeiro acesso
  const [firstAccess, setFirstAccess] = useState(true)
  
  //Alimentação
  const [visibilidade, setVisibilidade ]= useState(0);
  const [correspondencia, setCorrespondencia ]= useState(0);
  const [controle, setControle] = useState(0);
  const [consistencia, setConsistencia] = useState(0);
  const [reconhecimento, setReconhecimento] = useState(0);
  const [eficiencia, setEficiencia] = useState(0);
  const [minimalismo, setMinimalismo] = useState(0);
  const [prevencao, setPrevencao] = useState(0);

  //Escondido ou não
  const [ableVisibilidade, setAbleVisibilidade ]= useState(true);
  const [ableCorrespondencia, setAbleCorrespondencia ]= useState(true);
  const [ableControle, setAbleControle] = useState(true);
  const [ableConsistencia, setAbleConsistencia] = useState(true);
  const [ableReconhecimento, setAbleReconhecimento] = useState(true);
  const [ableEficiencia, setAbleEficiencia] = useState(true);
  const [ableMinimalismo, setAbleMinimalismo] = useState(true);
  const [ablePrevencao, setAblePrevencao] = useState(true);

  //Média Time
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
            teamHappiness,
            ableVisibilidade,
            ableCorrespondencia,
            ableControle,
            ableConsistencia,
            ableReconhecimento,
            ableEficiencia,
            ableMinimalismo,
            ablePrevencao,
            setAbleVisibilidade,
            setAbleCorrespondencia,
            setAbleControle,
            setAbleConsistencia,
            setAbleReconhecimento,
            setAbleEficiencia,
            setAbleMinimalismo,
            setAblePrevencao,
        }}
    >
      {children}
    </AppContext.Provider>
  );
}