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

    return (
        <header className={`${styles.headerContainer} ${effectiveScrolled ? styles.headerContainerScrolled : styles.headerContainerNotScrolled}`}>
            <nav className={styles.headerGrid}>

              <Social />

              <div className={styles.column}><Link to="/nosotros" className={pathname === '/nosotros' ? styles.activeLink : undefined}>NOSOTROS</Link></div>

              <div className={styles.column}><Link to="/construir" className={pathname === '/construir' ? styles.activeLink : undefined}>CONSTRUIR</Link></div>

              <div className={`${styles.column} ${styles.logoColomn}`}>
                <Link to="/">
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

              <div className={styles.column}><Link to="/remodelar" className={pathname === '/remodelar' ? styles.activeLink : undefined}>REMODELAR</Link></div>

              <div className={styles.column}><Link to="/proyectos" className={pathname === '/proyectos' ? styles.activeLink : undefined}>PROYECTOS</Link></div>

              <div className={styles.column}>
                <Link to="/contacto"><span className={styles.contactButton}>CONTACTAR</span></Link>
              </div>
            </nav>

            <div className={styles.mobileNavContainer}>
              <MobileNav />
            </div>

        </header>
    )
}
