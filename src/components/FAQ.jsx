import styles from '../styles/FAQ.module.css';
import { useState } from 'react';

export function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        { question: '¿Cuánto tiempo toma completar una remodelación?' },
        { question: '¿Cuánto cuesta remodelar mi casa y cómo sé que no habrá costos inesperados?' },
        { question: '¿Ofrecen financiamiento o facilidades de pago?' },
        { question: '¿Qué pasa si no me gusta el resultado final?' },
        { question: '¿En qué zonas ofrecen servicio?' },
    ]

    const answer = `Depende del alcance del proyecto. La mayoría de nuestras remodelaciones se completan en 4-6 semanas. Nos comprometemos con fechas específicas y le entregamos un cronograma detallado antes de iniciar.`

    return (
        <div className={styles.faqContainer}>
            {/* Left Image Section */}
            <div className={styles.imageContainer}>
                {/* <img src="./images/faq-img.jpeg" alt="FAQ Illustration" className={styles.faqImage} /> */}
                <div className={styles.faqImage}></div>
            </div>

            {/* Right FAQ Section */}
            <div className={styles.faqContent}>
                <div className={styles.header}>
                    <div className={styles.headerLine}></div>
                    <h2 className={styles.title}>PREGUNTAS FRECUENTES</h2>
                </div>

                <div className={styles.faqList}>
                    {faqItems.map((item, index) => (
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
                            <p>{answer}</p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </div> 
    )
}