import styles from '../styles/Works.module.css'
import { Titles } from './Titles'
import { useState } from 'react';

const SliderImages = [
    {
      before: './images/sample-house-1.jpg',
      after: './images/sample-house-2.jpg'
    },
    {
      before: './images/sample-house-3.jpg',
      after: './images/sample-house-1.jpg'
    },
    {
      before: './images/sample-house-3.jpg',
      after: './images/sample-house-1.jpg'
    },
    {
      before: './images/sample-house-3.jpg',
      after: './images/sample-house-1.jpg'
    }
    // Add more images as needed
  ];


export function Works() {

    const [currentView, setCurrentView] = useState('ANTES');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleViewChange = (view) => {
    setCurrentView(view);
    };

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
            <Titles title="ANTES & DESPUÉS" />
            <p className={styles.subtitle}>
                Tu casa tiene un potencial increíble, nosotros lo hacemos realidad
            </p>
        

                {/* Prev Arrow */}
                <button 
                    className={styles.navigationArrow} 
                    onClick={handleNextImage}
                >
                    <img src="./images/arrow-B.svg" alt="Previous Arrow" />
                </button>

                {/* Next Arrow */}
                <button 
                    className={styles.navigationArrow} 
                    onClick={handlePrevImage}
                >
                    <img src="./images/arrow-B.svg" alt="Previous Arrow" />
                    
                </button>



            <div className={styles.sliderWrapper}>
                {/* View Selection Buttons */}
                <div className={styles.viewSelector}>
                    <button 
                        className={`${styles.viewButton} ${currentView === 'ANTES' ? styles.activeView : ''}`}
                        onClick={() => handleViewChange('ANTES')}
                    >
                        ANTES
                    </button>
                    <button 
                        className={`${styles.viewButton} ${currentView === 'DESPUES' ? styles.activeView : ''}`}
                        onClick={() => handleViewChange('DESPUES')}
                    >
                        DESPUÉS
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
                    <img src="./images/go-link.svg" alt="" />
                </a>

                {/* Image Slider */}
                <div className={styles.imageSlider}>
                    <img 
                        src={currentView === 'ANTES' 
                          ? SliderImages[currentImageIndex].before 
                          : SliderImages[currentImageIndex].after
                        } 
                        alt={`${currentView} image`}
                        className={styles.sliderImage}
                    />
                </div>
            </div>
        </div>
    )
}