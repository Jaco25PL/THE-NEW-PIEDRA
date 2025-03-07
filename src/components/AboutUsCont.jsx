import styles from '../styles/AboutUs.module.css'
import { AboutUsFeature } from './AboutUsFeature'
import { Titles } from './Titles'

export function AboutUsCont() {
  
    return (
        <div className={styles.aboutUsContainer}>

            {/* First Section - Image Left, Text Right */}
            <section className={styles.section}>
                <div className={styles.imageContainer}>
                    <img 
                        src="/images/render-sample.jpeg" 
                        alt="Interior design rendering" 
                        className={styles.image}
                    />
                </div>

                <div className={styles.textContainer}>
                    <div className={styles.textContent}>
                        <Titles title="¿POR QUÉ ELEGIRNOS?" />

                        <div className={styles.features}>

                            <AboutUsFeature title='Render 3D Personalizado' description='Diseños que se ajustan a tu vida (no al revés).' />

                            <AboutUsFeature title='Garantía De Por Vida' description='Si algo falla, lo reparamos sin preguntas.' />

                            <AboutUsFeature title='Entregas A Tiempo' description='Tu tranquilidad es nuestra responsabilidad.' />

                        </div>

                        <button className={styles.actionButton}>
                            RESERVA UNA VISITA HOY
                        </button>
                    </div>
                </div>
            </section>
        
            {/* Second Section - Text Left, Image Right */}
            <section className={`${styles.section} ${styles.reversed}`}>
              <div className={styles.textContainer}>
                <div className={styles.textContent}>
                  <Titles title="NUESTRO PROCESO" />

                  <div className={styles.features}>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <div className={styles.featureText}>
                        <h3 className={styles.featureTitle}>Paso 1: Presupuesto</h3>
                        <p className={styles.featureDescription}>Analizamos tu espacio Sin Compromiso.</p>
                      </div>
                    </div>

                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <div className={styles.featureText}>
                        <h3 className={styles.featureTitle}>Paso 2: Diseño 3D</h3>
                        <p className={styles.featureDescription}>Te mostramos cómo lucirá tu futura casa.</p>
                      </div>
                    </div>

                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <div className={styles.featureText}>
                        <h3 className={styles.featureTitle}>Paso 3: Remodelación</h3>
                        <p className={styles.featureDescription}>Recibe fotos diarias del proceso.</p>
                      </div>
                    </div>

                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <div className={styles.featureText}>
                        <h3 className={styles.featureTitle}>Paso 4: Entrega</h3>
                        <p className={styles.featureDescription}>Entrega a tiempo de tu nuevo espacio.</p>
                      </div>
                    </div>
                  </div>

                  <button className={styles.actionButton}>
                    CONSULTA PRESUPUESTO GRATIS
                  </button>
                </div>
              </div>

                <div className={styles.imageContainer}>
                    <img 
                            src="/images/render.jpg" 
                            alt="Modern house design" 
                            className={styles.image}
                    />
                </div>
            </section>
        </div>





    )
}