import { Helmet } from 'react-helmet-async'
import { Titles } from '../components/common/Titles/Titles'
import styles from '../styles/pages/Proyectos.module.css'

export function Proyectos() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Proyectos | Piedra Construcciones - Obras de Construcción y Remodelación</title>
        <meta name="description" content="Conoce los proyectos de construcción y remodelación de Piedra Construcciones en Montevideo. Obras reales, resultados comprobados. Ver galería en Instagram." />
        <meta name="keywords" content="proyectos construcción Montevideo, obras remodelación Uruguay, antes y después construcción, galería trabajos Piedra Construcciones" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Piedra Construcciones" />
        <meta property="og:title" content="Proyectos | Piedra Construcciones" />
        <meta property="og:description" content="Obras reales de construcción y remodelación en Montevideo. Ver galería completa en Instagram." />
        <meta property="og:image" content="https://piedraconstrucciones.com.uy/images/renders/render-1.webp" />
        <meta property="og:url" content="https://piedraconstrucciones.com.uy/proyectos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Proyectos | Piedra Construcciones" />
        <meta name="twitter:image" content="https://piedraconstrucciones.com.uy/images/renders/render-1.webp" />
        <link rel="canonical" href="https://piedraconstrucciones.com.uy/proyectos" />
      </Helmet>

      <div className={styles.content}>
        <Titles title="En construcción..." />
        <p className={styles.subtitle}>
          Conoce nuestros proyectos en nuestro{' '}
          <a href="https://www.instagram.com/piedra.construcciones/" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
            Instagram
            <img src="/images/logos/go-to.svg" alt="Ir a Instagram" className={styles.linkIcon} width="16" height="16" decoding="async" />
          </a>
        </p>
      </div>
    </div>
  )
}
