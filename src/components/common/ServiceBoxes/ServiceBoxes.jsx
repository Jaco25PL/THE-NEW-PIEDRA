import { Link } from 'react-router-dom';
import styles from '../../../styles/ServiceBoxes.module.css';

export function ServiceBoxes() {
  return (
    <div className={styles.serviceBoxes}>
      {/* Construir box */}
      <Link 
        to="/construir"
        className={`${styles.serviceBox} ${styles.construirBox}`}
      >
        <img 
          className={styles.serviceImage} 
          src='/images/render-2.jpg' 
          alt="Construcción de casas" 
          loading="lazy"
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>CONSTRUIR</h3>
          <div className={styles.serviceReveal}>
            <p>Cada casa cuenta una historia, queremos construir la tuya</p>
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
          src='/images/works/pelado-karting-piedra-1.AVIF' 
          alt="Remodelación de espacios" 
          loading="lazy"
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>REMODELAR</h3>
          <div className={styles.serviceReveal}>
            <p>Desde cocinas hasta salas, cada detalle cuenta</p>
          </div>
        </div>
      </Link>

      {/* Proyectos box */}
      <Link 
        to="/proyectos"
        className={`${styles.serviceBox} ${styles.proyectosBox}`}
      >
        <img 
          className={styles.serviceImage} 
          src='/images/render-5.png' 
          alt="Nuestros proyectos" 
          loading="lazy"
        />
        <div className={styles.serviceContent}>
          <h3 className={styles.serviceTitle}>PROYECTOS</h3>
          <div className={styles.serviceReveal}>
            <p>Conoce nuestros trabajos y la calidad que nos distingue</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
