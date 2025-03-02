import styles from '../styles/Construir.module.css'

export function Construir() {


    return (
        <div className={styles.constructionPage}>
            <section className={styles.heroSection}>
                <img src="./images/sample-house-1.jpg" alt="Modern house" className={styles.heroImage} />
                <div>
                    <span className={styles.heroLetter}>P</span>
                    <h1 >Construimos tu casa de verano</h1>
                    <p>Hemos transformado hogares, trabajando cada detalle desde la estructura hasta el acabado, y ahora llevamos esa experiencia a la construcción de nuevas casas desde cero.</p>
                </div>
            </section>
      
            <section className={styles.introSection}>
                <p>
                    Hemos transformado hogares, trabajando cada detalle desde la estructura hasta el
                    acabado, y ahora llevamos esa experiencia a la construcción de nuevas casas desde cero.
                </p>
            </section>
      
            <section className={styles.designsSection}>
                <h2>Tú imaginas, nosotros lo hacemos realidad</h2>
                <p>Trabajar con Piedra Construcciones significa:</p>
                <div className={styles.designBenefits}>
                    <div>
                        <h3>Diseño Personalizado</h3>
                        <p>Creamos residencias a la medida para que cada detalle se adapte a ti.</p>
                    </div>
                    <div>
                        <h3>Calidad Garantizada</h3>
                        <p>Utilizamos el resistente Sistema Tradicional con materiales de primera línea.</p>
                    </div>
                    <div>
                        <h3>Compromiso Total</h3>
                        <p>Nos encargamos de entregarte tu hogar a tiempo, sin sorpresas.</p>
                    </div>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <h2>Construir tu casa es simple y claro</h2>
                <ol>
                    <li><strong>PASO 1</strong> Exploramos Tus Ideas</li>
                    <li><strong>PASO 2</strong> Diseñamos Tu Proyecto</li>
                    <li><strong>PASO 3</strong> Construimos Tu Hogar</li>
                    <li><strong>PASO 4</strong> Te Entregamos Tu Casa</li>
                </ol>
            </section>

            <section className={styles.gallerySection}>
                <h2>Explora algunos de nuestros diseños</h2>
                <div className={styles.gallery}>
                    <img src="./images/sample-house-1.jpg" alt="House design 1" />
                    <img src="./images/sample-house-1.jpg" alt="House design 2" />
                </div>
            </section>

            <section className={styles.testimonialsSection}>
                <h2>Esto dicen nuestros clientes</h2>
                <div className={styles.testimonials}>
                    <blockquote>Me gustó mucho la casa. Es increíble! Pueden confiar en ellos. Muy lindo.</blockquote>
                    <blockquote>Me gustó mucho la casa. Es increíble! Pueden confiar en ellos. Muy lindo.</blockquote>
                    <blockquote>Me gustó mucho la casa. Es increíble! Pueden confiar en ellos. Muy lindo.</blockquote>
                </div>
            </section>

            <section className={styles.contactSection}>
                <h2>¿Listo para Construir?</h2>
                <p>Escríbenos o Pide tu Consulta</p>
                <p className={styles.contactInfo}>+598 93 123 456</p>
                <p className={styles.contactInfo}>piedraconstr.uy@gmail.com</p>
            </section>
        </div>
    )
}