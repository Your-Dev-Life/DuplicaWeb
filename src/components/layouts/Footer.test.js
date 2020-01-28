import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {

  test('renders \'© Copyright 2020\' text when no title is passed', () => {
    const { getByText } = render(<Footer />);
    const element = getByText(/© Copyright 2020/i);
    expect(element).toBeInTheDocument();
  });

  test('renders Anything text when Anything is passed as the title', () => {
    const { getByText } = render(<Footer title="Anything" />);
    const element = getByText(/Anything/i);
    expect(element).toBeInTheDocument();
  });
});
