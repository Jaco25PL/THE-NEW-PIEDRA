import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styles from '../styles/404.module.css'

export function NotFound() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>404 - Página No Encontrada | Piedra Construcciones</title>
        <meta name="description" content="La página que buscas no existe. Volvé al inicio o explorá nuestros servicios de construcción y remodelación en Montevideo." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Página no encontrada</h1>
        <p className={styles.subtitle}>La página que buscás no existe o fue movida</p>

        <div className={styles.links}>
          <Link to="/" className={styles.primary}>Ir al inicio</Link>
          <Link to="/construir" className={styles.secondary}>Construir</Link>
          <Link to="/remodelar" className={styles.secondary}>Remodelar</Link>
          <Link to="/contacto" className={styles.secondary}>Contacto</Link>
        </div>
      </div>
    </div>
  )
}
