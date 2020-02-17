import React from 'react';
import { render } from '@testing-library/react';
import Main from './main';
import api from "./api";

describe('Main', () => {
  test('show Main page when user is authenticated', () => {
    const auth = {
      isAuthenticated: () => true
    };
    const { getByText } = render(<Main auth={auth} api={api} />);
    const element = getByText(/Duplica/i);
    expect(element).toBeInTheDocument();
  });
});
