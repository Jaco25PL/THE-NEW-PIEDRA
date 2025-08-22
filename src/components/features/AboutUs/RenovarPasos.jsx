import styles from '../../../styles/RenovarPasos.module.css';
import { Titles } from '../../common/Titles/Titles';
// import { SectionDivider } from '../../common/SectionDivider/SectionDivider';

export function RenovarPasos() {
    return (
        <section className={styles.container}>

            {/* <SectionDivider position='top' /> */}

            <Titles title='¿CÓMO PODÉS RENOVAR TU ESPACIO?'/>
            
            <p className={styles.subtitle}>
                Nuestro proceso en 3 simples pasos para transformar tu hogar sin complicaciones
            </p>
            
            <div className={styles.stepsContainer}>
                <div className={styles.stepItem}>
                    <h3 className={styles.stepTitle}>
                        Paso 1<br />
                        Nos Contas Tu Idea
                    </h3>
                    <p className={styles.stepDescription}>
                        Nos contactas, coordinamos una reunión para ver el espacio y que nos presentes el desafío
                    </p>
                </div>
                
                <div className={styles.stepItem}>
                    <h3 className={styles.stepTitle}>
                        Paso 2<br />
                        Diseño y Planificación
                    </h3>
                    <p className={styles.stepDescription}>
                        Juntos vamos armando la idea final en un Render 3D de alta calidad para que puedas ver el resultado antes de empezar.
                    </p>
                </div>
                
                <div className={styles.stepItem}>
                    <h3 className={styles.stepTitle}>
                        Paso 3<br />
                        Construcción
                    </h3>
                    <p className={styles.stepDescription}>
                        Te contamos cómo será cada paso, así sabés qué esperar desde el principio. Después, nos ponemos manos a la obra.
                    </p>
                </div>
            </div>
        </section>
    );
}