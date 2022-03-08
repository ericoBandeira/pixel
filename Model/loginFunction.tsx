import { NextRouter } from "next/router";
import { setCookie } from "nookies";
import toast from "react-hot-toast";
import { apiPixel } from "../api/api"
import GetPixelRedirect from "./getPixelRedirect";

async function loginFunction(
    username: string,
    password: string,
    router: NextRouter
) {
    console.log('teste1')
     await apiPixel.post('/login',{
      registration: username,
      password: password
     }).then(res => {

    const token = res.data.token
    
    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 30 * 1, // 0.5 hour
    })
      
    GetPixelRedirect(username, router);
    
    }).catch(err => {
      console.log(err)
      toast.error("Usuário ou senha incorreto")
  })
}
  
export default loginFunction