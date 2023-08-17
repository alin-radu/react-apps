/* eslint-disable jsx-a11y/img-redundant-alt */
import UnderConstructionPageImg from 'assets/images/under-construction-image.webp';

import styles from './UnderConstructionPage.module.scss';

export const UnderConstructionPage = (props) => {
  const { pageName } = props;
  return (
    <div className={styles['section-container']}>
      <p role="status" aria-atomic="true" aria-label="Page Under Construction">
        {pageName + ' Page'}
      </p>
      <div>{true}</div>
      <img
        tabIndex="0"
        src={UnderConstructionPageImg}
        alt="Under Construction Page Image"
        width="750px"
        height="440px"
      />
    </div>
  );
};
