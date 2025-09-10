import { Helmet } from 'react-helmet-async'
import styles from '../styles/pages/Nosotros.module.css';
import { PiedraHero } from '../components/layout/Heroes/PiedraHero';
// import { Stats } from '../components/features/Stats/Stats';
import { RenovarPasos } from '../components/features/AboutUs/RenovarPasos';
import { Clients } from '../components/features/Clients/Clients';
import { Services } from '../components/features/AboutUs/Services';
import { FAQ } from '../components/features/FAQ/FAQ';
import { CTA } from '../components/features/CTA/CTA';
// import { SectionDivider } from '../components/common/SectionDivider/SectionDivider';

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
            <title>Sobre Nosotros | Piedra Construcciones - Empresa de Construcción en Montevideo</title>
            <meta name="description" content="Conoce a Piedra Construcciones, una empresa familiar con +30 años transformando espacios en Uruguay. Servicios de construcción y remodelación con pasión y experiencia." />
            <meta property="og:title" content="Sobre Piedra Construcciones" />
            <meta property="og:description" content="30+ años más transformando espacios en Uruguay, con la misma pasión del primer día." />
            <link rel="canonical" href="https://piedraconstrucciones.com.uy/nosotros" />
        </Helmet>

        <PiedraHero
            bgImage='/images/renders/render-2.jpg'
            title='Piedra Construcciones'
            titleBottom='Una Empresa Familiar'
            subTitle='30+ años más transformando espacios en Uruguay,'
            subTitleBottom='con la misma pasión del primer día'
        />
               
        {/* <Stats /> */}

        {/* <SectionDivider/> */}

        <RenovarPasos />

        <Clients/>

        <Services/>

        {/* <FAQ/> */}
        <FAQ faqItems={customFaqItems} id="faq"/>

        <CTA heading="¿Estás buscando una empresa" headingBottom='segura y confiable?'/> 

    </div>
  );
}