import styles from '../../../styles/FAQ.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export function FAQ({ faqItems = [], id }) {
    const [activeIndex, setActiveIndex] = useState(null);

    // Default FAQ items as fallback if no props are provided
    const defaultFaqItems = [
        { 
            question: '¿Cuánto tiempo toma completar una remodelación?',
            answer: 'Depende del alcance del proyecto. La mayoría de nuestras remodelaciones se completan en 4-6 semanas. Nos comprometemos con fechas específicas y le entregamos un cronograma detallado antes de iniciar.'
        },
        { 
            question: '¿Cuánto cuesta remodelar mi casa y cómo sé que no habrá costos inesperados?',
            answer: 'Proporcionamos presupuestos detallados y transparentes desde el inicio. Incluimos un margen para imprevistos y nos comprometemos a comunicar cualquier cambio antes de proceder.'
        },
        { 
            question: '¿Ofrecen financiamiento o facilidades de pago?',
            answer: 'Sí, ofrecemos diferentes opciones de pago y financiamiento. Podemos trabajar con planes de pago flexibles adaptados a tu presupuesto y necesidades.'
        },
        { 
            question: '¿Qué pasa si no me gusta el resultado final?',
            answer: 'Tu satisfacción es nuestra prioridad. Ofrecemos garantía en todos nuestros trabajos y trabajamos contigo hasta asegurar que el resultado cumpla con tus expectativas.'
        },
        { 
            question: '¿En qué zonas ofrecen servicio?',
            answer: 'Atendemos toda el área metropolitana y zonas aledañas. Contáctanos para confirmar si llegamos a tu ubicación específica.'
        },
    ];

    // Use provided faqItems or fall back to default
    const itemsToRender = faqItems.length > 0 ? faqItems : defaultFaqItems;

    return (
        <section className={styles.faqContainer} id={id}>

            {/* Left Image Section */}
            <div className={styles.imageContainer}>
                {/* <img src="/images/faq-img.jpeg" alt="FAQ Illustration" className={styles.faqImage} /> */}
                <div className={styles.faqImage}></div>
            </div>

            {/* Right FAQ Section */}
            <div className={styles.faqContent}>
                <div className={styles.header}>
                    <div className={styles.headerLine}></div>
                    <h2 className={styles.title}>PREGUNTAS FRECUENTES</h2>
                </div>

                <div className={styles.faqList}>
                    {itemsToRender.map((item, index) => (
                        <div 
                          className={styles.faqItem} 
                          key={index}
                          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                        <div className={styles.questionRow}>
                            <h3 className={styles.question}>{item.question}</h3>
                            <div className={`${styles.toggleIcon} ${activeIndex === index ? styles.active : ''}`}>
                                <span className={styles.iconLine1}></span>
                                <span className={styles.iconLine2}></span>
                            </div>
                        </div>
                        <div className={`${styles.answer} ${activeIndex === index ? styles.show : ''}`}>
                            <p>{item.answer}</p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </section> 
    )
}


FAQ.propTypes = {
    faqItems: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired
        })
    ),
    id: PropTypes.string
};