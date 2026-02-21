import styles from '../../../styles/Works.module.css'
import { SectionDivider } from '../../common/SectionDivider/SectionDivider';
import { Titles } from '../../common/Titles/Titles'
import { BeforeAfterSlider } from '../../common/BeforeAfterSlider/BeforeAfterSlider';
import { useEffect, useRef, useState } from 'react';

export function Works() {

    const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const sliderImages = [
        {
          before: '/images/works/stone-jose-B.png',
          after: '/images/works/stone-jose-A.webp'
        },
        {
          before: '/images/works/dolores-B.webp',
          after: '/images/works/dolores-A.webp'
        },
        {
          before: isMobile ? '/images/works/marita-B.webp' : '/images/works/marita-2-B.webp',
          after:  isMobile ? '/images/works/marita-A.webp' : '/images/works/marita-2-A.webp'
        },
        {
          before: '/images/works/bruno-dias-B.avif',
          after: '/images/works/bruno-dias-A.avif'
        },
        {
          before: '/images/works/alicia-fondo-B.avif',
          after: '/images/works/alicia-fondo-A.avif'
        },
        {
          before: '/images/works/alicia-fondo-2-B.avif',
          after: '/images/works/alicia-fondo-2-A.webp'
        },
        {
          before: '/images/works/marita-cocina-B.avif',
          after: '/images/works/marita-cocina-A.avif'
        },
        {
          before: '/images/works/parrillero-B.webp',
          after: '/images/works/parrillero-A.webp'
        },
        {
          before: '/images/works/parrillero-3-B.webp',
          after: '/images/works/parrillero-3-A.webp'
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const preloadCache = useRef([]);

    useEffect(() => {
        preloadCache.current = sliderImages.flatMap(({ before, after }) => {
            const imgB = new Image();
            const imgA = new Image();
            imgB.src = before;
            imgA.src = after;
            return [imgB, imgA];
        });
    }, [isMobile]);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? sliderImages.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === sliderImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className={styles.container}>

            <SectionDivider position='top'/>

            <Titles title="ANTES & DESPUÉS" />

            <p className={styles.subtitle}>
                Tu casa tiene un potencial increíble, nosotros lo hacemos realidad
            </p>

            <div className={styles.carouselOuter}>
                <button className={`${styles.desktopArrow} ${styles.desktopArrowLeft}`} onClick={handlePrevImage} aria-label="Anterior">
                    <svg viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="13,2 3,14 13,26" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

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
                    {sliderImages.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.indicator} ${index === currentImageIndex ? styles.activeIndicator : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>

                {/* Before/After Slider */}
                <div className={styles.sliderContainer}>
                    <BeforeAfterSlider
                        beforeImage={sliderImages[currentImageIndex].before}
                        afterImage={sliderImages[currentImageIndex].after}
                    />
                    <a
                        href="https://www.instagram.com/piedra.construcciones/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.moreInfoButton}
                    >
                        <span>VER MÁS</span>
                        <img src="/images/logos/go-link.svg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                    </a>
                </div>
            </div>

                <button className={`${styles.desktopArrow} ${styles.desktopArrowRight}`} onClick={handleNextImage} aria-label="Siguiente">
                    <svg viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="3,2 13,14 3,26" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
