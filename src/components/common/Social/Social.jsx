import styles from '../../../styles/Social.module.css';

export function Social() {
  return (
    <div className={`${styles.socialColumn} ${styles.column}`}>

        <a href="https://www.instagram.com/piedra.construcciones/" target="_blank" ><img src="/images/logos/instagram-logo.svg" alt="Instagram" loading="lazy" /></a>
        <a href="https://www.facebook.com/piedra.construcciones.uy" target="_blank" ><img src="/images/logos/facebook-logo.svg" alt="Facebook" loading="lazy" /></a>
        <a href="https://www.tiktok.com" target="_blank" ><img src="/images/logos/tiktok-logo.svg" alt="YouTube" loading="lazy" /></a>        
    
    </div>

  )

}