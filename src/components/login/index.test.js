import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Login from '.';

const authentication = () => ({
  doLogin: () => jest.fn(),
});
const renderComponent = (auth) => render(<Router><Login auth={auth} /></Router>);

describe('Login', () => {
  test('should show Login page with all starting components', () => {
    const auth = authentication();
    const { queryByText, getByPlaceholderText } = renderComponent(auth);
    const elementTitle = queryByText(/Login/i);
    const elementUsername = getByPlaceholderText(/Username/i);
    const elementPassword = getByPlaceholderText(/Password/i);
    expect(elementTitle).toBeInTheDocument();
    expect(elementUsername).toBeInTheDocument();
    expect(elementPassword).toBeInTheDocument();
  });
});
