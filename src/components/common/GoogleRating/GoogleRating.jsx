import styles from './GoogleRating.module.css';

export function GoogleRating() {
    return (
        <div className={styles.googleRatingContainer}>
            {/* Desktop logo - word version */}
            <img 
                src="/images/logos/google_logo_word.svg" 
                alt="Google" 
                className={styles.googleLogoDesktop}
                loading="lazy"
            />
            {/* Mobile logo - icon version */}
            <img 
                src="/images/logos/google_logo.svg" 
                alt="Google" 
                className={styles.googleLogoMobile}
                loading="lazy"
            />
            <div className={styles.ratingSection}>
                <p className={styles.googleRatingText}>Google Rating</p>
                <div className={styles.ratingDisplay}>
                    <span className={styles.ratingNumber}>5</span>
                    <div className={styles.ratingStars}>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className={styles.starFilled}>★</span>
                        ))}
                    </div>
                </div>
                <p className={styles.averageText}>en promedio</p>
            </div>
        </div>
    );
}
