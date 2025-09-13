import styles from '../../../styles/Clients.module.css'
import { Titles } from '../../common/Titles/Titles';
import { ReviewCard } from './ClientCard';
import { customerReviews } from '../../../data/customerReviews';
import { SectionDivider } from '../../common/SectionDivider/SectionDivider';
import { GoogleRating } from '../../common/GoogleRating/GoogleRating';

export function Clients () {
    return (
        <div className={styles.satisfiedCustomersContainer}>

            <SectionDivider position='top'/>

            <Titles title="CLIENTES SATISFECHOS"/>
            
            <a 
                href="https://www.google.com/search?q=Piedra+Construcciones&ie=UTF-8#mpd=~13252831935698052680/customers/reviews&lrd=0x959f81b539eb72cf:0xd8c34054d85c5ad0,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
            >

                <GoogleRating />

            </a>

            <div className={styles.reviewsContainer}>
                {customerReviews.map(review => (
                    <a 
                        href="https://www.google.com/search?q=Piedra+Construcciones&ie=UTF-8#mpd=~13252831935698052680/customers/reviews&lrd=0x959f81b539eb72cf:0xd8c34054d85c5ad0,1,,,,"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={review.id}
                    >
                        <ReviewCard review={review} />
                    </a>
                ))} 
            </div>

            <SectionDivider position='bottom'/>
            
        </div>
    )
}
  