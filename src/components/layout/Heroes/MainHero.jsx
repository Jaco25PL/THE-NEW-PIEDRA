import { Link } from 'react-router-dom';
import '../../../App.css';
import styles from '../../../styles/Main.module.css';

export function MainHero() {
    return (
        <main className={styles.mainContent}>
          <section className={styles.splitContainer}>
            {/* Left half: Construcciones */}
            <Link 
              to="/construir"
              target='_blank'
              rel='noopener noreferrer'
              className={`${styles.splitImage} ${styles.leftImage}`}>
              <img className={styles.image} src='./images/render-2.jpg' alt="sample house" loading="lazy" />
              
              <div className={styles.content}>
                <h2>CONSTRUIR</h2>
                <div className={styles.reveal}>
                  <p>Cada casa cuenta una historia, queremos construir la tuya</p>
                </div>
              </div>
            </Link>

            {/* Right half: Remodelaciones */}  
            <Link 
              to="/remodelar" 
              className={`${styles.splitImage} ${styles.rightImage}`}>
              <img className={styles.image} src='./images/works/pelado-karting-piedra-1.AVIF' alt="sample house" loading="lazy" />
 
              <div className={styles.content}>
                <h2>REMODELAR</h2>
                <div className={styles.reveal}>
                  <p>Desde cocinas hasta salas, cada detalle cuenta</p>
                </div>
              </div>
            </Link>
          </section>
        </main>
    )
}