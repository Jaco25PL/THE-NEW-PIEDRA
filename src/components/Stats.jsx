import styles from '../styles/Stats.module.css'

export function Stats () {

    return (
        <div className={styles.statsBannerContainer}>
            <div className={styles.statsItem}>
                <h2 className={styles.statsNumber}>150+</h2>
                <p className={styles.statsDescription}>Proyectos Completados</p>
            </div>

            <div className={styles.statsItem}>
                <h2 className={styles.statsNumber}>97%</h2>
                <p className={styles.statsDescription}>Clientes Satisfechos</p>
            </div>

            <div className={styles.statsItem}>
                <h2 className={styles.statsNumber}>100%</h2>
                <p className={styles.statsDescription}>Cobertura Nacional</p>
            </div>

            <div className={styles.statsItem}>
                <h2 className={styles.statsNumber}>30+</h2>
                <p className={styles.statsDescription}>Años De Experiencia</p>
            </div>
            </div>
    )
}