import styles from '../styles/CTA.module.css';
import { CTAButton } from './CTAButton';


export function CTA() {


    const whatsappNumber = '59893595589';

    return (
    <section className={styles.container}>
      <div className={styles.contentOverlay}>
        <div className={styles.content}>
            <div className={styles.headingContainer}>
                  <h1 className={styles.heading}>¿Listo Para</h1>
                  <h1 className={styles.heading}>Transformar tu Casa?</h1>
            </div>
            <p className={styles.subheading}>
              Tu hogar merece lo mejor. Agenda una consulta gratuita sin compromiso y descubre cómo podemos hacer realidad tu visión.
            </p>

            <CTAButton text="RESERVA UNA VISITA HOY" action={`https://wa.me/${whatsappNumber}`} />
            {/* <a
              href={`https://wa.me/${whatsappNumber}`}
              className={styles.whatsappButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              ESCRIBIR POR WHATSAPP
            </a> */}
            <div className={styles.features}>
              <span>✓ Render 3D</span>
              <span>✓ Cuotas Sin Interés</span>
              <span>✓ Garantía de por vida</span>
            </div>
        </div>
      </div>
      
      <div className={styles.testimonial}>
        <div className={styles.faces}>
          <div className={styles.face}><img src="./images/face-1.png" alt="" /></div>
          <div className={styles.face}><img src="./images/face-2.png" alt="" /></div>
          <div className={styles.face}><img src="./images/face-3.jpeg" alt="" /></div>
        </div>
        <div className={styles.ratings}>
          <p className={styles.ratingText}>150+ hogares renovados</p>
          <div className={styles.stars}>★★★★★</div>
        </div>
      </div>
      
    </section>
  );

}