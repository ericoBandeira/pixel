import type { NextPage } from 'next'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/contextapi'
import styles from '../styles/PixelLife.module.css'
import Modal from 'react-modal';
import { getCookie } from 'cookies-next';
import jwt from 'jwt-decode'
import { apiPixel } from '../api/api'
import toast, { Toaster } from 'react-hot-toast'


const Home: NextPage = () => {
  
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


  const [feed, setFeed] = useState([])

  const features = ["Visibilidade", "Correspondência","Controle","Consistência","Reconhecimento","Eficiência de uso","Minimalismo","Prevenção de erros"]

  const maxLife = 6

  var today = new Date()

  var dayOfWeek = today.getDay();
  var isWeekend = (dayOfWeek === 5) || (dayOfWeek  === 6) || (dayOfWeek  === 0) || (dayOfWeek  === 1); // 6 = Saturday, 0 = Sunday
  
  async function GetPixel(email:any) {
    await apiPixel.get('/pixel/by-mail/?email=' + email).then(res => {
      setPixelName(res.data.name)
      setSquare(res.data.eye === "Quadrado")
      setColor(res.data.color)
      setPixelId(res.data.id)
    }).catch(err => {
      console.log(err)
    })
  }

  async function GetFeed() {
    var index = 0;
    var activeNumber = 0;
    await apiPixel.get(`pixel/${pixelId}/features`).then(res => {

      setFeed(res.data)

      res.data.map((r: any) => {
        if (r.active) {
          index += r.value;
          activeNumber++
        }
        setMedia(index / activeNumber);
        })
      }).catch((err: any) => {
        console.log(err)
      })
    
    }

  async function functionFeed() {
    const token = getCookie('nextauth.token');
    await apiPixel.post(`pixel/${pixelId}/feed`, {
        visibility: visibilidade,
        match: correspondencia,
        control: controle,
        consistence: consistencia,
        recognition: reconhecimento,
        efficiency: eficiencia,
        minimalism: minimalismo,
        error_prevention: prevencao
      }, {
      headers: {
        'X-Access-Token': token as string
      }
    }).then(res => {
      toast.success('Pixel Alimentado com sucesso!')
      setModalIsOpen(false)
    }).catch(err => {
      console.log(err)
    })
  }

  async function ableFeature() {
    const token = getCookie('nextauth.token');

    //id=1
    await apiPixel.post(`pixel/${pixelId}/feature/1/enable`, {
      enabled: ableVisibilidade
    }, {
      headers: {
        'X-Access-Token': token as string
      }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=2
    await apiPixel.post(`pixel/${pixelId}/feature/2/enable`, {
      enabled: ableCorrespondencia
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=3
    await apiPixel.post(`pixel/${pixelId}/feature/3/enable`, {
      enabled: ableControle
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=4
    await apiPixel.post(`pixel/${pixelId}/feature/4/enable`, {
      enabled: ableConsistencia
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=5
    await apiPixel.post(`pixel/${pixelId}/feature/5/enable`, {
      enabled: ableReconhecimento
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=6
    await apiPixel.post(`pixel/${pixelId}/feature/6/enable`, {
      enabled: ableEficiencia
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=7
    await apiPixel.post(`pixel/${pixelId}/feature/7/enable`, {
      enabled: ableMinimalismo
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    //id=8
    await apiPixel.post(`pixel/${pixelId}/feature/8/enable`, {
      enabled: ablePrevencao
    }, {
    headers: {
      'X-Access-Token': token as string
    }
    }).then(res => {
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

    // window.location.reload();
  }

  async function getAbled(){
    await apiPixel.get(`pixel/${pixelId}/features`).then(res => {
       res.data.map((r: any) => {
         if(r.id === 1) {
           setAbleVisibilidade(r.active);
         } else if(r.id === 2){
           setAbleCorrespondencia(r.active);
         } else if (r.id === 3) {
           setAbleControle(r.active);  
         }else if (r.id === 4) {
           setAbleConsistencia(r.active);
         }else if (r.id === 5) {
           setAbleReconhecimento(r.active);
         }else if (r.id === 6) {
           setAbleEficiencia(r.active);
         }else if (r.id === 7) {
           setAbleMinimalismo(r.active);
         }else if (r.id === 8) {
           setAblePrevencao(r.active);
         }
        })
        console.log(res)
      }).catch((err: any) => {
        console.log(err)
      })
  }

  useEffect(() => {
    isWeekend ? setWkend(false) : setWkend(true)
  }, [dayOfWeek])
  
  useEffect(() => {
    const token = getCookie('nextauth.token');
    const user:any = jwt(token as string);
    GetPixel(user.email)
    if (pixelId) {
      GetFeed()
      getAbled()   
    } 
  }, [pixelId])
  

  return (
    <>
      <div className={styles.container}>
          <div className={styles.data}>
            
              <div className={styles.inputTitle}>
                  Seu Pixel: {pixelName}
              </div>
              {feed.map((res: any, index) =>
                  res.active &&
                  <>
                    <div className={styles.inputTitle1} key={res.id}>
                      {features[index]}:
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
              onClick={functionFeed}
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
                ableFeature();
                setModalIsOpenEvaluation(false);
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

export default Home
