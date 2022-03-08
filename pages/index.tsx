import type { NextPage } from 'next'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import styles from '../styles/Home.module.css'
import loginFunction from '../Model/loginFunction'
import { useRouter } from 'next/router'
import Button from '../components/button'

const Home: NextPage = () => {

  const router = useRouter();

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Pixel <p>.</p>
      </div>
        <input
          className={styles.input}
          placeholder="Login"
          name="username"
          type="email"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Senha"
          name="password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        
        <Button
          onClick={() => {loginFunction(username, password, router)}}
          variant="outline"
          color="primary"
          mtop="1rem"
        >
          Entrar
        </Button>
        <Toaster />
    </div>
  )
}

export default Home
