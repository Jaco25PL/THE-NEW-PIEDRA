import styles from '../../../styles/Clients.module.css'
import { Titles } from '../../common/Titles/Titles';
import { ReviewCard } from './ClientCard';
import { customerReviews } from '../../../data/customerReviews';

export function Clients () {
    return (
        <div className={styles.satisfiedCustomersContainer}>
            <Titles title="CLIENTES SATISFECHOS"/>
            <p className={styles.subtitle}>89% de nuestros clientes nos eligen por segunda vez</p>
            <div className={styles.reviewsContainer}>
                {customerReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))} 
            </div>
        </div>
    )
}
  