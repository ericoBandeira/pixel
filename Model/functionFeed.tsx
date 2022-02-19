import { getCookie } from "cookies-next";
import toast from "react-hot-toast";
import { apiPixel } from "../api/api";
import GetFeed from "./getFeed";

async function functionFeed(
    pixelId: string,
    visibilidade: number,
    correspondencia: number,
    controle: number,
    consistencia: number,
    reconhecimento: number,
    eficiencia: number,
    minimalismo: number,
    prevencao: number,
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setMedia: React.Dispatch<React.SetStateAction<number>>,
    setFeed: React.Dispatch<React.SetStateAction<never[]>>
) {
    const token = getCookie('nextauth.token');
    await apiPixel.post(`pixel/${pixelId}/feed`, {
        visibility: visibilidade,
        match: correspondencia,
        control: controle,
        consistence: consistencia,
        recognition: reconhecimento,
        efficiency: eficiencia,
        minimalism: minimalismo,
        error_prevention: prevencao
      }, {
      headers: {
        'X-Access-Token': token as string
      }
    }).then(res => {
      toast.success('Pixel Alimentado com sucesso!')
      setModalIsOpen(false)
      GetFeed(pixelId,setMedia,setFeed)
    }).catch(err => {
      console.log(err)
    })
}
  
export default functionFeed