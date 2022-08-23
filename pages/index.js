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

export default function Index () {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
    }
  })

  return (
    <>
      <div className={styles.whatsapp}>
        <Image src='/imgs/whatsapp.png' width='70px' height='70px' alt='whatsapp_img' />
      </div>

      {isMobile && (
        <div className={styles.call}>
          <a href='tel:320-548-19-92'><ContactIcon width='40' height='40' /></a>
        </div>
      )}

      <header className={styles.container}>
        <Navbar />
        <Header />
      </header>

      <AboutUs />

      <Services />

      <Contact />

      <Footer />
    </>
  )
}
