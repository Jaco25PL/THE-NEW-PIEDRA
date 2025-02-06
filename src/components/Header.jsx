import '../App.css';
import styles from '../styles/Header.module.css'

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <nav className={styles.headerGrid}>
              <div className={`${styles.socialColumn} ${styles.column}`}>

                <a href="http://" target="_blank" ><img src="./images/instagram-logo.svg" alt="Instagram" /></a>
                <a href="http://" target="_blank" ><img src="./images/facebook-logo.svg" alt="Facebook" /></a>
                <a href="http://" target="_blank" ><img src="./images/youtube-logo.svg" alt="YouTube" /></a>        
                
              </div>

              {/* 2) Second column */}
              <div className={styles.column}><a href='#'>HISTORIA</a> </div>

              {/* 3) Third column */}
              <div className={styles.column}><a href='#'>CONSTRUCCIONES</a> </div>

              {/* 4) Fourth column (Center - your logo, for example) */}
              <div className={`${styles.column} ${styles.logoColomn}`}>
                <a href="#">
                    <img className={styles.mainLogo} src="./images/PIEDRA-B.svg" alt="Piedra Construcciones" />
                    {/* <img className={styles.mainLogo} src="./images/piedra_logo-2.svg" alt="Piedra Construcciones" /> */}
                </a>
              </div>

              {/* 5) Fifth column */}
              <div className={styles.column}><a href='#'>REMODELACIONES</a> </div>

              {/* 6) Sixth column */}
              <div className={styles.column}><a href='#'>BLOG</a> </div>

              {/* 7) Seventh column: “Contactar” button */}
              <div className={styles.column}>
                <button type="button" className={styles.contactButton}>CONTACTAR</button>
              </div>
            </nav>
        </header>
    )
}