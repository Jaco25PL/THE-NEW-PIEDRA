import styles from '../../../styles/Clients.module.css'
import PropTypes from 'prop-types';

export const ReviewCard = ({ review }) => {


    const truncateText = (text, maxLength) => {
        return text.length > maxLength 
          ? text.substring(0, maxLength) + '...' 
          : text;
      }

    return (
        <div className={styles.reviewCard}>
            <div className={styles.cardHeader}>
                <div className={styles.cardHeaderUser}>
                    <div className={styles.profilePictureContainer}>

                        <div className={styles.profilePicture}>
                            <img 
                                src={review.profilePic} 
                                alt={`Foto de perfil de ${review.name}`} 
                            />
                        </div>
                    </div>

                    <div className={styles.reviewContent}>
                        <div className={styles.reviewerInfo}>
                            <span className={styles.reviewerName}>{truncateText(review.name, 15)}</span>
                            <div className={styles.ratingStars}>
                                {[...Array(5)].map((_, index) => (
                                    <span 
                                      key={index} 
                                      className={index < review.rating ? styles.starFilled : styles.starEmpty}
                                    >
                                      ★
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className={styles.reviewDate}>{review.date}</div>
                        <p className={styles.reviewText}>{truncateText(review.comment, 180)}</p>
                    </div>
                    
                </div>

                <div className={styles.googleLogo}>
                    <img src="/images/Google_logo.svg" alt="Google logo" />
                </div>
            </div>
            
      </div>
    );
};

ReviewCard.propTypes = {
    review: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profilePic: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired
    }).isRequired
}