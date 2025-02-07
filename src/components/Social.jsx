import styles from '../styles/Social.module.css';

export function Social() {
  return (
    <div className={`${styles.socialColumn} ${styles.column}`}>

        <a href="http://" target="_blank" ><img src="./images/instagram-logo.svg" alt="Instagram" /></a>
        <a href="http://" target="_blank" ><img src="./images/facebook-logo.svg" alt="Facebook" /></a>
        <a href="http://" target="_blank" ><img src="./images/youtube-logo.svg" alt="YouTube" /></a>        
    
    </div>

  )

}