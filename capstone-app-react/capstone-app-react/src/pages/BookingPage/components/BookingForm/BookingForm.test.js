/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BookingForm } from './BookingForm';

import { defaultAvailableTimes } from 'utils/helpers';

const availableTimes = { ...defaultAvailableTimes };

describe('BookingForm tests for invalid data', () => {
  it('show error message for email input', async () => {
    const mockFn = jest.fn();

    render(
      <BookingForm
        setIsLoading={mockFn}
        availableTimes={availableTimes}
        setAvailableTimes={mockFn}
      />
    );

    await act(async () => {
      await pauseHelper(100);
    });

    const emailInput = screen.getByRole('textbox', { name: /email address/i });
    expect(emailInput).toBeInTheDocument();

    const dateInput = screen.getByRole('textbox', { name: /choose date/i });
    expect(dateInput).toBeInTheDocument();

    await act(async () => {
      userEvent.click(emailInput);
      userEvent.type(emailInput, 'test');
      userEvent.click(dateInput);

      const emailErrorMessage = await screen.findByRole('alert', {
        value: { text: /email address is invalid/i },
      });
      expect(emailErrorMessage).toBeInTheDocument();
    });
  });

  it('show error message for date input', async () => {
    const mockFn = jest.fn();

    render(
      <BookingForm
        setIsLoading={mockFn}
        availableTimes={availableTimes}
        setAvailableTimes={mockFn}
      />
    );

    await act(async () => {
      await pauseHelper(100);
    });

    const emailInput = screen.getByRole('textbox', { name: /email address/i });
    expect(emailInput).toBeInTheDocument();

    const dateInput = screen.getByRole('textbox', { name: /choose date/i });
    expect(dateInput).toBeInTheDocument();

    await act(async () => {
      userEvent.click(dateInput);
      userEvent.click(emailInput);

      const dateErrorMessage = await screen.findByRole('alert', {
        value: { text: /choose date is required/i },
      });
      expect(dateErrorMessage).toBeInTheDocument();
    });
  });
});

describe('BookingForm tests for valid data', () => {
  it('the form is submitted', async () => {
    const mockFn = jest.fn();

    render(
      <BookingForm
        setIsLoading={mockFn}
        availableTimes={availableTimes}
        setAvailableTimes={mockFn}
      />
    );

    await act(async () => {
      await pauseHelper(100);
    });

    const emailInput = screen.getByRole('textbox', { name: /email address/i });
    const dateInput = screen.getByRole('textbox', { name: /choose date/i });

    await act(async () => {
      userEvent.click(emailInput);
      userEvent.type(emailInput, 'test@test.io');
      userEvent.click(dateInput);
      userEvent.type(dateInput, '2023-08-03');
      
      const submitButton = screen.getByRole('button', {  name: /make your reservation/i});
      expect(submitButton).toBeInTheDocument();
      userEvent.click(submitButton);
    });
  });

});

const pauseHelper = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
