import styles from '../../../styles/Stats.module.css'
import { useCounter } from '../../../hooks/useCounter'

export function Stats () {
    const { count: projectsCount, elementRef: projectsRef } = useCounter(65, 2000, 0);
    const { count: satisfactionCount, elementRef: satisfactionRef } = useCounter(99.9, 2200, 0);
    const { count: coverageCount, elementRef: coverageRef } = useCounter(100, 2400, 0);
    const { count: experienceCount, elementRef: experienceRef } = useCounter(30, 2600, 0);

    return (
        <section className={styles.statsBannerContainer}>
            <div className={styles.statsItem} ref={projectsRef}>
                <h2 className={styles.statsNumber}>{projectsCount}+</h2>
                <p className={styles.statsDescription}>Proyectos Completados</p>
            </div>

            <div className={styles.statsItem} ref={satisfactionRef}>
                <h2 className={styles.statsNumber}>{satisfactionCount}%</h2>
                <p className={styles.statsDescription}>Clientes Satisfechos</p>
            </div>

            <div className={styles.statsItem} ref={coverageRef}>
                <h2 className={styles.statsNumber}>{coverageCount}%</h2>
                <p className={styles.statsDescription}>Cobertura Nacional</p>
            </div>

            <div className={styles.statsItem} ref={experienceRef}>
                <h2 className={styles.statsNumber}>{experienceCount}+</h2>
                <p className={styles.statsDescription}>Años De Experiencia</p>
            </div>

        </section>
    )
}