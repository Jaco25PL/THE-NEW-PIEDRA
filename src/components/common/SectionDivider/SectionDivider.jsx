import styles from '../../../styles/SectionDivider.module.css';
import propTypes from 'prop-types';

export function SectionDivider({ position }){ // top or bottom
// export function SectionDivider(){ // top or bottom

    let top = false
    if (position === 'top') {
        top = true;
    }

    return (
        <div className={
            top 
                ? styles.sectionDividerT 
                : styles.sectionDividerB
        }>
        </div>

        //  <div className={styles.sectionDividerT}></div>
    );
}

SectionDivider.propTypes = {
    position: propTypes.oneOf(['top', 'bottom'])    
};