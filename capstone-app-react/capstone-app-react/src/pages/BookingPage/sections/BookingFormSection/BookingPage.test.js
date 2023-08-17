import { render, screen, act } from '@testing-library/react';
import { BookingFormSection } from './BookingFormSection';

import { defaultAvailableTimes } from 'utils/helpers';

const availableTimes = { ...defaultAvailableTimes };

test('Renders the BookingForm heading', async () => {
  const mockFn = jest.fn();

  render(
    <BookingFormSection availableTimes={availableTimes} setAvailableTimes={mockFn} />
  );

  await act(async () => {
    await pauseHelper(100);
  });

  const headingElement = await screen.findByRole('heading', { name: /book now/i });

  expect(headingElement).toBeInTheDocument();
});

const pauseHelper = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
