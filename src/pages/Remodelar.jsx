import { Helmet } from 'react-helmet-async'
import styles from '../styles/pages/Remodelar.module.css'
import { AboutUsRemodelar } from '../components/features/AboutUs/AboutUsRemodelar'
import { Clients } from '../components/features/Clients/Clients'
import { CTA } from '../components/features/CTA/CTA'
import { FAQ } from '../components/features/FAQ/FAQ'
import { Works } from '../components/features/Works/Works'
import { Stats } from '../components/features/Stats/Stats'
import { PiedraHero } from '../components/layout/Heroes/PiedraHero'

export function Remodelar() {

  return (
    <div className={styles.remodelarContainer}>

      <Helmet>
        {/* Primary Meta Tags */}
        <title>Remodelar Casa con Piedra Construcciones | Renovación y Remodelación en Montevideo</title>
        <meta name="description" content="Renueva tu hogar y mejora tu vida con Piedra Construcciones. Servicios de remodelación y renovación en Montevideo. +10 años de experiencia. Presupuesto gratis." />
        <meta name="keywords" content="remodelar casa montevideo, remodelación uruguay, renovación hogar, reformas integrales montevideo, remodelación baños cocinas" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://piedraconstrucciones.com.uy/remodelar" />
        <meta property="og:title" content="Remodelar Casa - Piedra Construcciones" />
        <meta property="og:description" content="Remodelar tu casa es más que cambiar su apariencia, es mejorar tu día a día." />
        <meta property="og:image" content="https://piedraconstrucciones.com.uy/images/renders/render-4.jpg" />
        <meta property="og:locale" content="es_UY" />
        <meta property="og:site_name" content="Piedra Construcciones" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://piedraconstrucciones.com.uy/remodelar" />
        <meta property="twitter:title" content="Remodelación de Casas - Piedra Construcciones" />
        <meta property="twitter:description" content="Transformamos tu hogar con renovaciones que mejoran tu calidad de vida." />
        <meta property="twitter:image" content="https://piedraconstrucciones.com.uy/images/renders/render-4.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Remodelación y Renovación",
            "description": "Servicios completos de remodelación de casas, baños, cocinas y espacios interiores en Montevideo",
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
            "serviceType": "Remodelación Residencial"
          })}
        </script>
        
        <link rel="canonical" href="https://piedraconstrucciones.com.uy/remodelar" />
      </Helmet>

      <PiedraHero
        bgImage='/images/renders/render-4.jpg'
        title='Renueva Tu Hogar'
        titleBottom='Mejora Tu Vida'
        subTitle='Remodelar tu casa es más que cambiar su apariencia'
        subTitleBottom='ES MEJORAR TU DÍA A DÍA'
      />

      <Stats />

      <Works/>

      <AboutUsRemodelar />
      
      <Clients/>

      <FAQ id="faq"/>

      <CTA/>

    </div>
  )
}

