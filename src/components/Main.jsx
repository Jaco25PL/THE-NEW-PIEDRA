import { Link } from 'react-router-dom';
import '../App.css';
import styles from '../styles/Main.module.css';

export function Main() {

    return (
        <main className={styles.mainContent}>
          <section className={styles.splitContainer}>
            {/* Left half: Construcciones */}
            <Link 
              to="/construir"
              target='_blank'
              rel='nooper noreferrer'
              className={`${styles.splitImage} ${styles.leftImage}`}>
              <img className={styles.image} src="./images/sample-house-1.jpg" alt="sample house" />
              
              <div className={styles.content}>
                <h2>CONSTRUIR</h2>
                <div className={styles.reveal}>
                  <p>Cada casa cuenta una historia, queremos construir la tuya</p>
                </div>
                </div>
            </Link >

            {/* Right half: Remodelaciones */}
            <Link 
              to="/remodelaciones" 
              target='_blank'
              rel='nooper noreferrer'
              className={`${styles.splitImage} ${styles.rightImage}`}>
              <img className={styles.image} src="./images/sample-house-2.jpg" alt="sample house" />
 
              <div className={styles.content}>
                <h2>REMODELAR</h2>
                <div className={styles.reveal}>
                <p>Desde cocinas ahasta salas, cada detalle cuenta</p>
                </div>
              </div>
            </Link >
          </section>
        </main>
    )
}