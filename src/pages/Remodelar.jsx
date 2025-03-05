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

      <section className={styles.usContainer}></section>
      {/* <section className={styles.samplesContainer}></section> */}
      <Works/>
      
      {/* <div className={styles.clinets}></div> */}
      <Clients/>

      {/* <section className={styles.FAQContainer}></section> */}
      <FAQ/>

      <CTA/>

      {/* <section className={styles.callToAction}></section> */}
    </div>
  )
}

