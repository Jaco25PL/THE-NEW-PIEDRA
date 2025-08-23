import { GoogleReviews } from '../components/common/GoogleReviews/GoogleReviews';
import styles from './TestReviews.module.css';

export default function TestReviews() {
    return (
        <div className={styles.container}>
            <h1>Google Reviews Component Test</h1>
            
            <div className={styles.reviewsContainer}>
                <h2>Piedra Construcciones Reviews</h2>
                <GoogleReviews />
            </div>

            <div className={styles.info}>
                <h3>How to use in your components:</h3>
                <pre className={styles.code}>
{`import { GoogleReviews } from './components/common/GoogleReviews/GoogleReviews';

<GoogleReviews 
    businessName="Piedra Construcciones"
    placeId="ChIJz3LrObWBn5UR0Fpc2FRAw9g"
    googleReviewsUrl="https://your-custom-reviews-url"
/>`}
                </pre>
                
                <h3>Features:</h3>
                <ul>
                    <li>✅ Real customer reviews from Nelson, María, and Zaida</li>
                    <li>✅ 5.0 star rating display</li>
                    <li>✅ Click to open Google Reviews</li>
                    <li>✅ Responsive design</li>
                    <li>✅ Hover animations</li>
                    <li>✅ Professional Google-style appearance</li>
                </ul>
            </div>
        </div>
    );
}
