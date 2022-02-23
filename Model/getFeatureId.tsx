import React from 'react'
import { apiPixel } from "../api/api";

async function GetFeatureId(
    pixelId: string,
    setIdVisibilidade: React.Dispatch<React.SetStateAction<number | undefined>>,
    setIdCorrespondencia: React.Dispatch<React.SetStateAction<number | undefined>>,
    setIdControle: React.Dispatch<React.SetStateAction<number | undefined>>,
    setIdConsistencia: React.Dispatch<React.SetStateAction<number | undefined>>,
    setIdReconhecimento: React.Dispatch<React.SetStateAction<number | undefined>>,
    setIdEficiencia: React.Dispatch<React.SetStateAction<number | undefined>>,
    setIdMinimalismo: React.Dispatch<React.SetStateAction<number | undefined>>,
    setIdPrevencao: React.Dispatch<React.SetStateAction<number | undefined>>,
    )
{
    await apiPixel.get(`pixel/${pixelId}/features`).then(res => {
       res.data.map((r: any) => {
         if(r.name === "visibility") {
           setIdVisibilidade(r.id);
         } else if(r.name === "match"){
           setIdCorrespondencia(r.id);
         } else if (r.name === "control") {
           setIdControle(r.id);  
         }else if (r.name === "consistence") {
           setIdConsistencia(r.id);
         }else if (r.name === "recognition") {
           setIdReconhecimento(r.id);
         }else if (r.name === "efficiency") {
           setIdEficiencia(r.id);
         }else if (r.name === "minimalism") {
           setIdMinimalismo(r.id);
         }else if (r.name === "error_prevention") {
           setIdPrevencao(r.id);
         }
        })
        //console.log(res)
      }).catch((err: any) => {
        console.log(err)
      })
}
  
export default GetFeatureId