import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/History.module.css';

const Home: NextPage = () => {

  const [page,setPage] = useState(0)

  return (
    <div className={styles.container}>
     {page ===0 && <div className={styles.textContainer}>
        Bem vindo ao Pixel!<br/>
      </div>}
      {page === 1 && <div className={styles.textContainer}>
        O Pixel é seu animal de estimação virtual<br />
        para a matéria de IHC este semestre
      </div>}
      {page === 2 && <div className={styles.textContainer}>
        Com ele será possível se avaliar em relação às <br />
        caracteísticas do seu projeto de IHC este semestre <br/>        
      </div>}
      {page === 3 && <div className={styles.textContainer}>
        Alimente seu Pixel toda semana para que ele <br />
        e seu projeto evoluirem sempre!
      </div>}
      {page === 4 && <div className={styles.textContainer}>
       E ai? <br /> Vamos criar o seu Pixel?
      </div>}
      <div className={styles.pagination}>
        <button
          className={styles.button}
          onClick={() =>{
            if (page > 0)
              setPage(page-1)
          }}
        >
          Volte
        </button >
        <div>
          {page+1}/5
        </div>
        <button
          className={styles.button}
           onClick={() =>{
            if (page < 4)
              setPage(page+1)
          }}
        >
          {page === 4 ?
            <Link href="/pixelname">
              Finalizar
            </Link>
          :
            <>
              Próximo
            </>
          }
          
        </button >
      </div>
    </div>
  )
}

export default Home
