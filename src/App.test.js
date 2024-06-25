import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the app component', () => {
  render(<App />);

  const linkElement = screen.getByText(/item 0/i);

  expect(linkElement).toBeInTheDocument();
});
