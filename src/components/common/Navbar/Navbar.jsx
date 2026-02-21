import '../../../App.css';
import styles from '../../../styles/Header.module.css'
import { Social } from '../Social/Social';
import { MobileNav } from './MobileNav';
import { useHeaderScroll } from '../../../hooks/useHeaderScroll';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {

  const { isScrolled } = useHeaderScroll()
  const { pathname } = useLocation()
  const effectiveScrolled = isScrolled && pathname !== '/contacto'

    // console.log(isScrolling)

    return (
        <header className={`${styles.headerContainer} ${effectiveScrolled ? styles.headerContainerScrolled : styles.headerContainerNotScrolled}`}>
            <nav className={styles.headerGrid}>
  
              <Social />

              {/* 2) Second column */}
              <div className={styles.column}><Link to="/nosotros">NOSOTROS</Link> </div>

              {/* 3) Third column */}
              <div className={styles.column}><Link to="/construir">CONSTRUIR</Link> </div>

              {/* 4) Fourth column (Center - your logo, for example) */}
              <div className={`${styles.column} ${styles.logoColomn}`}>
                <Link to="/">
                  {/* Both logos always in the DOM — crossfade with opacity, no src swap */}
                  <div className={`${styles.logoWrapper} ${effectiveScrolled ? styles.logoWrapperScrolled : ''}`}>
                    <img
                      className={`${styles.mainLogoImg} ${effectiveScrolled ? styles.logoOut : styles.logoIn}`}
                      src="/images/logos/PIEDRA-B.svg"
                      alt="Piedra Construcciones"
                      height="96"
                      width="auto"
                    />
                    <img
                      className={`${styles.scrollLogoImg} ${effectiveScrolled ? styles.logoIn : styles.logoOut}`}
                      src="/images/logos/PIEDRA-B-SM.svg"
                      alt=""
                      aria-hidden="true"
                      height="64"
                      width="auto"
                    />
                  </div>
                </Link>
              </div>

              {/* 5) Fifth column */}
              <div className={styles.column}><Link to="/remodelar">REMODELAR</Link> </div>

              {/* 6) Sixth column */}
              <div className={styles.column}><Link to="/proyectos">PROYECTOS</Link> </div>

              {/* 7) Seventh column: “Contactar” button */}
              <div className={`${styles.column}`}>
                <Link to="/contacto"><span className={styles.contactButton}>CONTACTAR</span></Link>
              </div>
            </nav>

            <div className={styles.mobileNavContainer}>
              <MobileNav />
            </div>

        </header>
    )
}