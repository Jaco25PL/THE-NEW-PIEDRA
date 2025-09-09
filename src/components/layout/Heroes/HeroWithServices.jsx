import { PiedraHero } from './PiedraHero';
import { ServiceBoxes } from '../../common/ServiceBoxes/ServiceBoxes';
import styles from '../../../styles/HeroWithServices.module.css';
import PropTypes from 'prop-types';

export function HeroWithServices({
  title = 'Piedra',
  titleBottom = 'Construcciones',
  subTitle = 'Empresa familiar especializada en construcción y remodelación',
  subTitleBottom = 'Con sede en Montevideo, Uruguay',
  bgImage = '/images/render-4.jpg'
}) {

  return (
    <div className={styles.heroWrapper}>
      <PiedraHero
        title={title}
        titleBottom={titleBottom}
        subTitle={subTitle}
        subTitleBottom={subTitleBottom}
        bgImage={bgImage}
      />
      <ServiceBoxes />
    </div>
  );
}

HeroWithServices.propTypes = {
  title: PropTypes.string, 
  titleBottom: PropTypes.string,
  subTitle: PropTypes.string,
  subTitleBottom: PropTypes.string,
  bgImage: PropTypes.string,
};
