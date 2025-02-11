import { useState } from "react";
import styles from "../styles/MobileNav.module.css";

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
            <a href="#">
                <img src="./images/PIEDRA-W-MOB.svg" alt="PIEDRA logo" />
            </a>
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
            <a href="#" >HISTORIA</a>
            </li>
            <li className={styles.row}>
            <a href="#" >CONSTRUCCIONES</a>
            </li>
            <li className={styles.row}>
            <a href="#" >REMODELACIONES</a>
            </li>
            <li className={styles.row}>
            <a href="#" >BLOG</a>
            </li>
        </ul>
      </div>
      
    </div>
  );
}
