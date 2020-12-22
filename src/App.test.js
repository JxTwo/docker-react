import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders taro finding aids', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Finding Aids List/i);
  expect(linkElement).toBeInTheDocument();
});
