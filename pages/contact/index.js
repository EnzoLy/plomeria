import styles from './styles.module.css'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import { Location, ContactIcon, Email, WhatsApp } from '../../components/Icons/Icons'
import { useState } from 'react'

export default function Contact () {
  const ENUM = {
    EMERGENCY: 'emergency',
    CONTACT: 'contact',
    LOCATION: 'location',
    EMAIL: 'email'
  }

  const [show, setShow] = useState(ENUM.LOCATION)

  const handleClick = (e) => {
    const { id } = e.target
    setShow(id)
  }

  return (
    <>

      <Navbar />

      <div className={styles.container}>
        <di className={styles.title_container}>
          <h1>Contactanos</h1>
          <h3>Estamos atentos a tus emergencias</h3>
        </di>
        <div className={styles.icons}>
          <div className={styles.icon} onClick={handleClick} id='location'>
            <Location fill='black' width='25' height='25' />
            <span>Calle 45b #13-60</span>
          </div>
          <div className={styles.icon} onClick={handleClick} id='contact'>
            <ContactIcon fill='black' width='25' height='25' />
            <span>320 548 19 92</span>
          </div>
          <div className={`${styles.icon} ${styles.red}`} onClick={handleClick} id='emergency'>
            <ContactIcon fill='#ff0000' width='25' height='25' />
            <span>321 610 69 51</span>
          </div>
          <div className={styles.icon} onClick={handleClick} id='email'>
            <Email fill='black' width='25' height='25' />
            <span>todoenplomeria24horas@gmail.com</span>
          </div>
        </div>
        <div className={styles.form_container}>

          {show === ENUM.LOCATION && (
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

          {show === ENUM.CONTACT && (
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

          {show === ENUM.EMERGENCY && (
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

          {show === ENUM.EMAIL && (
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
      </div>

      <Footer />
    </>
  )
}

export async function getServerSideProps ({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {}
  }
}
