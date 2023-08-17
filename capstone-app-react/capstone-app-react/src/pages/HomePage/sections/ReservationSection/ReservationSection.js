import { ROUTES } from 'utils/routes';

import { BasicButton } from 'components/UI/buttons/BasicButton/BasicButton';

import styles from './ReservationSection.module.scss';

export const ReservationSection = () => {
  return (
    <section className={styles['section-container']}>
      <div className={styles['elements-container']}>
        <div className={styles['left-side']}>
          <h1 tabIndex="0">Little Lemon</h1>
          <h3 tabIndex="0">Chicago</h3>
          <p tabIndex="0">
            We are a family owned Mediterranean restaurant, focused on traditional recipes
            served with a modern twist.
          </p>
          <BasicButton linkTo={ROUTES.MAIN_BOOKING} type="btn-primary" animation={true}>
            Reserve a Table
          </BasicButton>
        </div>
        <div className={styles['right-side']}></div>
      </div>
    </section>
  );
};
