import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Login from '.';

const authentication = () => ({
  doLogin: () => jest.fn(),
});
const renderComponent = (auth) => render(<Router><Login auth={auth} /></Router>);

describe('Login', () => {
  test('should show Login page', () => {
    const auth = authentication();
    const { queryByText } = renderComponent(auth);
    const element = queryByText(/Login/i);
    expect(element).toBeInTheDocument();
  });
});
