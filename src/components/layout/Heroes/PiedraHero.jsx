
import { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/PiedraHero.module.css';
import { CTAButton } from '../../common/Button/CTAButton';
import { Testimonials } from '../../common/Testimonials/Testimonials';
import PropTypes from 'prop-types';

const defaultImages = [
  '/images/renders/render-4.webp',
  '/images/renders/render-1.webp', 
  '/images/renders/render-2.webp',
  '/images/renders/render-5.webp',
  '/images/renders/render-6.webp',
  '/images/renders/render-7.webp',  
  '/images/renders/render-8.avif',  
  '/images/renders/render-9.avif',  
  '/images/renders/render-10.avif',  
  '/images/renders/render-11.avif',  
];

export function PiedraHero ({
    title = 'PIEDRA',
    titleBottom = 'Construcciones',
    subTitle = 'Una empresa familiar',
    subTitleBottom = 'Una empresa de confianza',
    bgImage = '/images/renders/render-4.webp',
    images = null, // Allow custom images array
    autoSlide = true,
    slideInterval = 5000
  } ) {

    const sliderImages = images || (bgImage ? [bgImage, ...defaultImages.filter(img => img !== bgImage)] : defaultImages);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isInView, setIsInView] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
      if (!autoSlide || sliderImages.length <= 1 || !isInView) return;

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        );
      }, slideInterval);

      return () => clearInterval(interval);
    }, [autoSlide, slideInterval, sliderImages.length, isInView]);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isInView || sliderImages.length <= 1) return;
      const nextIndex = currentImageIndex === sliderImages.length - 1 ? 0 : currentImageIndex + 1;
      const img = new Image();
      img.src = sliderImages[nextIndex];
    }, [currentImageIndex, isInView, sliderImages]);

    return (

      <div ref={containerRef} className={styles.heroContainer}>
        {/* Background Images Slider */}
        <div className={styles.sliderContainer}>
          {sliderImages.map((img, index) => (
            <div
              key={img}
              className={`${styles.slideImage} ${index === currentImageIndex ? styles.slideActive : ''}`}
              style={{ backgroundImage: `url(${img})` }}
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
