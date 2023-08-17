import MoonLoader from 'react-spinners/MoonLoader';

import styles from './SpinnerBasic.module.scss';


const SpinnerBasic = ({ isLoading, isError, style }) => (
  <div className={styles.section} style={{ ...style }}>
    {isLoading && (
      <MoonLoader size={32} color={"#CCC"} loading={isLoading} />
    )}
    {isError && 'No data available'}
  </div>
);

export default SpinnerBasic;
