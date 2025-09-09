import { Helmet } from 'react-helmet-async'
import styles from '../styles/pages/Remodelar.module.css'
import { AboutUsRemodelar } from '../components/features/AboutUs/AboutUsRemodelar'
import { Clients } from '../components/features/Clients/Clients'
import { CTA } from '../components/features/CTA/CTA'
import { FAQ } from '../components/features/FAQ/FAQ'
import { Works } from '../components/features/Works/Works'
import { Stats } from '../components/features/Stats/Stats'
import { PiedraHero } from '../components/layout/Heroes/PiedraHero'

export function Remodelar() {

  return (
    <div className={styles.remodelarContainer}>

      <Helmet>
        <title>Remodelar Casa con Piedra Construcciones | Renovación y Remodelación en Montevideo</title>
        <meta name="description" content="Renueva tu hogar y mejora tu vida con Piedra Construcciones. Servicios de remodelación y renovación en Montevideo. +10 años de experiencia. Presupuesto gratis." />
        <meta property="og:title" content="Remodelar Casa - Piedra Construcciones" />
        <meta property="og:description" content="Remodelar tu casa es más que cambiar su apariencia, es mejorar tu día a día." />
        <link rel="canonical" href="https://piedraconstrucciones.com.uy/remodelar" />
      </Helmet>

      <PiedraHero
        bgImage='/images/render-4.jpg'
        title='Renueva Tu Hogar,'
        titleBottom='Mejora Tu Vida'
        subTitle='Remodelar tu casa es más que cambiar su apariencia'
        subTitleBottom='ES MEJORAR TU DÍA A DÍA.'
      />

      <Stats />

      <Works/>

      <AboutUsRemodelar />
      
      <Clients/>

      <FAQ id="faq"/>

      <CTA/>

    </div>
  )
}

