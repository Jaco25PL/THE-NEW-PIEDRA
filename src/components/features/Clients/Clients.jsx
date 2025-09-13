import { useState, useEffect } from 'react';
import styles from '../../../styles/Clients.module.css'
import { Titles } from '../../common/Titles/Titles';
import { ReviewCard } from './ClientCard';
import { customerReviews } from '../../../data/customerReviews';
import { SectionDivider } from '../../common/SectionDivider/SectionDivider';
import { GoogleRating } from '../../common/GoogleRating/GoogleRating';

export function Clients () {
    const [cardStates, setCardStates] = useState([true, true, true]); // visibility state for each card
    const [cardReviews, setCardReviews] = useState([0, 1, 2]); // current review indices being displayed

    // Get current reviews to display based on cardReviews state
    const getCurrentReviews = () => {
        return cardReviews.map(index => customerReviews[index]);
    };

    // Handle staggered transition between review sets
    useEffect(() => {
        let currentSet = 0; // Local variable to track current set

        const startStaggeredTransition = () => {
            const nextSet = currentSet === 0 ? 1 : 0;
            const nextSetStartIndex = nextSet * 3;
            
            // Transition each card with 0.5s delay between each
            [0, 1, 2].forEach((cardIndex) => {
                setTimeout(() => {
                    // Fade out current card
                    setCardStates(prev => {
                        const newStates = [...prev];
                        newStates[cardIndex] = false;
                        return newStates;
                    });
                    
                    setTimeout(() => {
                        // Update the review for this card and fade in
                        setCardReviews(prev => {
                            const newReviews = [...prev];
                            newReviews[cardIndex] = nextSetStartIndex + cardIndex;
                            return newReviews;
                        });
                        
                        setTimeout(() => {
                            // Fade in new card
                            setCardStates(prev => {
                                const newStates = [...prev];
                                newStates[cardIndex] = true;
                                return newStates;
                            });
                        }, 50); // Small delay for DOM update
                        
                    }, 500); // 0.5 second gap as requested
                    
                }, cardIndex * 500); // 0.5 second delay between each card
            });
            
            currentSet = nextSet; // Update local variable
        };

        // Start the cycle: wait 9 seconds, then repeat every 9 seconds
        const interval = setInterval(() => {
            startStaggeredTransition();
        }, 9000); // 9 second cycle as requested

        return () => clearInterval(interval);
    }, []); // Empty dependency array to prevent infinite loop
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
                {getCurrentReviews().map((review, index) => (
                    <div 
                        key={review.id}
                        className={`${styles.cardWrapper} ${cardStates[index] ? styles.fadeIn : styles.fadeOut}`}
                    >
                        <a 
                            href="https://www.google.com/search?q=Piedra+Construcciones&ie=UTF-8#mpd=~13252831935698052680/customers/reviews&lrd=0x959f81b539eb72cf:0xd8c34054d85c5ad0,1,,,,"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ReviewCard review={review} />
                        </a>
                    </div>
                ))} 
            </div>

            <SectionDivider position='bottom'/>
            
        </div>
    )
}
  