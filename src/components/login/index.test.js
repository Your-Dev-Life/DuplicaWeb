import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from '.';
import {
  setInputValue,
  clickButtonByTestId,
  clickButtonByTitle,
} from '../../../tests/actions';
import auth from '../../../tests/auth';
import { getErrorWithMessage } from '../../../tests/errors';

const renderComponent = (api, history) => render(
  <Router history={history}>
    <Login api={api} />
  </Router>,
);

const clickAway = () => {
  user.click(screen.getByPlaceholderText('Username'));
  return screen.findByTestId('SignInButton');
};

const generateErrorMessage = async (errorMessage) => {
  auth.doLogin.mockRejectedValue(getErrorWithMessage(errorMessage || 'Invalid username and/or password'));
  setInputValue('Username', 'InvalidUsername');
  setInputValue('Password', 'InvalidPassword');
  await clickButtonByTestId('SignInButton');
};

let history;

describe('Login', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    renderComponent({ auth }, history);
  });

  test('should show Login page with all starting components', () => {
    expect(screen.queryByText('Login')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('should show message \'Username is required\' when username is not informed', async () => {
    await clickButtonByTestId('SignInButton');
    expect(screen.getByText('Username is required')).toBeInTheDocument();
  });

  test('should show error message \'Invalid username and/or password\'', async () => {
    await generateErrorMessage();
    expect(await screen.findByText('Invalid username and/or password')).toBeInTheDocument();
  });

  test('should dismiss error message when Close button is clicked', async () => {
    await generateErrorMessage();
    await clickButtonByTitle('Close');

    const alert = await screen.findByRole('alert');
    expect(alert.style._values.opacity).toEqual('0');
  });

  test('should not dismiss error message when User clicks away', async () => {
    await generateErrorMessage();
    await clickAway();

    const alert = await screen.findByRole('alert');
    expect(alert.style._values.opacity).toEqual('1');
  });

  test('should redirect to /home when username and password are correct', async () => {
    expect(history.location.pathname).toEqual('/');

    auth.doLogin.mockResolvedValue('');
    setInputValue('Username', 'CorrectUsername');
    setInputValue('Password', 'CorrectPassword');
    await clickButtonByTestId('SignInButton');

    expect(history.location.pathname).toEqual('/home');
  });
});
