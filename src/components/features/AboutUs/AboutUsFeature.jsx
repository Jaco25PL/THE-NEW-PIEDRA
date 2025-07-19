import styles from '../../../styles/AboutUs.module.css'
import propTypes from 'prop-types'

export function AboutUsFeature({ title, description }) {

    return (
        <div className={styles.featureItem}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDescription}>{description}</p>
            </div>
        </div>
    )

}

AboutUsFeature.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}