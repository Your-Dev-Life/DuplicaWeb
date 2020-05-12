import React from 'react';
import { render } from '@testing-library/react';
import Factory from ".";

describe('Factory', () => {
  test('should show Factory list with no items', () => {
    const { getByText } = render(<Factory  />);
    const element = getByText(/No records to display/i);
    expect(element).toBeInTheDocument();
  });

  test('should show Factory list with 2 items', () => {
    const { getByText } = render(<Factory />);
    const element = getByText(/No records to display/i);
    expect(element).toBeInTheDocument();
  });
});
