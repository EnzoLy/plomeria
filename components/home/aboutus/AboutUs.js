import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export function AboutUs () {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
    }
  })

  return (
    <div className={styles.articles} id='aboutus'>
      <article className={styles.article}>
        <div>
          <Image className={styles.img} src='/imgs/plomeria1.jpg' width='250px' height='250px' layout='responsive' style={{ borderRadius: '1.5rem' }} alt='servicios_img' />
        </div>
        <div>
          <h2>SERVICIO 24 HORAS</h2>
          <span>Estamos atentos a cualquier eventualidad</span>
          <span>que pueda ocurrir para garantizar un servicio oportuno y efizaz, las 24 horas</span>
        </div>
      </article>
      {
          isMobile
            ? (
              <article className={styles.article2}>
                <div>
                  <Image src='/imgs/plomeria1.jpg' width='300px' height='300px' layout='responsive' style={{ borderRadius: '1.5rem' }} alt='negocios_img' />
                </div>
                <div>
                  <h2>ATENDEMOS SU NEGOCIO</h2>
                  <span>Evite pérdidas en su negocio. Visitamos</span>
                  <span>y a tendemos el daño en su negocio con los estándares de seguridad requeridos.</span>
                </div>
              </article>
              )
            : (
              <article className={styles.article2}>
                <div>
                  <h2>ATENDEMOS SU NEGOCIO</h2>
                  <span>Evite pérdidas en su negocio. Visitamos</span>
                  <span>y a tendemos el daño en su negocio con los estándares de seguridad requeridos.</span>
                </div>
                <div>
                  <Image src='/imgs/plomeria1.jpg' width='300px' height='300px' layout='responsive' style={{ borderRadius: '1.5rem' }} alt='negocios_img' />
                </div>
              </article>
              )
          }
      <article className={styles.article}>
        <div>
          <Image src='/imgs/plomeria1.jpg' width='300px' height='300px' layout='responsive' style={{ borderRadius: '1.5rem' }} alt='atencion_img' />
        </div>
        <div>
          <h2>ATENCIÓN DOMICILIARIA</h2>
          <span>Realizamos atención profesional a emergencias</span>
          <span>o daños que se presenten en su casa. Reparamos sin romper para su comodidad.</span>
        </div>
      </article>
    </div>
  )
}
