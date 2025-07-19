import styles from '../../../styles/AboutUs.module.css';
import propTypes from 'prop-types';
import { Titles } from '../../common/Titles/Titles';
import { AboutUsFeature } from './AboutUsFeature';
import { CTAButton } from '../../common/Button/CTAButton';

export function AboutUs({ content }) {

    return (
        <section className={`${styles.section} ${content.id % 2 === 0 ? styles.pair : ''}`}>
            <div className={styles.imageContainer}>
                <img 
                    src={content.img} 
                    alt="Interior design rendering" 
                    className={styles.image}
                />
            </div>

            <div className={styles.textContainer}>
                <div className={styles.textContent}>
                    <Titles title={content.title} />

                    <div className={styles.features}>

                        <AboutUsFeature title={content.sub1} description={content.desc1} />

                        <AboutUsFeature title={content.sub2} description={content.desc2} />

                        <AboutUsFeature title={content.sub3} description={content.desc3} />

                        {
                            content.sub4 ? <AboutUsFeature title={content.sub4} description={content.desc4} /> : ''
                        }
                        
                    </div>

                    <CTAButton text={content.btn_title} action={content.btn_action} />
                </div>
            </div>
        </section>
    )
}

AboutUs.propTypes = {
    content: propTypes.object.isRequired
}   