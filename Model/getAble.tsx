import React from 'react'
import { apiPixel } from "../api/api";

async function getAbled(
    pixelId: string,
    setAbleVisibilidade: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAbleCorrespondencia: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAbleControle: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAbleConsistencia: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAbleReconhecimento: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAbleEficiencia: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAbleMinimalismo: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAblePrevencao: React.Dispatch<React.SetStateAction<boolean | undefined>>
  ){
    await apiPixel.get(`pixel/${pixelId}/features`).then(res => {
       res.data.map((r: any) => {
         if(r.name === "visibility") {
           setAbleVisibilidade(r.active);
         } else if(r.name === "match"){
           setAbleCorrespondencia(r.active);
         } else if (r.name === "control") {
           setAbleControle(r.active);  
         }else if (r.name === "consistence") {
           setAbleConsistencia(r.active);
         }else if (r.name === "recognition") {
           setAbleReconhecimento(r.active);
         }else if (r.name === "efficiency") {
           setAbleEficiencia(r.active);
         }else if (r.name === "minimalism") {
           setAbleMinimalismo(r.active);
         }else if (r.name === "error_prevention") {
           setAblePrevencao(r.active);
         }
        })
        //console.log(res)
      }).catch((err: any) => {
        console.log(err)
      })
  }

  export default getAbled