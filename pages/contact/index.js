import styles from './styles.module.css'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import { Location, ContactIcon, Email, WhatsApp } from '../../components/Icons/Icons'
import { useContext, useState } from 'react'
import ContactContext from '../../contexts/ContactContext'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import PAGE_TRANSITION from '../../utls/pageTransitions'
import Head from 'next/head'

const pageMotionProps = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE
    }
  }
}

export default function Contact () {
  const value = useContext(ContactContext)

  const { contact } = value

  const [show, setShow] = useState(contact)

  const handleClick = (e) => {
    const { id } = e.target
    setShow(id)
  }

  return (
    <>
      <Head>
        <title>☎ Contacto - Plomeros en Medellin Urgencias</title>
        <meta name='description' content='Contacta a plomeros en Medellin a traves de telefono, whatsapp, email o en nuesto local' />
      </Head>
      <LazyMotion features={domAnimation}>
        <Navbar />
        <m.div className={styles.container} {...pageMotionProps}>
          <div className={styles.title_container}>
            <h1>Contactanos</h1>
            <h2>Estamos disponibles las 24 horas en caso de emergencias o urgencias</h2>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon} onClick={handleClick} id='location'>
              <Location fill='black' width='25' height='25' />
              <span>Calle 45b #13-60</span>
            </div>
            <div className={styles.icon} onClick={handleClick} id='contact'>
              <ContactIcon fill='black' width='25' height='25' />
              <span>Contacto: <span>32 44 77 74 37</span></span>
            </div>
            <div className={`${styles.icon} ${styles.red}`} onClick={handleClick} id='emergency'>
              <ContactIcon fill='#ff0000' width='25' height='25' />
              <span>Emergencias: <span>32 25 82 19 77</span></span>
            </div>
            <div className={styles.icon} onClick={handleClick} id='email'>
              <Email fill='black' width='25' height='25' />
              <span>Email: <span>todoenplomeria24horas@gmail.com</span></span>
            </div>
          </div>
          <div className={styles.form_container}>

            {show === 'location' && (
              <div className={styles.map_container}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d294.79318777153384!2d-75.54192660498883!3d6.230927642645865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44286db7fc1025%3A0x672a36da7748816!2sCl.%2045b%20%2313-60%2C%20Medell%C3%ADn%2C%20Buenos%20Aires%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1661160815580!5m2!1ses-419!2sco'
                  className={styles.map}
                  style={{ border: '0', borderRadius: '20px' }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            )}

            {show === 'contact' && (
              <div className={styles.whatsapp_container}>
                <div>
                  <h3>Envianos un mensaje</h3>
                  <span>A nuestro numero</span>
                </div>
                <form className={styles.whatsapp}>
                  <textarea type='text' placeholder='Mensaje' />
                  <button type='submit'> <WhatsApp /> Enviar</button>
                </form>
              </div>
            )}

            {show === 'emergency' && (
              <div className={styles.whatsapp_container}>
                <div>
                  <h3>Envianos un mensaje</h3>
                  <span>A nuestro numero de emergencias</span>
                </div>
                <form className={styles.whatsapp}>
                  <textarea type='text' placeholder='Mensaje' />
                  <button type='submit'> <WhatsApp /> Enviar</button>
                </form>
              </div>
            )}

            {show === 'email' && (
              <div className={styles.email_container}>
                <div>
                  <h3>Envianos un Correo</h3>
                  <span>A nuestro Email</span>
                </div>
                <form className={styles.email}>
                  <input type='text' placeholder='Nombre' />
                  <input type='email' placeholder='Correo' />
                  <textarea type='text' placeholder='Mensaje' />
                  <button type='submit'> <Email width='20' height='20' /> Enviar</button>
                </form>
              </div>
            )}

          </div>
        </m.div>
      </LazyMotion>

      <Footer />
    </>
  )
}
