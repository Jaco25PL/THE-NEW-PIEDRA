
import styles from '../../../styles/CTA.module.css';


export function Testimonials() {
    return (
        <div className={styles.testimonial}>
        <div className={styles.faces}>
          <div className={styles.face}><img src="/images/face-1.png" alt="" /></div>
          <div className={styles.face}><img src="/images/face-2.png" alt="" /></div>
          <div className={styles.face}><img src="/images/face-3.jpeg" alt="" /></div>
        </div>
        <div className={styles.ratings}>
          <div className={styles.stars}>★★★★★</div>
          <p className={styles.ratingText}>150+ hogares renovados</p>
        </div>
      </div>
    )
}