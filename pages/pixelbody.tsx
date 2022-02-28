import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import styles from '../styles/PixelBody.module.css'
import { GithubPicker } from 'react-color'
import Link from 'next/link'
import { AppContext } from '../context/contextapi'
import Modal from 'react-modal';
import { Toaster } from 'react-hot-toast'
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router'
import SetPixel from '../Model/setPixel'
import HaveAPixel from '../Model/haveAPixel'
import Button from '../components/button'
import Pixel from '../components/pixel'

const PixelBody: NextPage = () => {

  const [openColorButtom, setOpenColorButton] = useState(false)

  const {square, setSquare, circle, setCircle, color, setColor, pixelName} = useContext(AppContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const token = getCookie('nextauth.token');

  const router = useRouter();

  function handleOpenButton() {
    setOpenColorButton(!openColorButtom)
  }

  function handlaCloseButton() {
    setOpenColorButton(false)
  }  
  
  useEffect(() => {

    HaveAPixel(token, router);

    if (!token) {
      router.push('/')
      window.location.reload()
    }
  },[token])

  return (
    <>
      <div className={styles.container}>
          <div className={styles.data}>
            <Link href="/pixelname">
              <div className={styles.backButton}>
                <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="13.0607" y1="1.06066" x2="4.06066" y2="10.0607" stroke="white" strokeWidth="3"/>
                <line x1="11.9393" y1="20.0607" x2="1.93934" y2="10.0607" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              </Link>
              <div className={styles.inputTitle}>
              Personalize seu Pixel
              </div>
                
              <div>
                  <div className={styles.inputTitle1}>
                    Formato dos olhos:    
                    </div>
              <div className={styles.radioInput}>
                <label className={styles.labelText}>
                <input onChange={() => { setSquare(true); setCircle(false); }} type="radio" value="Square" name="eye" checked={square}/>
                  Quadrados
                </label>
                        
                <label className={styles.labelText}>
                <input onChange={() => { setSquare(false); setCircle(true);}}  type="radio" value="Circle" name="eye" checked={circle} />
                  Redondos
                </label>
            </div>
            
            <div className={styles.inputTitle1} style={{marginTop: "1rem"}}>
                    Cor do seu pixel:    
            </div>
                <div style={{marginLeft: "0.6rem"}}>
                  <button
                    className={styles.buttonColor}
                onClick={handleOpenButton}
                style={{backgroundColor:color}}
                />
                {openColorButtom ? <div className={styles.popover}>
                <div className={ styles.cover } onClick={ handlaCloseButton }/>
                <GithubPicker onChange={(e)=>{setColor(e.hex)}}/>
              </div> : null }
                <div>
                </div>
              </div>

            </div>
               
            <Button
              onClick={() => { setModalIsOpen(true) }}
              variant="outline"
              color="primary"
              mtop="5rem"
            >
                  Finalizar
            </Button>
          </div>
          <div className={styles.pixel}>
              <Pixel
                color={color}
                square={square}
                media={6}
              />
          </div>
      </div>
      <Modal 
        isOpen={modalIsOpen}
        className={styles.modal}
      >
        <span>
          O seu pixel não poderá ter suas características alteradas, <br/> tem certeza que deseja finalizar?
        </span>
        <div className={styles.buttonDiv}>
          <Button
            onClick={() => { setModalIsOpen(false) }}
            variant="outline"
            color="warning"
            mtop="3rem"
          >
              Cancelar
          </Button>
        
          <Button
            onClick={()=>SetPixel(pixelName, square, color, router)}
            variant="outline"
            color="primary"
            mtop="3rem"
          >
                Finalizar
          </Button>
        </div>
      </Modal>
      <Toaster />
    </>
  )
}

export default PixelBody
