import '../App.css';
import styles from '../styles/Footer.module.css';

export function Footer() {

    return (

    <footer className={styles.footer}>
        <div className={`${styles['footer-section']} ${styles['footer-left']}`}>
          <a href="#whatsapp">+598 091 234 567</a>
          <span>|</span>
          <a href="#mail">piedraconstr.uy@gmail.com</a>
          <span>|</span>
          <a href="#q&a">Preguntas Frecuentes</a>
        </div>

        <div className={`${styles['footer-section']} ${styles['footer-right']}`}>
          <a href="#tos">Terms of Service</a>
          <span>|</span>
          <a href="#privacy">Privacy Policy</a>
          <span>|</span>
          <a href="#contactar">Contactar</a>
          <span>|</span>
          <p>Copyright © 2025 Piedra Construcciones</p>
        </div>

      </footer>
    )
    
}