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
                {/* Primary Meta Tags */}
                <title>Construir Casa con Piedra Construcciones | Construcción Residencial en Montevideo</title>
                <meta name="description" content="Construye la casa de tus sueños con Piedra Construcciones. Servicios de construcción residencial en Montevideo con +10 años de experiencia. Presupuesto gratis." />
                <meta name="keywords" content="construir casa montevideo, construcción residencial uruguay, casa nueva montevideo, constructora uruguay, vivienda nueva" />
                <meta name="robots" content="index, follow" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="service" />
                <meta property="og:url" content="https://piedraconstrucciones.com.uy/construir" />
                <meta property="og:title" content="Construir Casa - Piedra Construcciones" />
                <meta property="og:description" content="No solo levantamos paredes, creamos hogares que mejoran tu calidad de vida." />
                <meta property="og:image" content="https://piedraconstrucciones.com.uy/images/renders/render-1.jpg" />
                <meta property="og:locale" content="es_UY" />
                <meta property="og:site_name" content="Piedra Construcciones" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://piedraconstrucciones.com.uy/construir" />
                <meta property="twitter:title" content="Construcción Residencial - Piedra Construcciones" />
                <meta property="twitter:description" content="Construye la casa de tus sueños con nosotros. +10 años creando hogares en Montevideo." />
                <meta property="twitter:image" content="https://piedraconstrucciones.com.uy/images/renders/render-1.jpg" />
                
                {/* Structured Data for Service */}
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Construcción Residencial",
                    "description": "Servicio completo de construcción de casas y viviendas residenciales en Montevideo",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Piedra Construcciones",
                      "image": "https://piedraconstrucciones.com.uy/images/logos/PIEDRA-B.svg",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Montevideo",
                        "addressCountry": "UY"
                      },
                      "telephone": "+59893595589"
                    },
                    "areaServed": {
                      "@type": "Place",
                      "name": "Montevideo, Uruguay"
                    },
                    "serviceType": "Construcción Residencial",
                    "offers": {
                      "@type": "Offer",
                      "description": "Construcción completa de viviendas residenciales con diseño 3D incluido"
                    }
                  })}
                </script>
                
                <link rel="canonical" href="https://piedraconstrucciones.com.uy/construir" />
            </Helmet>

            <PiedraHero
                bgImage='/images/renders/render-1.jpg'
                title='Construye La Casa'
                titleBottom='De Tus Sueños'
                subTitle='No solo levantamos paredes, creamos hogares que mejoran'
                subTitleBottom='tu calidad de vida.'
            />
       
            <Stats />
    
            <Works/>
    
            <AboutUsConstruir />
            
            <Clients/> 
    
            <FAQ id="faq"/>
    
            <CTA
                heading='Tu Casa Soñada Existe.'
                headingBottom='Nosotros La Construimos'
            />
       
           </div>
    )
}