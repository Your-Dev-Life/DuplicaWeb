import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, cleanup,
} from '@testing-library/react';
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

const clickAway = async (component) => {
  const { getByPlaceholderText, findByTestId } = component;
  user.click(await getByPlaceholderText(/Username/i));
  return findByTestId('SignInButton');
};

const generateErrorMessage = async (errorMessage) => {
  auth.doLogin.mockRejectedValue(getErrorWithMessage(errorMessage || 'Invalid username and/or password'));
  setInputValue(component, /Username/i, 'InvalidUsername');
  setInputValue(component, /Password/i, 'InvalidPassword');
  await clickButtonByTestId(component, 'SignInButton');
};

let history;
let component;

describe('Login', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    component = renderComponent({ auth }, history);
  });
  afterEach(cleanup);

  test('should show Login page with all starting components', () => {
    const { queryByText, getByPlaceholderText } = component;
    const elementTitle = queryByText(/Login/i);
    const elementUsername = getByPlaceholderText(/Username/i);
    const elementPassword = getByPlaceholderText(/Password/i);
    expect(elementTitle).toBeInTheDocument();
    expect(elementUsername).toBeInTheDocument();
    expect(elementPassword).toBeInTheDocument();
  });

  test('should show message \'Username is required\' when username is not informed', async () => {
    await clickButtonByTestId(component, 'SignInButton');
    const { getByText } = component;
    const elementUsernameIsRequired = getByText('Username is required');
    expect(elementUsernameIsRequired).toBeInTheDocument();
  });

  test('should show error message \'Invalid username and/or password\'', async () => {
    const { findByText } = component;
    await generateErrorMessage();

    const elementAlertMessage = await findByText('Invalid username and/or password');
    expect(elementAlertMessage).toBeInTheDocument();
  });

  test('should dismiss error message when Close button is clicked', async () => {
    const { findByRole } = component;
    await generateErrorMessage();
    await clickButtonByTitle(component, 'Close');

    const alert = await findByRole('alert');
    expect(alert.style._values.opacity).toEqual('0');
  });

  test('should not dismiss error message when User clicks away', async () => {
    const { findByRole } = component;
    await generateErrorMessage();
    await clickAway(component);

    const alert = await findByRole('alert');
    expect(alert.style._values.opacity).toEqual('1');
  });

  test('should redirect to /home when username and password are correct', async () => {
    expect(history.location.pathname).toEqual('/');

    auth.doLogin.mockResolvedValue('');
    setInputValue(component, /Username/i, 'CorrectUsername');
    setInputValue(component, /Password/i, 'CorrectPassword');
    await clickButtonByTestId(component, 'SignInButton');

    expect(history.location.pathname).toEqual('/home');
  });
});
