import styles from './styles.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div>
        <span>
          Todos los derechos reservados &copy; {new Date().getFullYear()} Plomeria Medellin 24h
        </span>
        <span>
          Made by <a href='https://www.contrum.org' target='_blank' rel='noreferrer'>Contrum Services</a>
        </span>
      </div>
    </footer>
  )
}
