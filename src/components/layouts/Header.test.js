import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {

  test('renders Duplica text when no title is passed', () => {
    const { getByText } = render(<Header />);
    const element = getByText(/Duplica/i);
    expect(element).toBeInTheDocument();
  });

  test('renders Anything text when Anything is passed as the title', () => {
    const { getByText } = render(<Header title="Anything" />);
    const element = getByText(/Anything/i);
    expect(element).toBeInTheDocument();
  });
});
