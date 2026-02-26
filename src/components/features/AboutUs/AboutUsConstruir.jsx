import styles from '../../../styles/AboutUs.module.css'
import { AboutUs } from './AboutUs'
import { RenovarPasos } from './RenovarPasos'
import { SectionDivider } from '../../common/SectionDivider/SectionDivider'

const content = [
  {
    id: 1,
    img: '/images/renders/render-10.avif',
    title: '¿SECO O TRADICIONAL?',   
    sub1: 'Construcción en Seco',
    sub2: 'Construcción Tradicional',
    sub3: 'Construcción Híbrida',
    desc1: 'Steel framing: rápido, eficiente y sostenible',
    desc2: 'Ladrillo y hormigón: resistente y duradero',
    desc3: 'Estructura tradicional con terminaciones en yeso',
    btn_title: 'CONSULTA QUÉ CONVIENE MÁS',
    btn_action: 'https://wa.me/59893595589',
  }
]

export function AboutUsConstruir() {
  
    return (
        <section className={styles.aboutUsContainer}>

            <SectionDivider position='top'/>
          
            <AboutUs content={content[0]}/>
            
            <SectionDivider position='bottom'/>
            
            <div className={styles.renovarWrapper}>
            <RenovarPasos
                title='NUESTRO PROCESO DE CONSTRUCCIÓN'
                subtitle='Construimos tu casa en 3 simples pasos para que puedas disfrutar de tu hogar sin complicaciones'
                step1Title={<>Paso 1<br />Nos Contas Tu Idea</>}
                step1Desc='Nos contactas, coordinamos una reunión para ver el terreno y que nos presentes el proyecto'
                step2Title={<>Paso 2<br />Diseño y Planificación</>}
                step2Desc='Juntos vamos armando la idea final en un Render 3D de alta calidad para que puedas ver el resultado antes de empezar'
                step3Title={<>Paso 3<br />Construcción</>}
                step3Desc='Te contamos cómo será cada paso, así sabés qué esperar desde el principio. Después, nos ponemos manos a la obra'
            />
            </div>

        </section>
    )
}
