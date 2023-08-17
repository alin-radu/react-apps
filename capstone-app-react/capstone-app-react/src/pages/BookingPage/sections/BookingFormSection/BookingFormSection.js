import { useState } from 'react';
import { BookingForm } from '../../components/BookingForm/BookingForm';
import SpinnerBasic from 'components/UI/spinners/SpinnerBasic/SpinnerBasic';

import styles from './BookingFormSection.module.scss';

export const BookingFormSection = (props) => {
  const { availableTimes, setAvailableTimes } = props;

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles['section-container']}>
      {isLoading && <SpinnerBasic isLoading={isLoading} isError={false} />}
      <h3 tabIndex="0">Book Now</h3>
      <BookingForm
        setIsLoading={setIsLoading}
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </div>
  );
};
