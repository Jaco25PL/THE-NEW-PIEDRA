
import { useState, useEffect } from 'react';
import styles from '../../../styles/PiedraHero.module.css';
import { CTAButton } from '../../common/Button/CTAButton';
import { Testimonials } from '../../common/Testimonials/Testimonials';
import PropTypes from 'prop-types';

const defaultImages = [
  '/images/renders/render-4.jpg',
  '/images/renders/render-1.jpg', 
  '/images/renders/render-2.jpg',
  '/images/renders/render-5.png',
  '/images/renders/render-6.png',
  '/images/renders/render-7.png'
];

export function PiedraHero ({
    title = 'PIEDRA',
    titleBottom = 'Construcciones',
    subTitle = 'Una empresa familiar',
    subTitleBottom = 'Una empresa de confianza',
    bgImage = '/images/renders/render-4.jpg',
    images = null, // Allow custom images array
    autoSlide = true,
    slideInterval = 5000
  } ) {

    const sliderImages = images || (bgImage ? [bgImage, ...defaultImages.filter(img => img !== bgImage)] : defaultImages);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      if (!autoSlide || sliderImages.length <= 1) return;

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        );
      }, slideInterval);

      return () => clearInterval(interval);
    }, [autoSlide, slideInterval, sliderImages.length]);

    return (

      <div className={styles.heroContainer}>
        {/* Background Images Slider */}
        <div className={styles.sliderContainer}>
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.slideImage} ${
                index === currentImageIndex ? styles.slideActive : ''
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>


        
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
  images: PropTypes.arrayOf(PropTypes.string),
  autoSlide: PropTypes.bool,
  slideInterval: PropTypes.number,
}