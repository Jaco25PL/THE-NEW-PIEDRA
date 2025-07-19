import styles from '../../../styles/CTAButton.module.css'
import propTypes from 'prop-types'

export function CTAButton({ text, action }) {


    return (
        <a
            href={action}
            className={styles.whatsappButton}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    )
}

CTAButton.propTypes = {
    text: propTypes.string.isRequired,
    action: propTypes.string.isRequired
}