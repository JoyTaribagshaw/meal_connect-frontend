import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './components/UserProfile';

test('renders UserProfile component without user data', () => {
  render(<UserProfile />);

  const userProfileElement = screen.queryByText(/Email/i);
  expect(userProfileElement).toBeNull();
});
