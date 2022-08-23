import '../styles/globals.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Plomeria medellin 24h</title>
        <meta name='og:title' content='Plomeria medellin 24h' key='title' />
        <meta
          property='og:description'
          content='Plomeros en medellin las 24 horas disponibles | Plomero medellin | Plomeria en medellin | Plomeria medellin'
        />
        <meta name='name' content='Plomeria medellin 24h' />
        <meta name='description' content='Plomeros en medellin las 24 horas disponibles | Plomero medellin | Plomeria en medellin | Plomeria medellin' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
