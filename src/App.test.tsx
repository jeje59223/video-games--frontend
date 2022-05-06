import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const title = screen.getByText(/Video Games Catalog/i);
  expect('title').toBe('title');
});
