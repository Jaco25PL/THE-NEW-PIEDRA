import { AboutUsCont } from '../components/AboutUsCont'
import { Clients } from '../components/Clients'
import { CTA } from '../components/CTA'
import { FAQ } from '../components/FAQ'
import { Works } from '../components/Works'
import { Stats } from '../components/Stats'
import styles from '../styles/Remodelar.module.css'
import { HeaderRemodelar } from '../components/HeaderRemodelar'
// import { useHeaderScroll } from '../hooks/useHeaderScroll'

export function Remodelar() {

  // const { isScrolling } = useHeaderScroll()

  return (
    <div className={styles.remodelarContainer}>

      <HeaderRemodelar/>

      <Stats />

      <AboutUsCont />

      <Works/>
      
      <Clients/>

      <FAQ/>

      <CTA/>

    </div>
  )
}

