import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AppProvider } from '../context/contextapi'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com"/> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
