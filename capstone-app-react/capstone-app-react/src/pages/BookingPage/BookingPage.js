import { useState } from 'react';

import { defaultAvailableTimes } from 'utils/helpers';

import { BookingFormSection } from './sections/BookingFormSection/BookingFormSection';

export const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState({ ...defaultAvailableTimes });

  return (
    <BookingFormSection
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTimes}
    />
  );
};
