import styles from '../../../styles/AboutUs.module.css'
import { AboutUs } from './AboutUs'
import { RenovarPasos } from './RenovarPasos'
import { SectionDivider } from '../../common/SectionDivider/SectionDivider'

const content = [
  {
    id: 1,
    img: '/images/render-4.jpg',
    title: '¿POR QUÉ REMODELAR?',   
    sub1: 'Aumenta el Valor',
    sub2: 'Mejora Tu Calidad de Vida',
    sub3: 'Optimiza Espacios',
    desc1: 'Una remodelación puede aumentar el valor de tu propiedad hasta un 30%.',
    desc2: 'Espacios más funcionales mejoran tu día a día y el de tu familia.',
    desc3: 'Aprovecha cada metro cuadrado al máximo con diseños inteligentes.',
    btn_title: 'EMPEZAR MI REFORMA',
    btn_action: 'https://wa.me/59893595589',
  }
]

export function AboutUsRemodelar() {
  
    return (
        <section className={styles.aboutUsContainer}>

            <SectionDivider position='top'/>
          
            <AboutUs content={content[0]}/>
            
            {/* <SectionDivider position='top'/> */}

            <RenovarPasos 
                title='NUESTRO PROCESO DE REMODELACIÓN'
                subtitle='Transformamos tu espacio en 3 simples pasos sin que tengas que mudarte'
                step1Title={<>Paso 1<br />Nos Contas Tu Idea</>}
                step1Desc='Nos contactas, coordinamos una reunión para ver el espacio y que nos presentes el desafío'
                step2Title={<>Paso 2<br />Diseño y Planificación</>}
                step2Desc='Juntos vamos armando la idea final en un Render 3D de alta calidad para que puedas ver el resultado antes de empezar.'
                step3Title={<>Paso 3<br />Remodelación</>}
                step3Desc='Te contamos cómo será cada paso, así sabés qué esperar desde el principio. Después, nos ponemos manos a la obra.'
            />

        </section>
    )
}
