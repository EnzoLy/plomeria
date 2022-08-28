import styles from './styles.module.css'
import { useContext } from 'react'
import Link from 'next/link'
import ContactContext from '../../../contexts/ContactContext'
import { ContactIcon } from '../../Icons/Icons'
import Image from 'next/image'

export default function Header () {
  /*
        <li>
          <Image src='/imgs/herramientas-para-electricista.jpg' layout='fill' objectFit='cover'  />
          <div>
            <h2>Obra Blanca</h2>
          </div>
        </li>

        */

  const value = useContext(ContactContext)
  return (

    <header>
      <section className={styles.container}>
        <h1>Plomeria Medellin 24h</h1>

        <div className={styles.titles_container}>
          <h2>Plomeria</h2>
          <h2>Electricidad</h2>
          <h2>Gas</h2>
          <h2>Humedad</h2>
          <h2>Enchape</h2>
          <h2>Techos</h2>
          <h2>Obra Blanca</h2>
          <h2>DryWall</h2>
          <h2>Localizaciones de fugas</h2>
          <h2>Baños</h2>
          <h2>Reparamos Sin Romper</h2>
          <h2>Camara de Inspeccion</h2>
        </div>
        <div>
          <Link href='/contact'>
            <button className={styles.button_white} onClick={() => { value.setContact('contact') }}><ContactIcon width='20' height='20' fill='black' /> Contactenos</button>
          </Link>
          <Link href='/contact'>
            <button className={`${styles.grey} ${styles.button_red}`} onClick={() => { value.setContact('emergency') }}><ContactIcon width='20' height='20' fill='white' /> Emergencias</button>
          </Link>
        </div>
      </section>
      <ul className={styles.cb_slideshow}>
        <li>
          <Image src='/imgs/2491137.webp' layout='fill' objectFit='cover' alt='Plomeria_img' />
        </li>
        <li>
          <Image src='/imgs/herramientas-para-electricista.jpg' layout='fill' objectFit='cover' alt='electricidad_img' />
        </li>
        <li>
          <Image src='/imgs/plomero-gasista-san-isidro.jpg' layout='fill' objectFit='cover' alt='gas_img' />
        </li>
        <li>
          <Image src='/imgs/eliminar-la-humedad.webp' layout='fill' objectFit='cover' alt='humedad_img' />
        </li>
        <li>
          <Image src='/imgs/9614bc94-6d42-4900-8905-b9d8dec9f04a.jpeg' layout='fill' objectFit='cover' alt='enchape_img' />
        </li>
        <li>
          <Image src='/imgs/Reparación-de-un-techo-de-tejas.jpg' layout='fill' objectFit='cover' alt='techos_img' />
        </li>
        <li>
          <Image src='/imgs/obra_blanca.jpg' layout='fill' objectFit='cover' alt='obra_blanca_img' />
        </li>
        <li>
          <Image src='/imgs/istockphoto-538176518-612x612.jpg' layout='fill' objectFit='cover' alt='drywall_img' />
        </li>
        <li>
          <Image src='/imgs/deteccion-de-fugas-inicio-01.png' layout='fill' objectFit='cover' alt='localizaciones_de_fugas_img' />
        </li>
        <li>
          <Image src='/imgs/plomeria1.jpg' layout='fill' objectFit='cover' alt='Baños_img' />
        </li>
        <li>
          <Image src='/imgs/WhatsApp Image 2022-08-24 at 1.43.45 AM.jpeg' layout='fill' objectFit='cover' alt='reparamos_sin_romper_img' />
        </li>
        <li>
          <Image src='/imgs/plomero-camara-portatil-inspeccion-tuberias-otros-trabajos-plomeria_149301-725.webp' layout='fill' objectFit='cover' alt='camara_de_inspeccion_img' />
        </li>
      </ul>
    </header>
  )
}
