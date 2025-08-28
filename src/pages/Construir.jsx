import styles from '../styles/pages/Construir.module.css'
import { PiedraHero } from '../components/layout/Heroes/PiedraHero';
import { Stats } from '../components/features/Stats/Stats';
import { AboutUsConstruir } from '../components/features/AboutUs/AboutUsConstruir';
import { Works } from '../components/features/Works/Works';
import { Clients } from '../components/features/Clients/Clients';
import { FAQ } from '../components/features/FAQ/FAQ';
import { CTA } from '../components/features/CTA/CTA';

export function Construir() {

    return (
       <div className={styles.container}>
       
            <PiedraHero
                bgImage='/images/render-1.jpg'
                title='Construye La Casa'
                titleBottom='De Tus Sueños'
                subTitle='No solo levantamos paredes, creamos hogares que mejoran'
                subTitleBottom='tu calidad de vida.'
            />
       
            <Stats />
    
            <Works/>
    
            <AboutUsConstruir />
            
            <Clients/> 
    
            <FAQ/>
    
            <CTA
                heading='Tu Casa Soñada Existe.'
                headingBottom='Nosotros La Construimos'
            />
       
           </div>
    )
}