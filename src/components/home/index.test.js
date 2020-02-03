import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

describe('Home', () => {

  test('show Duplica text when no title is passed', () => {
    const { getByText } = render(<Home />);
    const element = getByText(/Home/i);
    expect(element).toBeInTheDocument();
  });
});
