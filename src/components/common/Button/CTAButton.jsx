import styles from '../../../styles/CTAButton.module.css'
import propTypes from 'prop-types'

export function CTAButton({ text, action , color = 'gold' }) {


    return (
        <a
            href={action}
            className={`${styles.whatsappButton} ${color === 'gold' ? styles.whatsappButtonGold : styles.whatsappButtonDark}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    )
}

CTAButton.propTypes = {
    text: propTypes.string.isRequired,
    action: propTypes.string.isRequired,
    color: propTypes.oneOf(['gold', 'dark'])
}