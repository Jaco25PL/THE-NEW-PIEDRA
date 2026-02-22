import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './BeforeAfterSlider.module.css';
import PropTypes from 'prop-types';

export function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [animationPosition, setAnimationPosition] = useState(50);
  const containerRef = useRef(null);
  const hintTimeoutRef = useRef(null);
  const inViewTimeoutRef = useRef(null);

  const updateSliderPosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setHasInteracted(true);
    setShowHint(false);
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setHasInteracted(true);
    setShowHint(false);
    updateSliderPosition(e.touches[0].clientX);
  }, [updateSliderPosition]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0].clientX);
  }, [isDragging, updateSliderPosition]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Sync animation position with slider position when not showing hint
  useEffect(() => {
    if (!showHint) {
      setAnimationPosition(sliderPosition);
    }
  }, [sliderPosition, showHint]);

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const currentContainer = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasInteracted) {
          // Start hint animation after 3 seconds
          inViewTimeoutRef.current = setTimeout(() => {
            if (!hasInteracted) {
              setShowHint(true);
              
              // Animate slider position to 70% (showing more before image)
              setAnimationPosition(70);
              
              // After 1.2 seconds, move back to center
              setTimeout(() => {
                setAnimationPosition(50);
              }, 1200);
              
              // Reset hint after animation
              hintTimeoutRef.current = setTimeout(() => {
                setShowHint(false);
                setAnimationPosition(50); // Ensure it's back to center
              }, 2400); // Total animation duration
            }
          }, 3000);
        } else {
          // Clear timeouts if not in view
          if (inViewTimeoutRef.current) {
            clearTimeout(inViewTimeoutRef.current);
          }
          if (hintTimeoutRef.current) {
            clearTimeout(hintTimeoutRef.current);
          }
          setShowHint(false);
        }
      },
      { threshold: 0.5 }
    );

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
      if (inViewTimeoutRef.current) {
        clearTimeout(inViewTimeoutRef.current);
      }
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
      }
    };
  }, [hasInteracted]);

  // Add event listeners to document for mouse events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Calculate the current position to use (animation position during hint, regular position otherwise)
  const currentPosition = showHint ? animationPosition : sliderPosition;

  return (
    <div 
      ref={containerRef}
      className={styles.container}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Before Image */}
      <div className={styles.imageContainer}>
        <img 
          src={beforeImage} 
          alt="Before" 
          className={styles.beforeImage}
          style={{ 
            clipPath: `inset(0 ${100 - currentPosition}% 0 0)`,
            transition: showHint ? 'clip-path 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
          }}
          draggable={false}
          loading="lazy"
        />
      </div>

      {/* After Image */}
      <div className={styles.imageContainer}>
        <img 
          src={afterImage} 
          alt="After" 
          className={styles.afterImage}
          style={{ 
            clipPath: `inset(0 0 0 ${currentPosition}%)`,
            transition: showHint ? 'clip-path 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
          }}
          draggable={false}
          loading="lazy"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className={styles.sliderHandle}
        style={{ 
          left: `${currentPosition}%`,
          transition: showHint ? 'left 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
        }}
      >
        <div className={styles.handleLine}></div>
        <div className={styles.handleCircle}>
          <svg
            className={styles.handleArrows}
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="9,1 2,8 9,15" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="19,1 26,8 19,15" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

BeforeAfterSlider.propTypes = {
  beforeImage: PropTypes.string.isRequired,
  afterImage: PropTypes.string.isRequired,
};
