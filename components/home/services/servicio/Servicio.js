import Link from 'next/link'
import styles from './styles.module.css'

export const Servicio = (props) => {
  const { Icon, title, content } = props

  return (
    <Link href={`/servicio/${title}`}>
      <section className={styles.service}>
        {Icon && <Icon />}
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </section>
    </Link>
  )
}
