export const ButtonSubmitBasic = (props) => {
  const { disabled, styles, children } = props;

  return (
    <div className={styles['button-styles']}>
      <button tabIndex={0} type="submit" disabled={disabled}>
        {children}
      </button>
    </div>
  );
};
