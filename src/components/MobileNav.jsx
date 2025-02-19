import { useState } from "react";
import styles from "../styles/MobileNav.module.css";
import { Social } from "./Social";
import {Link} from 'react-router-dom';

// export function MobileNav({ scrollTo, scrollToAbout, scrollToServices, scrollToProjects }) {
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
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
            <Link  to="/">
                <img src="./images/PIEDRA-W-MOB.svg" alt="PIEDRA logo" />
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

        {/* <div className={styles.contactContainer}>
          <a href="#" type="button" className={styles.contactButton}>CONTACTAR</a>
        </div> */}
      </nav>

      <div className={`${styles.mobileMenuContainer} ${isOpen ? styles.openNav : styles.closedNav}`}>
        <ul className={styles.mobileMenu}>
            <li className={styles.row}>
              <Link to="/historia">HISTORIA</Link>
            </li>
            <li className={styles.row}>
              <Link to="/construcciones">CONSTRUCCIONES</Link>
            </li>
            <li className={styles.row}>
              <Link to="/remodelaciones">REMODELACIONES</Link>
            </li>
            <li className={styles.row}>
              <Link to="/contacto">CONTACTO</Link>
            </li>
        </ul>

          <ul className={styles.mobileContactInfo}>
            <li className={styles.mobileContactRow}>
              <img src="./images/phone-icon.svg" alt="phone icon" />
              <a href="https://api.whatsapp.com/send?phone=59893595589" target="blank">094 159 591</a>
            </li>
            <li className={styles.mobileContactRow}>
              <img src="./images/blog-icon.svg" alt="email icon" />
              <Link to="/blog" target="_blank">BLOG</Link>
            </li>
            <li  className={styles.mobileContactRow}>
              <img src="./images/envelope-icon.svg" alt="email icon" />
              <a href="mailto:piedraconstr.uy@gmail.com" target="blank">PIEDRACONSTR.UY@gmail.com</a>
            </li>
          </ul>

          <Social/>

      </div>
      
    </div>
  );
}
