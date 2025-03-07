import { AboutUsCont } from '../components/AboutUsCont'
import { Clients } from '../components/Clients'
import { CTA } from '../components/CTA'
import { FAQ } from '../components/FAQ'
import { Works } from '../components/Works'
import styles from '../styles/Remodelar.module.css'
// import { Link } from 'react-router-dom'

export function Remodelar() {
  return (
    <div className={styles.remodelarContainer}>
      <header></header>
      
      <div className={styles.stats}></div>

      <AboutUsCont />

      <Works/>
      
      <Clients/>

      <FAQ/>

      <CTA/>

    </div>
  )
}

