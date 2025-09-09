import '../../../App.css';
import styles from '../../../styles/Footer.module.css';
import { Social } from '../Social/Social';

export function Footer() {

    const scrollToFAQ = (e) => {
        e.preventDefault();
        const faqSection = document.getElementById('faq');
        if (faqSection) {
            // Get the current header height (could be 4rem or 6rem depending on scroll state)
            const header = document.querySelector('[class*="header"]');
            let headerHeight = 96; // Default 6rem in pixels (6 * 16px)
            
            // Try to get actual header height if header element exists
            if (header) {
                const headerStyles = window.getComputedStyle(header);
                headerHeight = parseFloat(headerStyles.height);
            }
            
            // Add some padding for better visual separation
            const offset = headerHeight + 20; // header height + 20px padding
            
            // Get the element's position
            const elementPosition = faqSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (

    <footer className={styles.footer}>
        <div className={`${styles.footerSection} ${styles.footerLeft}`}>
          <div className={styles.footerLeftTop}>
              <a href="https://api.whatsapp.com/send?phone=59893595589" target="blank">094 159 591</a>
            <span>|</span>
                <a href="#faq" onClick={scrollToFAQ}>Preguntas Frecuentes</a>
            <span>|</span>
              <a href="mailto:piedraconstr.uy@gmail.com" target="blank">piedraconstr.uy@gmail.com</a>

          </div>

          <div className={styles.footerLeftBottom}>
                <span>Terminos de Servicios</span>
            <span>|</span>
                <span>Politica de Privacidad</span>
            <span>|</span>
                <p>Copyright © 2025 Piedra Construcciones</p>
          </div>
        </div>

        <div className={`${styles.footerSection} ${styles.footerRight}`}>          
          <p>Queremos ayudarte a construir o transformar el hogar que siempre soñastes</p>
        </div>

        <div className={styles.social}>
          <Social/>
        </div>

      </footer>
    )
    
}