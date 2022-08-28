import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AboutUs, ContactIcon, Home, Location, Menu, Service } from '../Icons/Icons'
import styles from './styles.module.css'
import { domAnimation, LazyMotion, m } from 'framer-motion'

const navbarVariants = {
  hidden: {
    display: 'none',
    opacity: 0,
    y: '-100vh',
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: 'easeIn'
    }
  },
  visible: {
    display: 'flex',
    opacity: 1,
    with: '100%',
    y: '0',
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: 'easeIn'
    }
  }
}

export default function Navbar () {
  const [isActiveNavbar, setActiveNavbar] = useState(false)

  const toggleNavbar = () => {
    console.log('toggleNavbar')
    setActiveNavbar(!isActiveNavbar)
    if (typeof window !== 'undefined') {
      document.body.style.setProperty('overflow', isActiveNavbar ? 'auto' : 'hidden')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const header = document.getElementById('emergency')
      const sticky = header.offsetTop

      window.addEventListener('scroll', () => {
        if (window.pageYOffset > sticky) {
          header.classList.add('styles_sticky__cEack')
        } else {
          header.classList.remove('styles_sticky__cEack')
        }
      })
    }
  })

  return (

    <>
      <LazyMotion features={domAnimation}>
        <div className={styles.navbar_container}>

          <header className={styles.navbar_header_phone}>
            <nav className={styles.navbar_phone}>
              <div className={styles.logo_phone}>
                <Link href='/'>
                  <span>Plomeria Medellin 24h</span>
                </Link>
              </div>
              <div className={styles.items_phone} onClick={toggleNavbar}>
                <Menu />
              </div>
            </nav>

            <m.div
              initial={{ display: 'none' }}
              animate={isActiveNavbar ? 'visible' : 'hidden'}
              variants={navbarVariants}
              key='navbar'
              className={styles.navbar_phone_container}
            >
              <div className={styles.navbar_items_phone}>
                <Link href='/'>
                  <a onClick={toggleNavbar}> <Home width='25' height='25' fill='white' /> Inicio</a>
                </Link>
                <Link href='/#aboutus'>
                  <a onClick={toggleNavbar}><AboutUs width='25' height='25' fill='white' /> Quienes Somos</a>
                </Link>
                <div className={styles.dropdown}>
                  <span className={styles.dropdown}><Service width='25' height='25' fill='white' /> Nuestros Servicios</span>
                  <div className={styles.dropdown_items}>
                    <Link href='/servicio/drywall'><a onClick={toggleNavbar}>Drywall</a></Link>
                    <Link href='/servicio/obra blanca'><a onClick={toggleNavbar}>Obra Blanca</a></Link>
                    <Link href='/servicio/techos'><a onClick={toggleNavbar}>Techos</a></Link>
                    <Link href='/servicio/enchape'><a onClick={toggleNavbar}>Enchape</a></Link>
                    <Link href='/servicio/localizaciones de fugas'><a onClick={toggleNavbar}>Localizaciones de fugas</a></Link>
                    <Link href='/servicio/reparamos tu baño'><a onClick={toggleNavbar}>Reparamos tu baño</a></Link>
                    <Link href='/servicio/camara de inspeccion'><a onClick={toggleNavbar}>Camara de inspeccion</a></Link>
                    <Link href='/servicio/geofonia'><a onClick={toggleNavbar}>GeoFonia</a></Link>
                    <Link href='/servicio/reparamos sin romper'><a onClick={toggleNavbar}>Reparamos sin romper</a></Link>
                    <Link href='/servicio/tuberias de gas'><a onClick={toggleNavbar}>Tuberias de gas</a></Link>
                    <Link href='/servicio/humedades'><a onClick={toggleNavbar}>Humedades</a></Link>
                    <Link href='/servicio/electricidad'><a onClick={toggleNavbar}>Electricidad</a></Link>
                  </div>
                </div>
                <Link href='/#contact'>
                  <a onClick={toggleNavbar}><Location width='25' height='25' fill='white' /> Como encontrarnos</a>
                </Link>
              </div>

              <div className={styles.contact_phone} onClick={toggleNavbar}>
                <Link href='/contact' passHref>
                  <div>
                    <span> <ContactIcon width='17' height='17' fill='black' /> Contacto</span>
                  </div>
                </Link>
              </div>
            </m.div>

          </header>

          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <Link href='/'>
                <span>Plomeria Medellin 24h</span>
              </Link>
            </div>
            <div className={styles.items}>
              <Link href='/'><a>Inicio</a></Link>
              <Link href='/#aboutus'><a>Quienes Somos</a></Link>
              <div className={styles.dropdown}>
                <span className={styles.dropdown}>Nuestros Servicios</span>
                <div className={styles.dropdown_items}>
                  <Link href='/servicio/drywall'><a>Drywall</a></Link>
                  <Link href='/servicio/obra blanca'><a>Obra Blanca</a></Link>
                  <Link href='/servicio/techos'><a>Techos</a></Link>
                  <Link href='/servicio/enchape'><a>Enchape</a></Link>
                  <Link href='/servicio/localizaciones de fugas'><a>Localizaciones de fugas</a></Link>
                  <Link href='/servicio/reparamos tu baño'><a>Reparamos tu baño</a></Link>
                  <Link href='/servicio/camara de inspeccion'><a>Camara de inspeccion</a></Link>
                  <Link href='/servicio/geofonia'><a>GeoFonia</a></Link>
                  <Link href='/servicio/reparamos sin romper'><a>Reparamos sin romper</a></Link>
                  <Link href='/servicio/tuberias de gas'><a>Tuberias de gas</a></Link>
                  <Link href='/servicio/humedades'><a>Humedades</a></Link>
                  <Link href='/servicio/electricidad'><a>Electricidad</a></Link>
                </div>
              </div>

              <Link href='/#contact'><a>Como encontrarnos</a></Link>
            </div>
            <div className={styles.contact}>
              <Link href='/contact' passHref>
                <div>
                  <span> <ContactIcon width='17' height='17' fill='black' /> Contacto</span>
                </div>
              </Link>
            </div>
          </nav>
          <div className={styles.emergency} id='emergency'>
            <div>
              <span className={styles.letter}>A</span>
              <span className={styles.letter}>t</span>
              <span className={styles.letter}>e</span>
              <span className={styles.letter}>n</span>
              <span className={styles.letter}>d</span>
              <span className={styles.letter}>e</span>
              <span className={styles.letter}>m</span>
              <span className={styles.letter}>o</span>
              <span className={styles.letter}>s</span>
              <span> </span>
              <span className={styles.letter}>E</span>
              <span className={styles.letter}>m</span>
              <span className={styles.letter}>e</span>
              <span className={styles.letter}>r</span>
              <span className={styles.letter}>g</span>
              <span className={styles.letter}>e</span>
              <span className={styles.letter}>n</span>
              <span className={styles.letter}>c</span>
              <span className={styles.letter}>i</span>
              <span className={styles.letter}>a</span>
              <span className={styles.letter}>s</span>
              <span> </span>
              <span className={styles.letter}>l</span>
              <span className={styles.letter}>a</span>
              <span className={styles.letter}>s</span>
              <span> </span>
              <span className={styles.letter}>2</span>
              <span className={styles.letter}>4</span>
              <span> </span>
              <span className={styles.letter}>h</span>
              <span className={styles.letter}>o</span>
              <span className={styles.letter}>r</span>
              <span className={styles.letter}>a</span>
              <span className={styles.letter}>s</span>
            </div>
            <a href='tel:321-610-69-51'><ContactIcon width='20' heigth='20' />321 610 69 51</a>
          </div>
        </div>
      </LazyMotion>

    </>
  )
}
