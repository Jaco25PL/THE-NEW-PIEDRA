import styles from '../styles/pages/Contacto.module.css';
import { CTAButton } from '../components/common/Button/CTAButton';

export function Contacto() {
  // Editable contact details
  const whatsappNumber = '59893595589';
  const email = 'piedraconstr.uy@gmail.com';
  const instagramUser = 'piedra.construcciones';
  const tiktokUser = 'piedra.construcciones';
  const instagramUrl = `https://www.instagram.com/${instagramUser}/`;
  const tiktokUrl = `https://www.tiktok.com/@${tiktokUser}`;

  return (
    <section className={styles.container} aria-labelledby="contacto-heading">
      <div className={styles.contentOverlay}>
        <div className={styles.content}>
          <div className={styles.headingContainer}>
            <h1 id="contacto-heading" className={styles.heading}>
              ¿Listo para transformar tu espacio?
            </h1>
            <p className={styles.subheading}>
              Asesoramiento sin costo y presupuesto a medida. Conversemos sobre tu proyecto.
            </p>
          </div>

          <CTAButton
            text="HABLAR CON UN ASESOR"
            action={`https://wa.me/${whatsappNumber}`}
          />

          <nav className={styles.links} aria-label="Otros medios de contacto">
            <a href={`mailto:${email}`} className={styles.link}>
              <span className={styles.icon} aria-hidden="true"><img src="/images/envelope-logo.svg" alt="Envelope logo" /></span>
              <span className={styles.linkText}>{email}</span>
            </a>

            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.icon} aria-hidden="true"><img src="/images/instagram-logo.svg" alt="Instagram" /></span>
              <span className={styles.linkText}>{instagramUser}</span>
            </a>

            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.icon} aria-hidden="true"><img src="/images/tiktok-logo.svg" alt="TikTok" /></span>
              <span className={styles.linkText}>{tiktokUser}</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.icon} aria-hidden="true"><img src="/images/whatsapp-logo.svg" alt="WhatsApp logo" /></span>
              <span className={styles.linkText}>093 595 589</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
