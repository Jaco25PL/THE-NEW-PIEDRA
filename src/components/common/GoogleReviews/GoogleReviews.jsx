import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GoogleReviews.module.css';

export function GoogleReviews({ 
    businessName = "Piedra Construcciones",
    placeId = "ChIJz3LrObWBn5UR0Fpc2FRAw9g",
    googleReviewsUrl = null
}) {
    // Real customer reviews data
    const [reviewData] = useState({
        rating: 5.0,
        reviewCount: 15,
        businessName: businessName,
        reviews: [
            {
                author_name: 'Nelson D\'Angelo',
                rating: 5,
                text: 'Muy buen trato personal y atención permanente en los trabajos realizados el cumplimiento siempre excelente y los presupuestos económicos. Empresa recomendable.',
                relative_time_description: 'hace 3 semanas'
            },
            {
                author_name: 'María Fernández',
                rating: 5,
                text: 'Hola, Piedra me hizo una reforma en casa hace 4 años que quedó súper bien, quedamos más que conformes, e hizo el frente de mi casa hace ese tiempo y está impecable hasta ahora. Hacen un trabajo de excelente calidad y seriedad ante todo. Muy recomendable.',
                relative_time_description: 'hace 1 mes'
            },
            {
                author_name: 'Zaida González',
                rating: 5,
                text: 'Son excelentes en lo que hacen y muy prolijos. Los precios son de acuerdo al trabajo que realizan. Son muy accesibles. Los súper recomiendo.',
                relative_time_description: 'hace 2 meses'
            }
        ]
    });

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(reviewData.rating);
        const hasHalfStar = reviewData.rating % 1 >= 0.5;
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={i} className={styles.star}>
                    ⭐
                </span>
            );
        }
        
        // Half star
        if (hasHalfStar) {
            stars.push(
                <span key="half" className={styles.starHalf}>
                    ⭐
                </span>
            );
        }
        
        // Empty stars to complete 5
        const remainingStars = 5 - Math.ceil(reviewData.rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <span key={`empty-${i}`} className={styles.starEmpty}>
                    ⭐
                </span>
            );
        }
        
        return stars;
    };

    const getRatingText = () => {
        if (reviewData.rating >= 4.5) return "EXCELENTE";
        if (reviewData.rating >= 4.0) return "MUY BUENO";
        if (reviewData.rating >= 3.5) return "BUENO";
        if (reviewData.rating >= 3.0) return "REGULAR";
        return "MALO";
    };

    const handleClick = () => {
        // Priority: custom URL > generated URL from Place ID > search fallback
        let url = googleReviewsUrl;
        
        if (!url && placeId) {
            // Generate Google Reviews URL from Place ID
            url = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
        }
        
        if (!url) {
            // Fallback: search for the business
            const searchQuery = encodeURIComponent(`${businessName} reviews`);
            url = `https://www.google.com/search?q=${searchQuery}`;
        }
        
        window.open(url, '_blank');
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.content}>
                <div className={styles.ratingSection}>
                    <span className={styles.ratingText}>{getRatingText()}</span>
                    <div className={styles.stars}>
                        {renderStars()}
                    </div>
                    <span className={styles.ratingNumber}>{reviewData.rating.toFixed(1)}</span>
                </div>
                
                <div className={styles.reviewInfo}>
                    <span className={styles.reviewCount}>
                        {reviewData.reviewCount} reseña{reviewData.reviewCount !== 1 ? 's' : ''}
                    </span>
                    <div className={styles.googleLogo}>
                        <span className={styles.googleText}>
                            G<span className={styles.red}>o</span><span className={styles.yellow}>o</span><span className={styles.blue}>g</span><span className={styles.green}>l</span><span className={styles.red}>e</span>
                        </span>
                    </div>
                </div>
            </div>
            
            {/* Reviews Display Section */}
            {reviewData.reviews && reviewData.reviews.length > 0 && (
                <div className={styles.reviewsSection}>
                    <h3 className={styles.reviewsTitle}>Últimas Reseñas</h3>
                    <div className={styles.reviewsList}>
                        {reviewData.reviews.map((review, index) => (
                            <div key={index} className={styles.reviewItem}>
                                <div className={styles.reviewHeader}>
                                    <div className={styles.reviewAuthor}>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.authorName}>{review.author_name}</span>
                                            <span className={styles.reviewTime}>{review.relative_time_description}</span>
                                        </div>
                                    </div>
                                    <div className={styles.reviewRating}>
                                        {[...Array(5)].map((_, i) => (
                                            <span 
                                                key={i} 
                                                className={`${styles.reviewStar} ${i < review.rating ? styles.filled : ''}`}
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className={styles.reviewText}>{review.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.clickHint}>
                        <small>👆 Haz clic para ver todas las reseñas en Google</small>
                    </div>
                </div>
            )}
        </div>
    );
}

GoogleReviews.propTypes = {
    businessName: PropTypes.string,
    placeId: PropTypes.string,
    googleReviewsUrl: PropTypes.string
};
