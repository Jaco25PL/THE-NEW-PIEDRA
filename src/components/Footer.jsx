import '../App.css';
import styles from '../styles/Footer.module.css';

export function Footer() {

    return (

    <footer className={styles.footer}>
        <div className={`${styles.footerSection} ${styles.footerLeft}`}>
          <div className={styles.footerLeftTop}>
                <a href="#whatsapp">+598 091 234 567</a>
            <span>|</span>
                <a href="#q&a">Preguntas Frecuentes</a>
            <span>|</span>
                <a href="#mail">piedraconstr.uy@gmail.com</a>
          </div>

          <div className={styles.footerLeftBottom}>
                <a href="#tos">Terminos de Servicios</a>
            <span>|</span>
                <a href="#privacy">Politica de Privadicad</a>
            <span>|</span>
                <p>Copyright © 2025 Piedra Construcciones</p>
          </div>
        </div>

        <div className={`${styles.footerSection} ${styles.footerRight}`}>          
          <p>Queremos ayudarte a construir o transformar el hogar que siempre soñastes</p>
        </div>

      </footer>
    )
    
}