import { getCookie } from "cookies-next";
import { NextRouter, useRouter } from "next/router";
import toast from "react-hot-toast";
import { apiPixel } from "../api/api";

async function SetPixel(
    pixelName: string,
    square: boolean,
    color: string,
    router: NextRouter
) {

    const token = getCookie('nextauth.token');
    
    await apiPixel.post('/pixel/new', {
      name: pixelName,
      eye: square ? "Quadrado" : "Circulo",
      color: color,
    }, {
      headers: {
        'X-Access-Token': token as string
      }
    }).then(res => {
      router.push('/pixellife')
    }).catch(err => {
      console.log(err)
      toast.error("Não foi possível cadastrar seu pixel")
    })
 }
  
 export default SetPixel