import { getCookie } from 'cookies-next'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../components/button'
import Pixel from '../components/pixel'
import { AppContext } from '../context/contextapi'
import HaveAPixel from '../Model/haveAPixel'
import styles from '../styles/PixelName.module.css'

const PixelName: NextPage = () => {

  const { pixelName, setPixelName } = useContext(AppContext)
  
  const token = getCookie('nextauth.token');

  const router = useRouter();
  
  useEffect(() => {

    HaveAPixel(token, router);

    if (!token) {
      router.push('/')
      window.location.reload()
    }
  },[token])

  return (
    <div className={styles.container}>
        <div className={styles.data}>
          <Link href="/history">
            <div className={styles.backButton}>
              <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="13.0607" y1="1.06066" x2="4.06066" y2="10.0607" stroke="white" strokeWidth="3"/>
              <line x1="11.9393" y1="20.0607" x2="1.93934" y2="10.0607" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
            </Link>
            <div className={styles.inputTitle}>
                Qual o nome do seu Pixel?
            </div>
              
            <input
                className={styles.input}
                placeholder="Digite o nome"
                type="email"
                value={pixelName}
                onChange={(e)=>setPixelName(e.target.value)}
            />
              
         {(pixelName ==="") ?
            <Button
              onClick={()=>toast.error("Por favor, digite um nome válido")}
              variant="outline"
              color="primary"
              mtop="3rem"
            >
              Próximo passo
            </Button>
            :
            <Link href="/pixelbody">
              <Button
                variant="outline"
                color="primary"
                mtop="3rem"
              >
                Próximo passo
              </Button>
            </Link>}
            <Toaster/>
        </div>
        <div className={styles.pixel}>
          <Pixel
            square={true}
            media={6}
          />
        </div>
    </div>
  )
}

export default PixelName
