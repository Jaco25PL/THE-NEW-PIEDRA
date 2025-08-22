import styles from '../../../styles/Clients.module.css'
import { Titles } from '../../common/Titles/Titles';
import { ReviewCard } from './ClientCard';
import { customerReviews } from '../../../data/customerReviews';
import { SectionDivider } from '../../common/SectionDivider/SectionDivider';

export function Clients () {
    return (
        <div className={styles.satisfiedCustomersContainer}>

            <SectionDivider position='top'/>

            <Titles title="CLIENTES SATISFECHOS"/>
            <p className={styles.subtitle}><b>97% de nuestros clientes</b> nos eligen por segunda vez</p>
            <div className={styles.reviewsContainer}>
                {customerReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))} 
            </div>

            <SectionDivider position='bottom'/>
            
        </div>
    )
}
  