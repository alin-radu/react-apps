import { ROUTES } from 'utils/routes';

import { Navigate, useLocation } from 'react-router-dom';
import { ConfirmationMessage } from './sections/ConfirmationMessage/ConfirmationMessage';

export const BookingConfirmationPage = () => {
  const location = useLocation();
  const formData = location.state;

  if (!formData) {
    return <Navigate to={ROUTES.MAIN_HOME_ROUTE} />;
  }

  return <ConfirmationMessage formData={formData} />;
};
