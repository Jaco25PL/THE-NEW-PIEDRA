import { Helmet } from 'react-helmet-async'
import { HeroWithServices } from '../components/layout/Heroes/HeroWithServices'

export function Home() {
  return (

    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Piedra Construcciones | Construcción y Remodelación en Montevideo</title>
        <meta name="description" content="Empresa líder en construcción y remodelación en Montevideo, Uruguay. Proyectos residenciales y comerciales con +10 años de experiencia. Presupuesto gratis y render 3D." />
        <meta name="keywords" content="construcción Montevideo, remodelación Uruguay, empresa construcción, obras residenciales, reformas integrales, arquitectura Uruguay" />
        <meta name="author" content="Piedra Construcciones" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://piedraconstrucciones.com.uy/" />
        <meta property="og:title" content="Piedra Construcciones - Construcción y Remodelación en Uruguay" />
        <meta property="og:description" content="Transformamos tus ideas en realidad. Construcción y remodelación profesional en Montevideo con garantía extendida." />
        <meta property="og:image" content="https://piedraconstrucciones.com.uy/images/PIEDRA-B.svg" />
        <meta property="og:locale" content="es_UY" />
        <meta property="og:site_name" content="Piedra Construcciones" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://piedraconstrucciones.com.uy/" />
        <meta property="twitter:title" content="Piedra Construcciones - Construcción en Uruguay" />
        <meta property="twitter:description" content="Empresa familiar especializada en construcción y remodelación en Montevideo. Consulta gratis + diseño 3D." />
        <meta property="twitter:image" content="https://piedraconstrucciones.com.uy/images/PIEDRA-B.svg" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Piedra Construcciones",
            "image": "https://piedraconstrucciones.com.uy/images/PIEDRA-B.svg",
            "description": "Empresa familiar especializada en construcción y remodelación en Montevideo, Uruguay",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Montevideo",
              "addressCountry": "UY"
            },
            "telephone": "+59893595589",
            "url": "https://piedraconstrucciones.com.uy/",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "Place",
              "name": "Montevideo, Uruguay"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Construcción",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Construcción Residencial"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Remodelación Integral"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Diseño 3D"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://piedraconstrucciones.com.uy/" />
        
        {/* Additional SEO */}
        <meta name="language" content="Spanish" />
        <meta name="geo.region" content="UY-MO" />
        <meta name="geo.placename" content="Montevideo" />
        <meta name="geo.position" content="-34.9011;-56.1645" />
        <meta name="ICBM" content="-34.9011, -56.1645" />
      </Helmet>
      <HeroWithServices/>
    </>

  )
}