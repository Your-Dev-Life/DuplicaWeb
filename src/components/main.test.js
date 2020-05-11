import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Main from './main';
import api from '../api';

const renderMain = (auth) => {
  api.auth = auth;
  return render(<Router><Main api={api} /></Router>);
};

const authenticated = (isAuthenticated) => ({
  isAuthenticated: () => isAuthenticated,
});

describe('Main', () => {
  test('should show Main page when user is authenticated', () => {
    const auth = authenticated(true);
    const { getByText } = renderMain(auth);
    const element = getByText(/Duplica/i);
    expect(element).toBeInTheDocument();
  });

  test('should redirect and show Login page when user is NOT authenticated', () => {
    const auth = authenticated(false);
    const { queryByText } = renderMain(auth);
    const element = queryByText(/Duplica/i);
    expect(element).toBeNull();
  });
});
