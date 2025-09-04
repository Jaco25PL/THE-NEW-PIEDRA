import { Helmet } from 'react-helmet-async'
import styles from '../styles/pages/Blog.module.css';
import { Titles } from "../components/common/Titles/Titles";


export function Blog() {
    return (

        <div className={styles.container}>
            <Helmet>
                <title>Blog | Piedra Construcciones - Consejos de Construcción y Remodelación</title>
                <meta name="description" content="Próximamente: Blog de Piedra Construcciones con consejos, tips y tendencias en construcción y remodelación en Montevideo." />
                <meta property="og:title" content="Blog - Piedra Construcciones" />
                <meta property="og:description" content="Consejos y tendencias en construcción y remodelación." />
                <link rel="canonical" href="https://piedraconstrucciones.com.uy/blog" />
            </Helmet>
            <Titles title='próximamente...'/>
        </div>

    );
}