import "../../../App.css";
import styles from "../../../styles/Header.module.css";
import { Social } from "../Social/Social";
import { MobileNav } from "./MobileNav";
import { useHeaderScroll } from "../../../hooks/useHeaderScroll";
import { Link } from "react-router-dom";

export function Navbar() {
  const { isScrolled } = useHeaderScroll();

  // console.log(isScrolling)

  return (
    <header
      className={`${styles.headerContainer} ${
        isScrolled
          ? styles.headerContainerScrolled
          : styles.headerContainerNotScrolled
      }`}
    >
      <nav className={styles.headerGrid}>
        <Social />

        {/* 2) Second column */}
        <div className={styles.column}>
          <Link to="/nosotros">NOSOTROS</Link>{" "}
        </div>

        {/* 3) Third column */}
        <div className={styles.column}>
          <Link to="/construir">CONSTRUIR</Link>{" "}
        </div>

        {/* 4) Fourth column (Center - your logo, for example) */}
        <div className={`${styles.column} ${styles.logoColomn}`}>
          <Link to="/">
            <img
              className={`${styles.logo} ${
                isScrolled ? styles.scrollLogo : styles.mainLogo
              }`}
              src={
                isScrolled
                  ? "/images/logos/PIEDRA-B-SM.svg"
                  : "/images/logos/PIEDRA-B.svg"
              }
              alt="Piedra Construcciones"
            />
          </Link>
        </div>

        {/* 5) Fifth column */}
        <div className={styles.column}>
          <Link to="/remodelar">REMODELAR</Link>{" "}
        </div>

        {/* 6) Sixth column */}
        <div className={styles.column}>
          <Link to="/blog">BLOG</Link>{" "}
        </div>

        {/* 7) Seventh column: “Contactar” button */}
        <div className={`${styles.column}`}>
          <Link to="/contacto">
            <span className={styles.contactButton}>CONTACTAR</span>
          </Link>
        </div>
      </nav>

      <div className={styles.mobileNavContainer}>
        <MobileNav />
      </div>
    </header>
  );
}
