import React from 'react';
import { render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store'; // Adjust this path accordingly
import MealSlider from '../components/navigation/MealSlider';

// Mock react-slick library
jest.mock('react-slick', () => ({
  __esModule: true,
  default: jest.fn(),
}));

test('renders MealSlider component', () => {
  act(() => {
    render(
      <Provider store={store}>
        <MealSlider />
      </Provider>
    );
  });
});
