import styles from '../styles/pages/Remodelar.module.css'
import { AboutUsCont } from '../components/features/AboutUs/AboutUsCont'
import { Clients } from '../components/features/Clients/Clients'
import { CTA } from '../components/features/CTA/CTA'
import { FAQ } from '../components/features/FAQ/FAQ'
import { Works } from '../components/features/Works/Works'
import { Stats } from '../components/features/Stats/Stats'
import { PiedraHero } from '../components/layout/Heroes/PiedraHero'

export function Remodelar() {

  return (
    <div className={styles.remodelarContainer}>

      <PiedraHero
        bgImage='/images/render-4.jpg'
        title='Renueva Tu Hogar,'
        titleBottom='Mejora Tu Vida'
        subTitle='Remodelar tu casa es más que cambiar su apariencia'
        subTitleBottom='ES MEJORAR TU DÍA A DÍA.'
      />

      <Stats />

      <AboutUsCont />

      <Works/>
      
      <Clients/>

      <FAQ/>

      <CTA/>

    </div>
  )
}

