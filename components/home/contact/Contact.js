import Link from 'next/link'
import { useContext } from 'react'
import ContactContext from '../../../contexts/ContactContext'
import styles from './styles.module.css'

export default function Contact () {
  const value = useContext(ContactContext)

  return (
    <div className={styles.contact} id='contact'>
      <div className={styles.info}>
        <div>
          <h2>LLamanos a: </h2>
          <a href='tel:320-548-19-92'>320 548 19 92</a>
          <a href='tel:321-610-69-51'>321 610 69 51</a>
        </div>
        <div>
          <h2>Visitanos en: </h2>
          <a
            href='https://www.google.com/maps?ll=6.23097,-75.541877&z=14&t=m&hl=es-419&gl=CO&mapclient=embed&q=Cl.+45b+%2313-60+Medell%C3%ADn,+Buenos+Aires,+Medell%C3%ADn,+Antioquia'
            target='_blank' rel='noreferrer'
          >Calle 45b #13-60
          </a>
        </div>
        <div>
          <h2>Escribenos a: </h2>
          <Link href='/contact'>
            <span onClick={() => { value.setContact('email') }}>todoenplomeria24horas@gmail.com</span>
          </Link>
        </div>
      </div>

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d294.79318777153384!2d-75.54192660498883!3d6.230927642645865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44286db7fc1025%3A0x672a36da7748816!2sCl.%2045b%20%2313-60%2C%20Medell%C3%ADn%2C%20Buenos%20Aires%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1661160815580!5m2!1ses-419!2sco'
        className={styles.map}
        style={{ border: '0', borderRadius: '54px' }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />

    </div>
  )
}
