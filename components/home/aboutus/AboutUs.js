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
      <article
        className={styles.article}
      >
        <Image src='/imgs/plomeria1.jpg' width='500px' height='500px' style={{ borderRadius: '24px' }} alt='negocios_img' />
        <div className={styles.info}>
          <h2>SERVICIO 24 HORAS</h2>
          <span>Estamos atentos a cualquier eventualidad</span>
          <span>que pueda ocurrir para garantizar un servicio oportuno y efizaz, las 24 horas</span>
        </div>
      </article>
      {
          isMobile
            ? (
              <article
                className={styles.article2}
              >
                <Image src='/imgs/plomeros-clean-center.jpg' width='500px' height='500px' style={{ borderRadius: '24px' }} alt='negocios_img' />
                <div className={styles.info}>
                  <h2>ATENDEMOS SU NEGOCIO</h2>
                  <span>Evite pérdidas en su negocio. Visitamos</span>
                  <span>y a tendemos el daño en su negocio con los estándares de seguridad requeridos.</span>
                </div>
              </article>
              )
            : (
              <article
                className={styles.article2}
              >
                <div className={styles.info}>
                  <h2>ATENDEMOS SU NEGOCIO</h2>
                  <span>Evite pérdidas en su negocio. Visitamos</span>
                  <span>y a tendemos el daño en su negocio con los estándares de seguridad requeridos.</span>
                </div>
                <Image src='/imgs/plomeros-clean-center.jpg' width='500px' height='500px' style={{ borderRadius: '24px' }} alt='negocios_img' />
              </article>
              )
          }
      <article
        className={styles.article}
      >
        <Image src='/imgs/destapaciones-plomeria.jpg' width='500px' height='500px' style={{ borderRadius: '24px' }} alt='negocios_img' />
        <div className={styles.info}>
          <h2>ATENCIÓN DOMICILIARIA</h2>
          <span>Realizamos atención profesional a emergencias</span>
          <span>o daños que se presenten en su casa. Reparamos sin romper para su comodidad.</span>
        </div>
      </article>
    </div>
  )
}
