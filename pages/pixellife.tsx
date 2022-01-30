import type { NextPage } from 'next'
import { useContext } from 'react'
import { AppContext } from '../context/contextapi'
import styles from '../styles/PixelLife.module.css'

const Home: NextPage = () => {


  const {
    pixelName,
    circle,
    color,
    visibilidade,
    correspondencia,
    controle,
    reconhecimento,
    consistencia,
    eficiencia,
    minimalismo,
    prevencao
  } = useContext(AppContext)

  const media = (visibilidade + correspondencia + controle + reconhecimento + consistencia + eficiencia + minimalismo + prevencao)/8
  

  return (
    <div className={styles.container}>
        <div className={styles.data}>
            <div className={styles.inputTitle}>
                Seu Pixel: {pixelName}
            </div>
            <div className={styles.inputTitle1}>
               Visibilidade:
            </div>
            <div className={styles.stars}>
             {Array.from(Array(visibilidade), () => {
                return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
             })}
            {Array.from(Array(6-visibilidade), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
              })}
            </div>
            <div className={styles.inputTitle1}>
               Correspondência:
            </div>
            <div className={styles.stars}>
              {Array.from(Array(correspondencia), () => {
                return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
             })}
            {Array.from(Array(6-correspondencia), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
              })}
            </div>
            <div className={styles.inputTitle1}>
               Controle:
            </div>
            <div className={styles.stars}>
              {Array.from(Array(controle), () => {
                return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
             })}
            {Array.from(Array(6-controle), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
              })}
            </div>
            <div className={styles.inputTitle1}>
               Consistência:
            </div>
            <div className={styles.stars}>
              {Array.from(Array(consistencia), () => {
                return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
             })}
            {Array.from(Array(6-consistencia), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
              })}
            </div>
            <div className={styles.inputTitle1}>
               Reconhecimento:
            </div>
            <div className={styles.stars}>
              {Array.from(Array(reconhecimento), () => {
                return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
             })}
            {Array.from(Array(6-reconhecimento), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
              })}
            </div>
            <div className={styles.inputTitle1}>
               Eficiência de uso:
            </div>
            <div className={styles.stars}>
              {Array.from(Array(eficiencia), () => {
                return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
             })}
            {Array.from(Array(6-eficiencia), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
              })}
            </div>
            <div className={styles.inputTitle1}>
               Minimalismo:
            </div>
            <div className={styles.stars}>
              {Array.from(Array(minimalismo), () => {
                return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
             })}
            {Array.from(Array(6-minimalismo), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
              })}
            </div>
            <div className={styles.inputTitle1}>
               Prevenção de erros:
            </div>
            <div className={styles.stars}>
              {Array.from(Array(prevencao), () => {
                return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
             })}
            {Array.from(Array(6-prevencao), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
              })}
            </div>
        
            <div className={styles.inputTitle2}>
               Média: {media}
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
                  <div className={styles.mouth} style={media<3?{transform:"rotate(180deg)"}:{}}>
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
  )
}

export default Home
