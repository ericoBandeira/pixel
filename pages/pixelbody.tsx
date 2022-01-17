import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import styles from '../styles/PixelBody.module.css'
import { GithubPicker } from 'react-color'
import Link from 'next/link'
import { AppContext } from '../context/contextapi'

const Home: NextPage = () => {

  const [openColorButtom, setOpenColorButton] = useState(false)

  const {square, setSquare, circle, setCircle, color, setColor} = useContext(AppContext)


  function handleOpenButton() {
    setOpenColorButton(!openColorButtom)
  }

  function handlaCloseButton() {
    setOpenColorButton(false)
  }

  return (
    <div className={styles.container}>
        <div className={styles.data}>
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
              <div style={{margin: 0}}>
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
              

          <Link href="/pixellife">
            <button
            className={styles.button}
            onClick={() => {}}
            >
                Finalizar
          </button>
          </Link>
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
