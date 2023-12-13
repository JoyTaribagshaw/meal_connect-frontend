import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MealDetails from '../components/cards/MealDetail';

test('renders MealDetails component', async () => {
  const mockMeal = {
    id: 1,
    photo: 'mock_photo.jpg',
    name: 'Mock Meal',
    description: 'This is a mock description for the meal.',
    price: 10.99,
  };

  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockMeal),
  }));

  const { container } = render(
    <MemoryRouter initialEntries={['/meals/1']}>
      <Routes>
        <Route path="/meals/:id" element={<MealDetails />} />
      </Routes>
    </MemoryRouter>,
  );

  expect(container).toBeInTheDocument();

  global.fetch.mockRestore();
});
