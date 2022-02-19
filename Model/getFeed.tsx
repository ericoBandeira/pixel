import React from "react";
import { apiPixel } from "../api/api";

async function GetFeed(
    pixelId: string,
    setMedia: React.Dispatch<React.SetStateAction<number>>,
    setFeed: React.Dispatch<React.SetStateAction<never[]>>
) {
    var index = 0;
    var activeNumber = 0;
    await apiPixel.get(`pixel/${pixelId}/features`).then(res => {

      setFeed(res.data)

      res.data.map((r: any) => {
        if (r.active) {
          index += r.value;
          activeNumber++
        }
        setMedia(index / activeNumber);
        })
      }).catch((err: any) => {
        console.log(err)
      })
    
  }
    
  export default GetFeed