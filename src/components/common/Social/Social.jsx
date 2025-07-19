import styles from '../../../styles/Social.module.css';

export function Social() {
  return (
    <div className={`${styles.socialColumn} ${styles.column}`}>

        <a href="https://www.instagram.com/piedra.construcciones/" target="_blank" ><img src="/images/instagram-logo.svg" alt="Instagram" /></a>
        <a href="https://www.facebook.com/piedra.construcciones.uy" target="_blank" ><img src="/images/facebook-logo.svg" alt="Facebook" /></a>
        <a href="https://www.tiktok.com" target="_blank" ><img src="/images/tiktok-logo.svg" alt="YouTube" /></a>        
    
    </div>

  )

}