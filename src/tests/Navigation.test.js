import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Navigation from '../components/navigation/Navigation';

test('renders navigation links in Navigation component', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    </Provider>,
  );

  const mealLink = screen.getByRole('link', { name: /meal/i });
  const reserveLink = screen.getByRole('link', { name: /reserve/i });
  const myReservationsLink = screen.getByRole('link', { name: /my reservations/i });
  const addMealLink = screen.queryByRole('link', { name: /add meal/i });
  const deleteMealLink = screen.queryByRole('link', { name: /delete meal/i });

  expect(mealLink).toBeInTheDocument();
  expect(reserveLink).toBeInTheDocument();
  expect(myReservationsLink).toBeInTheDocument();
  expect(addMealLink).toBeNull();
  expect(deleteMealLink).toBeNull();
});
