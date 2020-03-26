import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Main from './main';
import apiService from './api';

const renderMain = (auth, api) => render(<Router><Main auth={auth} api={api} /></Router>);
const authenticated = (isAuthenticated) => ({
  isAuthenticated: () => isAuthenticated,
});

describe('Main', () => {
  test('should show Main page when user is authenticated', () => {
    const auth = authenticated(true);
    const { getByText } = renderMain(auth, apiService);
    const element = getByText(/Duplica/i);
    expect(element).toBeInTheDocument();
  });

  test('should redirect and show Login page when user is NOT authenticated', () => {
    const auth = authenticated(false);
    const { queryByText } = renderMain(auth, apiService);
    const element = queryByText(/Duplica/i);
    expect(element).toBeNull();
  });
});
