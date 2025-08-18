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
       
            <RemodelarHero
                bgImage='/images/render-1.jpg'
                title='Construye La Casa'
                titleBottom='De Tus Sueños'
                subTitle='No solo levantamos paredes, creamos hogares que mejoran'
                subTitleBottom='tu calidad de vida.'
            />
       
            <Stats />
    
            <AboutUsCont />
    
            <Works/>
            
            <Clients/>
    
            <FAQ/>
    
            <CTA
                heading='Tu Casa Soñada Existe.'
                headingBottom='Nosotros La Construimos'
            />
       
           </div>
    )
}