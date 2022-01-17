import type { NextPage } from 'next'
import { useContext } from 'react'
import { AppContext } from '../context/contextapi'
import styles from '../styles/PixelLife.module.css'

const Home: NextPage = () => {


  const {pixelName, circle, color} = useContext(AppContext)

  return (
    <div className={styles.container}>
        <div className={styles.data}>
            <div className={styles.inputTitle}>
                Seu Pixel: {pixelName}
            </div>
            <div className={styles.inputTitle1}>
               Fome (acessibilidade):
            </div>
            <div className={styles.stars}>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "grey"}}/>
                <div className={styles.star} style={{backgroundColor: "grey"}}/>
                <div className={styles.star} style={{backgroundColor: "grey"}}/>
            </div>
            <div className={styles.inputTitle1}>
               Sede (usabilidade):
            </div>
            <div className={styles.stars}>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "grey"}}/>
            </div>
            <div className={styles.inputTitle1}>
               Saúde (Gestalt):
            </div>
            <div className={styles.stars}>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                <div className={styles.star} style={{backgroundColor: "grey"}}/>
                <div className={styles.star} style={{backgroundColor: "grey"}}/>
              </div>
              
            <div className={styles.inputTitle2}>
               Média: 4
            </div>

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
