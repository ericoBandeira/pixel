import React from 'react'
import { apiPixel } from '../api/api'

async function GetPixel(
    email: string,
    setPixelId: React.Dispatch<React.SetStateAction<string>>,
    setPixelName: React.Dispatch<React.SetStateAction<string>>,
    setColor: React.Dispatch<React.SetStateAction<string>>,
    setSquare: React.Dispatch<React.SetStateAction<boolean>>
) {
    await apiPixel.get('/pixel/by-user/?registration=' + email).then(res => {
      setPixelName(res.data.name)
      setSquare(res.data.eye === "Quadrado")
      setColor(res.data.color)
      setPixelId(res.data.id)
    }).catch(err => {
      console.log(err)
    })
}
  
export default GetPixel