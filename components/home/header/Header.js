import { useContext } from 'react'
import Link from 'next/link'
import ContactContext from '../../../contexts/ContactContext'
import { ContactIcon } from '../../Icons/Icons'
import styles from './styles.module.css'

export default function Header () {
  const value = useContext(ContactContext)

  return (
    <section className={styles.container}>
      <h1>Plomeria Medellin 24h</h1>
      <span>Somos profesionales que contamos con el equipo y la experiencia</span>
      <span>necesaria para ofrecerle y garantizarle servicios de alta calidad</span>
      <span>procurando la integridad de su inmueble y la solución pronta a su problema.</span>
      <div>
        <Link href='/contact'>
          <button className={styles.button_white} onClick={() => { value.setContact('contact') }}><ContactIcon width='20' height='20' fill='black' /> Contactenos</button>
        </Link>
        <Link href='/contact'>
          <button className={`${styles.grey} ${styles.button_red}`} onClick={() => { value.setContact('emergency') }}><ContactIcon width='20' height='20' fill='white' /> Emergencias</button>
        </Link>
      </div>
    </section>
  )
}
