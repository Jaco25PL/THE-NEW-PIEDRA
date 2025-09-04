import { Helmet } from 'react-helmet-async'
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
       
            <Helmet>
                <title>Construir Casa con Piedra Construcciones | Construcción Residencial en Montevideo</title>
                <meta name="description" content="Construye la casa de tus sueños con Piedra Construcciones. Servicios de construcción residencial en Montevideo con +10 años de experiencia. Presupuesto gratis." />
                <meta property="og:title" content="Construir Casa - Piedra Construcciones" />
                <meta property="og:description" content="No solo levantamos paredes, creamos hogares que mejoran tu calidad de vida." />
                <link rel="canonical" href="https://piedraconstrucciones.com.uy/construir" />
            </Helmet>

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