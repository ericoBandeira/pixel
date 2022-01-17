import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/PixelBody.module.css'
import { ChromePicker } from 'react-color'

const Home: NextPage = () => {

  const [square, setSquare] = useState(true)
  const [circle, setCircle] = useState(false)
  const [color, setColor] = useState(false)

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
              <input onChange={() => { setSquare(true); setCircle(false);}} type="radio" value="Square" name="eye" />
                Quadrados
              </label>
                      
              <label className={styles.labelText}>
                <input onChange={() => { setSquare(false); setCircle(true);}}  type="radio" value="Circle" name="eye" />
                Redondos
              </label>
          </div>
          
          <div className={styles.inputTitle1} style={{marginTop: "1rem"}}>
                  Cor do seu pixel:    
          </div>
          <button
            className={styles.buttonColor}

          />

            </div>
              

              
            <button
            className={styles.button}
            onClick={() => {}}
            >
                Finalizar
            </button>
        </div>
        <div className={styles.pixel}>
              <div className={styles.pixelBody}>
                <div>
                    <div className={styles.pixelEye} style={circle?{borderRadius:"50%"}:{}}>
                        <div className={styles.pixelPupil} style={circle?{borderRadius:"50%"}:{}}/>
                    </div>
                    <div className={styles.pixelEye} style={circle?{borderRadius:"50%"}:{}}>
                        <div className={styles.pixelPupil} style={circle?{borderRadius:"50%"}:{}}/>
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
