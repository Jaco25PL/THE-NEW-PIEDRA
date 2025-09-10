import styles from "../../../styles/MobileNav.module.css";
import { Social } from "../Social/Social";
import { useState } from "react";
import {Link} from 'react-router-dom';

export function MobileNav() {

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
                <img src="/images/logos/PIEDRA-W.svg" alt="PIEDRA logo" />
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
              <Link to="/nosotros" onClick={closeMenu}>NOSOTROS</Link>
            </li>
            <li className={styles.row}>
              <Link to="/construir" onClick={closeMenu}>CONSTRUIR</Link>
            </li>
            <li className={styles.row}>
              <Link to="/remodelar" onClick={closeMenu}>REMODELAR</Link>
            </li>
            <li className={styles.row}>
              <Link to="/proyectos" onClick={closeMenu}>PROYECTOS</Link>
            </li>
            <li className={styles.row}>
              <Link to="/contacto" onClick={closeMenu}>CONTACTO</Link>
            </li>
        </ul>

          <ul className={styles.mobileContactInfo}>
            <li className={styles.mobileContactRow}>
              <img src="/images/logos/whatsapp-logo-black.svg" alt="phone icon" />
              <a href="https://api.whatsapp.com/send?phone=59893595589" target="blank">+598 094 159 591</a>
            </li>
            <li className={styles.mobileContactRow}>
              <img src="/images/logos/blog-logo-black.svg" alt="blog" />
              <Link to="/blog" target="_blank">BLOG</Link>
            </li>
            <li  className={styles.mobileContactRow}>
              <img src="/images/logos/envelope-logo-black.svg" alt="email icon" />
              <a href="mailto:piedraconstr.uy@gmail.com" target="blank">PIEDRACONSTR.UY@gmail.com</a>
            </li>
          </ul>

          <Social/>

      </div>
    </div>
  );
}
