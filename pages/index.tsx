import type { NextPage } from 'next'
import Link from 'next/link'
import { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AppContext } from '../context/contextapi'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')


  const { firstAccess } = useContext(AppContext)

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Pixel <p>.</p>
      </div>
      <input
        className={styles.input}
        placeholder="Login"
        type="email"
        value={login}
        onChange={(e)=>setLogin(e.target.value)}
      />
      <input
        className={styles.input}
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      {(login !== 'teste1' && password !== '123456') ?
        <button 
          className={styles.button}
          onClick={()=>toast.error("Usuário ou senha inválido")}
        >
          Entrar
        </button>
        
        :
        <Link href={firstAccess?"/pixelname":"/pixellife"}>
          <button 
            className={styles.button}
          >
            Entrar
          </button>
        </Link>}
        <Toaster />
    </div>
  )
}

export default Home
