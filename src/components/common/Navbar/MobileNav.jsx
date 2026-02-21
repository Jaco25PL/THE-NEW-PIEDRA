import styles from "../../../styles/MobileNav.module.css";
import { Social } from "../Social/Social";
import { useState } from "react";
import {Link, useLocation} from 'react-router-dom';

export function MobileNav() {

  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {  
    document.body.style.overflow = "auto";
  }

  return (
    <div className={styles.navContainer}>
      <nav className={styles.mobileNav}>
        
        <div></div>

        <div className={styles.logoContainer}>
            <Link  to="/" onClick={closeMenu}>
                <img src="/images/logos/PIEDRA-W.svg" alt="PIEDRA logo" height="48" width="auto" />
            </Link>
        </div>


        <div className={styles.hamburgerContainer}>
          <button
            type="button"
            onClick={handleClick}
            className={`${styles.hamburgerBtn} ${isOpen ? styles.open : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </nav>

      <div className={`${styles.mobileMenuContainer} ${isOpen ? styles.openNav : styles.closedNav}`}>
        <ul className={styles.mobileMenu}>
            <li className={styles.row}>
              <Link to="/nosotros" onClick={closeMenu} className={pathname === '/nosotros' ? styles.activeLink : ''}>NOSOTROS</Link>
            </li>
            <li className={styles.row}>
              <Link to="/construir" onClick={closeMenu} className={pathname === '/construir' ? styles.activeLink : ''}>CONSTRUIR</Link>
            </li>
            <li className={styles.row}>
              <Link to="/remodelar" onClick={closeMenu} className={pathname === '/remodelar' ? styles.activeLink : ''}>REMODELAR</Link>
            </li>
            <li className={styles.row}>
              <Link to="/proyectos" onClick={closeMenu} className={pathname === '/proyectos' ? styles.activeLink : ''}>PROYECTOS</Link>
            </li>
            <li className={styles.row}>
              <Link to="/contacto" onClick={closeMenu} className={pathname === '/contacto' ? styles.activeLink : ''}>CONTACTO</Link>
            </li>
        </ul>

          <ul className={styles.mobileContactInfo}>
            <li className={styles.mobileContactRow}>
              <img src="/images/logos/whatsapp-logo-black.svg" alt="phone icon" width="20" height="20" />
              <a href="https://api.whatsapp.com/send?phone=59893595589" target="_blank" rel="noopener noreferrer">+598 093 595 589</a>
            </li>
            <li className={styles.mobileContactRow}>
              <img src="/images/logos/blog-logo-black.svg" alt="blog" width="20" height="20" />
              <Link to="/blog" target="_blank">BLOG</Link>
            </li>
            <li  className={styles.mobileContactRow}>
              <img src="/images/logos/envelope-logo-black.svg" alt="email icon" width="20" height="20" />
              <a href="mailto:piedraconstr.uy@gmail.com" target="_blank" rel="noopener noreferrer">PIEDRACONSTR.UY@gmail.com</a>
            </li>
          </ul>

          <Social/>

      </div>
    </div>
  );
}
