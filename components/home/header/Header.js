import { ContactIcon } from '../../Icons/Icons'
import styles from './styles.module.css'

export default function Header () {
  return (
    <section className={styles.container}>
      <h1>Plomeria Medellin 24h</h1>
      <span>Somos profesionales que contamos con el equipo y la experiencia</span>
      <span>necesaria para ofrecerle y garantizarle servicios de alta calidad</span>
      <span>procurando la integridad de su inmueble y la solución pronta a su problema.</span>
      <div>
        <button className={styles.button_white}><ContactIcon width='20' height='20' fill='black' /> Contactenos</button>
        <button className={`${styles.grey} ${styles.button_red}`}><ContactIcon width='20' height='20' fill='white' /> Emergencias</button>
      </div>
    </section>
  )
}
