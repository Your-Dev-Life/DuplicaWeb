import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders DUPLICA text in the Header', () => {
  const { getByText } = render(<Header />);
  const element = getByText(/DUPLICA/i);
  expect(element).toBeInTheDocument();
});
