import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer text in the Footer', () => {
  const { getByText } = render(<Footer />);
  const element = getByText(/Footer/i);
  expect(element).toBeInTheDocument();
});
