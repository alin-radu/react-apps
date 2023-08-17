import Logo from 'assets/images/little_lemon_green_14@4.webp';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer tabIndex="0" className={styles['section-container']}>
    <div tabIndex="0">
      <img src={Logo} alt="Little Lemon Logo" width="100px" height="33.3px" />
    </div>
    <div tabIndex="0">
      <p>&copy; Copyright Little Lemon</p>
    </div>
  </footer>
);
