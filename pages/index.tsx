import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

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

      <button 
        className={styles.button}
        onClick={() => {
          console.log(login);
          console.log(password);
        }}
      >
        Entrar
      </button>
    </div>
  )
}

export default Home
