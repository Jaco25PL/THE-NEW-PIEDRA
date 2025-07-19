import styles from '../styles/Remodelar.module.css'
import { AboutUsCont } from '../components/features/AboutUs/AboutUsCont'
import { Clients } from '../components/features/Clients/Clients'
import { CTA } from '../components/features/CTA/CTA'
import { FAQ } from '../components/features/FAQ/FAQ'
import { Works } from '../components/features/Works/Works'
import { Stats } from '../components/features/Stats/Stats'
import { RemodelarHero } from '../components/layout/Heroes/RemodelarHero'
// import { useHeaderScroll } from '../hooks/useHeaderScroll'

export function Remodelar() {

  // const { isScrolling } = useHeaderScroll()

  return (
    <div className={styles.remodelarContainer}>

      <RemodelarHero/>

      <Stats />

      <AboutUsCont />

      <Works/>
      
      <Clients/>

      <FAQ/>

      <CTA/>

    </div>
  )
}

