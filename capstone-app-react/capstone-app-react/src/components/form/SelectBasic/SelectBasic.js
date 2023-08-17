import React from 'react';
import { Field, ErrorMessage } from 'formik';

import { TextError } from '../TextError/TextError';

export const SelectBasic = (props) => {
  const { label, name, options, styles, ...rest } = props;

  return (
    <div className={styles['select-styles']}>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <TextError
            styles={styles}
            role="alert"
            aria-live="assertive"
            aria-describedby={`${label} ${msg}`}
          >
            {`${label} is ${msg}`}
          </TextError>
        )}
      />
    </div>
  );
};
