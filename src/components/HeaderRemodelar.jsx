
import styles from '../styles/HeaderRemodelar.module.css';
import { CTAButton } from './CTAButton';
import { Testimonials } from './Testimonials';

export function HeaderRemodelar ( ) {

    return (

      <div className={styles.heroContainer}>
      
        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <div className={styles.titleContainer}>
              <span className={styles.decorativeLetter}>P</span>
              <h1 className={styles.heroTitle}>
                Construye La Casa<br />
                De Tus Sueños
              </h1>
            </div>

            <p className={styles.heroSubtitle}>
              No solo levantamos paredes, creamos hogares que mejoran<br />
              tu calidad de vida.
            </p>

            <div className={styles.ctaButton}>
              <CTAButton text='CONSULTA GRATIS + DISEÑO 3D' action=''/> 
            </div>

            <div className={styles.featuresContainer}>
              <div className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span className={styles.featureText}>Render 3D</span>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span className={styles.featureText}>Cuotas Sin Interés</span>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span className={styles.featureText}>Garantía Extendida</span>
              </div>
            </div>

            <div className={styles.reviewsContainer}>
              <Testimonials/>
            </div>
            
          </div>
        </div>
      </div>

    )
}