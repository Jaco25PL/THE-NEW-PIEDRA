
import styles from '../../../styles/CTA.module.css';


export function Testimonials() {
    return (
        <div className={styles.testimonial}>
        <div className={styles.faces}>
          <div className={styles.face}><img src="/images/clients/jr_client.png" alt="" /></div>
          <div className={styles.face}><img src="/images/clients/mf_client.png" alt="" /></div>
          <div className={styles.face}><img src="/images/clients/zg_client.png" alt="" /></div>
        </div>
        <div className={styles.ratings}>
          <div className={styles.stars}>★★★★★</div>
          <p className={styles.ratingText}>65+ hogares renovados</p>
        </div>
      </div>
    )
}