import Link from 'next/link'
import { useState } from 'react'
import { AboutUs, ContactIcon, Cruz, Home, Location, Menu, Service } from '../Icons/Icons'
import styles from './styles.module.css'

export default function Navbar () {
  const [isActiveNavbar, setActiveNavbar] = useState(false)

  const toggleNavbar = () => {
    console.log('toggleNavbar')
    setActiveNavbar(!isActiveNavbar)
  }

  return (
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
        {isActiveNavbar && (
          <div className={styles.navbar_phone_container}>
            <div className={styles.navbar_close} onClick={toggleNavbar}>
              <Cruz />
            </div>
            <div className={styles.navbar_items_phone}>
              <Link href='/'>
                <a onClick={toggleNavbar}> <Home width='25' height='25' fill='black' /> Inicio</a>
              </Link>
              <Link href='/#aboutus'>
                <a onClick={toggleNavbar}><AboutUs width='25' height='25' fill='black' /> Quienes Somos</a>
              </Link>
              <Link href='/#services'>
                <a onClick={toggleNavbar}><Service width='25' height='25' fill='black' /> Nuestros Servicios</a>
              </Link>
              <Link href='/#services'>
                <a onClick={toggleNavbar}><Location width='25' height='25' fill='black' /> Como encontrarnos</a>
              </Link>
            </div>

            <div className={styles.contact_phone} onClick={toggleNavbar}>
              <Link href='/contact' passHref>
                <div>
                  <span> <ContactIcon width='17' height='17' fill='white' /> Contacto</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </header>

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/'>
            <span>Plomeria Medellin 24h</span>
          </Link>
        </div>
        <div className={styles.items}>
          <a className={styles.active} href='#'>Inicio</a>
          <a href='#aboutus'>Quienes Somos</a>
          <a href='#services'>Nuestros Servicios</a>
          <a href='#contact'>Como encontrarnos</a>
        </div>
        <div className={styles.contact}>
          <Link href='/contact' passHref>
            <div>
              <span> <ContactIcon width='17' height='17' fill='black' /> Contacto</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}
