import styles from '../styles/Titles.module.css'
import PropTypes from 'prop-types'



export function Titles({ title }) {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}

Titles.propTypes = {
  title: PropTypes.string.isRequired
}