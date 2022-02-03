import type { NextPage } from 'next'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { AppContext } from '../context/contextapi'
import styles from '../styles/PixelLife.module.css'
import Modal from 'react-modal';

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
    prevencao,
    setVisibilidade,
    setCorrespondencia,
    setControle,
    setConsistencia,
    setReconhecimento,
    setEficiencia,
    setMinimalismo,
    setPrevencao
  } = useContext(AppContext)

  const media = (visibilidade + correspondencia + controle + reconhecimento + consistencia + eficiencia + minimalismo + prevencao) / 8
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalIsOpenPixel, setModalIsOpenPixel] = useState(false)

  const maxLife = 6

  return (
    <>
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
            {Array.from(Array(maxLife-visibilidade), () => {
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
            {Array.from(Array(maxLife-correspondencia), () => {
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
            {Array.from(Array(maxLife-controle), () => {
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
            {Array.from(Array(maxLife-consistencia), () => {
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
            {Array.from(Array(maxLife-reconhecimento), () => {
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
            {Array.from(Array(maxLife-eficiencia), () => {
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
            {Array.from(Array(maxLife-minimalismo), () => {
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
            {Array.from(Array(maxLife-prevencao), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
              })}
            </div>
        
            <button
              className={styles.button1}
              onClick={() => { setModalIsOpen(true) }}
              disabled={false}
            >
              Alimente seu Pixel
            </button>
            <Link href="/">
            <button className={styles.CancelButton1} >
                Logout
              </button>
            </Link>

            <button 
              className={styles.textButton}
              onClick={() => { setModalIsOpenPixel(true) }}
            >
              Acompanhe o Pixel da sua equipe
            </button>
        </div>
        <div className={styles.pixel}>
            <div className={styles.pixelBody} style={{ backgroundColor: color }}>
                <div>
                    <div className={styles.pixelEye} style={circle?{borderRadius:"50%"}:{borderRadius:"0"}}>
                        <div className={styles.pixelPupil} style={circle?{borderRadius:"50%"}:{borderRadius:"0"}}/>
                    </div>
                    <div className={styles.pixelEye} style={circle?{borderRadius:"50%"}:{borderRadius:"0"}}>
                        <div className={styles.pixelPupil} style={circle?{borderRadius:"50%"}:{borderRadius:"0"}}/>
                    </div>
                  </div>
                  {media === 3 ?
                    <div className={styles.mouth}>
                      <svg width="82" height="25" viewBox="0 0 82 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.5" y="1.5" width="79" height="22" fill="black" stroke="black" stroke-width="3"/>
                      </svg>
                    </div>
                  : <div className={styles.mouth} style={media < 3 ? { transform: "rotate(180deg)" } : {}}>
                      <svg width="117" height="48" viewBox="0 0 117 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15.5" y="15.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                      <rect x="75.5" y="15.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                      <rect x="89.5" y="1.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                      <rect x="1.5" y="1.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                      <rect x="30.5" y="24.5" width="58" height="22" fill="black" stroke="black" strokeWidth="3"/>
                      </svg>
                    </div>}
            </div>
        </div>
    </div>
     <Modal
        isOpen={modalIsOpen}
        className={styles.modal}
      >
      <span>
        Dê sua nota para os aspectos gerais do projeto
        </span>
        <label className={styles.label}>
          Visibilidade
          <input type="number" value={visibilidade} min="0" max={maxLife} onChange={(e)=>setVisibilidade(Number(e.target.value))} />
        </label>

        <label className={styles.label}>
          Correspondência
          <input type="number" value={ correspondencia } min="0" max={maxLife}onChange={(e)=>setCorrespondencia(Number(e.target.value))}/>
        </label>

        <label className={styles.label}>
          Controle
          <input type="number" value={ controle } min="0" max={maxLife} onChange={(e)=>setControle(Number(e.target.value))}/>
        </label>

        <label className={styles.label}>
          Consistência
          <input type="number" value={ consistencia } min="0" max={maxLife} onChange={(e)=>setConsistencia(Number(e.target.value))}/>
        </label>

        <label className={styles.label}>
          Reconhecimento
          <input type="number" value={ reconhecimento } min="0" max={maxLife} onChange={(e)=>setReconhecimento(Number(e.target.value))}/>
        </label>

        <label className={styles.label}>
          Eficiência de uso
          <input type="number" value={ eficiencia } min="0" max={maxLife} onChange={(e)=>setEficiencia(Number(e.target.value))}/>
        </label>

        <label className={styles.label}>
          Minimalismo
          <input type="number" value={ minimalismo } min="0" max={maxLife} onChange={(e)=>setMinimalismo(Number(e.target.value))}/>
        </label>

        <label className={styles.label}>
          Prevenção de erros
          <input type="number" value={ prevencao } min="0" max={maxLife} onChange={(e)=>setPrevencao(Number(e.target.value))}/>
        </label>
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
              onClick={() => {}}
            >
              Alimentar
            </button>
          </Link>
        </div>
      </Modal>
      
      <Modal
        isOpen={modalIsOpenPixel}
        className={styles.modal}
      >
        <div className={styles.pixelBody} style={{ backgroundColor: "#00F3F3", marginTop:"3rem"}}>
            <div>
                <div className={styles.pixelEye} >
                    <div className={styles.pixelPupil} />
                </div>
                <div className={styles.pixelEye}>
                    <div className={styles.pixelPupil}/>
                </div>
              </div>
              {media === 3 ?
              <div className={styles.mouth}>
                <svg width="82" height="25" viewBox="0 0 82 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="79" height="22" fill="black" stroke="black" stroke-width="3"/>
                </svg>
              </div>
              : <div className={styles.mouth} style={media < 3 ? { transform: "rotate(180deg)" } : {}}>
                <svg width="117" height="48" viewBox="0 0 117 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15.5" y="15.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                <rect x="75.5" y="15.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                <rect x="89.5" y="1.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                <rect x="1.5" y="1.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
                <rect x="30.5" y="24.5" width="58" height="22" fill="black" stroke="black" strokeWidth="3"/>
                </svg>
              </div>}
        </div>
      
        <button
          className={styles.button}
          onClick={() => { setModalIsOpenPixel(false) }}
          style={{marginBottom: "3rem"}}
          >
              Voltar
          </button>
      </Modal>  
    </>
  )
}

export default Home
