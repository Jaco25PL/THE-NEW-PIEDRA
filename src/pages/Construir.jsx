import styles from '../styles/Construir.module.css'
import { RemodelarHero } from '../components/layout/Heroes/RemodelarHero';
import { Stats } from '../components/features/Stats/Stats';
import { AboutUsCont } from '../components/features/AboutUs/AboutUsCont';
import { Works } from '../components/features/Works/Works';
import { Clients } from '../components/features/Clients/Clients';
import { FAQ } from '../components/features/FAQ/FAQ';
import { CTA } from '../components/features/CTA/CTA';

export function Construir() {


    return (
       <div className={styles.container}>
       
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