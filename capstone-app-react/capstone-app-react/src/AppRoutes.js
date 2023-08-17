import { Routes, Route } from 'react-router-dom';

import { ROUTES } from 'utils/routes';

import { MainLayout } from './layout/MainLayout/MainLayout';
import { HomePage } from 'pages/HomePage/HomePage';
import { BookingPage } from 'pages/BookingPage/BookingPage';
import { BookingConfirmationPage } from 'pages/BookingConfirmationPage/BookingConfirmationPage';
import { UnderConstructionPage } from 'pages/UnderConstructionPage/UnderConstructionPage';

export const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path={ROUTES.MAIN_HOME_ROUTE} element={<HomePage />} />
      <Route
        path={ROUTES.MAIN_ABOUT}
        element={<UnderConstructionPage pageName="About" />}
      />
      <Route
        path={ROUTES.MAIN_MENU}
        element={<UnderConstructionPage pageName="Menu" />}
      />
      <Route path={ROUTES.MAIN_BOOKING} element={<BookingPage />} />
      <Route
        path={ROUTES.MAIN_ORDER_ONLINE}
        element={<UnderConstructionPage pageName="Order Online" />}
      />
      <Route
        path={ROUTES.MAIN_LOGIN}
        element={<UnderConstructionPage pageName="Log In" />}
      />
      <Route
        path={ROUTES.MAIN_BOOKING_CONFIRMATION}
        element={<BookingConfirmationPage />}
      />
    </Routes>
  </MainLayout>
);
