import { Link } from 'react-router-dom';
import styles from '../../../styles/ServiceBoxes.module.css';

export function ServiceBoxes() {
  return (
    <div className={styles.serviceBoxes}>
      {/* Nosotros box */}
      <Link
        to="/nosotros"
        className={`${styles.serviceBox} ${styles.construirBox}`}
      >
        <img
          className={styles.serviceImage}
          src='/images/renders/render-2.webp'
          alt="Sobre nosotros"
          loading="lazy"
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>NOSOTROS</h3>
          <div className={styles.serviceReveal}>
            <p>Cada casa cuenta una historia, queremos construir la tuya</p>
          </div>
        </div>
      </Link>

      {/* Construir box */}
      <Link
        to="/construir"
        className={`${styles.serviceBox} ${styles.remodelarBox}`}
      >
        <img
          className={styles.serviceImage}
          src='/images/works/pelado-piedra.webp'
          alt="Construcción de casas"
          loading="lazy"
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>CONSTRUIR</h3>
          <div className={styles.serviceReveal}>
            <p>Desde cocinas hasta salas, cada detalle cuenta</p>
          </div>
        </div>
      </Link>

      {/* Remodelar box */}
      <Link
        to="/remodelar"
        className={`${styles.serviceBox} ${styles.remodelarBox}`}
      >
        <img
          className={styles.serviceImage}
          src='/images/renders/render-5.webp'
          alt="Remodelación de espacios"
          loading="lazy"
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>REMODELAR</h3>
          <div className={styles.serviceReveal}>
            <p>Conoce nuestros trabajos y la calidad que nos distingue</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
