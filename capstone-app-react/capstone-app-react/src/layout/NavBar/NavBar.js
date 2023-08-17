import { Link } from 'react-router-dom';

import { ROUTES } from 'utils/routes';

import Logo from 'assets/icons/Logo.svg';

import './NavBar.module.scss';

export const NavBar = () => (
  <header>
    <Link to={ROUTES.MAIN_HOME_ROUTE} aria-label="Little Lemon Logo">
      <img src={Logo} alt="Little Lemon Logo" />
    </Link>
    <nav tabIndex="0">
      <ul>
        <li>
          <Link to={ROUTES.MAIN_HOME_ROUTE}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.MAIN_ABOUT}>About</Link>
        </li>
        <li>
          <Link to={ROUTES.MAIN_MENU}>Menu</Link>
        </li>
        <li>
          <Link to={ROUTES.MAIN_BOOKING}>Reservations</Link>
        </li>
        <li>
          <Link to={ROUTES.MAIN_ORDER_ONLINE}>Order Online</Link>
        </li>
        <li>
          <Link to={ROUTES.MAIN_LOGIN}>Login</Link>
        </li>
      </ul>
    </nav>
  </header>
);
