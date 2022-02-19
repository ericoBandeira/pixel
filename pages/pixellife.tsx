import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/PixelLife.module.css'
import Modal from 'react-modal';
import { getCookie, removeCookies } from 'cookies-next';
import jwt from 'jwt-decode'
import  { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
import featuresName from '../Model/featuresName'
import GetPixel from '../Model/getPixel'
import functionFeed from '../Model/functionFeed'
import GetFeed from '../Model/getFeed'
import getAbled from '../Model/getAble'
import ableFeature from '../Model/ableFeature'


const PixelLife: NextPage = () => {
  
  //Alimentação
  const [visibilidade, setVisibilidade ]= useState(1);
  const [correspondencia, setCorrespondencia ]= useState(1);
  const [controle, setControle] = useState(1);
  const [consistencia, setConsistencia] = useState(1);
  const [reconhecimento, setReconhecimento] = useState(1);
  const [eficiencia, setEficiencia] = useState(1);
  const [minimalismo, setMinimalismo] = useState(1);
  const [prevencao, setPrevencao] = useState(1);

  //pixel
  const [media, setMedia] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalIsOpenPixel, setModalIsOpenPixel] = useState(false)
  const [modalIsOpenEvaluation, setModalIsOpenEvaluation ] = useState(false)
  const [wkend, setWkend] = useState(true)
  const [pixelName, setPixelName] = useState('')
  const [square, setSquare] = useState(true)
  const [color, setColor] = useState('')
  const [pixelId, setPixelId] = useState('')

  //Escondido ou não
  const [ableVisibilidade, setAbleVisibilidade ]= useState<boolean>();
  const [ableCorrespondencia, setAbleCorrespondencia ]= useState<boolean>();
  const [ableControle, setAbleControle] = useState<boolean>();
  const [ableConsistencia, setAbleConsistencia] = useState<boolean>();
  const [ableReconhecimento, setAbleReconhecimento] = useState<boolean>();
  const [ableEficiencia, setAbleEficiencia] = useState<boolean>();
  const [ableMinimalismo, setAbleMinimalismo] = useState<boolean>();
  const [ablePrevencao, setAblePrevencao] = useState<boolean>();

  const router = useRouter()

  const [feed, setFeed] = useState([])

  const maxLife = 6

  var today = new Date()

  var dayOfWeek = today.getDay();
  var isWeekend = (dayOfWeek === 5) || (dayOfWeek === 6) || (dayOfWeek === 0) || (dayOfWeek === 1); // 6 = Saturday, 0 = Sunday

  const token = getCookie('nextauth.token');

  function logoutFunction() {
    removeCookies('nextauth.token')
    router.push('/');
  }

  useEffect(() => {
    if (!token) {
      router.push('/')
      window.location.reload()
    }
  },[token])

  useEffect(() => {
    isWeekend ? setWkend(false) : setWkend(true)
  }, [dayOfWeek])
  
  useEffect(() => {
    const user:any = jwt(token as string);
    GetPixel(user.email,setPixelId, setPixelName, setColor, setSquare)
    if (pixelId) {
      GetFeed(pixelId,setMedia,setFeed)
      getAbled(
        pixelId,
        setAbleVisibilidade,
        setAbleCorrespondencia,
        setAbleControle,
        setAbleConsistencia,
        setAbleReconhecimento,
        setAbleEficiencia,
        setAbleMinimalismo,
        setAblePrevencao
      )   
    } 
  }, [pixelId])
  

  return (
    <>
      <div className={styles.container}>
          <div className={styles.data}>
            
              <div className={styles.inputTitle}>
                  Seu Pixel: {pixelName}
              </div>
              {feed.map((res: any) =>
                  res.active &&
                  <>
                    <div className={styles.inputTitle1} key={res.id}>
                      {featuresName(res.name)}:
                    </div>
                    <div className={styles.stars}>
                    {Array.from(Array(res.value), () => {
                        return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
                    })}
                    {Array.from(Array(maxLife-res.value), () => {
                      return <div className={styles.star} style={{backgroundColor: "gray"}}/>
                    })}
                    </div>
                </>
              )}
          
              <button
                className={styles.button1}
                onClick={() => { setModalIsOpen(true) }}
                // disabled={wkend}
              >
                Alimente seu Pixel
              </button>
              <button
                className={styles.CancelButton1}
                onClick={logoutFunction}
              >
                  Logout
                </button>

              <button 
                className={styles.textButton}
                onClick={() => { setModalIsOpenPixel(true) }}
              >
                Acompanhe o Pixel da sua equipe
              </button>
              
              <button 
                className={styles.textButton}
                onClick={() => { setModalIsOpenEvaluation(true) }}
              >
                Edite os campos de avaliação
              </button>
          </div>
          <div className={styles.pixel}>
              <div className={styles.pixelBody} style={{ backgroundColor: color }}>
                <div>
                  <div className={styles.pixelEye} style={!square?{borderRadius:"50%"}:{borderRadius:"0"}}>
                      <div className={styles.pixelPupil} style={!square?{borderRadius:"50%"}:{borderRadius:"0"}}/>
                  </div>
                  <div className={styles.pixelEye} style={!square?{borderRadius:"50%"}:{borderRadius:"0"}}>
                      <div className={styles.pixelPupil} style={!square?{borderRadius:"50%"}:{borderRadius:"0"}}/>
                  </div>
                </div>
                {media === 3 ?
                  <div className={styles.mouth}>
                    <svg width="82" height="25" viewBox="0 0 82 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="79" height="22" fill="black" stroke="black" strokeWidth="3"/>
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
        {ableVisibilidade && <label className={styles.label}>
          Visibilidade:{' '}
          {visibilidade}
          <input type="range" value={visibilidade} min="1" max={maxLife} onChange={(e)=>setVisibilidade(Number(e.target.value))} />
        </label>}

        {ableCorrespondencia && <label className={styles.label}>
          Correspondência:{' '}
          {correspondencia}
          <input type="range" value={ correspondencia } min="1" max={maxLife}onChange={(e)=>setCorrespondencia(Number(e.target.value))}/>
        </label>}

        {ableControle && <label className={styles.label}>
          Controle:{' '}
          {controle}
          <input type="range" value={ controle } min="1" max={maxLife} onChange={(e)=>setControle(Number(e.target.value))}/>
        </label>}

        {ableConsistencia && <label className={styles.label}>
          Consistência:{' '}
          {consistencia}
          <input type="range" value={ consistencia } min="1" max={maxLife} onChange={(e)=>setConsistencia(Number(e.target.value))}/>
        </label>}

        {ableReconhecimento && <label className={styles.label}>
          Reconhecimento:{' '}
          {reconhecimento}
          <input type="range" value={ reconhecimento } min="1" max={maxLife} onChange={(e)=>setReconhecimento(Number(e.target.value))}/>
        </label>}

        {ableEficiencia && <label className={styles.label}>
          Eficiência de uso:{' '}
          {eficiencia}
          <input type="range" value={ eficiencia } min="1" max={maxLife} onChange={(e)=>setEficiencia(Number(e.target.value))}/>
        </label>}

        {ableMinimalismo && <label className={styles.label}>
          Minimalismo:{' '}
          {minimalismo}
          <input type="range" value={ minimalismo } min="1" max={maxLife} onChange={(e)=>setMinimalismo(Number(e.target.value))}/>
        </label>}

        {ablePrevencao && <label className={styles.label}>
          Prevenção de erros:{' '}
          {prevencao}
          <input type="range" value={ prevencao } min="1" max={maxLife} onChange={(e)=>setPrevencao(Number(e.target.value))}/>
        </label>}
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
              onClick={()=>functionFeed(
                pixelId,
                visibilidade,
                correspondencia,
                controle,
                consistencia,
                reconhecimento,
                eficiencia,
                minimalismo,
                prevencao,
                setModalIsOpen,
                setMedia,
                setFeed
              )}
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
                <rect x="1.5" y="1.5" width="79" height="22" fill="black" stroke="black" strokeWidth="3"/>
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
      

     <Modal
        isOpen={modalIsOpenEvaluation}
        className={styles.modal}
      >
      <span>
        Qual desses tipos de avaliação você usa?
      </span>

        <label className={styles.labelCheckbox}>
          Visibilidade
          <input
            type="checkbox"
            checked={ableVisibilidade}
            onChange={(e) => {
              setAbleVisibilidade(!ableVisibilidade);
            }}
          />
        </label>

        <label className={styles.labelCheckbox}>
          Correspondência
          <input
            type="checkbox"
            checked={ableCorrespondencia}
            onChange={(e) => {
              setAbleCorrespondencia(!ableCorrespondencia);
            }} />
        </label>

        <label className={styles.labelCheckbox}>
          Controle
          <input
            type="checkbox"
            checked={ableControle}
            onChange={(e) => {
              setAbleControle(!ableControle);
            }} />
        </label>

        <label className={styles.labelCheckbox}>
          Consistência
          <input
            type="checkbox"
            checked={ableConsistencia}
            onChange={(e) => {
              setAbleConsistencia(!ableConsistencia);
            }} />
        </label>

        <label className={styles.labelCheckbox}>
          Reconhecimento
          <input
            type="checkbox"
            checked={ableReconhecimento}
            onChange={(e) => {
              setAbleReconhecimento(!ableReconhecimento);
            }} />
        </label>

        <label className={styles.labelCheckbox}>
          Eficiência de uso
          <input
            type="checkbox"
            checked={ableEficiencia}
            onChange={(e) => {
              setAbleEficiencia(!ableEficiencia);
            }} />
        </label>

        <label className={styles.labelCheckbox}>
          Minimalismo
          <input
            type="checkbox"
            checked={ableMinimalismo}
            onChange={(e) => {
              setAbleMinimalismo(!ableMinimalismo);
            }} />
        </label>

        <label className={styles.labelCheckbox}>
          Prevenção de erros
          <input
            type="checkbox"
            checked={ablePrevencao}
            onChange={(e) => {
              setAblePrevencao(!ablePrevencao);
            }} />
        </label>
        
      <div className={styles.buttonDiv}>
        <button
          className={styles.CancelButton}
            onClick={() => {
              setModalIsOpenEvaluation(false);
            }}
          >
              Cancelar
          </button>
          <Link href="/pixellife">
            <button
              className={styles.button}
              onClick={() => {
                ableFeature(
                  pixelId,
                  ableVisibilidade,
                  ableCorrespondencia,
                  ableControle,
                  ableConsistencia,
                  ableReconhecimento,
                  ableEficiencia,
                  ableMinimalismo,
                  ablePrevencao,
                  setModalIsOpenEvaluation
                );
              }}
            >
              Alterar
            </button>
          </Link>
        </div>
      </Modal>
      <Toaster/>
    </>
  )
}

export default PixelLife
