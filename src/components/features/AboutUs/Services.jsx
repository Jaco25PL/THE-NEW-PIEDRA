import styles from '../../../styles/Services.module.css';
import { Titles } from '../../common/Titles/Titles';
import { SectionDivider } from '../../common/SectionDivider/SectionDivider';
import { CTAButton } from '../../common/Button/CTAButton';

const btn_action = 'https://wa.me/59893595589';

export function Services() {


    return (
        <section className={styles.container}>

            <Titles title='NUESTROS SERVICIOS'/>
            
            <p className={styles.subtitle}>
                Transformamos tus ideas en realidad mientras vos te relajás y disfrutás del proceso.
            </p>
            
            <div className={styles.servicesGrid}>
                {/* Reforma Integral */}
                <div className={styles.serviceCard}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="/images/renders/render-1.webp" 
                            alt="Reforma Integral - Cocina moderna"
                            className={styles.serviceImage}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.serviceContent}>
                        <h3 className={styles.serviceTitle}>REFORMA INTEGRAL</h3>
                        <div className={styles.serviceDescription}>
                            <p><strong>Baño y Cocina:</strong> Diseño personalizado de tu espacio soñado, demolición, actualización de instalaciones eléctricas, sanitarias y de fontanería, revestimientos, y montaje de mobiliario y accesorios.</p>
                        </div>
                        <CTAButton text='AGENDA UNA REUNIÓN HOY' action={btn_action} color='dark'/>
                    </div>
                </div>

                {/* Remodelación de Viviendas */}
                <div className={styles.serviceCard}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="/images/works/constr-floor.jpg"
                            alt="Remodelación de Viviendas - Interior moderno"
                            className={styles.serviceImage}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.serviceContent}>
                        <h3 className={styles.serviceTitle}>REMODELACIÓN DE VIVIENDAS</h3>
                        <div className={styles.serviceDescription}>
                            <p>Remodelamos cualquier espacio de <strong>tu hogar</strong> con un enfoque integral: diseño, renovación, instalaciones, acabados y decoración, todo pensado para que tu hogar refleje tu estilo y se adapte a tu vida.</p>
                        </div>
                        <CTAButton text='COTIZAR AL INSTANTE' action={btn_action} color='dark'/>
                    </div>
                </div>

                {/* Diseño */}
                <div className={styles.serviceCard}>
                    <div className={styles.imageContainer}>
                        <video
                            src="/images/renders/render.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className={styles.serviceImage}
                        />
                    </div>
                    <div className={styles.serviceContent}>
                        <h3 className={styles.serviceTitle}>DISEÑO</h3>
                        <div className={styles.serviceDescription}>
                            <p>Transformamos tus ideas en un <strong>Render 3D</strong> personalizado para que veas tu proyecto hecho realidad antes de empezar. Lo ajustamos hasta que sea exactamente como lo imaginaste.</p>
                        </div>
                        <CTAButton text='CONTACTA UN ASESOR' action={btn_action} color='dark'/>
                    </div>
                </div>
            </div>


            <SectionDivider position='bottom'/>

        </section>
    );
}