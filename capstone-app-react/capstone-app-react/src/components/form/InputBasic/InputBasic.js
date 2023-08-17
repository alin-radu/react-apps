import { Field, ErrorMessage } from 'formik';

import { TextError } from '../TextError/TextError';

export const InputBasic = (props) => {
  const { name, type, label, styles } = props;

  return (
    <div className={styles['input-styles']}>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {(props) => {
          const { field, meta } = props;
          const isError = meta.touched && meta.error;
          const classes = isError ? styles.error : '';

          return (
            <>
              <input
                id={name}
                type={type}
                className={classes}
                aria-invalid={Boolean(isError)}
                {...field}
              />
            </>
          );
        }}
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
