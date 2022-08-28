import Navbar from '../components/navbar/navbar'
import Header from '../components/home/header/Header'
import styles from './styles.module.css'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import { AboutUs } from '../components/home/aboutus/AboutUs'
import Contact from '../components/home/contact/Contact'
import { Services } from '../components/home/services/Services'
import { useEffect, useState } from 'react'
import { ContactIcon } from '../components/Icons/Icons'
import Link from 'next/link'
import Head from 'next/head'

export default function Index () {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
    }
  })

  return (
    <>

      <Head>
        <title>Plomeros Medellín | Servicio 24 horas para urgencias</title>
        <meta name='og:title' content='Plomeros Medellín | Servicio 24 horas para urgencias' key='title' />
        <meta
          property='og:description'
          content='Plomeros Medellín | Plomeros medellín 24 horas | Plomería en Medellín | Plomeros en Medellín urgencias'
        />
        <meta name='name' content='Plomeros Medellín | Servicio 24 horas para urgencias' />
        <meta name='description' content='Plomeros Medellín | Plomeros medellín 24 horas | Plomería en Medellín | Plomeros en Medellín urgencias' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.whatsapp}>
        <Link href='/contact'>
          <Image src='/imgs/whatsapp.webp' width='70' height='70' alt='whatsapp_img' />
        </Link>
      </div>

      {isMobile && (
        <div className={styles.call}>
          <a href='tel:320-548-19-92'><ContactIcon width='40' height='40' /></a>
        </div>
      )}

      <Navbar />

      <header className={styles.container}>
        <Header />
      </header>

      <AboutUs />

      <Services />

      <Contact />

      <Footer />
    </>
  )
}
