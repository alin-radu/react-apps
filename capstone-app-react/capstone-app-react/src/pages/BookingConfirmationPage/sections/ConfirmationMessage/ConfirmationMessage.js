import { BasicButton } from 'components/UI/buttons/BasicButton/BasicButton';
import styles from './ConfirmationMessage.module.scss';
import { ROUTES } from 'utils/routes';

export const ConfirmationMessage = ({ formData }) => {
  return (
    <section>
      <div className={styles['section-container']}>
        <h3 tabIndex="0">Booking Confirmed</h3>
        <p tabIndex="0">We are waiting you on {formData?.date}</p>
        <h4 tabIndex="0">Thank You</h4>
        <BasicButton linkTo={ROUTES.MAIN_HOME_ROUTE} type="btn-primary" animation={true}>
          Return Home Page
        </BasicButton>
      </div>
    </section>
  );
};
