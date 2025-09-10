import { Helmet } from 'react-helmet-async'
import { Titles } from '../components/common/Titles/Titles'
import styles from '../styles/pages/Proyectos.module.css'

export function Proyectos() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Proyectos - Piedra Construcciones</title>
        <meta name="description" content="Conoce nuestros proyectos de construcción y remodelación en Montevideo, Uruguay." />
      </Helmet>

      <div className={styles.content}>
        <Titles title="En construcción..." />
        <p className={styles.subtitle}>
          Conoce nuestros proyectos en nuestro{' '}
          <a href="https://www.instagram.com/piedra.construcciones/" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
            Instagram
            <img src="/images/logos/go-to.svg" alt="Ir a Instagram" className={styles.linkIcon} />
          </a>
        </p>
      </div>
    </div>
  )
}
