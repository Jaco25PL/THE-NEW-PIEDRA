import styles from '../../../styles/CTA.module.css';
import { CTAButton } from '../../common/Button/CTAButton';
import { Testimonials } from '../../common/Testimonials/Testimonials';
import PropTypes from 'prop-types';


export function CTA({
  heading = "¿Listo Para",
  headingBottom = "Transformar tu Casa?",
  subheading = "Tu hogar merece lo mejor. Agenda una consulta gratuita sin compromiso y descubre cómo podemos hacer realidad tu visión"

}) {


    const whatsappNumber = '59893595589';

    return (
    <section className={styles.container}>
      {/* Background image — use <picture> so lazy loading and srcset work natively */}
      <picture className={styles.bgPicture} aria-hidden="true">
        {/* Add AVIF source here once generated: <source srcSet="/images/renders/render-4.avif" type="image/avif" /> */}
        <source srcSet="/images/renders/render-4.webp" type="image/webp" />
        <img
          src="/images/renders/render-4.webp"
          alt=""
          className={styles.bgImage}
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div className={styles.contentOverlay}>
        <div className={styles.content}>
            <div className={styles.headingContainer}>
                  <h1 className={styles.heading}>{heading}</h1>
                  <h1 className={styles.heading}>{headingBottom}</h1>
            </div>
            <p className={styles.subheading}>
              {subheading}
            </p>

            <CTAButton text="QUIERO MÁS INFORMACIÓN" action={`https://wa.me/${whatsappNumber}`} />
            <div className={styles.features}>
              <span>✓ Render 3D</span>
              <span>✓ Cuotas Sin Interés</span>
              <span>✓ Garantizado</span>
            </div>
        </div>
      </div>
      
      <Testimonials/>

    </section>
  );

}

CTA.propTypes = {
  heading: PropTypes.string,
  headingBottom: PropTypes.string,
  subheading: PropTypes.string,
};