export const TextError = (props) => {
  const { styles, children, ...otherProps } = props;
  return (
    <span className={styles['field-feedback']} {...otherProps}>
      {children}
    </span>
  );
};
