import { NavBar } from 'layout/NavBar/NavBar';
import { Footer } from 'layout/Footer/Footer';

import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }) => (
  <div className={styles.container}>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </div>
);
