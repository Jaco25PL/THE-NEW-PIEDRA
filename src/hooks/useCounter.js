import { useState, useEffect, useRef } from 'react';

export const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Intersection Observer to detect when element comes into view
  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger a bit before element is fully visible
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated]);

  // Counter animation
  useEffect(() => {
    if (!isVisible || hasAnimated) return;
    
    let startTime;
    let animationId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentValue = Math.floor(start + (end - start) * easeOut);
      
      setCount(currentValue);
      
      if (percentage < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end exactly at the target number
        setHasAnimated(true); // Mark as animated only when animation completes
      }
    };
    
    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible, end, duration, start, hasAnimated]);
  
  return { count, elementRef };
};
