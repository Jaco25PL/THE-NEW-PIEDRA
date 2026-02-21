import styles from '../../../styles/Social.module.css';

export function Social() {
  return (
    <div className={`${styles.socialColumn} ${styles.column}`}>

        <a href="https://www.instagram.com/piedra.construcciones/" target="_blank" rel="noopener noreferrer"><img src="/images/logos/instagram-logo.svg" alt="Instagram" width="24" height="24" loading="lazy" /></a>
        <a href="https://www.facebook.com/piedra.construcciones.uy" target="_blank" rel="noopener noreferrer"><img src="/images/logos/facebook-logo.svg" alt="Facebook" width="24" height="24" loading="lazy" /></a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><img src="/images/logos/tiktok-logo.svg" alt="YouTube" width="24" height="24" loading="lazy" /></a>        
    
    </div>

  )

}