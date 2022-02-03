import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import styles from '../styles/PixelBody.module.css'
import { GithubPicker } from 'react-color'
import Link from 'next/link'
import { AppContext } from '../context/contextapi'
import Modal from 'react-modal';

const Home: NextPage = () => {

  const [openColorButtom, setOpenColorButton] = useState(false)

  const {square, setSquare, circle, setCircle, color, setColor, setFirstAccess} = useContext(AppContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleOpenButton() {
    setOpenColorButton(!openColorButtom)
  }

  function handlaCloseButton() {
    setOpenColorButton(false)
  }

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
              

            <button
            className={styles.button}
            onClick={() => { setModalIsOpen(true) }}
            >
                Finalizar
          </button>
        </div>
        <div className={styles.pixel}>
              <div className={styles.pixelBody} 
              style={{backgroundColor:color}}>
                <div>
                    <div className={styles.pixelEye} style={circle?{borderRadius:"50%"}:{borderRadius:"0"}}>
                        <div className={styles.pixelPupil} style={circle?{borderRadius:"50%"}:{borderRadius:"0"}}/>
                    </div>
                    <div className={styles.pixelEye} style={circle?{borderRadius:"50%"}:{borderRadius:"0"}}>
                        <div className={styles.pixelPupil} style={circle?{borderRadius:"50%"}:{borderRadius:"0"}}/>
                    </div>
                  </div>
                  <div className={styles.mouth}>
                    <svg width="117" height="48" viewBox="0 0 117 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15.5" y="15.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                    <rect x="75.5" y="15.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                    <rect x="89.5" y="1.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                    <rect x="1.5" y="1.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                    <rect x="30.5" y="24.5" width="58" height="22" fill="black" stroke="black" strokeWidth="3"/>
                    </svg>
                  </div>
            </div>
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
            <button
              className={styles.CancelButton}
              onClick={() => { setModalIsOpen(false) }}
              >
                  Cancelar
              </button>
              <Link href="/pixellife">
                <button
                  className={styles.button}
                  onClick={()=>setFirstAccess(false)}
                >
                  Finalizar
                </button>
              </Link>
          </div>
        </Modal>
    </>
  )
}

export default Home
