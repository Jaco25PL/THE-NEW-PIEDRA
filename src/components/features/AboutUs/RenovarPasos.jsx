import styles from '../../../styles/RenovarPasos.module.css';
import { Titles } from '../../common/Titles/Titles';
import propTypes from 'prop-types';

export function RenovarPasos({ 
    title = '¿CÓMO PODÉS RENOVAR TU ESPACIO?',
    subtitle = 'Nuestro proceso en 3 simples pasos para transformar tu hogar sin complicaciones',
    step1Title = <>Paso 1<br />Nos Contás Tu Idea</>,
    step1Desc = 'Nos contactás, coordinamos una reunión para ver el espacio y que nos presentes el desafío',
    step2Title = <>Paso 2<br />Diseño y Planificación</>,
    step2Desc = 'Juntos vamos armando la idea final en un Render 3D de alta calidad para que puedas ver el resultado antes de empezar',
    step3Title = <>Paso 3<br />Construcción</>,
    step3Desc = 'Te contamos cómo será cada paso, así sabés qué esperar desde el principio. Después, nos ponemos manos a la obra'
}) {
    return (
        <section className={styles.container}>

            <Titles title={title}/>
            
            <p className={styles.subtitle}>
                {subtitle}
            </p>
            
            <div className={styles.stepsContainer}>
                <div className={styles.stepItem}>
                    <h3 className={styles.stepTitle}>
                        {step1Title}
                    </h3>
                    <p className={styles.stepDescription}>
                        {step1Desc}
                    </p>
                </div>
                
                <div className={styles.stepItem}>
                    <h3 className={styles.stepTitle}>
                        {step2Title}
                    </h3>
                    <p className={styles.stepDescription}>
                        {step2Desc}
                    </p>
                </div>
                
                <div className={styles.stepItem}>
                    <h3 className={styles.stepTitle}>
                        {step3Title}
                    </h3>
                    <p className={styles.stepDescription}>
                        {step3Desc}
                    </p>
                </div>
            </div>
        </section>
    );
}

RenovarPasos.propTypes = {
    title: propTypes.string,
    subtitle: propTypes.string,
    step1Title: propTypes.oneOfType([propTypes.string, propTypes.element]),
    step1Desc: propTypes.string,
    step2Title: propTypes.oneOfType([propTypes.string, propTypes.element]),
    step2Desc: propTypes.string,
    step3Title: propTypes.oneOfType([propTypes.string, propTypes.element]),
    step3Desc: propTypes.string,
}