import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import styles from '../styles/PixelName.module.css'

const Home: NextPage = () => {

    const [pixelName, setPixelName] = useState('')

  return (
    <div className={styles.container}>
        <div className={styles.data}>
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
            <button 
            className={styles.button}
            onClick={()=>toast.error("Por favor, digite um nome válido")}
            >
                Próximo passo
            </button>
            
            :
            <Link href="/pixelbody">
            <button 
                className={styles.button}
            >
                Próximo passo
            </button>
            </Link>}
            <Toaster/>

        </div>
        <div className={styles.pixel}>
              <div className={styles.pixelBody}>
                <div>
                    <div className={styles.pixelEye}>
                        <div className={styles.pixelPupil}/>
                    </div>
                    <div className={styles.pixelEye}>
                        <div className={styles.pixelPupil}/>
                    </div>
                  </div>
                  <div className={styles.mouth}>
                    <svg width="117" height="48" viewBox="0 0 117 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15.5" y="15.5" width="26" height="25" fill="black" stroke="black" stroke-width="3"/>
                    <rect x="75.5" y="15.5" width="26" height="25" fill="black" stroke="black" stroke-width="3"/>
                    <rect x="89.5" y="1.5" width="26" height="25" fill="black" stroke="black" stroke-width="3"/>
                    <rect x="1.5" y="1.5" width="26" height="25" fill="black" stroke="black" stroke-width="3"/>
                    <rect x="30.5" y="24.5" width="58" height="22" fill="black" stroke="black" stroke-width="3"/>
                    </svg>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Home
