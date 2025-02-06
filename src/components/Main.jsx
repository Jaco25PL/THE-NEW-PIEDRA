import '../App.css';
import styles from '../styles/Main.module.css';

export function Main() {

    return (
        <main className={styles.mainContent}>
          <section className={styles.splitContainer}>
            {/* Left half: Construcciones */}
            <a href='#' className={`${styles.splitImage} ${styles.leftImage}`}>
              <img className={styles.image} src="./images/sample-house-1.jpg" alt="sample house" />
              
              <div className={styles.content}>
                <h2>CONSTRUIR</h2>
                <div className={styles.reveal}>
                  <p>Cada casa cuenta una historia, queremos construir la tuya</p>
                </div>
                </div>
            </a >

            {/* Right half: Remodelaciones */}
            <a href='#' className={`${styles.splitImage} ${styles.rightImage}`}>
              <img className={styles.image} src="./images/sample-house-2.jpg" alt="sample house" />
              <div className={styles.content}>
                <h2>REMODELAR</h2>
                <div className={styles.reveal}>
                <p>Desde cocinas ahasta salas, cada detalle cuenta</p>
                </div>
              </div>
            </a >
          </section>
        </main>
    )
}