import styles from '../styles/AboutUs.module.css'
import { AboutUs } from './AboutUs'

const content = [
  {
    id: 1,
    img: '/images/render-sample.jpeg',
    title: '¿POR QUÉ ELEGIRNOS?', 
    sub1: 'Render 3D Personalizado',
    sub2: 'Garantía De Por Vida',
    sub3: 'Entregas A Tiempo',
    desc1: 'Diseños que se ajustan a tu vida (no al revés).',
    desc2: 'Si algo falla, lo reparamos sin preguntas.',
    desc3: 'Tu tranquilidad es nuestra responsabilidad.',
    btn_title: 'RESERVA UNA VISITA HOY',
    btn_action: 'https://wa.me/59893595589',
  },
  {
    id: 2,
    img: '/images/render.jpg',
    title: 'NUESTRO PROCESO',
    sub1: 'Paso 1: Presupuesto',
    sub2: 'Paso 2: Diseño 3D',
    sub3: 'Paso 3: Remodelación',
    sub4: 'Paso 4: Entrega',
    desc1: 'Analizamos tu espacio Sin Compromiso.',
    desc2: 'Te mostramos cómo lucirá tu futura casa.',
    desc3: 'Recibe fotos diarias del proceso.',
    desc4: 'Entrega a tiempo de tu nuevo espacio.',
    btn_title: 'CONSULTA PRESUPUESTO GRATIS',
    btn_action: 'https://wa.me/59893595589',
  },
]


export function AboutUsCont() {
  
    return (
        <div className={styles.aboutUsContainer}>

            <AboutUs content={content[0]}/>
            <AboutUs content={content[1]}/>

        </div>
    )
}