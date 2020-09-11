import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders greeting', () => {
  const { getByText } = render(<App />);
  const greeting = getByText(/Hello, World!/i);
  expect(greeting).toBeInTheDocument();
});
