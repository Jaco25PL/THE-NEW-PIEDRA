import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contacto | Piedra Construcciones - Hablemos de Tu Proyecto</title>
        <meta name="description" content="Contáctanos para asesoramiento sin costo y presupuesto a medida. Conversemos sobre tu proyecto de construcción o remodelación en Montevideo." />
        <meta name="keywords" content="contacto piedra construcciones, presupuesto construcción montevideo, consulta gratis remodelación, arquitecto montevideo" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://piedraconstrucciones.com.uy/contacto" />
        <meta property="og:title" content="Contacto - Piedra Construcciones" />
        <meta property="og:description" content="Asesoramiento sin costo y presupuesto a medida. Conversemos sobre tu proyecto." />
        <meta property="og:image" content="https://piedraconstrucciones.com.uy/images/logos/PIEDRA-B.svg" />
        <meta property="og:locale" content="es_UY" />
        <meta property="og:site_name" content="Piedra Construcciones" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://piedraconstrucciones.com.uy/contacto" />
        <meta property="twitter:title" content="Contacto - Piedra Construcciones" />
        <meta property="twitter:description" content="Contáctanos para tu proyecto de construcción o remodelación en Montevideo." />
        <meta property="twitter:image" content="https://piedraconstrucciones.com.uy/images/logos/PIEDRA-B.svg" />
        
        {/* Structured Data for Contact */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Piedra Construcciones",
              "telephone": "+59893595589",
              "email": "piedraconstr.uy@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Montevideo",
                "addressCountry": "UY"
              },
              "sameAs": [
                `https://www.instagram.com/${instagramUser}/`,
                `https://www.tiktok.com/@${tiktokUser}`
              ]
            }
          })}
        </script>
        
        <link rel="canonical" href="https://piedraconstrucciones.com.uy/contacto" />
      </Helmet>
      <div className={styles.contentOverlay}>
        <div className={styles.content}>
          <div className={styles.headingContainer}>
            <h1 id="contacto-heading" className={styles.heading}>
              ¿Listo Para Transformar Tu Espacio?
            </h1>
            <p className={styles.subheading}>
              Asesoramiento sin costo y presupuesto a medida
            </p>
            <p>Conversemos sobre tu proyecto</p>
          </div>

          <CTAButton
            text="HABLAR CON UN ASESOR"
            action={`https://wa.me/${whatsappNumber}`}
          />

          <nav className={styles.links} aria-label="Otros medios de contacto">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.icon} aria-hidden="true"><img src="/images/logos/whatsapp-logo.svg" alt="WhatsApp logo" loading="lazy" /></span>
              <span className={styles.linkText}>+598 093 595 589</span>
            </a>

            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.icon} aria-hidden="true"><img src="/images/logos/instagram-logo.svg" alt="Instagram" loading="lazy" /></span>
              <span className={styles.linkText}>{instagramUser}</span>
            </a>

            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.icon} aria-hidden="true"><img src="/images/logos/tiktok-logo.svg" alt="TikTok" loading="lazy" /></span>
              <span className={styles.linkText}>{tiktokUser}</span>
            </a>



            <a href={`mailto:${email}`} className={styles.link}>
              <span className={styles.icon} aria-hidden="true"><img src="/images/logos/envelope-logo.svg" alt="Envelope logo" loading="lazy" /></span>
              <span className={styles.linkText}>{email}</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
