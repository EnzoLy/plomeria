import styles from './styles.module.css'

export const Servicio = (props) => {
  const { Icon, title, content } = props

  return (
    <div className={styles.service}>
      {Icon && <Icon />}
      <div>
        <h1>{title}</h1>
        <span>{content}</span>
      </div>
    </div>
  )
}
