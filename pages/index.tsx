import type { NextPage } from 'next'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import styles from '../styles/Home.module.css'
import loginFunction from '../Model/loginFunction'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter();

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // const alunos = [
  //   { key:"180012002", aluno:"Alvaro Henrique de Sousa Gouvea", team: "4"},
  //   { key:"190124997", aluno:"Amanda Jeniffer Pereira Nobre", team: "2"},
  //   { key:"190142421", aluno:"Artur Vinicius Dias Nunes", team: "5"},
  //   { key:"190084731", aluno:"Augusto Duraes Camargo", team: "3"},
  //   { key:"190010967", aluno:"Brian Pina de Sa", team: "1"},
  //   { key:"190011408", aluno:"Carlos Daniel Pinheiro dos Santos", team: "5"},
  //   { key:"190011602", aluno:"Christian Fleury Alencar Siqueira", team: "2"},
  //   { key:"170008291", aluno:"Cristian Souza Assis Furtado", team: "4"},
  //   { key:"170161871", aluno:"Denniel William Roriz Lima", team: "1"},
  //   { key:"180119231", aluno:"Eduardo Maia Rezende", team: "3"},
  //   { key:"160119570", aluno:"Felipe Chermont Pereira", team: "5"},
  //   { key:"180075462", aluno:"Gabriel Freitas Balbino", team: "4"},
  //   { key:"190013354", aluno:"Gabriel Luiz de Souza Gomes", team: "4"},
  //   { key:"180113569", aluno:"Henrique Sandoval Camargo Hida", team: "4"},
  //   { key:"170105342", aluno:"Irwin Schmitt", team: "7"},
  //   { key:"170146251", aluno:"Joao Lucas Fragoso Zarbielli", team: "7"},
  //   { key:"190030755", aluno:"Joao Paulo Lima da Silva", team: "5"},
  //   { key:"190109963", aluno:"Joao Victor Teixeira Batista", team: "1"},
  //   { key:"180123459", aluno:"João Vitor de Souza Durço", team: "5"},
  //   { key:"190057858", aluno:"Jose Luis Ramos Teixeira", team: "3"},
  //   { key:"202028202", aluno:"KLYSSMANN HENRIQUE FERREIRA DE OLIVEIRA", team: "3"},
  //   { key:"180104390", aluno:"Lameque Fernandes Azevedo", team: "7"},
  //   { key:"160133581", aluno:"Lucas Kishima dos Santos", team: "-"},
  //   { key:"180023161", aluno:"Luiz Gustavo Ferreira Rocha", team: "2"},
  //   { key:"190033681", aluno:"Luiz Henrique Fernandes Zamprogno", team: "1"},
  //   { key:"180066382", aluno:"Marcos Felipe de Almeida Souza", team: "5"},
  //   { key:"170111059", aluno:"Matheus Fonseca Sousa", team: "7"},
  //   { key:"170020291", aluno:"Paulo Henrique Almeida da Silva", team: "4"},
  //   { key:"190094257", aluno:"Paulo Henrique de Oliveira Rezende", team: "1"},
  //   { key:"170153975", aluno:"Pedro Henrique Castro de Oliveira", team: "2"},
  //   { key:"190036567", aluno:"Pedro Lucas Cassiano Martins", team: "3"},
  //   { key:"190036940", aluno:"Rafael Fernandes Amancio", team: "4"},
  //   { key:"170045269", aluno:"Sara Paula Lima Campos", team: "7"},
  //   { key:"180078224", aluno:"Thais Reboucas de Araujo", team: "7"},
  //   { key:"190055294", aluno:"Thiago Siqueira Gomes", team: "2"},
  //   { key:"190038900", aluno:"Victor de Souza Cabral", team: "3"},
  //   { key:"190038926", aluno:"Victor Eduardo Araujo Ribeiro", team: "1"},
  //   { key:"160149410", aluno:"Yudi Yamane de Azevedo", team: "2"}
  // ]  

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

        <button 
          className={styles.button}
          onClick={() => {loginFunction(username, password, router)}}
        >
          Entrar
        </button>
        <Toaster />
    </div>
  )
}

export default Home
