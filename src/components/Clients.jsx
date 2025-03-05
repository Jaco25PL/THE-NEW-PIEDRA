import styles from '../styles/Clients.module.css'
import { Titles } from './Titles';
import { ReviewCard } from './ClientCard';

// Customer review data object
const customerReviews = [
  {
    id: 1,
    name: 'María González',
    profilePic: './images/face-1.png',
    rating: 4,
    date: 'Hace 3 días',
    comment: 'Un servicio increíble. Superaron todas mis expectativas. La atención al cliente fue excepcional y el resultado final fue exactamente lo que estaba buscando.'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    profilePic: './images/face-2.png',
    rating: 5,
    date: 'Hace 7 días',
    comment: 'Quedé completamente satisfecho con el trabajo realizado. La profesionalidad y dedicación de su equipo son realmente destacables. Sin duda, los recomendaré. Quedé completamente satisfecho con el trabajo realizado. La profesionalidad y dedicación de su equipo son realmente destacables. Sin duda, los recomendaré.'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    profilePic: './images/face-3.jpeg',
    rating: 4,
    date: 'Hace 10 días',
    comment: 'Una experiencia muy positiva. Resolvieron mi problema de manera rápida y eficiente. El seguimiento y la comunicación fueron excelentes.'
  }
];
  
  // Main Satisfied Customers Component
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
  