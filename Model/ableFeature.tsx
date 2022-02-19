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
    setModalIsOpenEvaluation: React.Dispatch<React.SetStateAction<boolean>>
) {
    const token = getCookie('nextauth.token');

    //id=1
    await apiPixel.post(`pixel/${pixelId}/feature/1/enable`, {
      enabled: ableVisibilidade
    }, {
      headers: {
        'X-Access-Token': token as string
      }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=2
    await apiPixel.post(`pixel/${pixelId}/feature/2/enable`, {
      enabled: ableCorrespondencia
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=3
    await apiPixel.post(`pixel/${pixelId}/feature/3/enable`, {
      enabled: ableControle
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=4
    await apiPixel.post(`pixel/${pixelId}/feature/4/enable`, {
      enabled: ableConsistencia
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=5
    await apiPixel.post(`pixel/${pixelId}/feature/5/enable`, {
      enabled: ableReconhecimento
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=6
    await apiPixel.post(`pixel/${pixelId}/feature/6/enable`, {
      enabled: ableEficiencia
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=7
    await apiPixel.post(`pixel/${pixelId}/feature/7/enable`, {
      enabled: ableMinimalismo
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=8
    await apiPixel.post(`pixel/${pixelId}/feature/8/enable`, {
      enabled: ablePrevencao
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    setModalIsOpenEvaluation(false);
    window.location.reload();
}
  
export default ableFeature