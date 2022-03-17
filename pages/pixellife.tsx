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
import GetFeatureId from '../Model/getFeatureId';
import Button from '../components/button';
import Pixel from '../components/pixel';
import Star from '../components/star';


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

  //Feature id
  const [idVisibilidade, setIdVisibilidade ]= useState<number>();
  const [idCorrespondencia, setIdCorrespondencia ]= useState<number>();
  const [idControle, setIdControle] = useState<number>();
  const [idConsistencia, setIdConsistencia] = useState<number>();
  const [idReconhecimento, setIdReconhecimento] = useState<number>();
  const [idEficiencia, setIdEficiencia] = useState<number>();
  const [idMinimalismo, setIdMinimalismo] = useState<number>();
  const [idPrevencao, setIdPrevencao] = useState<number>();

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
    GetPixel(user.registration,setPixelId, setPixelName, setColor, setSquare)
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
      GetFeatureId(
        pixelId,
        setIdVisibilidade,
        setIdCorrespondencia,
        setIdControle,
        setIdConsistencia,
        setIdReconhecimento,
        setIdEficiencia,
        setIdMinimalismo,
        setIdPrevencao,
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
                  <Star
                    id={res.id}
                    value={res.value}
                    maxLife={maxLife}
                  >
                    {featuresName(res.name)}
                  </Star>
              )}
          
              <Button
                onClick={() => {setModalIsOpen(true)}}
                variant="outline"
                // disabled={wkend}
                color="primary"
                mtop="2rem"
              >
                Alimente seu Pixel
              </Button>
          
              <Button
                onClick={logoutFunction}
                variant="outline"
                color="warning"
                mtop="1rem"
              >
                Logout
              </Button>

              <Button
                onClick={() => { setModalIsOpenPixel(true) }}
                variant="text"
                mtop="0.5rem"
              >
                Acompanhe o Pixel da sua equipe
              </Button>

              <Button
                onClick={() => { setModalIsOpenEvaluation(true) }}
                variant="text"
                mtop="0.5rem"
              >
                Edite os campos de avaliação
              </Button>
          </div>
          <div className={styles.pixel}>
          <Pixel
            color={color}
            square={square}
            media={media}
          />
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
        <Button
          variant="outline"
          color="warning"
          onClick={() => { setModalIsOpen(false) }}
          mtop="2rem"
          >
              Cancelar
          </Button>
          <Link href="/pixellife">
          <Button
            variant="outline"
            color="primary"
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
              mtop="2rem"
              disabled = {wkend}
          >
            Alimentar
          </Button>
          </Link>
        </div>
      </Modal>
      
      <Modal
        isOpen={modalIsOpenPixel}
        className={styles.modal}
      >
        <div className={styles.pixelBody} style={{ backgroundColor: "#00F3F3", marginTop:"3rem"}}>
           <Pixel/>
        </div>
      
        <div className={styles.pixelBody} style={{paddingBottom:"2rem"}}>
          <Button
            variant="outline"
            color="primary"
            onClick={() => { setModalIsOpenPixel(false) }}
            mtop="2rem"
          >
              Voltar
          </Button>
        </div>
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
          <Button
            variant="outline"
            color="warning"
            onClick={() => {
              setModalIsOpenEvaluation(false);
            }}
            mtop="2rem"
          >
              Cancelar
          </Button>
          <Link href="/pixellife">
            <Button
              variant="outline"
              color="primary"
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
                  setModalIsOpenEvaluation,
                  idVisibilidade,
                  idCorrespondencia,
                  idControle,
                  idConsistencia,
                  idReconhecimento,
                  idEficiencia,
                  idMinimalismo,
                  idPrevencao,
                );
              }}
              mtop="2rem"
            >
              Alterar
            </Button>
          </Link>
        </div>
      </Modal>
      <Toaster/>
    </>
  )
}

export default PixelLife
