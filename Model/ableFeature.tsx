import React from "react";
import { getCookie } from "cookies-next";
import { apiPixel } from "../api/api";

async function ableFeature(
    pixelId: string,
    ableVisibilidade: boolean | undefined,
    ableCorrespondencia: boolean | undefined,
    ableControle: boolean | undefined,
    ableConsistencia: boolean | undefined,
    ableReconhecimento: boolean | undefined,
    ableEficiencia: boolean | undefined,
    ableMinimalismo: boolean | undefined,
    ablePrevencao: boolean | undefined,
    setModalIsOpenEvaluation: React.Dispatch<React.SetStateAction<boolean>>,
    idVisibilidade: number | undefined,
    idCorrespondencia: number | undefined,
    idControle: number | undefined,
    idConsistencia: number | undefined,
    idReconhecimento: number | undefined,
    idEficiencia: number | undefined,
    idMinimalismo: number | undefined,
    idPrevencao: number | undefined,
) {
    const token = getCookie('nextauth.token');

    //id=1
    await apiPixel.post(`pixel/${pixelId}/feature/${idVisibilidade}/enable`, {
      enabled: ableVisibilidade
    }, {
      headers: {
        'X-Access-Token': token as string
      }
    }).then((res: any) => {
      // console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })

    //id=2
    await apiPixel.post(`pixel/${pixelId}/feature/${idCorrespondencia}/enable`, {
      enabled: ableCorrespondencia
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then((res: any) => {
      // console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })

    //id=3
    await apiPixel.post(`pixel/${pixelId}/feature/${idControle}/enable`, {
      enabled: ableControle
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then((res: any) => {
      // console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })

    //id=4
    await apiPixel.post(`pixel/${pixelId}/feature/${idConsistencia}/enable`, {
      enabled: ableConsistencia
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then((res: any) => {
      // console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })

    //id=5
    await apiPixel.post(`pixel/${pixelId}/feature/${idReconhecimento}/enable`, {
      enabled: ableReconhecimento
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then((res: any) => {
      // console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })

    //id=6
    await apiPixel.post(`pixel/${pixelId}/feature/${idEficiencia}/enable`, {
      enabled: ableEficiencia
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then((res: any) => {
      // console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })

    //id=7
    await apiPixel.post(`pixel/${pixelId}/feature/${idMinimalismo}/enable`, {
      enabled: ableMinimalismo
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then((res: any) => {
      // console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })

    //id=8
    await apiPixel.post(`pixel/${pixelId}/feature/${idPrevencao}/enable`, {
      enabled: ablePrevencao
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then((res: any) => {
      // console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })

    setModalIsOpenEvaluation(false);
    window.location.reload();
}
  
export default ableFeature