import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export function LazySection({ children, rootMargin = '600px 0px', minHeight = '1px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight }}>
      {isVisible ? children : null}
    </div>
  );
}

LazySection.propTypes = {
  children: PropTypes.node.isRequired,
  rootMargin: PropTypes.string,
  minHeight: PropTypes.string,
};
