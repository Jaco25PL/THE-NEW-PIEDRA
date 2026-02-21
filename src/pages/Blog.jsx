import { Helmet } from 'react-helmet-async'
import styles from '../styles/pages/Blog.module.css';
import { Titles } from "../components/common/Titles/Titles";


export function Blog() {
    return (

        <div className={styles.container}>
            <Helmet>
                <title>Blog | Piedra Construcciones - Consejos de Construcción y Remodelación</title>
                <meta name="description" content="Próximamente: Blog de Piedra Construcciones con consejos, tips y tendencias en construcción y remodelación en Montevideo, Uruguay." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Piedra Construcciones" />
                <meta property="og:title" content="Blog | Piedra Construcciones - Consejos de Construcción" />
                <meta property="og:description" content="Consejos, tips y tendencias en construcción y remodelación en Montevideo, Uruguay." />
                <meta property="og:image" content="https://piedraconstrucciones.com.uy/images/renders/render-5.webp" />
                <meta property="og:url" content="https://piedraconstrucciones.com.uy/blog" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog | Piedra Construcciones" />
                <meta name="twitter:description" content="Consejos y tendencias en construcción y remodelación en Montevideo." />
                <meta name="twitter:image" content="https://piedraconstrucciones.com.uy/images/renders/render-5.webp" />
                <link rel="canonical" href="https://piedraconstrucciones.com.uy/blog" />
            </Helmet>
            <Titles title='próximamente...'/>
        </div>

    );
}