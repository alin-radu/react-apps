import { useState, useRef } from 'react';
import { Formik, Form } from 'formik';

import { Navigate } from 'react-router-dom';

import { validationSchema } from 'forms/validations/BookingFormValidation';
import { getFormatedDate } from 'utils/helpers';
import { OCASSION_OPTIONS, TIME_OPTIONS } from 'utils/constants';
import { ROUTES } from 'utils/routes';

import { FormControl } from 'components/form/FormControl/FormControl';
import { ButtonSubmitBasic } from 'components/form/ButtonSubmitBasic/ButtonSubmitBasic';

import styles from 'styles/_form-primary.module.scss';

const currentDate = getFormatedDate(new Date());

const initialValuesHelper = (availableTime, ocassionOption) => ({
  email: '',
  date: null,
  time: availableTime,
  guests: 1,
  occasion: ocassionOption,
});

export const BookingForm = (props) => {
  const { setIsLoading, availableTimes, setAvailableTimes } = props;

  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const formDataRef = useRef(null);

  const initialValues = initialValuesHelper(
    availableTimes[currentDate][0].value,
    OCASSION_OPTIONS[0].value
  );

  const onSubmitHandler = (values, formikHelpers) => {
    const selectedDate = values.date;
    const selectedTime = values.time;
    const isSelectedDate = selectedDate in availableTimes;

    let updatedAvailableTime;
    if (isSelectedDate) {
      updatedAvailableTime = availableTimes[selectedDate].filter(
        (item) => item.value !== selectedTime
      );
    } else {
      updatedAvailableTime = TIME_OPTIONS.filter((item) => item.value !== selectedTime);
    }

    const newAvailableTimes = {
      ...availableTimes,
      [selectedDate]: updatedAvailableTime,
    };

    setIsLoading(true);
    formDataRef.current = { ...values };
    setTimeout(() => {
      setAvailableTimes({
        ...newAvailableTimes,
      });
      formikHelpers.resetForm();
      setIsLoading(false);
      setIsBookingConfirmed(true);
    }, 1500);
  };

  const onChangeDateHandler = (selectedDate, setFieldValue, callbackFunc) => {
    if (availableTimes[selectedDate]) {
      setFieldValue('time', availableTimes[selectedDate][0].value);
    } else {
      setFieldValue('time', TIME_OPTIONS[0].value);
    }
    callbackFunc();
  };

  return (
    <div className={styles['form-primary-styles']}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount
        initialErrors={{ email: 'Required' }}
        onSubmit={onSubmitHandler}
      >
        {(formik) => {
          const selectedDate = formik.values.date;
          let availableTimesOptions;
          if (selectedDate && availableTimes[selectedDate]) {
            availableTimesOptions = availableTimes[selectedDate];
          } else {
            availableTimesOptions = TIME_OPTIONS;
          }

          return (
            <Form>
              <FormControl
                control="input"
                name="email"
                type="email"
                label="Email Address"
                styles={styles}
              />
              <FormControl
                control="date"
                name="date"
                type="date"
                label="Choose Date"
                styles={styles}
                onChangeAction={onChangeDateHandler}
              />
              <FormControl
                control="select"
                name="time"
                type="time"
                label="Choose Time"
                options={availableTimesOptions}
                styles={styles}
              />
              <FormControl
                control="input"
                name="guests"
                type="number"
                label="Number Of Guests"
                min="1"
                max="10"
                styles={styles}
              />
              <FormControl
                control="select"
                name="occasion"
                type="occasion"
                label="Occasion"
                options={OCASSION_OPTIONS}
                styles={styles}
              />
              <ButtonSubmitBasic
                tabIndex={formik.isValid ? '-1' : '0'}
                disabled={!formik.isValid}
                styles={styles}
              >
                Make Your reservation
              </ButtonSubmitBasic>
            </Form>
          );
        }}
      </Formik>
      {isBookingConfirmed && (
        <Navigate
          to={ROUTES.MAIN_BOOKING_CONFIRMATION}
          state={{ ...formDataRef.current }}
          replace={true}
        />
      )}
    </div>
  );
};
