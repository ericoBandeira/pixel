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
         if(r.id === 1) {
           setAbleVisibilidade(r.active);
         } else if(r.id === 2){
           setAbleCorrespondencia(r.active);
         } else if (r.id === 3) {
           setAbleControle(r.active);  
         }else if (r.id === 4) {
           setAbleConsistencia(r.active);
         }else if (r.id === 5) {
           setAbleReconhecimento(r.active);
         }else if (r.id === 6) {
           setAbleEficiencia(r.active);
         }else if (r.id === 7) {
           setAbleMinimalismo(r.active);
         }else if (r.id === 8) {
           setAblePrevencao(r.active);
         }
        })
        //console.log(res)
      }).catch((err: any) => {
        console.log(err)
      })
  }

  export default getAbled