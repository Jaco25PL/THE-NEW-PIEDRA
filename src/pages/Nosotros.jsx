import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from '../styles/pages/Nosotros.module.css';
import { PiedraHero } from '../components/layout/Heroes/PiedraHero';
import { RenovarPasos } from '../components/features/AboutUs/RenovarPasos';
import { SectionDivider } from '../components/common/SectionDivider/SectionDivider';
import { LazySection } from '../components/common/LazySection/LazySection';

const Clients = React.lazy(() =>
  import('../components/features/Clients/Clients').then((m) => ({ default: m.Clients }))
)
const Services = React.lazy(() =>
  import('../components/features/AboutUs/Services').then((m) => ({ default: m.Services }))
)
const FAQ = React.lazy(() =>
  import('../components/features/FAQ/FAQ').then((m) => ({ default: m.FAQ }))
)
const CTA = React.lazy(() =>
  import('../components/features/CTA/CTA').then((m) => ({ default: m.CTA }))
)

const customFaqItems = [
  {
    question: "¿Se encargan de toda la obra?",
    answer: "Ofrecemos un servicio integral que incluye todo lo que tiene que ver con la obra, pero si querés encargarte de conseguir los materiales por tu cuenta, ¡No hay problema!"
  },
  {
    question: "¿Realizan trabajos en el interior del país?",
    answer: "Estamos enfocados en dar la mejor atención posible dentro de Montevideo, pero si el proyecto es lo suficientemente grande, puede que lo consideremos. ¡Contáctanos y contanos sobre el desafío!"
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: "Estamos abiertos de Lunes a Viernes de 9 a 19 horas."
  }
];

export function Nosotros () {

  return (
    <div className={styles.container}>

        <Helmet>
            <title>Sobre Nosotros | Piedra Construcciones - Empresa Familiar en Montevideo</title>
            <meta name="description" content="Conoce a Piedra Construcciones, empresa familiar con +30 años transformando hogares en Uruguay. Construcción y remodelación con pasión, experiencia y garantía extendida." />
            <meta name="keywords" content="empresa construcción Montevideo, empresa familiar construcción Uruguay, historia Piedra Construcciones, constructora confiable Uruguay" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Piedra Construcciones" />
            <meta property="og:title" content="Sobre Nosotros | Piedra Construcciones - Empresa Familiar" />
            <meta property="og:description" content="30+ años transformando espacios en Uruguay con la misma pasión del primer día. Empresa familiar, confiable y con garantía extendida." />
            <meta property="og:image" content="https://piedraconstrucciones.com.uy/images/renders/render-2.webp" />
            <meta property="og:url" content="https://piedraconstrucciones.com.uy/nosotros" />
            <meta property="og:locale" content="es_UY" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sobre Nosotros | Piedra Construcciones" />
            <meta name="twitter:description" content="30+ años transformando espacios en Uruguay con la misma pasión del primer día." />
            <meta name="twitter:image" content="https://piedraconstrucciones.com.uy/images/renders/render-2.webp" />
            <link rel="canonical" href="https://piedraconstrucciones.com.uy/nosotros" />
            <script type="application/ld+json">{JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Piedra Construcciones",
              "url": "https://piedraconstrucciones.com.uy",
              "logo": "https://piedraconstrucciones.com.uy/images/logos/PIEDRA-B.svg",
              "description": "Empresa familiar con +30 años en construcción y remodelación en Montevideo, Uruguay.",
              "foundingDate": "1994",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Montevideo",
                "addressCountry": "UY"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+598-93-595-589",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://www.instagram.com/piedra.construcciones/",
                "https://www.facebook.com/piedra.construcciones.uy"
              ]
            })}</script>
        </Helmet>

        <PiedraHero
            bgImage='/images/renders/render-2.webp'
            title='Piedra Construcciones'
            titleBottom='Una Empresa Familiar'
            subTitle='30+ años más transformando espacios en Uruguay,'
            subTitleBottom='con la misma pasión del primer día'
        />

        <SectionDivider/>

        <RenovarPasos />

        <LazySection minHeight="420px">
          <Suspense fallback={<div style={{ minHeight: '420px' }} />}>
            <Clients />
          </Suspense>
        </LazySection>

        <LazySection minHeight="420px">
          <Suspense fallback={<div style={{ minHeight: '420px' }} />}>
            <Services/>
          </Suspense>
        </LazySection>

        <LazySection minHeight="420px">
          <Suspense fallback={<div style={{ minHeight: '420px' }} />}>
            <FAQ faqItems={customFaqItems} id="faq"/>
          </Suspense>
        </LazySection>

        <LazySection minHeight="320px">
          <Suspense fallback={<div style={{ minHeight: '320px' }} />}>
            <CTA heading="¿Estás buscando una empresa" headingBottom='segura y confiable?'/>
          </Suspense>
        </LazySection>

    </div>
  );
}
