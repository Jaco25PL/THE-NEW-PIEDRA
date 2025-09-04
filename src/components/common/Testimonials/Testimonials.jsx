
import styles from '../../../styles/CTA.module.css';


export function Testimonials() {
    return (
        <a
          href="https://www.google.com/search?q=Piedra+Construcciones&ie=UTF-8#mpd=~13252831935698052680/customers/reviews&lrd=0x959f81b539eb72cf:0xd8c34054d85c5ad0,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.testimonial}>
            <div className={styles.faces}>
              <div className={styles.face}><img src="/images/clients/jr_client.png" alt="" loading="lazy" /></div>
              <div className={styles.face}><img src="/images/clients/mf_client.png" alt="" loading="lazy" /></div>
              <div className={styles.face}><img src="/images/clients/zg_client.png" alt="" loading="lazy" /></div>
            </div>
            <div className={styles.ratings}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.ratingText}>65+ hogares renovados</p>
            </div>
          </div>
        </a>
    )
}