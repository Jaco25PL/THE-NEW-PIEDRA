import styles from '../../../styles/Works.module.css'
import { SectionDivider } from '../../common/SectionDivider/SectionDivider';
import { Titles } from '../../common/Titles/Titles'
import { BeforeAfterSlider } from '../../common/BeforeAfterSlider/BeforeAfterSlider';
import { useState } from 'react';

const SliderImages = [
    {
      before: '/images/sample-house-1.jpg',
      after: '/images/sample-house-2.jpg'
    },
    {
      before: '/images/sample-house-3.jpg',
      after: '/images/sample-house-1.jpg'
    },
    {
      before: '/images/sample-house-3.jpg',
      after: '/images/sample-house-1.jpg'
    },
    {
      before: '/images/sample-house-3.jpg',
      after: '/images/sample-house-1.jpg'
    }
    // Add more images as needed
];


export function Works() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? SliderImages.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === SliderImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className={styles.container}>

            <SectionDivider position='top'/>

            <Titles title="ANTES & DESPUÉS" />
            
            <p className={styles.subtitle}>
                Tu casa tiene un potencial increíble, nosotros lo hacemos realidad
            </p>

            <div className={styles.sliderWrapper}>
                {/* Navigation Buttons */}
                <div className={styles.navigationControls}>
                    <button 
                        className={styles.navButton}
                        onClick={handlePrevImage}
                    >
                        ANTERIOR
                    </button>
                    <button 
                        className={styles.navButton}
                        onClick={handleNextImage}
                    >
                        SIGUIENTE
                    </button>
                </div>

                {/* Image Indicators */}
                <div className={styles.imageIndicators}>
                    {SliderImages.map((_, index) => (
                        <span 
                            key={index} 
                            className={`${styles.indicator} ${index === currentImageIndex ? styles.activeIndicator : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
                
                {/* More Info Button */}
                <a 
                    href="https://www.instagram.com/piedra.construcciones/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.moreInfoButton}
                >
                    <span>VER MÁS</span>
                    <img src="/images/logos/go-link.svg" alt="" loading="lazy" />
                </a>

                {/* Before/After Slider */}
                <div className={styles.sliderContainer}>
                    <BeforeAfterSlider 
                        beforeImage={SliderImages[currentImageIndex].before}
                        afterImage={SliderImages[currentImageIndex].after}
                    />
                </div>
            </div>
        </div>
    )
}