import React from "react"
import { NextRouter, useRouter } from "next/router"
import { apiPixel } from "../api/api"


async function GetPixelRedirect(
  username: string,
  router: NextRouter
) {

    await apiPixel.get('/pixel/by-mail/?email=' + username).then(res => {
      console.log(res)
      router.push('/pixellife')
    }).catch(err => {
      console.log(err)
      router.push('/history')
    })
 }
  
 export default GetPixelRedirect