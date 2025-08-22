
// import { Remodelar } from '../../../pages/Remodelar';
import styles from '../../../styles/PiedraHero.module.css';
import { CTAButton } from '../../common/Button/CTAButton';
import { Testimonials } from '../../common/Testimonials/Testimonials';
import PropTypes from 'prop-types';


export function PiedraHero ({
    title = 'PIEDRA',
    titleBottom = 'Construcciones',
    subTitle = 'Una empresa familiar',
    subTitleBottom = 'Una empresa de confianza',
    bgImage = '/images/render-4.jpg',
  } ) {

    return (

      <div 
        className={styles.heroContainer}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
      
        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <div className={styles.titleContainer}>
              <span className={styles.decorativeLetter}>P</span>
              <h1 className={styles.heroTitle}>
                <span>{title}</span>
                <span className={styles.block} >{titleBottom}</span>
              </h1>
            </div>

            <p className={styles.heroSubtitle}>
              <span>{subTitle}</span>
              <span className={styles.block}>{subTitleBottom}</span>
            </p>

            <div className={styles.ctaButton}>
              <CTAButton text='CONSULTA GRATIS + DISEÑO 3D' action='https://wa.me/59893595589'/> 
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

PiedraHero.propTypes = {
  title: PropTypes.string, 
  titleBottom: PropTypes.string,
  subTitle: PropTypes.string,
  subTitleBottom: PropTypes.string,
  bgImage: PropTypes.string,
}